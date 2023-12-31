import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

const Navigation = ({ isMain = true }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Button Animations
  const toggleMenu = () => {
    if (isMain) {
      setMenuOpen(!isMenuOpen);
      if (isMenuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    } else {
      scrollToSection('projects');
    }
  };

  // Scroll to Section Behavior
  const navigate = useNavigate();

  const scrollToSection = (sectionName) => {
    navigate('/');

    setTimeout(() => {
      const section = document.getElementById(sectionName);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0); // Add small delay to ensure navigation completes before scrolling
  };

  // Close menu on scroll
  const handleScroll = () => {
    if (isMenuOpen) toggleMenu();
  };

  if (isMain) {
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isMenuOpen]);
  }

  return (
    <div className="z-10 fixed">
      <ul className="menu w-auto ml-auto">
        <li>
          <button aria-label="toggle menu open/close" className="w-auto h-auto relative" onClick={() => toggleMenu()}>
            {isMain && (
              <svg
                className="menu-open w-6 h-6 absolute"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
            <svg
              className={`menu-close ${isMain ? 'menu-content' : ''} w-6 h-6 relative`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </li>
        {isMain && (
          <div className="menu-content">
            <li>
              <button aria-label="scroll to home" onClick={() => scrollToSection('home')} disabled={!isMenuOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button aria-label="scroll to about me" onClick={() => scrollToSection('aboutme')} disabled={!isMenuOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button aria-label="scroll to projects" onClick={() => scrollToSection('projects')} disabled={!isMenuOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </button>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
