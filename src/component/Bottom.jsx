import React, { Children } from 'react'
import Scale from './Scale'
const Bottom = ({icon , text , children}) => {
  return (
    <div className='flex flex-col h-80 w-full border-2 border-gray-200 my-2 rounded-2xl bg-white overflow-hidden'>
      <div className="flex gap-x-2 px-4 py-2 items-center justify-start text-slate-400">
      <div className="me-1">{icon}</div>
      <div className="">{text}</div>
      </div>
      {children}
    </div>
  )
}

export default Bottom
