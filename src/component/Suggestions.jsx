import React from "react";

const Suggestions = () => {
  return (
    <div className="flex justify-center px-2 py-7 items-center gap-x-2 2xl:flex-nowrap flex-wrap">
      <div className="flex flex-col justify-center items-center gap-y-2">
        <div className="bg-[#5B5DAD] text-white w-max text-xs p-1 rounded">Q. 1-12</div>
        <div className="p-3 bg-purple-50 border-2 border-dotted border-purple-300">
          <span className="text-base font-bold">40</span>sec
        </div>
        <div className="text-[#009990] text-lg font-semibold">Easy</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <div className="bg-[#5B5DAD] text-white w-max text-xs p-1 rounded">Q. 12-32</div>
        <div className="p-3 bg-purple-50 border-2 border-dotted border-purple-300">
          <span className="text-base font-bold">1.5</span>min
        </div>
        <div className="text-[#FCC737] text-lg font-semibold">Medium</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <div className="bg-[#5B5DAD] text-white w-max text-xs p-1 rounded">Q. 32-40</div>
        <div className="p-3 bg-purple-50 border-2 border-dotted border-purple-300">
          <span className="text-base font-bold">3</span>min
        </div>
        <div className="text-red-700 text-lg font-semibold">Hard</div>
      </div>
    </div>
  );
};

export default Suggestions;
