import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/about.css';

const highlights = [
  {
    icon: '⚡',
    badge: '1850+ Rating · Knight Badge',
    title: 'Competitive Programming',
    description: '800+ DSA problems solved across LeetCode & GeeksforGeeks with deep expertise in Graphs, DP, Trees & Arrays.',
    color: '#f59e0b',
  },
  {
    icon: '🚀',
    badge: 'ISRO / IN-SPACe Competition',
    title: 'Avionics & Software Lead',
    description: 'Earned "Excellent" grade leading flight computer, telemetry & ground-station systems at Rocketry DTU.',
    color: '#06b6d4',
  },
  {
    icon: '⚙️',
    badge: 'Systems & Backend',
    title: 'High-Performance Engineering',
    description: 'Engineered raw TCP C++ servers with O(1) LRU caching, and production REST banking APIs with MongoDB & Express.',
    color: '#8b5cf6',
  },
  {
    icon: '🎓',
    badge: 'DTU · 2023–2027',
    title: 'Delhi Technological University',
    description: 'B.Tech student; student career mentor conducting guidance sessions for 500+ aspiring engineers.',
    color: '#10b981',
  },
];

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        {data ? (
          <Fade triggerOnce>
            <div className="bento about-bento">
              {/* Main bio tile spanning full width */}
              <div className="tile about-bio-tile span-6">
                <div className="about-bio-header">
                  <span className="about-eyebrow">Engineering • Systems • Algorithms</span>
                  <h2 className="about-title">Building Systems That Scale & Fly</h2>
                </div>
                <div className="about-bio-content">
                  <ReactMarkdown>{data.about}</ReactMarkdown>
                </div>
              </div>

              {/* Recruiter Highlight Cards */}
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="tile tile--interactive about-highlight-card span-3"
                  style={{ '--card-accent': item.color }}
                >
                  <div className="highlight-card-top">
                    <span className="highlight-icon">{item.icon}</span>
                    <span className="highlight-badge">{item.badge}</span>
                  </div>
                  <h3 className="highlight-title">{item.title}</h3>
                  <p className="highlight-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </Fade>
        ) : <FallbackSpinner />}
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
