import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionName) => {
    navigate('/');
    
     // Use JavaScript to scroll to the section
     setTimeout(() => {
      const section = document.getElementById(sectionName);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0); // Adding a small delay to ensure navigation completes before scrolling
  };

  return (
    <div className="navbar bg-base-100 opacity-90 justify-center sticky top-0 z-10">
      <button onClick={() => scrollToSection('home')} className="btn btn-ghost normal-case text-sm">
        Home
      </button>
      <button onClick={() => scrollToSection('aboutme')} className="btn btn-ghost normal-case text-sm">
        About
      </button>
      <button onClick={() => scrollToSection('projects')} className="btn btn-ghost normal-case text-sm">
        Projects
      </button>
      <button onClick={() => scrollToSection('contact')} className="btn btn-ghost normal-case text-sm">
        Contact
      </button>
    </div>
  );
};

export default Navigation;