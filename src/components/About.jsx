import React from "react";
import lottiabout from "../assets/lotti/about.json"
import Lottie from "lottie-react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1 mt-24 md:mt-24">
          <p className="text-4xl hover:text-orange-600 font-bold  inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="flex-1 md:flex justify-between items-center ">
          <div className='hidden md:flex w-6/12  rounded-lg '>
            <Lottie className=' md:h-[450px] md:w-[650px]' animationData={lottiabout}></Lottie>
          </div>
          <div className="w-8/12 mt-16 items-center md:ml-0 ml-6">
            <div>
              <h2 className="text-2xl font-semibold inline border-b-4 border-gray-600 text-fuchsia-600 mb-4">Educational Background:</h2>
              <p className="text-[16px] mt-3 text-wrap">
                Hello! I'm a <span className="text-[#A0EFFF] text-xl">Computer Science</span> graduate from <span className="text-[#A0EFFF] text-xl">University Of Creative Technology & Chittagong</span> with a fervent passion for coding, particularly within the realm of web programming. I thrive on creating digital experiences that are not only visually appealing but also highly functional and efficient.
              </p>
            </div>

            <br />

            <div>
              <h2 className="text-2xl font-semibold inline border-b-4 border-gray-600 text-fuchsia-600 mb-4">About Me</h2>
              <p className="text-[16px] mt-2 text-wrap">
                Hello! I’m <span className="text-[#A0EFFF] text-xl">Auntim Hossen Saikat</span>, a passionate <span className="text-[#A0EFFF] text-xl">MERN Stack Developer</span> with a keen eye for detail and a love for crafting seamless digital experiences. I thrive on turning ideas into reality, blending creativity with functionality to build user-friendly solutions.
              </p>
            </div>
            <br />
            <p className="text-[16px] text-wrap">
              When I’m not coding, you’ll find me exploring innovative tech trends or working on side projects like Gadget Heaven,Manage Lawyer and Explore Eco Advanture and many more...
            </p>
            <h2 className="text-[22px] font-semibold my-10">Let’s build something amazing together✌️!</h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
