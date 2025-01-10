import React, { useState } from "react";

export const Minutes = () => {
  const [selectedTime, setSelectedTime] = useState(15); // Default selected time
  const times = [10, 15, 30, 45];

  return (
    <div className="relative flex flex-col sm:mx-4" >
      {/* Slider track */}
      <div
        className="h-2 bg-[#3fb9bbc0] flex justify-center my-4 items-center"
        style={{ top: "50%" ,opacity:'0.8' }}
      ></div>

      {/* Slider steps */}
      <div className="flex justify-around w-full absolute top-0">
        {times.map((time) => (
          <div
            key={time}
            onClick={() => setSelectedTime(time)} // Update state on click
            className={`p-2 hr-lines rounded-lg text-[10px] cursor-pointer ${
              time === selectedTime
                ? "bg-[#3FB9BB] text-[#f0eded]" // Active styles
                : "bg-[#dbe8f5] text-[#36454F]" // Inactive styles
            }`}
          >
            <span className="text-sm font-medium">{time}</span>MIN
          </div>
        ))}
      </div>
    </div>
  );
};
