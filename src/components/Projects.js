import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaPlayCircle, FaPause, FaCube, FaMobileAlt, FaCode, FaGooglePlay, FaBriefcase, FaUserTie, FaLaptopCode } from 'react-icons/fa';
import SynapsisUIMobile from "./assets/videos/synapsisui-mobile.mp4";
import AppDemo1 from "./assets/videos/app-demo1.mp4"
import AppImage1 from "./assets/images/app-image1.jpeg"
import AppDemo2 from "./assets/videos/app-demo2.mp4"
import AppDemo3 from "./assets/videos/app-demo3.mp4"
const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [synapsisVideoPlaying, setSynapsisVideoPlaying] = useState(false);
  const videoRefs = useRef({});
  const synapsisVideoRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      title: 'Super Steel App',
      image: AppImage1,
      videoUrl: AppDemo1,
      description: 'A React Native mobile app for buying super steel power tools (made for client)',
      technologies: ['React Native', 'Redux'],
      codeLink: '#',
      playstore: "https://play.google.com/store/apps/details?id=com.supersteel.official&hl=en",
      projectType: 'freelance'
    },
    {
      id: 2,
      title: 'InternLink App',
      image: '/api/placeholder/600/400',
      videoUrl: AppDemo2, 
      description: 'AI-powered job platform built from scratch during my internship. Features smart matching algorithms, personalized job recommendations, real-time chat, and an intuitive application tracking system to connect students with the right opportunities.',
      technologies: ['React Native', 'Redux', 'Socket.io', 'AI/ML Integration', 'Node.js'],
      codeLink: '#',
      playstore: "https://play.google.com/store/apps/details?id=com.internlinkapp2&hl=en",
      projectType: 'internship'
    },
    {
      id: 3,
      title: 'StockOut India',
      image: '/api/placeholder/600/400',
      videoUrl: AppDemo3, 
      description: "Stock Out India is a smart platform that helps businesses list their dead stock and connect directly with interested buyers. Whether you're looking to clear unsold inventory or find affordable bulk products, Stock Out India makes the process simple and efficient.",
      technologies: ['React Native', 'Redux', 'Google-Signin', 'Razorpay', 'PHP'],
      codeLink: '#',
      playstore: "https://play.google.com/store/apps/details?id=com.stockoutindia.official",
      projectType: 'client'
    },
  ];

  // Effect to handle video playing state
  useEffect(() => {
    // Handle project videos
    if (activeProject !== null) {
      const videoElement = videoRefs.current[activeProject];
      if (videoElement && videoElement.src && videoElement.src !== '#') {
        const playPromise = videoElement.play();
        
        // Handle the promise to avoid uncaught promise errors
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Video play failed:", error);
          });
        }
      }
    }
    
    // Pause other videos when a new one is selected
    Object.keys(videoRefs.current).forEach(id => {
      if (Number(id) !== activeProject && videoRefs.current[id]) {
        videoRefs.current[id].pause();
      }
    });
  }, [activeProject]);
  
  // Effect to handle Synapsis video playing state
  useEffect(() => {
    if (synapsisVideoRef.current) {
      if (synapsisVideoPlaying) {
        const playPromise = synapsisVideoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Synapsis video play failed:", error);
            setSynapsisVideoPlaying(false);
          });
        }
      } else {
        synapsisVideoRef.current.pause();
      }
    }
  }, [synapsisVideoPlaying]);
  
  const handleVideoToggle = (id) => {
    // Check if the video URL is valid
    const project = projects.find(p => p.id === id);
    if (project && project.videoUrl === '#') {
      console.log("No video available for this project");
      return;
    }
    
    // Toggle the active project
    setActiveProject(activeProject === id ? null : id);
  };
  
  const handleSynapsisVideoToggle = () => {
    setSynapsisVideoPlaying(prev => !prev);
  };
  
  // Function to get project type info
  const getProjectTypeInfo = (type) => {
    switch(type) {
      case 'internship':
        return { text: 'Internship Project', color: '#4285F4', icon: <FaBriefcase /> };
      case 'freelance':
        return { text: 'Client Project', color: '#EA4335', icon: <FaUserTie /> };
      case 'personal':
        return { text: 'Personal Project', color: '#34A853', icon: <FaLaptopCode /> };
      default:
        return { text: '', color: '#333', icon: null };
    }
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
          {projects.map(project => {
            const projectTypeInfo = getProjectTypeInfo(project.projectType);
            
            return (
              <div 
                className="project-card fade-in-element" 
                key={project.id}
              >
                <div className="project-content">
                  <div className="mobile-device">
                    <div className="device-screen">
                      {project.videoUrl !== '#' ? (
                        <video 
                          ref={el => videoRefs.current[project.id] = el}
                          src={project.videoUrl}
                          loop
                          muted
                          playsInline
                          style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            objectPosition: 'center',
                            aspectRatio: '393/851'
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
                      {project.videoUrl !== '#' && (
                        <button 
                          className="video-toggle"
                          onClick={() => handleVideoToggle(project.id)}
                          aria-label={activeProject === project.id ? "Pause video" : "Play video"}
                        >
                          {activeProject === project.id ? <FaPause /> : <FaPlayCircle />}
                        </button>
                      )}
                    </div>
                    <div className="device-home-button"></div>
                  </div>
                  
                  <div className="project-info">
                    <h3 className="project-title">
                      {project.title}
                      {project.playstore && (
                        <span className="playstore-icon-inline">
                          <FaGooglePlay />
                        </span>
                      )}
                    </h3>
                    
                    {/* Project type tag inside info section */}
                    <div className="project-type-tag" style={{ color: projectTypeInfo.color }}>
                      {projectTypeInfo.icon} <span>{projectTypeInfo.text}</span>
                    </div>
                    
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tech">
                      {project.technologies.map((tech, index) => (
                        <span className="tech-tag" key={index}>{tech}</span>
                      ))}
                    </div>
                    
                    <div className="project-links">
                      <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer" aria-label="Source code">
                        <FaGithub /> <span>Code</span>
                      </a>
                      {project.playstore && (
                        <a href={project.playstore} className="project-link playstore-link" target="_blank" rel="noopener noreferrer" aria-label="Google Play Store">
                          <FaGooglePlay /> <span>Play Store</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;