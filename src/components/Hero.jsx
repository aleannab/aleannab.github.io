import React, { useRef } from 'react';
import FadeInOnScroll from './FadeInOnScroll';
import BgSketch from './BgSketch';

const Hero = () => {
  return (
    <div id="home" className="hero relative min-h-screen overflow-y-visible">
      <BgSketch className="absolute flex w-full h-full justify-center items-center"></BgSketch>
      <FadeInOnScroll>
        <div className="hero-content flex flex-col relative text-center gap-10">
          <div className="flex flex-col max-w-6xl reveal-slide-hero gap-2 rounded-lg bg-accent/80 lg:bg-transparent p-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary">Antoinette Bumatay-Chan</h1>
            <h2 className="font-sans text-2xl md:text-3xl drop-shadow-md">Creative Developer | Technology + Art</h2>
          </div>
          {/* <p className="reveal-fade-hero flex-none font-sans bg-accent text-lg rounded-lg px-2 font-thin">Artistic Byte-sized Concoctions</p> */}
          <p className="bg-accent/80 text-lg rounded-full py-2 px-5">still under construction... but feel free to poke around. :]</p>
        </div>
      </FadeInOnScroll>
    </div>
  );
};

export default Hero;
