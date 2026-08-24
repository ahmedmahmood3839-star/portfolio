import {
  HiLightBulb,
  HiCommandLine,
  HiPaintBrush,
  HiServerStack,
  HiRocketLaunch,
} from "react-icons/hi2";
import { FaTerminal } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const approachData = [
  {
    Icon: HiLightBulb,
    step: "01",
    name: "Understand the Idea",
    position: "Discovery & Requirements",
    message:
      "Deep dive into project goals, user needs, technical requirements, and scope to build a clear, structured roadmap.",
  },
  {
    Icon: HiCommandLine,
    step: "02",
    name: "Plan Architecture",
    position: "System & Data Design",
    message:
      "Designing scalable data models, component hierarchy, secure API contracts, and clean architectural foundations.",
  },
  {
    Icon: HiPaintBrush,
    step: "03",
    name: "Build the Interface",
    position: "Frontend & Mobile UI",
    message:
      "Crafting pixel-perfect, accessible, and responsive user interfaces with React, Next.js, React Native, and Tailwind CSS.",
  },
  {
    Icon: HiServerStack,
    step: "04",
    name: "Connect the Backend",
    position: "APIs & Databases",
    message:
      "Implementing efficient Node.js and Express.js backends with robust database management using MongoDB and Firebase.",
  },
  {
    Icon: HiRocketLaunch,
    step: "05",
    name: "Test, Refine & Deploy",
    position: "Optimization & Launch",
    message:
      "End-to-end testing, Framer Motion polish, Core Web Vitals optimization, and smooth production deployment.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {approachData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-8 md:px-16">
            {/* step badge, title, phase */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center items-center">
                {/* icon badge */}
                <div className="mb-3 w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-3xl text-accent shadow-lg shadow-accent/20">
                  <item.Icon aria-hidden />
                </div>

                {/* step indicator */}
                <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">
                  Step {item.step}
                </div>

                {/* name / step title */}
                <div className="text-lg font-semibold text-white">
                  {item.name}
                </div>

                {/* position / phase */}
                <div className="text-[12px] uppercase font-light text-white/50 tracking-wider mt-1">
                  {item.position}
                </div>
              </div>
            </div>

            {/* quote / terminal style message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 mt-4 md:mt-0">
              {/* quote icon */}
              <div className="mb-4">
                <FaTerminal
                  className="text-3xl xl:text-4xl text-accent/40 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              {/* message */}
              <div className="text-sm md:text-lg text-white/80 text-center md:text-left leading-relaxed max-w-xl">
                {item.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
