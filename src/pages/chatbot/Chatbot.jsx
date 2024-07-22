// File path: src/components/Chatbot/Chatbot.jsx

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Chatbot.css';
import LogoOpen from '../../assets/chatclose.gif';  // Ensure to use the correct asset for open state
import LogoClose from '../../assets/chatclose.gif';

const Chatbot = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);  // Reference for the floating button

  const handleButtonClick = () => {
    setIsExpanded(prevState => !prevState);
    if (!isExpanded) {
      gsap.to(containerRef.current, { height: '80vh', duration: 0.5 });
      gsap.to(buttonRef.current, { rotation: 180, duration: 0.5 });  // Rotate the button
    } else {
      gsap.to(containerRef.current, { height: '0', duration: 0.5 });
      gsap.to(buttonRef.current, { rotation: 0, duration: 0.5 });  // Reset the rotation
    }
  };

  return (
    <>
      <div ref={containerRef} className={`Container ${isExpanded ? 'expanded' : ''}`}>
        <div className="Chatbot">
          <iframe
            ref={iframeRef}
            src="https://www.chatbase.co/chatbot-iframe/UZPK1q-XRfxoEDa5vY6xP"
            width="100%"
            style={{ height: '100%' }}
            frameBorder="0"
            title="Chatbot"
          ></iframe>
          <div className='hide_watermark'>
            <p>transforming ideas digital realities</p>
          </div>
        </div>
      </div>
      <div className="floating-button" onClick={handleButtonClick} ref={buttonRef}>
        <img src={isExpanded ? LogoClose : LogoOpen} alt="Chatbot Logo" />
      </div>
    </>
  );
};

export default Chatbot;
