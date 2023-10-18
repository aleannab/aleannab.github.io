import React, { useRef } from 'react';
import image from '../assets/temp.jpg';
import circles from '../assets/temp/decor-circles.svg';
import leaf from '../assets/temp/leaf.svg';
import Decor from './Decor';
import useRevealAnimation from './useRevealAnimation';

const AboutMe = (props) => {
  const ref = useRef();
  useRevealAnimation(ref, 'about');

  return (
    <div ref={ref} id="aboutme" className="aboutme about-container min-h-screen relative flex flex-col w-full justify-center items-center">
      <div className="reveal-fade-about absolute flex w-full h-full justify-center items-center">
        <Decor left={leaf} right={circles} />
      </div>
      <div className="flex flex-col relative justify-center items-center lg:flex-row-reverse  w-full max-w-5xl px-10 gap-5">
        <img src={image} className="reveal-fade-about max-w-xs border-8 border-primary rounded-lg shadow-2xl" />
        <div className="flex flex-col gap-5">
          <h1 className="reveal-slide-about text-5xl text-center lg:text-left font-serif font-bold text-primary px-4">Hi, I'm Antoinette.</h1>
          <div className="flex flex-col rounded-lg bg-base-100/50 px-4 py-5">
            <p className="reveal-slide-about flex text-info text-lg">
              I have six years of professional experience bringing concepts to reality in varying scales of interactive media, from intimate augmented
              reality storytelling on a phone screen to navigating collections of art projected on massive touch film walls.
            </p>
            <p className="reveal-slide-about text-lg">
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
