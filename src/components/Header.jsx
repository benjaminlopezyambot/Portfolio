import React from "react";
import logo from "../assets/images/astronout.png";
import logo1 from "../assets/images/astronout1.png";
import bg from "../assets/images/bg.jpg";
import Navbar from "./Navbar";
import "../styles.css";

function Header() {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            {/* <div className="btn py-3">
              <button className=" border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl">
                Welcome to my Portfolio
              </button>
            </div> */}
            <h1 className="text-white text-5xl font-bold">Hi! I'm Benjamin</h1>
            <p className="text-white py-4 max-w-lg ">
              Hi there! I'm a front end developer who's been around the block
              (or should I say, around the code?) with Next.js, React.js, and
              Angular. I can create pixel-perfect designs faster than a speeding
              bullet and my TypeScript skills are sharp enough to cut through
              even the most complex codebases. Bonus points if you can keep up
              with my SpringBoot dance moves.
            </p>
            <button className="  text-white text-2xl">
              Let's Connect{" "}
              <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i>{" "}
            </button>
          </div>
          <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo1} alt="" />
          </div>
          <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
