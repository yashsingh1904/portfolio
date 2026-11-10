import { useState, useEffect, useCallback } from 'react';
import '../css/splash.css';

const PARTICLE_COUNT = 18;

/**
 * SplashScreen – An animated loading/intro screen.
 * Snappy (~1.3s), high-impact with immediate click-to-dismiss for recruiters.
 *
 * @param {{ onComplete: () => void }} props
 */
function SplashScreen({ onComplete }) {
  const [exiting, setExiting] = useState(false);

  const handleExit = useCallback(() => {
    setExiting(true);
  }, []);

  /* Snappy automatic exit after 1.4s */
  useEffect(() => {
    const timer = setTimeout(handleExit, 1400);
    return () => clearTimeout(timer);
  }, [handleExit]);

  /* Fire onComplete when the exit animation ends */
  const handleAnimationEnd = useCallback(
    (e) => {
      if (e.animationName === 'splashExit' && onComplete) {
        onComplete();
      }
    },
    [onComplete],
  );

  return (
    <div
      className={`splash-screen${exiting ? ' splash-exit' : ''}`}
      onAnimationEnd={handleAnimationEnd}
      onClick={handleExit}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleExit(); }}
      aria-label="Loading screen, click to skip"
    >
      {/* Vignette overlay */}
      <div className="splash-vignette" />

      {/* Floating particles */}
      <div className="splash-particles">
        {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
          <span key={i} className="splash-particle" />
        ))}
      </div>

      {/* Ambient glow behind initials */}
      <div className="splash-glow" />

      {/* Initials */}
      <h1 className="splash-initials">YKS</h1>

      {/* Sub-label */}
      <p className="splash-sublabel">Portfolio</p>

      {/* Loading bar */}
      <div className="splash-loader-track">
        <div className="splash-loader-fill" />
      </div>

      {/* Skip indicator */}
      <span className="splash-skip-hint">Click anywhere to skip</span>

      {/* Decorative corner accents */}
      <span className="splash-corner splash-corner--tl" />
      <span className="splash-corner splash-corner--tr" />
      <span className="splash-corner splash-corner--bl" />
      <span className="splash-corner splash-corner--br" />
    </div>
  );
}

export default SplashScreen;
