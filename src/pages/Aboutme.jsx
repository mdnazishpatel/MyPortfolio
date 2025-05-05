import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaFeatherAlt,
  FaLightbulb,
  FaMountain,
  FaPeace,
  FaUsers,
  FaDumbbell,
  FaSatelliteDish,
  FaPencilRuler,
} from "react-icons/fa";
import Header from "./Header";
import photo from "./photo.jpg";

export default function Aboutme() {
  return (
    <div>
      <Header />
      <section className="min-h-screen bg-[#1f2833] text-white px-6 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#45a29e] shadow-[0_0_15px_rgba(69,162,158,0.5)] hover:shadow-[0_0_12px_rgba(69,162,158,0.8)]"
          >
            <img
              src={photo}
              alt="Sikandar Patel"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#45a29e] mb-4">
              About Me
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">
              I'm{" "}
              <span className="text-[#66fcf1] font-semibold">
                Sikandar Patel
              </span>
              , a passionate web developer and creative writer. I blend clean
              code with thoughtful storytelling. When I'm not building React
              apps, I'm probably writing something poetic or learning something
              new.
            </p>

            <div className="mt-4 text-[#66fcf1] italic">
              "The best way to predict the future is to create it." — Prophet
              Muhammad (PBUH)
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaLaptopCode className="text-[#45a29e] text-3xl mb-4" />,
              title: "Code is Poetry",
              text: "I love transforming ideas into responsive, functional apps using React and Node.",
            },
            {
              icon: <FaFeatherAlt className="text-[#45a29e] text-3xl mb-4" />,
              title: "Words Matter",
              text: "As a writer, I bring creativity and emotion into my web content and copy.",
            },
            {
              icon: <FaDumbbell className="text-[#66fcf1] text-3xl mb-4" />,
              title: "Fitness Freak",
              text: "Discipline, sweat, and strength — I train hard not just in code, but in reality too.",
            },
            {
              icon: (
                <FaSatelliteDish className="text-[#45a29e] text-3xl mb-4" />
              ),
              title: "Tech Explorer",
              text: "I’m always scanning the horizon for emerging tech trends—curious minds never stop exploring.",
            },
            {
              icon: <FaPencilRuler className="text-[#45a29e] text-3xl mb-4" />,
              title: "Design Thinker",
              text: "I bring ideas to life with user-first designs, blending logic and creativity into every interface.",
            },
            {
              icon: <FaLightbulb className="text-[#45a29e] text-3xl mb-4" />,
              title: "Always Curious",
              text: "From learning new libraries to exploring philosophy, curiosity drives my growth.",
            },
            {
              icon: <FaMountain className="text-[#45a29e] text-3xl mb-4" />,
              title: "Mountain Soul",
              text: "Nature is my reset button. Hills, peace, and solitude give me clarity and creativity.",
            },
            {
              icon: <FaPeace className="text-[#45a29e] text-3xl mb-4" />,
              title: "Peace Seeker",
              text: "I value silence, inner peace, and meaningful connections more than noise.",
            },
            {
              icon: <FaUsers className="text-[#45a29e] text-3xl mb-4" />,
              title: "Team Player",
              text: "I believe real impact happens when ideas meet collaboration and trust.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0b0c10] p-6 rounded-xl border border-[#45a29e] shadow-[0_0_8px_rgba(69,162,158,0.5)] hover:shadow-[0_0_12px_rgba(69,162,158,0.8)] transition-shadow duration-300"
            >
              {card.icon}
              <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
              <p className="text-sm text-gray-400">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
