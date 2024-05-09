import React from 'react';

function Loading() {
  return (
    <div className="loading-container">
      <video className='loading-video' src='loading.mp4' autoPlay muted></video>
    </div>
  );
}

export default Loading;
