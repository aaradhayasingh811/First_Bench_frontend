import React, { useState } from "react";
import "./TimeTaken.css"; // Include your CSS file here
import scaleImage from "../assets/scale.jpeg"

const TimeTaken = () => {
  const [slider1, setSlider1] = useState(30); // Slider position (example)
  const [slider2, setSlider2] = useState(0);  // Slider position for second scale

  return (
    <div className="time-taken">
      {/* First Scale */}
      <div className="scale-container">
        <img src={scaleImage} alt="Scale" className="scale-image" />
        <div
          className="green-bar"
          style={{ width: `${slider1}px`, left: "10px" }}
        ></div>
        <div
          className="red-bar"
          style={{ width: `${90 - slider1}px`, left: `${slider1}px` }}
        ></div>
        <div
          className="slider"
          style={{ left: `${slider1}px` }}
          draggable
          onDrag={(e) => setSlider1(e.clientX - e.target.parentNode.offsetLeft)}
        ></div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      {/* Second Scale */}
      <div className="scale-container">
        <img src={scaleImage} alt="Scale" className="scale-image" />
        <div
          className="green-bar"
          style={{ width: `${slider2 * 20}px`, left: "0px" }}
        ></div>
        <div
          className="red-bar"
          style={{ width: `${80 - slider2 * 20}px`, left: `${slider2 * 20}px` }}
        ></div>
        <div
          className="slider"
          style={{ left: `${slider2 * 20}px` }}
          draggable
          onDrag={(e) =>
            setSlider2(Math.round((e.clientX - e.target.parentNode.offsetLeft) / 20))
          }
        ></div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
  );
};

export default TimeTaken;
