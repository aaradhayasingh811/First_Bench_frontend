import React from "react";
import Tags from "./Tags";
export const Subject = () => {
  const tagList = [
    {
      color: "#3FB9BB",
      text: "Geography",
    },
    {
      color: "#FCC737",
      text: "Politics",
    },
    {
      color: "#3FB9BB",
      text: "Current Affairs",
    },
    {
      color: "#CA2F2F",
      text: "General Studies",
    },
    {
      color: "#3FB9BB",
      text: "Mathematics",
    },
    {
      color: "#BCCCDC",
      text: "Social Studies",
    },
    {
      color: "#CA2F2F",
      text: "English Literature",
    },
    {
      color: "#FCC737",
      text: "Indian History",
    },
    {
      color: "#3FB9BB",
      text: "Economics",
    },
  ];
  return (
    <div>
      <h1 className="text-base font-semibold px-2 pb-3 py-2 text-gray-900">
        Subject Understanding
      </h1>
      <div className="flex flex-wrap gap-2 px-2 py-2">
        {tagList.map((list) => {
          return (
            <>
              <Tags color={list.color} key={list} text={list.text} />
            </>
          );
        })}
      </div>
    </div>
  );
};
