import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import Header from "./Header";

export default function Contactme() {
  return (
    <div>
      <Header />
      <section className="min-h-screen bg-[#1f2833] text-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-[#45a29e] mb-6"
          >
            Contact Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg mb-12"
          >
            Have a project, idea, or just want to say hi? Let's talk!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left ">
            <a href="mailto:patelnazish7@gmail.com">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 p-6 bg-[#0b0c10] border border-[#45a29e] rounded-xl shadow-[0_0_8px_rgba(69,162,158,0.5)] hover:shadow-[0_0_12px_rgba(69,162,158,0.8)] transition-shadow duration-300"
              >
                <FaEnvelope className="text-3xl text-[#66fcf1]" />
                <div>
                  <h4 className="text-xl font-semibold text-[#66fcf1]">
                    Email
                  </h4>
                  <p className="text-gray-400">patelnazish7@gmail.com</p>
                </div>
              </motion.div>
            </a>

            <a href="tel:+918688117710">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 p-6 bg-[#0b0c10] border border-[#45a29e] rounded-xl shadow-[0_0_8px_rgba(69,162,158,0.5)] hover:shadow-[0_0_12px_rgba(69,162,158,0.8)] transition-shadow duration-300"
              >
                <FaPhoneAlt className="text-3xl text-[#66fcf1]" />
                <div>
                  <h4 className="text-xl font-semibold text-[#66fcf1]">
                    Phone
                  </h4>
                  <p className="text-gray-400">+91 8688117710</p>
                </div>
              </motion.div>
            </a>

            <motion.a
              href="https://www.linkedin.com/in/nazish-patel-8a71272a0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-6 bg-[#0b0c10] border border-[#45a29e] rounded-xl shadow-[0_0_8px_rgba(69,162,158,0.5)]
hover:shadow-[0_0_12px_rgba(69,162,158,0.8)]"
            >
              <FaLinkedin className="text-3xl text-[#66fcf1]" />
              <div>
                <h4 className="text-xl font-semibold text-[#66fcf1]">
                  LinkedIn
                </h4>
                <p className="text-gray-400">Nazish Patel</p>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/mdnazishpatel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-6 bg-[#0b0c10] border border-[#45a29e] rounded-xl shadow-[0_0_8px_rgba(69,162,158,0.5)]
hover:shadow-[0_0_12px_rgba(69,162,158,0.8)]"
            >
              <FaGithub className="text-3xl text-[#66fcf1]" />
              <div>
                <h4 className="text-xl font-semibold text-[#66fcf1]">GitHub</h4>
                <p className="text-gray-400">mdnazishpatel</p>
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <a
              href="mailto:patelnazish7@gmail.com"
              className="inline-block px-6 py-3 bg-[#45a29e] text-[#0b0c10] font-semibold rounded-full hover:bg-[#66fcf1] transition"
            >
              Send a Message
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
