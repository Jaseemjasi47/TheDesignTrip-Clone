import React, { useEffect, useState } from 'react';

function ToSolve() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY - 1250 ;
      const windowHeight = window.innerHeight - 500;
      const documentHeight = document.body.clientHeight - 1500;
  
      // Calculate the scroll progress as a percentage
      const progress = ((scrollPosition + windowHeight) / documentHeight) * 170; 
      setScrollProgress(progress);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text = "To solve modern business \nchallenges, we have fresh ideas,\ninnovation tools, and a different \noutlook on creativity.";

  const renderText = () => {
    const letters = text.split('');
    return letters.map((letter, index) => (
      <span key={index} className={`tosolve-text ${index <= scrollProgress ? 'active' : ''}`}>{letter}</span>
    ));
  };

  return (
    <div className='tosolve-container'>
        <div className='white rem4'>*</div>
      {renderText()}
    </div>
  );
}

export default ToSolve;
