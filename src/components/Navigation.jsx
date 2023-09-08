import React from 'react';

const Navigation = ({ scrollToSection }) => {
  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
  };
  
  return (
    <div className="navbar bg-base-100 opacity-90 justify-center sticky top-0 z-10">
      <a href="#home" className="btn btn-ghost normal-case text-sm" onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}>Home</a>
      <a href="#aboutme" className="btn btn-ghost normal-case text-sm" onClick={(e) => {
              e.preventDefault();
              scrollToSection('aboutme');
            }}>About</a>
      <a href="#projects"className="btn btn-ghost normal-case text-sm" onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}>Projects</a>
      <a href="#contact" className="btn btn-ghost normal-case text-sm" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}>Contact</a>
    </div>
  );
}

export default Navigation;