import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Response = () => {
  return (
    <div className="p-2 flex flex-col items-start justify-center gap-y-2">
      <div className="bg-[#545AA7] text-white px-1 w-max">Std Time - 2min</div>
      <div className="text-slate-300 bg-purple-50 px-2 py-3 border-2 border-dotted border-purple-300 w-full">
        <p className="text-[#009990] text-2xl font-semibold flex items-end justify-center">
          <span>60</span>{" "}
          <span className="text-slate-400 text-sm">% Ans took </span>
          <span className="flex items-end" ><FaArrowUpLong className="text-red-600 text-sm" /></span>
          <span className="text-[#545AA7] text-sm">2min</span>
        </p>
      </div>
      <div className=" border-t-2 border-slate-300 w-full my-2"></div>
      <div className="text-2xl mx-auto font-semibold text-center">
        You are <span className="text-red-600">slow</span> !
      </div>
    </div>
  );
};

export default Response;
