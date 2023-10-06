import React from 'react';
import illustration from '../assets/temp/abstract.svg';

const Hero = () => {
  return (
    <div id="home" className="hero relative min-h-screen bg-base-100 overflow-visible z-30">
      <img src={illustration} className="absolute top-0 left-0 w-full h-auto object-cover object-center drop-shadow-xl" />
      <div className="hero-content relative text-center">
        <div className="max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary">Antoinette Bumatay-Chan</h1>
          <p className="py-6 font-sans">Creative Developer | Art + Technology</p>
          <p className="py-6 font-sans">Still under construction... but feel free to poke around. :]</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
