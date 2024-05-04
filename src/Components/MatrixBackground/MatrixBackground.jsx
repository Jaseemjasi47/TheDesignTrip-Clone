import React, { useState } from 'react';
import './MatrixBackground.css';
import IntroText from '../IntroText/IntroText';
import IntroVideo from '../Video/IntroVideo';


const MatrixBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - containerRect.left) * (containerRect.width / window.innerWidth) / 2;
    const offsetY = (e.clientY - containerRect.top) * (containerRect.height / window.innerHeight) / 2;
    
    // Calculate the offsets from the right and bottom edges of the viewport
    const offsetRight = containerRect.width - offsetX;
    const offsetBottom = containerRect.height - offsetY;
  
    // Adjust the offsetX and offsetY based on the right and bottom edges
    const adjustedX = (offsetX < offsetRight) ? offsetX : offsetRight;
    const adjustedY = (offsetY < offsetBottom) ? offsetY : offsetBottom;
  
    setMousePosition({ x: adjustedX, y: adjustedY });
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <div className="matrix-container" onMouseMove={handleMouseMove}>
      {/* Generate multiple rows */}
      {[...Array(31).keys()].map((rowIndex) => (
        <div key={rowIndex} className="matrix-row">
          {/* Generate multiple dots in each row */}
          {[...Array(65).keys()].map((colIndex) => {
            const distance = calculateDistance(
              mousePosition.x,
              mousePosition.y,
              colIndex * 10, // Adjusted position based on dot size
              rowIndex * 10 // Adjusted position based on dot size
            );
            const isInRadius = distance <= 80;
            const isInRadius1 = distance <= 60;
            const isInRadius2 = distance <= 40;
            const isInRadius3 = distance <= 20;
            return (
              <div
                key={colIndex}
                className={`p-3 ${isInRadius ? 'active-dot' : ''} ${isInRadius1 ? 'active-dot-1' : ''} ${isInRadius2 ? 'active-dot-2' : ''} ${isInRadius3 ? 'active-dot-3' : ''}`}
              >
                <div className="dot"></div>
              </div>
            );
          })}
        </div>
      ))}
      <IntroText />
      <IntroVideo />
    </div>
  );
};

export default MatrixBackground;
