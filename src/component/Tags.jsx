import React from 'react';

const Tags = ({ color, text }) => {
  return (
    <div>
      <p className={`text-[10px] p-1 rounded-lg text-white`} style={{backgroundColor:color}}>{text}</p>
    </div>
  );
};

export default Tags;
