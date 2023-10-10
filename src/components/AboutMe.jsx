import React from 'react';
import image from '../assets/temp.jpg';
import circles from '../assets/temp/decor-circles.svg';
import leaf from '../assets/temp/leaf.svg';
import Decor from './Decor';

const AboutMe = () => {
  return (
    <div id="aboutme" className="min-h-screen relative flex flex-col w-full justify-center items-center">
      <Decor left={leaf} right={circles} />
      <div className="flex flex-col relative justify-center items-center lg:flex-row-reverse px-[15%] max-w-7xl gap-5">
        <img src={image} className="max-w-xs border-8 border-primary rounded-lg shadow-2xl" />
        <div className="flex flex-col p-6 ">
          <h1 className="text-5xl text-center lg:text-left font-serif font-bold text-primary">Hi, I'm Antoinette.</h1>
          <div className="flex flex-col rounded-lg bg-base-100/50 px-4 py-3">
            <p className="flex py-6 text-info">
              I have six years of professional experience bringing concepts to reality in varying scales of interactive media, from intimate augmented
              reality storytelling on a phone screen to navigating collections of art projected on massive touch film walls.
            </p>
            <p>
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
