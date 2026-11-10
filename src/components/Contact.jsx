import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import Header from './Header';
import '../css/contact.css';

const contactMethods = [
  {
    id: 'phone',
    title: 'Mobile & WhatsApp',
    value: '+91 8512805190',
    rawCopy: '+918512805190',
    icon: '📱',
    badge: 'Quick Response',
    accent: '#22c55e',
    actions: [
      {
        label: 'Chat on WhatsApp',
        href: 'https://wa.me/918512805190?text=Hi%20Yash,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!',
        target: '_blank',
        primary: true,
        icon: '💬',
      },
      {
        label: 'Direct Call',
        href: 'tel:+918512805190',
        primary: false,
        icon: '📞',
      },
    ],
  },
  {
    id: 'email',
    title: 'Email Address',
    value: 'singhyash9990@gmail.com',
    rawCopy: 'singhyash9990@gmail.com',
    icon: '✉️',
    badge: 'Official Inquiries',
    accent: '#818cf8',
    actions: [
      {
        label: 'Compose Email',
        href: 'mailto:singhyash9990@gmail.com?subject=Software%20Engineering%20Opportunity%20-%20Yash%20Kumar%20Singh',
        primary: true,
        icon: '📤',
      },
    ],
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    value: 'linkedin.com/in/yashsingh1904',
    rawCopy: 'https://linkedin.com/in/yashsingh1904',
    icon: '💼',
    badge: 'Professional Network',
    accent: '#0284c7',
    actions: [
      {
        label: 'Open LinkedIn Profile ↗',
        href: 'https://linkedin.com/in/yashsingh1904',
        target: '_blank',
        primary: true,
        icon: '🔗',
      },
    ],
  },
  {
    id: 'github',
    title: 'GitHub',
    value: 'github.com/yashsingh-19',
    rawCopy: 'https://github.com/yashsingh-19',
    icon: '🐙',
    badge: 'Open Source & Projects',
    accent: '#c084fc',
    actions: [
      {
        label: 'Explore GitHub Repos ↗',
        href: 'https://github.com/yashsingh-19',
        target: '_blank',
        primary: true,
        icon: '💻',
      },
    ],
  },
  {
    id: 'leetcode',
    title: 'LeetCode (Knight Badge)',
    value: 'leetcode.com/u/YashSingh1904',
    rawCopy: 'https://leetcode.com/u/YashSingh1904',
    icon: '⚡',
    badge: '1850+ Rating · 800+ Solved',
    accent: '#f59e0b',
    actions: [
      {
        label: 'View LeetCode Profile ↗',
        href: 'https://leetcode.com/u/YashSingh1904',
        target: '_blank',
        primary: true,
        icon: '🏆',
      },
    ],
  },
  {
    id: 'location',
    title: 'Location & University',
    value: 'Delhi, India (Delhi Technological University)',
    rawCopy: 'Delhi, India',
    icon: '📍',
    badge: 'Open to Remote & On-Site',
    accent: '#14b8a6',
    actions: [],
  },
];

function Contact({ header }) {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, textToCopy) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2500);
      });
    } else {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <>
      <Header title={header || 'Contact Me'} />
      <div className="section-content-container">
        <Fade triggerOnce>
          {/* Top Banner / Availability */}
          <div className="tile contact-hero-banner span-6">
            <div className="contact-hero-info">
              <span className="contact-status-pill">
                <span className="contact-status-dot" />
                Available for Software Engineering Roles & Internships
              </span>
              <h2 className="contact-hero-heading">Let's Connect & Build Together</h2>
              <p className="contact-hero-text">
                Whether you have an opportunity, want to discuss systems engineering, or want to collaborate on rocketry or competitive programming, feel free to reach out directly via WhatsApp, email, or phone!
              </p>
            </div>
            <div className="contact-hero-actions">
              <a
                href="https://wa.me/918512805190?text=Hi%20Yash,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill contact-wa-btn"
              >
                <span>💬 WhatsApp Quick Chat</span>
              </a>
              <a
                href="mailto:singhyash9990@gmail.com?subject=Regarding%20Software%20Engineering%20Role%20-%20Yash%20Kumar%20Singh"
                className="btn-pill contact-mail-btn"
              >
                <span>✉️ Send an Email</span>
              </a>
            </div>
          </div>

          {/* Contact Details List with Copy Buttons */}
          <div className="contact-grid">
            {contactMethods.map((item) => {
              const isCopied = copiedId === item.id;
              return (
                <div
                  key={item.id}
                  className="tile contact-card"
                  style={{ '--card-accent': item.accent }}
                >
                  <div className="contact-card-main">
                    <div className="contact-card-icon-wrap">
                      <span className="contact-card-icon">{item.icon}</span>
                    </div>

                    <div className="contact-card-details">
                      <div className="contact-card-top-row">
                        <span className="contact-card-title">{item.title}</span>
                        {item.badge && (
                          <span className="contact-badge">{item.badge}</span>
                        )}
                      </div>
                      <div className="contact-card-value">{item.value}</div>

                      {item.actions && item.actions.length > 0 && (
                        <div className="contact-card-actions">
                          {item.actions.map((act) => (
                            <a
                              key={act.label}
                              href={act.href}
                              target={act.target || '_self'}
                              rel={act.target ? 'noopener noreferrer' : undefined}
                              className={`contact-action-btn ${act.primary ? 'contact-action-btn--primary' : ''}`}
                            >
                              <span>{act.icon} {act.label}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Copy Button on Right */}
                  {item.rawCopy && (
                    <div className="contact-copy-wrap">
                      <button
                        type="button"
                        onClick={() => handleCopy(item.id, item.rawCopy)}
                        className={`contact-copy-btn ${isCopied ? 'copied' : ''}`}
                        title="Copy to clipboard"
                        aria-label={`Copy ${item.title}`}
                      >
                        {isCopied ? (
                          <>
                            <span className="copy-icon">✓</span>
                            <span className="copy-label">Copied!</span>
                          </>
                        ) : (
                          <>
                            <span className="copy-icon">📋</span>
                            <span className="copy-label">Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    </>
  );
}

Contact.propTypes = {
  header: PropTypes.string,
};

Contact.defaultProps = {
  header: 'Contact Me',
};

export default Contact;

