import React from 'react'

const Rectcomp = ({text,percentage}) => {
  return (
    <div className='flex items-center justify-start gap-x-2 px-2 py-1 border-[2px] rounded-md border-slate-300'>
        <p className='bg-purple-50 text-[#545AA7] font-bold p-1 text-sm'>{percentage}</p>
        <p className='text-sm'>Based on <span className='text-[#545AA7] font-bold text-[15px]'>{text}</span></p>
    </div>
  )
}

export default Rectcomp
