import React from 'react';
import image from "../assets/temp.jpg";

const AboutMe = () => {
  return (
    <div id="aboutme" className="flex flex-col justify-center items-center lg:flex-row-reverse p-10">
      <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
      <div className="max-w-lg text-left p-6">
        <h1 className="text-5xl font-bold">Hi, I'm Antoinette.</h1>
        <p className="py-6">I have six years of professional experience bringing concepts to reality in varying scales of interactive media, from intimate augmented reality storytelling on a phone screen to navigating collections of art projected on massive touch film walls. Ultimately, I love combining my interests of art and technology to create beautiful captivating experiences that inspire curiosity, joy, movement, and play.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
