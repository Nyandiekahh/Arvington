import React, { useState } from 'react';

const Preloader = ({ onLoadingComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(() => {
      onLoadingComplete();
    }, 500); // Wait for fade out animation
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease',
      }}
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        style={{
          maxWidth: '80%',
          maxHeight: '80vh',
          objectFit: 'contain',
        }}
      >
        <source src="/Animated Preloader.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Preloader;
