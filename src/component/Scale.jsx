import React from "react";
import scale from "../assets/scale.jpeg";

const Scale = ({ r1, r2, g1, g2, purple1, purple2 }) => {
  const a = 3 + Number(g2) + "%";
  return (
    <div className="flex-col flex px-4 py-2 justify-center my-2">
      <div
        className="flex flex-col relative h-16 justify-end"
        style={{
          backgroundImage: `url(${scale})`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute top-0 h-full bg-[#545aa7d2] rounded-sm"
          style={{ left: `${g1}%`, width: "3%" }}
        ></div>
        <div
          className="h-3 bg-red-600 rounded-sm"
          style={{ width: `${r1}%`, opacity: "0.8" }}
        ></div>
        <div
          className="h-3 bg-green-400 my-2 rounded-sm"
          style={{ width: `${g1}%`, opacity: "0.8" }}
        ></div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
      </div>
      <div
        className="flex flex-col relative h-16 justify-end"
        style={{
          backgroundImage: `url(${scale})`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute top-0 h-full bg-[#545aa7d2] rounded-sm"
          style={{ left: `${purple2}%`, width: "3%" }}
        ></div>
        <div
          className="h-3 bg-red-600  rounded-sm"
          style={{ width: `${r2}%`, opacity: "0.8", marginLeft: a }}
        ></div>
        <div
          className="h-3 bg-green-400 my-2 rounded-sm"
          style={{ width: `${g2}%`, opacity: "0.8" }}
        ></div>
      </div>
      <div className="text-sm text-gray-400">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default Scale;
