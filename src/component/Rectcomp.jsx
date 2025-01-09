import React from 'react'

const Rectcomp = ({text,percentage}) => {
  return (
    <div className='flex items-center justify-start gap-x-2 px-2 py-1 border-[1px] rounded-md border-[#787dbfa0]'>
        <p className='bg-[#F2F3F8] text-[#545AA7] font-bold p-1 text-sm rounded-lg'>{percentage}</p>
        <p className='text-sm'>Based on <span className='text-[#545AA7] font-bold text-[15px]'>{text}</span></p>
    </div>
  )
}

export default Rectcomp
