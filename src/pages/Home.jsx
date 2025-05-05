import React from "react";
import { motion } from "framer-motion";
import photo from "./photo.jpg";
import Header from "./Header";

export default function Home() {
  return (
    <div>
      <Header />

      <section className="min-h-screen bg-[#1f2833] flex items-center justify-center px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-[#45a29e] shadow-lg shadow-[0_0_8px_rgba(69,162,158,0.5)] hover:shadow-[0_0_12px_rgba(69,162,158,0.8)]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={photo} alt="Sikandar Patel" />
          </motion.div>

          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#45a29e] mb-4">
              Hi, I'm Sikandar Patel
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-md">
              <i>
                Web Developer & Writer crafting seamless digital experiences
                with React, Node, and Tailwind. Blending creativity and code to
                deliver impactful, user-friendly solutions.
              </i>
            </p>
            <motion.div
              className="flex justify-center md:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href="/project"
                className="shadow-[0_0_8px_rgba(69,162,158,0.5)] hover:shadow-[0_0_12px_rgba(69,162,158,0.8)] px-6 py-3 bg-[#45a29e] text-[#1f2833] font-semibold rounded-lg shadow-md hover:bg-[#1f2833] hover:text-[#3b8e8a] transition duration-300"
              >
                View Projects
              </a>
              <a
                href="/contactme"
                className=" ,shadow-[0_0_8px_rgba(69,162,158,0.5)] hover:shadow-[0_0_12px_rgba(69,162,158,0.8)] px-6 py-3 border border-[#45a29e] text-[#45a29e] font-semibold rounded-lg hover:bg-[#45a29e] hover:text-[#1f2833] transition duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
