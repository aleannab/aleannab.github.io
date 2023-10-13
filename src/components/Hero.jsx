import React, { useRef } from 'react';
import left from '../assets/temp/abstract-left.svg';
import right from '../assets/temp/abstract-right.svg';
import useRevealAnimation from './useRevealAnimation';

const Hero = () => {
  const ref = useRef();
  useRevealAnimation(ref, 'hero', true);

  return (
    <div ref={ref} id="home" className="hero relative min-h-screen overflow-y-visible">
      <img src={left} className="absolute top-0 left-0 min-h-full object-cover z-[-20] max-w-2xl" />
      <img src={right} className="absolute top-0 right-0 min-h-full object-cover z-[-30] max-w-2xl" />
      <div className="hero-content relative text-center">
        <div className="max-w-6xl">
          <h1 className="text-reveal-hero text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary">Antoinette Bumatay-Chan</h1>
          <p className="text-reveal-hero py-6 font-sans">Creative Developer | Art + Technology</p>
          <p className="text-reveal-hero py-6 font-sans">Still under construction... but feel free to poke around. :]</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
