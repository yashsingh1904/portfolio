import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import '../css/home.css';

function initialsOf(name) {
  if (!name) return '';
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function Home() {
  const [data, setData] = useState(null);
  const [resumeUrl, setResumeUrl] = useState(
    'https://drive.google.com/file/d/1OD-WawkbugMNgmWfWa-Yi0UUJD9g1hPB/view?usp=sharing',
  );

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);

    fetch(endpoints.navbar, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((navData) => {
        const resumeSection = navData?.sections?.find(
          (s) => s.title?.toLowerCase() === 'resume',
        );
        if (resumeSection?.href) {
          setResumeUrl(resumeSection.href);
        }
      })
      .catch((err) => err);
  }, []);

  return data ? (
    <Fade triggerOnce className="home-fade-container">
      <section className="hero">
        <div className="bento">
          <div className="tile hero-intro span-4 rspan-2">
            {data?.status && (
              <span className="hero-eyebrow">{data.status}</span>
            )}
            <h1 className="hero-name">{data?.name}</h1>
            <div className="hero-roles">
              <span>I&apos;m&nbsp;</span>
              <Typewriter
                options={{
                  loop: true,
                  autoStart: true,
                  strings: data?.roles,
                }}
              />
            </div>
            {data?.tagline && <p className="hero-tagline">{data.tagline}</p>}
            <div className="hero-cta">
              <Link className="btn-pill btn-accent" to="/projects">
                <span>View my work</span>
              </Link>
              <Link className="btn-pill btn-ghost" to="/about">
                <span>About me</span>
              </Link>
              <Link className="btn-pill btn-contact" to="/contact">
                <span>Contact me</span>
              </Link>
              <a
                className="btn-pill btn-resume"
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Resume ↗</span>
              </a>
            </div>
          </div>

          <div className="tile tile--accent monogram span-2">
            <span className="monogram-mark">{initialsOf(data?.name)}</span>
            <span className="monogram-label">B.Tech · Software & Avionics</span>
          </div>

          <div className="tile hero-social span-2">
            <span className="tile-label">Find me</span>
            <Social />
          </div>
        </div>
      </section>
    </Fade>
  ) : <FallbackSpinner />;
}

export default Home;
