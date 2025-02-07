import React from "react";
import { useParams, Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";


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
        liveLink: "https://pet-adoption-f71aa.web.app/",
        codeLink: "https://github.com/Auntim/pet-adoption-A12-client?tab=readme-ov-file",
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
        liveLink: "https://movie-store-fb2c5.web.app/",
        codeLink: "https://github.com/Auntim/assign-ment-10-client-side",
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
        liveLink: "https://helpful-crumble-73f4c4.netlify.app/",
        codeLink: "https://github.com/Auntim/Gadget-Heaven",
        challenges:
            "Implementing a secure checkout process and responsive design required extra effort.",
        improvements:
            "Future plans include adding customer reviews and more payment options.",
    },
    {
        id: "4",
        projectName: "Donate-Bangladesh",
        image: project4Img,
        techStack: ["React", "Tailwind", "React Router Dom", "Firebase"],
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
        techStack: ["HTML", "Tailwind", "Custom CSS", "JavaScript", "React Router Dom", "Authentication"],
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

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="text-white p-4">
                <h2>Project not found</h2>
                <Link to="/">Go back</Link>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen p-8">
            <div className="max-w-3xl mx-auto mt-24">
                {/* Project Image */}
                <img
                    src={project.image}
                    alt={project.projectName}
                    className="w-full h-[500px] object-cover rounded-lg"
                />
                {/* Project Name */}
                <h1 className="text-4xl text-orange-500 font-bold mt-4">{project.projectName}</h1>
                {/* Technology Stack */}
                <div className="mt-4">
                    <h2 className="text-2xl font-semibold">Main Technology Stack Used</h2>
                    <ul className=" flex flex-wrap gap-2 ml-6 mt-2 my-4">
                        {project.techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="text-lg bg-slate-600 px-2 py-1 opacity-70 rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </ul>
                </div>
                {/* Brief Description */}
                <div className="mt-4">
                    <h2 className="text-2xl font-semibold">Brief Description</h2>
                    <p className="mt-2">{project.description}</p>
                </div>
                {/* Live Project Link */}
                <div className="mt-4">
                    <h2 className="text-2xl font-semibold">Live Project Link</h2>
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        {project.liveLink}
                    </a>
                </div>
                {/* GitHub Repository Link (Client) */}
                <div className="mt-4">
                    <h2 className="text-2xl font-semibold">
                        GitHub Repository (Client)
                    </h2>
                    <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        {project.codeLink}
                    </a>
                </div>
                {/* Challenges Faced */}
                <div className="mt-4">
                    <h2 className="text-2xl font-semibold">
                        Challenges Faced While Developing the Project
                    </h2>
                    <p className="mt-2">{project.challenges}</p>
                </div>
                {/* Potential Improvements */}
                <div className="mt-4">
                    <h2 className="text-2xl font-semibold">
                        Potential Improvements and Future Plans for the Project
                    </h2>
                    <p className="mt-2">{project.improvements}</p>
                </div>
                {/* Back Button */}
                <div className="mt-8">
                    <Link to="/">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex justify-center items-center gap-1">
                            <span><MdKeyboardArrowLeft className="w-6 h-6" /></span> Back to Portfolio
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
