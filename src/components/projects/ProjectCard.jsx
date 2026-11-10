import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

// Technology metadata: icon (image path or SVG) and custom vibrant color themes
const getTechConfig = (tag) => {
  const normalized = tag.toLowerCase().trim();

  // 1. C++
  if (normalized === 'c++' || normalized === 'cpp') {
    return {
      icon: 'images/skills/c-plus-plus.svg',
      color: '#60a5fa',
      bg: 'rgba(37, 99, 235, 0.14)',
      border: 'rgba(59, 130, 246, 0.4)',
    };
  }

  // 2. React / React.js
  if (normalized.includes('react')) {
    return {
      icon: 'images/skills/react.png',
      color: '#38bdf8',
      bg: 'rgba(14, 165, 233, 0.14)',
      border: 'rgba(56, 189, 248, 0.4)',
    };
  }

  // 3. Node.js
  if (normalized.includes('node')) {
    return {
      icon: 'images/skills/nodejs.png',
      color: '#4ade80',
      bg: 'rgba(34, 197, 94, 0.14)',
      border: 'rgba(74, 222, 128, 0.4)',
    };
  }

  // 4. MongoDB
  if (normalized.includes('mongo')) {
    return {
      icon: 'images/skills/mongo-db.png',
      color: '#34d399',
      bg: 'rgba(16, 185, 129, 0.14)',
      border: 'rgba(52, 211, 153, 0.4)',
    };
  }

  // 5. Python
  if (normalized.includes('python')) {
    return {
      icon: 'images/skills/python.png',
      color: '#fbbf24',
      bg: 'rgba(245, 158, 11, 0.14)',
      border: 'rgba(251, 191, 36, 0.4)',
    };
  }

  // 6. Express.js
  if (normalized.includes('express')) {
    return {
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      color: '#e879f9',
      bg: 'rgba(217, 70, 239, 0.14)',
      border: 'rgba(232, 121, 249, 0.4)',
    };
  }

  // 7. TCP Sockets / Systems Programming
  if (normalized.includes('socket') || normalized.includes('systems') || normalized.includes('network')) {
    return {
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      color: '#38bdf8',
      bg: 'rgba(14, 165, 233, 0.14)',
      border: 'rgba(56, 189, 248, 0.4)',
    };
  }

  // 8. Multithreading
  if (normalized.includes('thread') || normalized.includes('mutex') || normalized.includes('concurrency')) {
    return {
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      ),
      color: '#fb923c',
      bg: 'rgba(249, 115, 22, 0.14)',
      border: 'rgba(251, 146, 60, 0.4)',
    };
  }

  // 9. LRU Cache / Database / Memory
  if (normalized.includes('cache') || normalized.includes('lru') || normalized.includes('memory')) {
    return {
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      color: '#f43f5e',
      bg: 'rgba(244, 63, 94, 0.14)',
      border: 'rgba(244, 63, 94, 0.4)',
    };
  }

  // 10. JWT / Security
  if (normalized.includes('jwt') || normalized.includes('auth') || normalized.includes('security')) {
    return {
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      color: '#facc15',
      bg: 'rgba(234, 179, 8, 0.14)',
      border: 'rgba(250, 204, 21, 0.4)',
    };
  }

  // 11. REST APIs / APIs
  if (normalized.includes('api')) {
    return {
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      color: '#2dd4bf',
      bg: 'rgba(20, 184, 166, 0.14)',
      border: 'rgba(45, 212, 191, 0.4)',
    };
  }

  // 12. Full-Stack / EJS
  if (normalized.includes('full-stack') || normalized.includes('ejs')) {
    return {
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      color: '#a78bfa',
      bg: 'rgba(139, 92, 246, 0.14)',
      border: 'rgba(167, 139, 250, 0.4)',
    };
  }

  // 13. Avionics / Rocketry
  if (normalized.includes('avionics') || normalized.includes('rocket')) {
    return {
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
      color: '#38bdf8',
      bg: 'rgba(56, 189, 248, 0.14)',
      border: 'rgba(56, 189, 248, 0.4)',
    };
  }

  // 14. Embedded Systems / Teensy
  if (normalized.includes('embedded') || normalized.includes('teensy') || normalized.includes('hardware')) {
    return {
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      ),
      color: '#f87171',
      bg: 'rgba(239, 68, 68, 0.14)',
      border: 'rgba(248, 113, 113, 0.4)',
    };
  }

  // 15. Telemetry
  if (normalized.includes('telemetry') || normalized.includes('signal') || normalized.includes('audio')) {
    return {
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h.01M7 20v-4M12 20v-8M17 20V4M22 20v-6" />
        </svg>
      ),
      color: '#2dd4bf',
      bg: 'rgba(20, 184, 166, 0.14)',
      border: 'rgba(45, 212, 191, 0.4)',
    };
  }

  // 16. LSTM / ML / NLP
  if (normalized.includes('lstm') || normalized.includes('learning') || normalized.includes('nlp') || normalized.includes('ai')) {
    return {
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
      color: '#e879f9',
      bg: 'rgba(217, 70, 239, 0.14)',
      border: 'rgba(232, 121, 249, 0.4)',
    };
  }

  // 17. Streamlit / Finance
  if (normalized.includes('streamlit') || normalized.includes('finance')) {
    return {
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      color: '#34d399',
      bg: 'rgba(16, 185, 129, 0.14)',
      border: 'rgba(52, 211, 153, 0.4)',
    };
  }

  // 18. Speech / Audio
  if (normalized.includes('speech') || normalized.includes('voice')) {
    return {
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      ),
      color: '#a78bfa',
      bg: 'rgba(139, 92, 246, 0.14)',
      border: 'rgba(167, 139, 250, 0.4)',
    };
  }

  // Default fallback badge
  return {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    color: '#818cf8',
    bg: 'rgba(129, 140, 248, 0.12)',
    border: 'rgba(129, 140, 248, 0.3)',
  };
};

const ProjectCard = ({ project, featured = false }) => {
  const parseBodyText = (text) => <ReactMarkdown>{text}</ReactMarkdown>;

  return (
    <article
      className={`tile tile--interactive project-card ${
        featured ? 'span-4 project-card--featured' : 'span-2'
      }`}
    >
      {/* Visual Accent Top Bar */}
      <div className="project-card__accent-bar" />

      {project?.image && (
        <div className="project-card__media">
          <img src={project.image} alt={project.title} />
        </div>
      )}

      <div className="project-card__body">
        <div className="project-card__title-row">
          <h3 className="project-card__title">{project.title}</h3>
        </div>
        <div className="project-card__text">{parseBodyText(project.bodyText)}</div>
      </div>

      <div className="project-card__footer">
        {/* Technology Badges with logos and vibrant colors */}
        {project?.tags?.length > 0 && (
          <div className="project-card__tags">
            {project.tags.map((tag) => {
              const cfg = getTechConfig(tag);
              return (
                <span
                  key={tag}
                  className="project-tag-pill"
                  style={{
                    '--tag-color': cfg.color,
                    '--tag-bg': cfg.bg,
                    '--tag-border': cfg.border,
                  }}
                >
                  <span className="tag-icon-wrap" aria-hidden="true">
                    {cfg.icon ? (
                      <img src={cfg.icon} alt="" className="tag-icon-img" />
                    ) : (
                      cfg.svg
                    )}
                  </span>
                  <span className="tag-name">{tag}</span>
                </span>
              );
            })}
          </div>
        )}

        {project?.links?.length > 0 && (
          <div className="project-card__links">
            {project.links.map((link) => (
              <a
                key={link.href}
                className="proj-link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.text}</span>
                <span className="proj-link-arrow">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  featured: PropTypes.bool,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    image: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

ProjectCard.defaultProps = {
  featured: false,
};

export default ProjectCard;
