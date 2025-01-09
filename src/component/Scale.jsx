import React from 'react'
import scale from "../assets/scale.jpeg"
const Scale = () => {
  return (
    <div className='flex-col flex px-4 py-2 justify-center my-2'>
      <div className="">
        <img src={scale} alt="" className='w-full' />
      </div>
      <div className="mb-4">
        <p className='text-sm text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum</p>
      </div>
      <div className="">
        <img src={scale} alt="" className='w-full'  />
      </div>
      <div className="text-sm text-gray-400">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum</p>
      </div>
    </div>
  )
}

export default Scale
