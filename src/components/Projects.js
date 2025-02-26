import React, { useState, useRef } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaPlayCircle, FaPause, FaCube, FaMobileAlt, FaCode } from 'react-icons/fa';
import SynapsisUIMobile from "./assets/videos/synapsisui-mobile.mp4";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [synapsisVideoPlaying, setSynapsisVideoPlaying] = useState(false);
  const videoRefs = useRef({});
  const synapsisVideoRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      title: 'Crypto Wallet App',
      image: '/api/placeholder/600/400',
      videoUrl: '#', // Replace with actual video URL
      description: 'A React Native mobile wallet for managing multiple cryptocurrencies with biometric authentication.',
      technologies: ['React Native', 'Redux', 'Web3.js', 'Biometrics API'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'DeFi Dashboard',
      image: '/api/placeholder/600/400',
      videoUrl: '#', // Replace with actual video URL
      description: 'Dashboard for tracking DeFi investments, yields, and portfolio performance across multiple protocols.',
      technologies: ['React.js', 'Ethers.js', 'Chart.js', 'Web3 API'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'NFT Marketplace Mobile App',
      image: '/api/placeholder/600/400',
      videoUrl: '#', // Replace with actual video URL
      description: 'A mobile app for browsing and purchasing NFTs with integrated wallet functionality.',
      technologies: ['React Native', 'TypeScript', 'Redux', 'NFT API'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'Smart Contract for Token Distribution',
      image: '/api/placeholder/600/400',
      videoUrl: '#', // Replace with actual video URL
      description: 'Solidity contracts for token vesting and distribution with multi-signature governance.',
      technologies: ['Solidity', 'Hardhat', 'Ethers.js', 'OpenZeppelin'],
      demoLink: '#',
      codeLink: '#'
    }
  ];
  
  const handleVideoToggle = (id) => {
    if (activeProject === id) {
      videoRefs.current[id].pause();
      setActiveProject(null);
    } else {
      // Pause any currently playing video
      if (activeProject !== null && videoRefs.current[activeProject]) {
        videoRefs.current[activeProject].pause();
      }
      
      // Play the new video
      if (videoRefs.current[id]) {
        videoRefs.current[id].play();
        setActiveProject(id);
      }
    }
  };
  
  const handleSynapsisVideoToggle = () => {
    if (synapsisVideoPlaying) {
      synapsisVideoRef.current.pause();
    } else {
      synapsisVideoRef.current.play();
    }
    setSynapsisVideoPlaying(!synapsisVideoPlaying);
  };
  
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title fade-in-element">Featured Projects</h2>
        
        {/* SynapsisUI Showcase */}
        <div className="synapsis-showcase fade-in-element">
          <div className="synapsis-content">
            <div className="synapsis-info">
              <div className="synapsis-badge">Founder</div>
              <h3>SynapsisUI</h3>
              <p className="synapsis-tagline">A modern component library for React Native developers</p>
              <p className="synapsis-description">
                SynapsisUI provides a comprehensive suite of customizable, high-performance UI components 
                that help mobile developers build beautiful apps faster. With a focus on accessibility and 
                seamless animations, SynapsisUI elevates the React Native development experience.
              </p>
              <div className="synapsis-features">
                <div className="feature">
                  <FaCube className="feature-icon" />
                  <span>60+ Components</span>
                </div>
                <div className="feature">
                  <FaMobileAlt className="feature-icon" />
                  <span>Cross-Platform</span>
                </div>
                <div className="feature">
                  <FaCode className="feature-icon" />
                  <span>Customizable</span>
                </div>
              </div>
              <div className="synapsis-links">
                <a href="https://www.synapsisui.com" className="btn-primary">Visit SynapsisUI</a>
              </div>
            </div>
            <div className="synapsis-preview">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <video 
                    ref={synapsisVideoRef}
                    src={SynapsisUIMobile}
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                  />
                  <button 
                    className="video-toggle"
                    onClick={handleSynapsisVideoToggle}
                    aria-label={synapsisVideoPlaying ? "Pause video" : "Play video"}
                  >
                    {synapsisVideoPlaying ? <FaPause /> : <FaPlayCircle />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div 
              className="project-card fade-in-element" 
              key={project.id}
            >
              <div className="project-content">
                <div className="mobile-device">
                  <div className="device-notch"></div>
                  <div className="device-screen">
                    {activeProject === project.id ? (
                      <video 
                        ref={el => videoRefs.current[project.id] = el}
                        src={project.videoUrl}
                        loop
                        muted
                        playsInline
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          objectPosition: 'center'
                        }}
                      />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          objectPosition: 'center'
                        }}
                      />
                    )}
                    <button 
                      className="video-toggle"
                      onClick={() => handleVideoToggle(project.id)}
                      aria-label={activeProject === project.id ? "Pause video" : "Play video"}
                    >
                      {activeProject === project.id ? <FaPause /> : <FaPlayCircle />}
                    </button>
                  </div>
                  <div className="device-home-button"></div>
                </div>
                
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span className="tech-tag" key={index}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <FaExternalLinkAlt /> <span>Demo</span>
                    </a>
                    <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer" aria-label="Source code">
                      <FaGithub /> <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;