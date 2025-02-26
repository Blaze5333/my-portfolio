import React, { useEffect } from 'react';
import './About.css';
import { FaCode, FaMobile, FaEthereum, FaUserTie } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-element');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title fade-in-element">About Me</h2>
        
        <div className="about-content">
          <div className="about-info fade-in-element">
            <p className="about-intro">
              I'm a passionate React Native developer with a strong interest in blockchain technology. 
              Currently pursuing my Computer Science and Engineering degree at Heritage Institute of Technology, 
              Kolkata, I have 3 years of experience creating intuitive and performant 
              mobile applications while exploring the possibilities of decentralized systems.
            </p>
            
            <p>
              My journey in software development began during my early years of college, 
              where I developed a fascination for mobile interfaces and distributed systems. 
              I quickly focused on React Native development and have since worked 
              with startups and established companies to deliver exceptional mobile experiences.
            </p>
            
            <p>
              While continuing my studies, I'm expanding my expertise into blockchain development, 
              learning Solana and exploring Web3 integration with mobile applications.
            </p>
            
            <div className="about-cta">
              <a href="#contact" className="btn-primary">Let's Talk</a>
              <a href="/resume.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="about-features fade-in-element">
            <div className="feature-card">
              <div className="feature-icon">
                <FaMobile />
              </div>
              <h3>Mobile Development</h3>
              <p>Building cross-platform apps with React Native that deliver native performance with a single codebase.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaEthereum />
              </div>
              <h3>Blockchain</h3>
              <p>Exploring decentralized applications and smart contracts to create trustless and transparent systems.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaCode />
              </div>
              <h3>Clean Code</h3>
              <p>Writing maintainable, well-tested code with a focus on architecture and best practices.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaUserTie />
              </div>
              <h3>Client Focus</h3>
              <p>Balancing academic studies with professional projects, delivering solutions that exceed expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;