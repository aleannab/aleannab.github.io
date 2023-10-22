import React, { useRef } from 'react';
import portrait1x from '../assets/portrait_1x.jpg';
import portrait2x from '../assets/portrait_2x.jpg';
import circles from '../assets/temp/decor-circles.svg';
import leaf from '../assets/temp/leaf.svg';
import Decor from './Decor';

const AboutMe = (props) => {
  return (
    <div id="aboutme" className="aboutme about-container min-h-screen relative flex flex-col w-full justify-center items-center">
      <div className="reveal-fade-about absolute flex w-full h-full justify-center items-center">
        <Decor left={leaf} right={circles} />
      </div>
      <div className="flex flex-col relative justify-center items-center lg:flex-row-reverse  w-full max-w-5xl px-10 gap-5">
        <img
          srcSet={`${portrait2x} 2x, ${portrait1x} 1x`}
          src={portrait1x}
          className="reveal-fade-about max-w-xs border-2 border-info rounded-lg shadow-lg"
          alt="Antoinette's portrait"
        />
        <div className="flex flex-col gap-5">
          <h1 className="reveal-slide-about text-5xl text-center lg:text-left font-serif font-bold text-primary px-4">Hi, I'm Antoinette.</h1>
          <div className="flex flex-col rounded-lg bg-base-100/30 px-4 py-5 gap-5 text-lg text-info">
            <p className="reveal-slide-about">
              I have six years of professional experience bringing concepts to reality in varying scales of interactive media, from intimate augmented
              reality storytelling on a phone screen to navigating collections of art projected on massive touch film walls.
            </p>
            <p className="reveal-slide-about">
              Ultimately, I love combining my interests of art and technology to create beautiful captivating experiences that inspire curiosity, joy,
              movement, and play.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
