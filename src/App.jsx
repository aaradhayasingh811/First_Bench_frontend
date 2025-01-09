import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { VscGraphLine } from "react-icons/vsc";
import { IoIosTimer } from "react-icons/io";
import { WiStars } from "react-icons/wi";
import { IoIosGitCompare } from "react-icons/io";
import { FaTimeline } from "react-icons/fa6";

import Navbar from "./component/Navbar";
import Result from "./component/Result";
import Compare from "./component/Compare";
import Block from "./component/Block";
import Data from "./component/Data";
import { Subject } from "./component/Subject";
import Response from "./component/Response";
import Suggestions from "./component/Suggestions";
import { useState } from "react";
import Bottom from "./component/Bottom";
import Scale from "./component/Scale";
import { Barchart } from "./component/Barchart";

function App() {
  const [result, setResult] = useState(false);

  const handleShow = () => {
    setResult(!result);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="content w-full flex xl:px-32 px-8 bg-[#FAF9F6]">
          <div className="lg:w-[30%] p-5 lg:flex flex-col hidden">
            <Result className="rounded-lg" />
          </div>
          <div className="lg:w-[70%] w-full p-5">
            <button
              className="bg-[#545AA7] lg:hidden flex my-3 text-gray-200 items-center justify-center font-medium p-2 rounded w-max"
              onClick={handleShow}
            >
              <FaArrowLeft className="me-2 animate-bounce ease-linear" />
              Check your Result
            </button>
            {result && <Result abs="true" />}
            <div className="flex gap-4 justify-center sm:flex-row flex-col">
              <Compare  />
              <Compare  />
              <Compare  />
            </div>
            <div className="flex gap-2 min-[1143px]:flex-row flex-col">
              <Block
                className="w-1/4"
                heading="Improvements"
                image={<VscGraphLine />}
                section={<Subject />}
              ></Block>
              <Block
                className="w-1/4"
                heading="Response Time"
                image={<IoIosTimer />}
                section={<Response />}
              ></Block>
              <Block
                className="w-1/4"
                heading="Approach Data"
                image={<VscGraphLine />}
                section={<Data />}
              ></Block>
              <Block
                className="w-1/4"
                heading="Suggestions"
                image={<WiStars />}
                section={<Suggestions />}
              ></Block>
            </div>
            <div className="flex gap-x-4 max-[1584px]:flex-col flex-row">
              <Bottom
                className="w-1/2"
                icon={<IoIosGitCompare />}
                text="Compare Accuracy"
                children={<Barchart />}
              />
              <Bottom
                className="w-1/2"
                icon={<FaTimeline />}
                text="Time Taken"
                children={<Scale />}
              />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
