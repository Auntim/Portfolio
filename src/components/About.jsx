

import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi! I’m Auntim Hossen Saikat, a passionate web developer dedicated to creating dynamic and user-friendly web experiences. With a strong foundation in modern web technologies like React, JavaScript, and Tailwind CSS, I thrive on crafting responsive and engaging designs that bring ideas to life.
        </p>

        <br />

        <p className="text-xl">
          I enjoy building intuitive interfaces and solving complex challenges, whether it's designing sleek frontends or developing efficient backend solutions. My goal is to deliver digital experiences that are not only functional but also visually appealing and impactful.
        </p>
        <br />
        <p className="text-xl ">
          When I’m not coding, you’ll find me exploring innovative tech trends or working on side projects like Gadget Heaven,Manage Lawyer and Explore Eco Advanture and many more...
        </p>
        <h2 className="text-[22px] font-semibold my-10">Let’s build something amazing together!</h2>
      </div>
    </div>
  );
};

export default About;
