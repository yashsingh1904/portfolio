import React, { useEffect, useRef } from 'react';

/**
 * Lightweight animated dot-grid / particle background.
 * Pure CSS + minimal JS for random placement. No heavy libraries.
 */
const PARTICLE_COUNT = 35;

function ParticleBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Generate particles once
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const dot = document.createElement('span');
      dot.className = 'particle-dot';
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.animationDelay = `${Math.random() * 8}s`;
      dot.style.animationDuration = `${6 + Math.random() * 10}s`;
      dot.style.width = dot.style.height = `${2 + Math.random() * 3}px`;
      dot.style.opacity = `${0.15 + Math.random() * 0.25}`;
      el.appendChild(dot);
    }
    return () => { el.innerHTML = ''; };
  }, []);

  return <div ref={containerRef} className="particle-bg" aria-hidden="true" />;
}

export default ParticleBackground;

