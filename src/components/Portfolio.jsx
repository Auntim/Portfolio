import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";


// Import your images (adjust the paths as needed)
import project1Img from "../assets/portfolio/pet-adoption.png";
import project2Img from "../assets/portfolio/movie.png";
import project3Img from "../assets/gadget.png";
import project4Img from "../assets/portfolio/donate.png";
import project5Img from "../assets/portfolio/laawyer.png";
import project6Img from "../assets/portfolio/rinterio.png";

const projects = [
    {
        id: "1",
        projectName: "Pet Adoption",
        image: project1Img,
        techStack: ["React", "Tailwind", "Firebase", "MongoDB", "Express.JS", "Node Js", "Daisy", "Stripe"],
        description:
            "A web application that facilitates pet adoption by connecting potential adopters with local shelters.",
        liveLink: "https://pet-adoption-demo.web.app/",
        codeLink: "https://github.com/username/pet-adoption-client",
        challenges:
            "Managing real-time data updates and user authentication was challenging.",
        improvements:
            "Future improvements include adding more filters, enhancing the UI, and integrating shelter APIs.",
    },
    {
        id: "2",
        projectName: "Movie Store",
        image: project2Img,
        techStack: ["React", "Tailwind", "Firebase", "MongoDB", "Express.JS", "Node Js", "Daisy",],
        description:
            "An online movie store where users can browse, search, and get details about movies.",
        liveLink: "https://movie-store-demo.web.app/",
        codeLink: "https://github.com/username/movie-store-client",
        challenges:
            "Optimizing animations and ensuring performance across devices was a hurdle.",
        improvements:
            "Potential improvements include integrating a movie database API and refining the user experience.",
    },
    {
        id: "3",
        projectName: "Gadget Heaven",
        image: project3Img,
        techStack: ["React", "Tailwind", "Firebase", "MongoDB", "Express.JS", "Node Js", "Daisy",], description:
            "A modern e-commerce site showcasing gadgets and accessories with detailed product views.",
        liveLink: "https://gadget-heaven-demo.web.app/",
        codeLink: "https://github.com/username/gadget-heaven-client",
        challenges:
            "Implementing a secure checkout process and responsive design required extra effort.",
        improvements:
            "Future plans include adding customer reviews and more payment options.",
    },
    {
        id: "4",
        projectName: "Donate-Bangladesh",
        image: project4Img,
        techStack: ["HTML", "JavaScript", "React", "Tailwind", "React Router Dom", "Firebase"],
        description:
            "A modern e-commerce site showcasing gadgets and accessories with detailed product views.",
        liveLink: "https://auntim.github.io/assign-ment-05/",
        codeLink: "https://github.com/Auntim/assign-ment-05",
        challenges:
            "Implementing a secure checkout process and responsive design required extra effort.",
        improvements:
            "Future plans include adding customer reviews and more payment options.",
    },
    {
        id: "5",
        projectName: "Lawyer-Management",
        image: project5Img,
        techStack: ["React", "Tailwind", "React Router", "Firebase", "MondoDb"],
        description:
            "A modern e-commerce site showcasing gadgets and accessories with detailed product views.",
        liveLink: "https://laywer-service.web.app/",
        codeLink: "https://github.com/Auntim/assign-ment-11-client-side",
        challenges:
            "Implementing a secure checkout process and responsive design required extra effort.",
        improvements:
            "Future plans include adding customer reviews and more payment options.",
    },
    {
        id: "6",
        projectName: "Rinterio",
        image: project6Img,
        techStack: ["HTML", "CSS", "JavaScript", "DOM"],
        description:
            "A modern e-commerce site showcasing gadgets and accessories with detailed product views.",
        liveLink: "https://auntim.github.io/assign-ment-03/",
        codeLink: "https://github.com/Auntim/assign-ment-03",
        challenges:
            "Implementing a secure checkout process and responsive design required extra effort.",
        improvements:
            "Future plans include adding customer reviews and more payment options.",
    },
];

const Portfolio = () => {
    return (
        <div
            name='portfolio'
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white  p-4">
            <div className="max-w-screen-lg p-4 mx-auto mt-12 md:mt-24">
                <h1 className="text-4xl font-bold text-start hover:text-orange-600 mb-8 inline border-b-4 border-gray-500">My Projects</h1>
                <p className="py-6">Check out some of my work right here</p>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden"
                        >
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.projectName}
                                className="w-full h-48  object-cover"
                            />
                            {/* Project Name & View More Button */}
                            <div className="p-4">
                                <h2 className="text-2xl mb-4 text-[#23e7ee] font-semibold ">
                                    Title: {project.projectName}
                                </h2>
                                <div>
                                    <h2 className="text-xl font-semibold mb-2 opacity-85">Technology Used:</h2>
                                    <ul className="flex flex-wrap gap-2 ml-6 mt-2 my-4">

                                        {project.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-sm bg-slate-600 px-2 py-1  rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </ul>
                                </div>
                                <Link to={`/project/${project.id}`}>
                                    <button className="flex justify-center items-center gap-2  btn btn-outline hover:text-gray-800 text-white py-2 px-4 rounded w-full">
                                        View More <span><FaLongArrowAltRight className="h-6 w-6" />
                                        </span>
                                    </button>

                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
