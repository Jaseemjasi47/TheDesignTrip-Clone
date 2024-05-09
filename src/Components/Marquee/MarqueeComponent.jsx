import React, { useState, useEffect } from 'react';
import './MarqueeComponent.css'; // Import CSS file

const MarqueeComponent = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="marquee-container">
      <div className="marquee-content">
        <div id="theMarquee" className="marquee-text">
          <span
            style={{ transform: `translate(-${scrollOffset * 0.5}px, 0%)`, transition: 'transform 0.3s ease' }}
          >
            <span className="marquee-prefix">//</span>
            <span className="marquee-number">60+</span>
            <span className="marquee-description">Projects Launched</span>
          </span>
          <span
            style={{ transform: `translate(-${scrollOffset * 0.5}px, 0%)`, transition: 'transform 0.3s ease' }}
          >
            <span className="marquee-prefix">//</span>
            <span className="marquee-number">450+</span>
            <span className="marquee-description">Brands Developed</span>
          </span>
          <span
            style={{ transform: `translate(-${scrollOffset * 0.5}px, 0%)`, transition: 'transform 0.3s ease' }}
          >
            <span className="marquee-prefix">//</span>
            <span className="marquee-number">120+</span>
            <span className="marquee-description">Success Stories</span>
          </span>
          <span
            style={{ transform: `translate(-${scrollOffset * 0.5}px, 0%)`, transition: 'transform 0.3s ease' }}
          >
            <span className="marquee-prefix">//</span>
            <span className="marquee-number">120+</span>
            <span className="marquee-description">Chai Pe Charcha</span>
          </span>
          {/* Add other spans here with similar structure */}
        </div>
      </div>
    </section>
  );
};

export default MarqueeComponent;
