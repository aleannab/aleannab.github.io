import React from 'react';
import image from '../assets/temp.jpg';
import illustration from '../assets/temp/flowers.png';

const AboutMe = () => {
  return (
    <div id="aboutme" className="flex flex-col p-10 justify-center items-center lg:flex-row-reverse">
      <img src={image} className="max-w-xs border-8 border-secondary rounded-lg shadow-2xl " />
      <div className="flex flex-col p-6">
        <h1 className="text-5xl text-center lg:text-left font-bold text-primary">Hi, I'm Antoinette.</h1>
        <p className="flex py-6 text-info">
          I have six years of professional experience bringing concepts to reality in varying scales of interactive media, from intimate augmented
          reality storytelling on a phone screen to navigating collections of art projected on massive touch film walls. Ultimately, I love combining
          my interests of art and technology to create beautiful captivating experiences that inspire curiosity, joy, movement, and play.
        </p>
        <img src={illustration} className="w-28 lg:ml-auto" />
      </div>
    </div>
  );
};

export default AboutMe;
