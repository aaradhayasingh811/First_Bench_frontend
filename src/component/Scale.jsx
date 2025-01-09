import React from 'react'
import scale from "../assets/scale.jpeg"
const Scale = ({r1,r2,g1,g2}) => {
  return (
    <div className='flex-col flex px-4 py-2 justify-center my-2'>
      <div className="flex flex-col h-16 justify-end" style={{ backgroundImage: `url(${scale})`, backgroundSize:"cover" }}>
        {/* <img src={scale} alt="" className='w-full h-16 ' /> */}
        <div className="h-2 bg-[#545AA7] my-2 rotate-90 w-14"></div>
        <div className="h-2 bg-red-600 " style={{width:r1}}></div>
        <div className="h-2 bg-green-400 my-2" style={{width:g1}}></div>
      </div>
      <div className="mb-4 ">
        <p className='text-sm text-gray-400 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum</p>
      </div>
      <div className="flex flex-col h-16 justify-end" style={{ backgroundImage: `url(${scale})`, backgroundSize:"cover" }}>
        {/* <img src={scale} alt="" className='w-full h-16 ' /> */}
        <div className="h-2 bg-[#545AA7] my-2 rotate-90 w-12"></div>
        <div className="h-2 bg-red-600 " style={{width:r2}}></div>
        <div className="h-2 bg-green-400 my-2" style={{width:g2}}></div>
      </div>
      <div className="text-sm text-gray-400">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum</p>
      </div>
    </div>
  )
}

export default Scale
