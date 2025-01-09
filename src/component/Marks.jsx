import React from "react";
import { HiOutlineNewspaper } from "react-icons/hi2";

const Marks = () => {
  return (
    <div className="bg-[#fff] p-6 border-[1px] border-gray-200 my-2 rounded-2xl ">
      <div className="flex bg-purple-50 p-2 justify-between items-center text-sm rounded min-[1150px]:flex-row min-[1024px]:flex-col">
        <div className="flex gap-x-4 xl:flex-row flex-col items-center">
          <div className="">
            <HiOutlineNewspaper className="h-10 w-10" />
          </div>
          <div className="flex-col flex ">
            <div className="text-gray-200 bg-[#545AA7] rounded-full text-[10px] px-1">
              YOU'VE PASSED
            </div>
            <div className="">
              <p className="text-gray-400 font-medium">
                <span className="text-xl text-black font-bold">136</span>/240
              </p>
            </div>
          </div>
        </div>
        {/* <div className="border-e-2 border-slate-300 "></div> */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#58B7B4] text-gray-200 w-max px-1 rounded font-bold text-[10px] ">
            76%
          </div>
          <div className="text-[#58B7B4] text-[10px] font-medium">ACCURACY</div>
        </div>
      </div>
      <div className="p-2 my-4 bg-purple-50 rounded">
        <div className="flex items-center justify-start gap-x-4 min-[1150px]:flex-row min-[1024px]:flex-col">
          <div className="">
            <img
              src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww"
              alt=""
              className="w-10 h-10 border-4 border-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-[#545AA7] font-bold ">Top Score</div>
            <div className="text-gray-400 font-medium">
              <span className="text-xl text-black font-bold">230</span>/ 240
            </div>
          </div>
        </div>
        <div className="border-b-2 my-2 border-slate-300"></div>
        <div className="flex justify-between items-center">
          <div className="text-xs font-bold text-gray-400">
            By <span className="text-[#111]">Parth Akotkar</span>
          </div>
          <div className=" bg-[#58B7B4] text-gray-200 px-2 rounded-full">
            <p className="text-[10px] font-bold">
              <span className="text-[12px]">92%</span> ACCURACY
            </p>
          </div>
        </div>
      </div>
      <div className="px-2 my-1">
        <p className="text-lg font-semibold ">Improve your Marks</p>
        <p className="text-xs text-gray-400 font-medium">
          Improve your score by practicing more.
        </p>
      </div>
      <div className="p-2 mt-2 ">
        <button className="bg-[#545AA7] text-gray-200 font-medium w-full py-1 rounded-lg">
          Practice more
        </button>
      </div>
    </div>
  );
};

export default Marks;
