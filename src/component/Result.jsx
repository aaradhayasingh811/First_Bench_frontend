import React from 'react'
import result from "../assets/result.png"
import Marks from './Marks'
import Revisit from './Revisit'

const Result = ({abs}) => {
  return (
    <div className={`bg-purple-50 border-[1px] border-gray-200 my-2 rounded-2xl ${abs && 'absolute left-0'}`}>
      <div className="flex justify-center items-center flex-col">
        <img src={result} alt="Result Image" className='h-24 w-24 my-2' />
        <p className='text-2xl font-medium text-[#545AA7] text-center'>Your Result!</p>
        <p className='my-1 font-extralight text-gray-600 text-center'>All your insights & details in one place.</p>
      </div>
      <div className="px-4 py-2">
        <Marks />
      </div>
      <div className="px-4 py-2">
        <Revisit />
      </div>
    </div>
  )
}

export default Result;
