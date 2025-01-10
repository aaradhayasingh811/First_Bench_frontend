import React from "react";
import Rectcomp from "./Rectcomp";
const Data = () => {
  const itemList = [
    {
      percent: "25%",
      text: "Facts",
    },
    {
      percent: "32%",
      text: "Analysis",
    },
    {
      percent: "19%",
      text: "Elimination",
    },
    {
      percent: "24%",
      text: "Guess",
    },
  ];
  return (
    <div className="flex gap-y-1 flex-col p-2">
      {itemList.map((list) => {
        return <Rectcomp text={list.text} percentage={list.percent} />;
      })}
    </div>
  );
};

export default Data;
