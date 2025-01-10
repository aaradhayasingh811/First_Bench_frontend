import React from 'react';
import scale from "../assets/scale.jpeg";

const Scale = ({ r1, r2, g1, g2, purple1, purple2 }) => {
  return (
    <div className="flex-col flex px-4 py-2 justify-center my-2">
      {/* First scale */}
      <div className="flex flex-col relative h-16 justify-end" style={{ backgroundImage: `url(${scale})`, backgroundSize: "cover" }}>
        {/* Purple marker */}
        <div
          className="absolute top-0 h-full bg-[#8485d6b2] w-2 "
          style={{ left: purple1 || g1 }}
        ></div>
        {/* Red and Green Bars */}
        <div className="h-2 bg-red-600 rounded-sm" style={{ width: r1 }}></div>
        <div className="h-2 bg-green-400 rounded-sm my-2" style={{ width: g1 }}></div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        </p>
      </div>
      {/* Second scale */}
      <div className="flex flex-col relative h-16 justify-end" style={{ backgroundImage: `url(${scale})`, backgroundSize: "cover" }}>
        {/* Purple marker */}
        <div
          className="absolute top-0 h-full bg-[#8485d6b2] w-2"
          style={{ left: purple2 || g2  }}
        ></div>
        {/* Red and Green Bars */}
        <div className="h-2 bg-red-600 rounded-sm " style={{ width: r2 , marginLeft:g2}}></div>
        <div className="h-2 bg-green-400 my-2 rounded-sm" style={{ width: g2 }}></div>
      </div>
      <div className="text-sm text-gray-400">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default Scale;
