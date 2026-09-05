"use client";

import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  ReactNode,
  memo,
} from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import "./AnimatedList.css";

interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
  index: number;
  triggerOnce?: boolean;
  onClick?: () => void;
}

const AnimatedItem = memo(function AnimatedItem({
  children,
  delay = 0,
  index,
  triggerOnce = false,
  onClick,
}: AnimatedItemProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Optimized viewport detection: triggers smoothly at 15% visibility
  const inView = useInView(ref, {
    amount: 0.15,
    margin: "0px 0px -30px 0px",
    once: triggerOnce,
  });

  const initialVariant = shouldReduceMotion
    ? { opacity: 0 }
    : { scale: 0.7, opacity: 0 };

  const animateVariant = inView
    ? shouldReduceMotion
      ? { opacity: 1 }
      : { scale: 1, opacity: 1 }
    : initialVariant;

  return (
    <motion.div
      ref={ref}
      data-index={index}
      onClick={onClick}
      initial={initialVariant}
      animate={animateVariant}
      transition={{
        duration: 0.28,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth organic deceleration
      }}
      style={{
        willChange: "transform, opacity",
        transformOrigin: "50% 50%",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
      className="mb-4 cursor-pointer select-none"
    >
      {children}
    </motion.div>
  );
});

export interface AnimatedListProps<T = any> {
  items: T[];
  renderItem?: (item: T, index: number, isSelected: boolean) => ReactNode;
  onItemSelect?: (item: T, index: number) => void;
  showGradients?: boolean;
  enableArrowNavigation?: boolean;
  triggerOnce?: boolean;
  className?: string;
  itemClassName?: string;
  displayScrollbar?: boolean;
  hasScroll?: boolean;
  initialSelectedIndex?: number;
}

export default function AnimatedList<T = any>({
  items = [],
  renderItem,
  onItemSelect,
  showGradients = false,
  enableArrowNavigation = true,
  triggerOnce = false,
  className = "",
  itemClassName = "",
  displayScrollbar = false,
  hasScroll = false,
  initialSelectedIndex = -1,
}: AnimatedListProps<T>) {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  const handleItemClick = useCallback(
    (item: T, index: number) => {
      setSelectedIndex(index);
      if (onItemSelect) {
        onItemSelect(item, index);
      }
    },
    [onItemSelect]
  );

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    if (!hasScroll) return;
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(
      scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1)
    );
  }, [hasScroll]);

  // Keyboard arrow navigation scoped to container interaction
  useEffect(() => {
    if (!enableArrowNavigation || items.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!listRef.current) return;
      const isWithinContainer = listRef.current.contains(document.activeElement);
      if (!isWithinContainer && selectedIndex === -1) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === "Enter") {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(items[selectedIndex], selectedIndex);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  // Scroll active item smoothly into view
  useEffect(() => {
    if (selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector<HTMLElement>(
      `[data-index="${selectedIndex}"]`
    );
    if (selectedItem) {
      if (hasScroll) {
        const extraMargin = 50;
        const containerScrollTop = container.scrollTop;
        const containerHeight = container.clientHeight;
        const itemTop = selectedItem.offsetTop;
        const itemBottom = itemTop + selectedItem.offsetHeight;
        if (itemTop < containerScrollTop + extraMargin) {
          container.scrollTo({ top: itemTop - extraMargin, behavior: "smooth" });
        } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
          container.scrollTo({
            top: itemBottom - containerHeight + extraMargin,
            behavior: "smooth",
          });
        }
      } else {
        selectedItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [selectedIndex, hasScroll]);

  return (
    <div className={`scroll-list-container ${className}`}>
      <div
        ref={listRef}
        tabIndex={0}
        className={`scroll-list ${hasScroll ? "has-scroll" : ""} ${
          !displayScrollbar ? "no-scrollbar" : ""
        }`}
        onScroll={hasScroll ? handleScroll : undefined}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            delay={Math.min(index * 0.035, 0.2)}
            index={index}
            triggerOnce={triggerOnce}
            onClick={() => handleItemClick(item, index)}
          >
            {renderItem ? (
              renderItem(item, index, selectedIndex === index)
            ) : (
              <div
                className={`p-4 rounded-lg bg-foundation-surface border border-foundation-border transition-all ${
                  selectedIndex === index ? "border-qiskit-blue" : ""
                } ${itemClassName}`}
              >
                <p className="text-sm text-white m-0">
                  {typeof item === "string" ? item : JSON.stringify(item)}
                </p>
              </div>
            )}
          </AnimatedItem>
        ))}
      </div>
      {showGradients && hasScroll && (
        <>
          <div
            className="top-gradient"
            style={{ opacity: topGradientOpacity }}
          />
          <div
            className="bottom-gradient"
            style={{ opacity: bottomGradientOpacity }}
          />
        </>
      )}
    </div>
  );
}
