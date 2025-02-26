import React, { useEffect, useRef } from 'react';
import './Hero.css';
import Typed from 'typed.js';
// Import the image directly - adjust the path based on your project structure
// Option 1: If using Create React App or similar bundler
import profileImage from './assets/images/profile-image.jpeg'; // Adjust path as needed

const Hero = () => {
  const typedElementRef = useRef(null);
  
  useEffect(() => {
    const typed = new Typed(typedElementRef.current, {
      strings: [
        'React Native Developer',
        'Blockchain Enthusiast',
        'Mobile App Developer',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true
    });
    
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Mustafa Chaiwala</h1>
            <h2 className="hero-title">
              <span ref={typedElementRef}></span>
            </h2>
            <p className="hero-description">
              Building cutting-edge mobile applications and exploring blockchain technology to create innovative solutions.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-img-container">
              <div className="profile-img-placeholder">
                {/* Option 1: Using imported image */}
                <img 
                  style={{height:"100%", width:"100%", objectFit: "cover", borderRadius: "inherit"}} 
                  src={profileImage} 
                  alt="Mustafa Chaiwala" 
                />
                
                {/* Option 2: Using public folder (uncomment if using this approach) */}
                {/* <img 
                  style={{height:"100%", width:"100%", objectFit: "cover", borderRadius: "inherit"}} 
                  src={process.env.PUBLIC_URL + '/assets/images/profile-image.jpeg'} 
                  alt="Mustafa Chaiwala" 
                /> */}
                
                {/* Option 3: Absolute path from public folder (uncomment if using this approach) */}
                {/* <img 
                  style={{height:"100%", width:"100%", objectFit: "cover", borderRadius: "inherit"}} 
                  src="/assets/images/profile-image.jpeg" 
                  alt="Mustafa Chaiwala" 
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-down">
          <span>Scroll Down</span>
          <div className="chevron"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;