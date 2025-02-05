import React from "react";
import arrayDestruct from "../assets/portfolio/pet-adoption.png";
import installNode from "../assets/portfolio/laawyer.png";
import navbar from "../assets/portfolio/movie.png";
import reactParallax from "../assets/portfolio/gadget.png";
import reactSmooth from "../assets/portfolio/rinterio.png";
import reactWeather from "../assets/portfolio/donate.png";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            demoLink: "https://pet-adoption-f71aa.web.app/",
            codeLink: "https://github.com/Auntim/pet-adoption-A12-client",
            techStack: ["React", "Tailwind", "Firebase", "MongoDB", "Express.JS", "Node Js", "Daisy", "Stripe"],
        },
        {
            id: 2,
            src: reactParallax,
            demoLink: "https://laywer-service.web.app/",
            codeLink: "https://github.com/Auntim/assign-ment-11-client-side",
            techStack: ["React", "Tailwind", "Firebase", "MongoDB", "Express.JS", "Node Js", "Daisy"],
        },
        {
            id: 3,
            src: navbar,
            demoLink: "https://movie-store-fb2c5.web.app/",
            codeLink:
                "https://github.com/Auntim/assign-ment-10-client-side?tab=readme-ov-file",
            techStack: ["React", "Tailwind", "Firebase", "MongoDB", "Express.JS", "Node Js", "Daisy"],
        },
        {
            id: 4,
            src: reactSmooth,
            demoLink: "https://helpful-crumble-73f4c4.netlify.app/",
            codeLink: "https://github.com/Auntim/Gadget-Heaven",
            techStack: ["React", "Tailwind", "React Router Dom", "Daisy"],
        },
        {
            id: 5,
            src: installNode,
            demoLink: "https://auntim.github.io/assign-ment-03/",
            codeLink: "https://github.com/Auntim/assign-ment-03",
            techStack: ["HTML", "CSS", "JavaScript"],
        },
        {
            id: 6,
            src: reactWeather,
            demoLink: "https://auntim.github.io/assign-ment-05/",
            codeLink: "https://github.com/Auntim/assign-ment-05",
            techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        },
    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl hover:text-orange-600 font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-16 mt-4 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, demoLink, codeLink, techStack }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            {/* Project Image */}
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />

                            {/* Tech Stack */}
                            {techStack && techStack.length > 0 && (
                                <div className="flex flex-wrap justify-center gap-2 p-4">
                                    {techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-sm bg-blue-600 px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Demo and Code Buttons */}
                            <div className="flex items-center justify-center mt-4">
                                <a href={demoLink} target="_blank" rel="noreferrer">
                                    <button className="w-1/2 text-xl btn btn-outline px-6 py-3 m-4 duration-200 hover:scale-105">
                                        Demo
                                    </button>
                                </a>
                                <a href={codeLink} target="_blank" rel="noreferrer">
                                    <button className="w-1/2 text-xl px-4 py-3 m-4 duration-200 hover:scale-105">
                                        Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
