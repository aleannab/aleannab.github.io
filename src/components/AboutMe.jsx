import React from 'react';
import image from "../assets/temp.jpg";

const AboutMe = () => {
  return (
    <div id="aboutme" className="flex flex-col justify-center items-center lg:flex-row-reverse p-10">
      <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
      <div className="max-w-lg text-center p-6">
        <h1 className="text-5xl font-bold">Hi, I'm Antoinette.</h1>
        <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo scelerisque diam, facilisis blandit orci sodales vitae. Morbi id laoreet felis. Phasellus ante purus, blandit quis convallis non, cursus quis odio. Vestibulum eu nisi eu mi sodales fermentum. Aliquam elementum diam et ante ornare luctus. Etiam egestas, lectus nec fringilla cursus, purus ex facilisis orci, in elementum mauris est aliquam tellus. Quisque at consequat mi, eget porta nunc. Fusce vitae justo augue. Suspendisse quis urna in mi posuere interdum.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
