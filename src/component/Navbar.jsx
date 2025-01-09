import React from "react";
import { Link } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { WiStars } from "react-icons/wi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbBell } from "react-icons/tb";
import { TbLetterP } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useState ,useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [abs, setAbs] = React.useState(false);
  const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      window.addEventListener("resize", handleResize);
  
      // Ensure `result` is reset when the screen width is greater than 1024px
      if (windowSize.width > 1024) {
        setMenuOpen(false);
      }
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [windowSize.width]);
  

  const openMenu = () => {
    setMenuOpen(!menuOpen);
    setAbs(!abs)
  };
  const closeMenu = () => {
    setMenuOpen(!menuOpen);
    setAbs(!abs)

  };
  return (
    <>
      <div className="bg-gray-700 p-2 text-[#ddd] font-extralight flex lg:justify-around justify-between">
        <div className="lg:hidden flex">
          <Link to="/">
            <img
              src="https://i.pinimg.com/736x/6e/a9/d8/6ea9d8d5ac75d9c5d7a2a567c1e2bbdf.jpg"
              alt=""
              className="w-10 h-10"
            />
          </Link>
        </div>

        <div className="gap-x-9 lg:flex hidden">
          <Link to="/">
            <img
              src="https://i.pinimg.com/736x/6e/a9/d8/6ea9d8d5ac75d9c5d7a2a567c1e2bbdf.jpg"
              alt=""
              className="w-10 h-10"
            />
          </Link>
          <Link to="/" className="flex items-center">
            <TiHomeOutline className="me-2" /> Dashboard
          </Link>
          <Link to="/" className="flex items-center">
            <WiStars className="me-2" /> FirstGuru
          </Link>
          <Link to="/" className="flex items-center">
            <TiHomeOutline className="me-2" /> TownHall
          </Link>
          <Link to="/" className="flex items-center">
            <AiOutlineThunderbolt className="me-2" /> AI Evaluation
          </Link>
          <Link to="/" className="flex items-center">
            <GoGraph className="me-2" /> Performance
          </Link>
          <Link to="/" className="flex items-center">
            <IoNewspaperOutline className="me-2" /> Mock Test
          </Link>
        </div>
        <div className="flex sm:gap-x-9 gap-x-4">
          <button className="sm:flex hidden items-center">
            <TbBell className="text-white font-semibold text-xl" />
          </button>
          <button className="sm:px-4 sm:py-2 sm:bg-black rounded flex items-center justify-around">
            <p className="px-4 py-1 rounded text-red-500 bg-red-100 font-bold sm:me-2">
              P
            </p>
            <p className=" items-center font-medium sm:flex hidden">
              Profile <IoIosArrowDown />
            </p>
          </button>
          <button className="lg:hidden text-xl" onClick={openMenu}>
            <IoMenu />
          </button>
        </div>
      </div>
      <div
        id="menu"
        className={`${
          menuOpen ? "flex" : "hidden"
        } ${abs && "absolute"} right-0 backdrop-blur-lg flex-col font-[400] bg-gray-400 text-[#FAF9F6] w-max p-4 gap-y-5 min-h-screen float-end `}
      >
        <button className="flex items-center" onClick={closeMenu}>
          <RxCross1 className="me-2" />
          Close
        </button>
        <Link to="/" className="flex items-center">
          <TiHomeOutline className="me-2" /> Dashboard
        </Link>
        <Link to="/" className="flex items-center">
          <WiStars className="me-2" /> FirstGuru
        </Link>
        <Link to="/" className="flex items-center">
          <TiHomeOutline className="me-2" /> TownHall
        </Link>
        <Link to="/" className="flex items-center">
          <AiOutlineThunderbolt className="me-2" /> AI Evaluation
        </Link>
        <Link to="/" className="flex items-center">
          <GoGraph className="me-2" /> Performance
        </Link>
        <Link to="/" className="flex items-center">
          <IoNewspaperOutline className="me-2" /> Mock Test
        </Link>
      </div>
    </>
  );
};

export default Navbar;
