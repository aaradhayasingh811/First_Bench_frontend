import React from 'react'

const Block = ({heading,image,section}) => {
  return (
    <div className=' w-full border-2 border-gray-200 my-2 rounded-2xl bg-white'>
        <div className="px-4 pt-2 flex items-center text-slate-400">
            <p className='me-2 h-4 w-4'>{image}</p>
            <h2 className=' text-lg flex items-center '>{heading}</h2>
        </div>
        {section}
    </div>
  )
}

export default Block
