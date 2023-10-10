import React from 'react';
import image from '../assets/temp.jpg';
import circles from '../assets/temp/decor-circles.svg';
import leaf from '../assets/temp/leaf.svg';

const AboutMe = () => {
  return (
    <div id="aboutme" className="min-h-screen flex flex-col ustify-center items-center">
      <div className="flex flex-col relative justify-center items-center lg:flex-row-reverse py-[18%] px-[5%]">
        <img src={circles} class="w-1/4 absolute bottom-0 right-0 z-[-10] drop-shadow-xl" />
        <img src={leaf} class="w-1/4 absolute top-0 left-0 z-[-10] drop-shadow-xl" />
        <img src={image} className="max-w-xs border-8 border-primary rounded-lg shadow-2xl" />
        <div className="flex flex-col p-6">
          <h1 className="text-5xl text-center lg:text-left font-serif font-bold text-primary">Hi, I'm Antoinette.</h1>
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
  );
};

export default AboutMe;
