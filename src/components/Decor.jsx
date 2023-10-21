import React from 'react';

const Decor = ({ left, right }) => {
  return (
    <div className="w-full h-full max-w-7xl absolute justify-center items-center lg:flex-row-reverse py-[18%] px-[5%]">
      <img src={left} className="w-80 absolute top-0 left-0 z-[-10] drop-shadow-xl object-cover" alt="" />
      <img src={right} className="w-80 absolute bottom-0 right-0 z-[-10] drop-shadow-xl object-cover" alt="" />
    </div>
  );
};

export default Decor;
