import React from 'react'
import Tags from './Tags'
export const Subject = () => {

    const tagList = [
        {
            color:"#009990",
            text: "Geography",
        },
        {
            color:"#FCC737",
            text: "Politics",
        },
        {
            color:"#009990",
            text: "Current Affairs",
        },
        {
            color:"#800000",
            text: "General Studies",
        },
        {
            color:"#009990",
            text: "Mathematics",
        },
        {
            color:"#BCCCDC",
            text: "Social Studies",
        },
        {
            color:"#800000",
            text: "English Literature",
        },
        {
            color:"#FCC737",
            text: "Indian History",
        },
        {
            color:"#009990",
            text: "Economics",
        },
        
    ]
  return (
    <div>
        <h1 className='text-lg font-semibold px-2 pb-3'>Subject Understanding</h1>
        <div className="flex flex-wrap gap-2 px-2 py-2">
            {tagList.map((list)=>{
                return(
                    <>
                    <Tags color={list.color} key={list} text={list.text}  />
                    </>
                )
            })}
        </div>
    </div>
  )
}
