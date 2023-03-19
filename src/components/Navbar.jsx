import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles.css";

function Navbar() {
  const [durum, setDurum] = useState(true);
  console.log(durum);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".navbarcon").style.backgroundColor = "#171717";
    } else {
      document.querySelector(".navbarcon").style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      document.querySelector(".tl").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  }

  return (
    <>
      <div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full">
        <h1 className="text-4xl  font-bold ">🚀Bly.</h1>

        <nav
          className={` flex justify-center items-center gap-x-10 ${
            durum && "lg:hidden"
          } lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#171717]  lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}
        >
          {/* <ul className=" flex gap-10 text-3xl mr-4 lg:flex-col lg:gap-6 ">
            <li className="bla">
              <AnchorLink href="#home">🛖Home</AnchorLink>
            </li>
            <li className="bla">
              <AnchorLink href="#skills">🛠️Skills</AnchorLink>
            </li>
            <li className="bla">
              <AnchorLink href="#projects">🗂️Projects</AnchorLink>
            </li>
          </ul> */}

          <div className="con text-lg flex gap-4  lg:gap-8 lg:my-10">
            <a
              href="https://www.facebook.com/Benjamine.Lopez08"
              target="_blank"
            >
              <i
                className="fa-brands border border-gray-400 fa-facebook text-gray-200 flex items-center justify-center w-10 h-10 hover:border-white hover:text-white  
            hover:rounded-xl rounded-3xl duration-300 ease-linear  transition-all "
              ></i>
            </a>

            <a
              href="https://www.linkedin.com/in/benjamin-yambot-997086132/"
              target="_blank"
            >
              <i
                className="fa-brands fa-linkedin text-gray-200 flex items-center justify-center w-10 h-10  border border-gray-400 hover:border-white  hover:text-white
            hover:rounded-xl rounded-3xl duration-300 ease-linear  transition-all "
              ></i>
            </a>
            <a
              href="https://github.com/benjaminlopezyambot/Portfolio"
              target="_blank"
            >
              <i
                className="fa-brands fa-github text-gray-200 flex items-center justify-center w-10 h-10  border border-gray-400 hover:text-white hover:border-white
            hover:rounded-xl rounded-3xl duration-300 ease-linear  transition-all "
              ></i>
            </a>
          </div>
          <div className="btn">
            <button className="border-[1px] hover:rounded-xl rounded-3xl  duration-300 ease-linear  transition-all  hover:border-cyan-300 border-white border-solid py-2 px-4  hover:text-cyan-300 font-bold">
              Let's Connect
            </button>
          </div>
        </nav>
        <i
          onClick={(e) => setDurum(!durum)}
          className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"
        ></i>
      </div>
    </>
  );
}

export default Navbar;
