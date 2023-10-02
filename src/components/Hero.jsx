import React from 'react';
import illustration from '../assets/temp/abstract.png';

const Hero = () => {
  return (
    <div id="home" className="hero relative min-h-screen bg-base-200">
      <img
        className="absolute top-0 left-0 w-full h-full opacity-20 object-cover object-center"
        src={illustration}
      />
      <div className="hero-content relative text-center">
        <div className="max-w-md">
          <h1 className="text-4xl md:text-5x1 sm:text-4x1 font-bold text-primary">
            Antoinette Bumatay-Chan
          </h1>
          <p className="py-6">Creative Developer | Art + Technology</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
