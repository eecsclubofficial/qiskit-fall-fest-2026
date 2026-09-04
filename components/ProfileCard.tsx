"use client";

import React, { useMemo } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import "./ProfileCard.css";

export interface ProfileCardProps {
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  email?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  avatarUrl?: string;
  miniAvatarUrl?: string;
  showUserInfo?: boolean;
  innerGradient?: string;
  className?: string;
}

export default function ProfileCard({
  name = "Organizer Name",
  title = "Club Coordinator",
  handle = "organizer",
  status = "Organizer",
  email,
  linkedinUrl,
  githubUrl,
  avatarUrl,
  miniAvatarUrl,
  showUserInfo = true,
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

            {/* Social & Contact Actions */}
            <div className="pc-social-actions">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="pc-action-btn"
                  title={`Email ${name} (${email})`}
                  aria-label={`Email ${name}`}
                >
                  <Mail className="w-3.5 h-3.5 text-qiskit-blue" />
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl.startsWith("http") ? linkedinUrl : `https://${linkedinUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pc-action-btn"
                  title={`${name} on LinkedIn`}
                  aria-label={`${name} on LinkedIn`}
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#71C4FF]" />
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl.startsWith("http") ? githubUrl : `https://${githubUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pc-action-btn"
                  title={`${name} on GitHub`}
                  aria-label={`${name} on GitHub`}
                >
                  <Github className="w-3.5 h-3.5 text-white" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
