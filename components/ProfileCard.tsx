"use client";

import React, { useMemo } from "react";
import "./ProfileCard.css";

export interface ProfileCardProps {
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  avatarUrl?: string;
  miniAvatarUrl?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
  innerGradient?: string;
  className?: string;
}

export default function ProfileCard({
  name = "Organizer Name",
  title = "Club Coordinator",
  handle = "organizer",
  status = "Organizer",
  contactText = "Profile",
  avatarUrl,
  miniAvatarUrl,
  showUserInfo = true,
  onContactClick,
  innerGradient,
  className = "",
}: ProfileCardProps) {
  const cardStyle = useMemo(
    () =>
      ({
        "--inner-gradient":
          innerGradient ||
          "linear-gradient(180deg, rgba(22, 27, 38, 0.95) 0%, rgba(14, 18, 26, 0.98) 100%)",
      } as React.CSSProperties),
    [innerGradient]
  );

  return (
    <div className={`pc-card-wrapper ${className}`.trim()} style={cardStyle}>
      <div className="pc-card">
        {/* Top Details (Name & Title) */}
        <div className="pc-details">
          <h3>{name}</h3>
          <p>{title}</p>
        </div>

        {/* Center Logo / Avatar */}
        <div className="pc-avatar-container">
          {avatarUrl && (
            <img
              className="pc-avatar-img"
              src={avatarUrl}
              alt={`${name} emblem`}
              loading="lazy"
            />
          )}
        </div>

        {/* Bottom User Pill */}
        {showUserInfo && (
          <div className="pc-user-info">
            <div className="pc-user-details">
              <div className="pc-mini-avatar">
                <img
                  src={miniAvatarUrl || avatarUrl}
                  alt={`${name} icon`}
                  loading="lazy"
                />
              </div>
              <div className="pc-user-text">
                <span className="pc-handle">@{handle}</span>
                <span className="pc-status">{status}</span>
              </div>
            </div>

            {contactText && (
              <button
                type="button"
                className="pc-contact-btn"
                onClick={onContactClick}
              >
                {contactText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
