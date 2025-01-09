import React from 'react'
import { RiBatteryShareLine } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Revisit = () => {
  return (
    <div className='bg-[#fff] p-6 border-[1px] border-gray-200 my-2 rounded-2xl'>
        <div className="text-xl font-bold my-1">Revisit Paper</div>
        <div className="my-2 text-base text-slate-500 font-medium leading-tight">
            Challenge your friends by just simply sharing a link to this test
        </div>
        <div className="flex items-center justify-center my-8">
            <button className='bg-[#545AA7] text-gray-200 font-medium w-full py-1 rounded-lg flex items-center justify-center'>
                <RiBatteryShareLine className='me-2'/> Visit
            </button>
        </div>
        <div className="text-xs text-gray-400 flex">
            <IoIosInformationCircleOutline className='text-lg font-[900] me-2'/>
            Instructions for how to upload your handwritten material in given
        </div>
      
    </div>
  )
}

export default Revisit
