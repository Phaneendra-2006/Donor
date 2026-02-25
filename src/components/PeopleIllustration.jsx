import React from 'react';
import './PeopleIllustration.css';

/**
 * PeopleIllustration Component
 * Animated SVG illustration of people helping each other
 * Donation and community theme
 */
const PeopleIllustration = () => {
  return (
    <div className="people-illustration-container">
      <svg
        className="people-svg"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background glow circles */}
        <circle
          className="glow-circle glow-1"
          cx="200"
          cy="150"
          r="100"
          fill="url(#blueGlow)"
          opacity="0.3"
        />
        <circle
          className="glow-circle glow-2"
          cx="600"
          cy="400"
          r="120"
          fill="url(#purpleGlow)"
          opacity="0.3"
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0096c7" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>

        {/* Person 1 - Left (Donor) */}
        <g className="person person-1">
          {/* Body */}
          <ellipse cx="200" cy="380" rx="60" ry="80" fill="url(#blueGlow)" />
          {/* Head */}
          <circle cx="200" cy="280" r="40" fill="url(#blueGlow)" />
          {/* Arms */}
          <path
            d="M 150 340 Q 120 360 140 380"
            stroke="url(#blueGlow)"
            strokeWidth="20"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 250 340 Q 280 360 300 340"
            stroke="url(#blueGlow)"
            strokeWidth="20"
            strokeLinecap="round"
            fill="none"
          />
          {/* Donation box */}
          <rect
            className="donation-box"
            x="270"
            y="320"
            width="60"
            height="50"
            rx="5"
            fill="#00d4ff"
            opacity="0.6"
          />
          <path
            d="M 285 335 L 300 345 L 315 330"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Heart Icon - Center (Floating) */}
        <g className="heart-icon">
          <path
            d="M 400 280 L 420 260 Q 440 240 440 270 Q 440 290 420 310 L 400 330 L 380 310 Q 360 290 360 270 Q 360 240 380 260 Z"
            fill="url(#pinkGradient)"
            opacity="0.8"
          />
        </g>

        {/* Person 2 - Center (Helper) */}
        <g className="person person-2">
          {/* Body */}
          <ellipse cx="400" cy="420" rx="55" ry="75" fill="url(#purpleGlow)" />
          {/* Head */}
          <circle cx="400" cy="330" r="35" fill="url(#purpleGlow)" />
          {/* Arms spread */}
          <path
            d="M 355 380 Q 320 400 310 420"
            stroke="url(#purpleGlow)"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 445 380 Q 480 400 490 420"
            stroke="url(#purpleGlow)"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Person 3 - Right (Receiver) */}
        <g className="person person-3">
          {/* Body */}
          <ellipse cx="600" cy="400" rx="58" ry="78" fill="#8b5cf6" opacity="0.7" />
          {/* Head */}
          <circle cx="600" cy="305" r="38" fill="#8b5cf6" opacity="0.7" />
          {/* Arms receiving */}
          <path
            d="M 550 360 Q 520 380 510 400"
            stroke="#8b5cf6"
            strokeWidth="19"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M 650 360 Q 670 370 670 390"
            stroke="#8b5cf6"
            strokeWidth="19"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
        </g>

        {/* Connection lines */}
        <path
          className="connection-line line-1"
          d="M 260 350 Q 330 320 360 340"
          stroke="url(#blueGlow)"
          strokeWidth="3"
          strokeDasharray="5,5"
          fill="none"
          opacity="0.5"
        />
        <path
          className="connection-line line-2"
          d="M 440 360 Q 520 340 550 360"
          stroke="url(#purpleGlow)"
          strokeWidth="3"
          strokeDasharray="5,5"
          fill="none"
          opacity="0.5"
        />

        {/* Floating particles around illustration */}
        <circle className="particle p1" cx="150" cy="200" r="4" fill="#00d4ff" opacity="0.6" />
        <circle className="particle p2" cx="650" cy="250" r="3" fill="#8b5cf6" opacity="0.6" />
        <circle className="particle p3" cx="300" cy="500" r="5" fill="#ec4899" opacity="0.5" />
        <circle className="particle p4" cx="500" cy="180" r="4" fill="#00d4ff" opacity="0.7" />
        <circle className="particle p5" cx="700" cy="480" r="3" fill="#a855f7" opacity="0.6" />
      </svg>

      {/* Text overlay */}
      <div className="illustration-text">
        <h3 className="illustration-title">Together We Feed Hope</h3>
        <p className="illustration-subtitle">Join our community of change-makers</p>
      </div>
    </div>
  );
};

export default PeopleIllustration;
