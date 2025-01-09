import React from 'react'
import Tags from './Tags'
export const Subject = () => {

    const tagList = [
        {
            color:"#58B7B4",
            text: "Geography",
        },
        {
            color:"#FCC737",
            text: "Politics",
        },
        {
            color:"#58B7B4",
            text: "Current Affairs",
        },
        {
            color:"#dc2626",
            text: "General Studies",
        },
        {
            color:"#58B7B4",
            text: "Mathematics",
        },
        {
            color:"#BCCCDC",
            text: "Social Studies",
        },
        {
            color:"#dc2626",
            text: "English Literature",
        },
        {
            color:"#FCC737",
            text: "Indian History",
        },
        {
            color:"#58B7B4",
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
