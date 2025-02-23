
import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const text = "Hi, Myself Auntim Hossen Saikat!";

const Home = () => {

    const textRef = useRef(null);
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            if (textRef.current) {
                textRef.current.innerText = text.slice(0, index + 1); // Add one letter at a time
                index = (index + 1) % (text.length + 1); // Reset after full sentence
            }
        }, 150);

        return () => clearInterval(interval);
    }, []);
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto  flex flex-col items-center justify-center h-full  px-4 md:flex-row">
                <div className="flex flex-col justify-center mt-40 md:mt-0 h-full">
                    <motion.h3
                        ref={textRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-semibold text-[#A0EFFF] mt-36"
                    >
                        {/* Letters will appear dynamically */}
                    </motion.h3>
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a Junior MERN Stack Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I have 1 years of experience building and desgining software.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, Next JS and MongoDB.
                    </p>

                    <div className="flex justify-center md:justify-start mb-6">
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-full mx-auto w-3/5  md:h-[400px] md:w-[750px] md:ml-20 items-center border-8 border-[#A0EFFF]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
