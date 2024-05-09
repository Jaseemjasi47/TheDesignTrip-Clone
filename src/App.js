import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCarousel from './Components/Carousel/Carousel';
import CustomCursor from './Components/CustomCursor/CustomCursor';
import MarqueeComponent from './Components/Marquee/MarqueeComponent';
import MatrixBackground from './Components/MatrixBackground/MatrixBackground';
import NavBar from './Components/NavBar/NavBar';
import ToSolve from './Components/Text/ToSolve';
import Loading from './Components/Loading/Loading';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='body-container'>
      {loading ? <Loading /> : <>
      <NavBar />
      <MatrixBackground/>
      <CustomCursor/>
      <MarqueeComponent />
      <HomeCarousel />
      <ToSolve />
      </>
  }
    </div>
  );
}

export default App;
