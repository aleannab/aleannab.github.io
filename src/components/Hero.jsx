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
        <div className="flex flex-col max-w-6xl reveal-slide-hero opacity-0 gap-5 p-10 rounded-lg bg-base-100/50 md:bg-transparent">
          <h1 className="reveal-slide-hero text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary">Antoinette Bumatay-Chan</h1>
          <p className="reveal-slide-hero w-auto font-sans">Creative Developer | Art + Technology</p>
          <p className="reveal-slide-hero w-auto font-sans italic">Still under construction... but feel free to poke around. :]</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
