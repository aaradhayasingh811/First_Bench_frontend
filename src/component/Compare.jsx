import React from 'react'
import { BsArrowDownSquare } from "react-icons/bs";

const Compare = () => {
  return (
    <div className='h-56 w-full border-[1px] border-gray-200 my-2 rounded-2xl bg-white'>
      <p className='text-slate-400 flex items-center px-4 py-2'>
        <BsArrowDownSquare className='me-2'/>
        Compare Accuracy</p>
    </div>
  )
}

export default Compare
