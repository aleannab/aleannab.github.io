import React from 'react';
import image from "../assets/temp.jpg";
import illustration from "../assets/temp/flowers.png";

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div id="aboutme" className="flex flex-col justify-center items-center lg:flex-row-reverse p-10">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl border-8 border-secondary" />
        <div className="max-w-lg text-left p-6 lg:rounded-tl-lg lg:rounded-bl-lg">
          <h1 className="text-5xl font-bold text-primary">Hi, I'm Antoinette.</h1>
          <p className="py-6 text-info">I have six years of professional experience bringing concepts to reality in varying scales of interactive media, from intimate augmented reality storytelling on a phone screen to navigating collections of art projected on massive touch film walls. Ultimately, I love combining my interests of art and technology to create beautiful captivating experiences that inspire curiosity, joy, movement, and play.
          </p>
          <img src={illustration} className="w-28 ml-auto"/>
        </div>
      </div>
      
    </div>
  );
};

export default AboutMe;
