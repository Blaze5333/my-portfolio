import React, { useEffect, useState } from 'react';
import './Skills.css';
import { 
  FaReact, 
  FaNodeJs, 
  FaServer, 
  FaCodeBranch
} from 'react-icons/fa';
import { 
  SiRedux, 
  SiSolana, 
  SiRust, 
  
} from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const techSkills = {
    frontend: [
      { name: 'React Native', icon: <FaReact />, proficiency: 90 },
      { name: 'React.js', icon: <FaReact />, proficiency: 85 },
      { name: 'Redux', icon: <SiRedux />, proficiency: 80 }
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs />, proficiency: 75 },
    //   { name: 'Web Sockets', icon: <SiWebsocket />, proficiency: 70 }
    ],
    blockchain: [
      { name: 'Solana', icon: <SiSolana />, proficiency: 65 },
      { name: 'Anchor', icon: <FaCodeBranch />, proficiency: 60 },
      { name: 'Rust', icon: <SiRust />, proficiency: 55 }
    ]
  };

  const softSkills = [
    { name: 'Problem Solving', proficiency: 90, level: 'Expert' },
    { name: 'Communication', proficiency: 85, level: 'Advanced' },
    { name: 'Team Collaboration', proficiency: 90, level: 'Expert' },
    { name: 'Project Management', proficiency: 75, level: 'Intermediate' },
    { name: 'Time Management', proficiency: 80, level: 'Advanced' }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Technical Expertise</h2>
        
        <div className="skills-intro animate-on-scroll">
          <p>
            As a Computer Science and Engineering student with a passion for development,
            I've built expertise across multiple technology domains. My focus spans from
            mobile development with React Native to blockchain technologies like Solana and Rust.
          </p>
        </div>
        
        <div className="skills-showcase">
          {/* Tech Skills Hexagon Grid */}
          <div className="tech-grid-container animate-on-scroll">
            <div className="tech-category-tabs">
              <button 
                className={activeCategory === 'frontend' ? 'active' : ''} 
                onClick={() => setActiveCategory('frontend')}
              >
                Frontend
              </button>
              <button 
                className={activeCategory === 'backend' ? 'active' : ''} 
                onClick={() => setActiveCategory('backend')}
              >
                Backend
              </button>
              <button 
                className={activeCategory === 'blockchain' ? 'active' : ''} 
                onClick={() => setActiveCategory('blockchain')}
              >
                Blockchain
              </button>
            </div>
            
            <div className="tech-grid">
              {techSkills[activeCategory].map((tech, index) => (
                <div 
                  className="tech-hexagon" 
                  key={index}
                  style={{'--delay': `${index * 0.1}s`}}
                >
                  <div className="hex-content">
                    <div className="tech-icon">{tech.icon}</div>
                    <h3>{tech.name}</h3>
                    <div className="skill-meter">
                      <div 
                        className="skill-fill" 
                        style={{width: `${tech.proficiency}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills Radar Chart */}
          <div className="soft-skills-container animate-on-scroll">
  <h3>Soft Skills</h3>
  <div className="soft-skills-list">
    {softSkills.map((skill, index) => (
      <div className="soft-skill-item" key={index}>
        <div className="soft-skill-info">
          <span className="soft-skill-name">{skill.name}</span>
        </div>
        <div className="soft-skill-bar">
          <div 
            className="soft-skill-progress" 
            style={{width: `${skill.proficiency}%`}}
            data-level={skill.level}
          >
            <span className="skill-percentage">{skill.proficiency}%</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
        
        {/* Current Learning Section */}
        <div className="learning-journey animate-on-scroll">
          <h3>Currently Exploring</h3>
          <div className="learning-items">
            <div className="learning-item">
              <FaServer className="learning-icon" />
              <span>Advanced Solana Programming</span>
            </div>
            <div className="learning-item">
              <SiRust className="learning-icon" />
              <span>Rust for Blockchain</span>
            </div>
            <div className="learning-item">
              {/* <SiWebsocket className="learning-icon" /> */}
              <span>Real-time Application Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;