import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import Header from "./Header";

const techSkills = [
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
];

export default function SkillsCarousel() {
  return (
    <div>
      <Header />
      <section className="min-h-screen bg-[#1f2833] text-white py-20 px-4">
        <h2 className="text-center text-4xl font-bold text-[#66fcf1] mb-12">
          Skills i have honored
        </h2>

        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 1500 }}
          className="w-full max-w-5xl mx-auto"
        >
          {techSkills.map((skill, idx) => (
            <SwiperSlide
              key={idx}
              className="bg-transprant backdrop-blur-xl p-8 rounded-2xl  w-64 text-center "
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#45a29e] p-4 rounded-full animate-[spin_6s_linear_infinite] text-white text-5xl">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#66fcf1]">
                {skill.name}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>

       

        <div className="mt-16 px-4 md:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#66fcf1]">
            🚀 My Core Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "React.js", emoji: "⚛️" },
              { name: "Node.js", emoji: "🟩" },
              { name: "MongoDB", emoji: "🍃" },
              { name: "Express.js", emoji: "🚂" },
              { name: "Tailwind CSS", emoji: "🎨" },
              { name: "JavaScript", emoji: "📜" },
              { name: "Soft Skills", emoji: "🧠" },
              { name: "Team Collaboration", emoji: "🤝" },
              { name: "Problem Solving", emoji: "🧩" },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-[#0b0c10] text-white shadow-[0_0_15px_rgba(69,162,158,0.5)] hover:shadow-[0_0_12px_rgba(69,162,158,0.8)] transform transition-transform hover:-translate-y-2 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-3">{skill.emoji}</div>
                <p className="text-lg font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
