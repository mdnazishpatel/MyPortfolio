import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaPython,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiGoogle,
  SiJavascript,
} from "react-icons/si";
import Header from "./Header";

const projects = [
  {
    title: "Spiceditor",
    description: "A pic utre editor with a variety of filters and effects.",
    techIcons: [<FaHtml5 />, <FaCss3 />, <SiJavascript />],
    link: "https://spiceditor.netlify.app/",
    github: "https://github.com/mdnazishpatel/Photo-Editor",
  },
  {
    title: "AI Chat bot",
    description:
      "An AI-powered advanced chatbot that can answer your questions and provide information.",
    techIcons: [<FaReact />, <SiTailwindcss />, <SiGoogle />],
    link: "https://sikandarchatbot.netlify.app/",
    github: "https://github.com/mdnazishpatel/ChatBot",
  },
  {
    title: "Quranic ayat app",
    description:
      "Find any quranic ayat with its translation just serach the context .",
    techIcons: [<FaHtml5 />, <FaCss3 />, <SiJavascript />],
    link: "https://giftbysikandar.netlify.app/",
    github: "https://github.com/mdnazishpatel/QuranApp",
  },
  {
    title: "Password Generator",
    description:
      "A simple password generator that creates strong passwords for you.",
    techIcons: [<FaReact />, <SiTailwindcss />, <SiGoogle />],
    link: "https://nazishpassword.netlify.app/",
    github: "https://github.com/mdnazishpatel/Password-Gen",
  },
  {
    title: "Recipe app",
    description:
      "A simple recipe app that allows you to search for recipes and view their details.",
    techIcons: [<FaReact />, <SiTailwindcss />, <SiGoogle />],
    link: "https://recipebysikandar.netlify.app/",
    github: "https://github.com/mdnazishpatel/NAZISH-PROJECTS",
  },
  {
    title: "React from",
    description: "A simple react app that fetches data from nodejs API.",
    techIcons: [
      <FaReact />,
      <SiTailwindcss />,
      <SiExpress />,
      <FaNodeJs />,
      <SiMongodb />,
    ],

    github: "https://github.com/mdnazishpatel/React-from",
  },
  {
    title: "React weather app",
    description:
      "A simple react app that fetches weather data of every state from openweathermap API.",
    techIcons: [<FaReact />, <SiTailwindcss />, <SiExpress />, <FaNodeJs />],
    link: "https://react-weather-tau-livid.vercel.app/",
    github: "https://github.com/mdnazishpatel/React-weather",
  },
  {
    title: "To-do list",
    description:
      "A simple to-do list app that allows you to add, remove, and edit tasks.",
    techIcons: [<FaReact />, <SiTailwindcss />, <SiExpress />, <FaNodeJs />],

    github: "https://github.com/mdnazishpatel/Todolist-with-react-",
  },
  {
    title: "Colour Picker App",
    description:
      "A handy tool to pick and copy colors with ease using a user-friendly UI.",
    techIcons: [<FaHtml5 />, <FaCss3 />, <SiJavascript />],
    github: "https://github.com/mdnazishpatel/NAZISH-PROJECTS",
  },
  {
    title: "Countdown App",
    description:
      "A countdown timer app to track deadlines, events, or launches with real-time precision.",
    techIcons: [<FaHtml5 />, <FaCss3 />, <SiJavascript />],
    github: "https://github.com/mdnazishpatel/NAZISH-PROJECTS",
  },
  {
    title: "Movies App",
    description:
      "Browse, search, and view movie information fetched using external APIs in a responsive UI.",
    techIcons: [<FaHtml5 />, <FaCss3 />, <SiJavascript />],
    github: "https://github.com/mdnazishpatel/NAZISH-PROJECTS",
  },
  {
    title: "Quiz App",
    description:
      "An interactive quiz app to test your knowledge across various categories and track scores.",
    techIcons: [<FaHtml5 />, <FaCss3 />, <SiJavascript />],
    github: "https://github.com/mdnazishpatel/NAZISH-PROJECTS",
  },
];

export default function Projects() {
  return (
    <div>
      <Header />
      <section className="min-h-screen px-6 py-20 bg-[#1f2833] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#45a29e] mb-4">
              Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A glimpse into the projects I've built — a blend of learning,
              creativity, and code.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-[#0b0c10] p-6 rounded-xl shadow-md border border-[#45a29e] shadow-[0_0_8px_rgba(69,162,158,0.5)] hover:shadow-[0_0_12px_rgba(69,162,158,0.8)] transition-shadow duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-[#66fcf1] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-4 text-[#45a29e] text-2xl mb-4">
                  {project.techIcons.map((Icon, i) => (
                    <span key={i}>{Icon}</span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#66fcf1] hover:underline flex items-center gap-1"
                  >
                    Live <FaExternalLinkAlt size={14} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#66fcf1] hover:underline flex items-center gap-1"
                  >
                    Code <FaGithub size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
