import React, { useEffect, useState } from 'react';
import endpoints from '../constants/endpoints';
import '../css/social.css';

const brandConfigs = {
  linkedin: {
    title: 'LinkedIn',
    bg: '#0a66c2',
    hoverGlow: 'rgba(10, 102, 194, 0.65)',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  github: {
    title: 'GitHub',
    bg: '#181717',
    hoverGlow: 'rgba(148, 163, 184, 0.55)',
    border: 'rgba(255, 255, 255, 0.25)',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  leetcode: {
    title: 'LeetCode',
    bg: '#ffa116',
    hoverGlow: 'rgba(255, 161, 22, 0.7)',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.216 5.216 0 0 0-3.84-1.369c-1.503 0-2.91.564-3.92 1.575L3.354 12.5c-1.01 1.01-1.574 2.417-1.574 3.92s.564 2.91 1.574 3.92l4.332 4.363c1.01 1.01 2.417 1.574 3.92 1.574 1.503 0 2.91-.564 3.92-1.574l2.609-2.636c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.553-1.9-.038zM20.811 13.01H10.606c-.742 0-1.344.602-1.344 1.344s.602 1.344 1.344 1.344h10.205c.742 0 1.344-.602 1.344-1.344s-.602-1.344-1.344-1.344z" />
      </svg>
    ),
  },
  email: {
    title: 'Email',
    bg: '#ea4335',
    hoverGlow: 'rgba(234, 67, 53, 0.65)',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
};

function Social() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.social, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div className="social">
      {data
        ? data.social.map((social) => {
          const cfg = brandConfigs[social.network?.toLowerCase()] || {
            title: social.network,
            bg: '#6366f1',
            hoverGlow: 'rgba(99, 102, 241, 0.6)',
            svg: (
              <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
                <circle cx="12" cy="12" r="10" />
              </svg>
            ),
          };

          return (
            <a
              key={social.network}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title={cfg.title}
              aria-label={cfg.title}
              style={{
                '--icon-bg': cfg.bg,
                '--icon-glow': cfg.hoverGlow,
                '--icon-border': cfg.border || 'transparent',
              }}
            >
              {cfg.svg}
            </a>
          );
        })
        : null}
    </div>
  );
}

export default Social;
