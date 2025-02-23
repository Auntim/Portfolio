import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaCode, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
// const text = "Auntim";
// const highlightLength = 3;

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // const textRef = useRef(null);
  // let index = 0;


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (textRef.current) {
  //       const currentText = text.slice(0, index + 1);
  //       const highlighted = `<span class="text-orange-500">${currentText.slice(
  //         0,
  //         highlightLength
  //       )}</span>${currentText.slice(highlightLength)}`;
  //       textRef.current.innerHTML = highlighted; // Add one letter at a time
  //       index = (index + 1) % (text.length + 1); // Reset after full sentence
  //     }
  //   }, 150); // Adjust speed of letter appearance

  //   return () => clearInterval(interval);
  // }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 text-white bg-gray-800 fixed top-0 z-50">
      <div className="ml-8">
        <span><FaCode className="text-6xl text-orange-600" /></span>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200 border border-gray-600 rounded-md ml-2 p-2 "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
