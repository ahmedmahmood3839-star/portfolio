import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaAndroid,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiExpo,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// Clean verified technical data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Mobile Development",
        icons: [TbBrandReactNative, SiExpo, FaAndroid],
      },
      {
        title: "Frontend Engineering",
        icons: [
          SiNextdotjs,
          FaReact,
          SiTypescript,
          FaJs,
          SiTailwindcss,
          SiFramer,
          FaHtml5,
          FaCss3,
        ],
      },
      {
        title: "Backend & ORM",
        icons: [FaNodeJs, SiExpress, SiPrisma],
      },
      {
        title: "Cloud & Database",
        icons: [SiSupabase, SiPostgresql, SiFirebase, SiMongodb],
      },
      {
        title: "Tooling & Version Control",
        icons: [FaGitAlt, FaGithub],
      },
    ],
  },
  {
    title: "strengths",
    info: [
      {
        title: "Offline-First Mobile Architecture",
        stage: "React Native, AsyncStorage, Sensor Integration",
      },
      {
        title: "Full-Stack Web Systems",
        stage: "Next.js, TypeScript, REST APIs, Prisma ORM",
      },
      {
        title: "Third-Party & AI Integrations",
        stage: "ElevenLabs, AdMob SSV, Supabase, Firebase",
      },
    ],
  },
  {
    title: "overview",
    info: [
      {
        title: "Professional Role",
        stage: "Full-Stack & Mobile Developer",
      },
      {
        title: "Engineering Standard",
        stage: "Clean Architecture, Type Safety & Verified Builds",
      },
      {
        title: "Location",
        stage: "Pakistan (Available for Remote Work)",
      },
    ],
  },
];

// Core competencies to replace demo numerical statistics
const engineeringPillars = [
  {
    title: "Mobile Development",
    stack: "React Native • Expo • Android",
    desc: "Offline-first architectures, live sensor compass, exact notification schedulers",
  },
  {
    title: "Frontend Engineering",
    stack: "Next.js • React • TypeScript • Tailwind",
    desc: "Responsive web systems, Framer Motion transitions, clean component architecture",
  },
  {
    title: "Backend & APIs",
    stack: "Node.js • Express • Prisma • REST",
    desc: "Robust API route handlers, multi-provider dispatchers, transactional safety",
  },
  {
    title: "Cloud & Data",
    stack: "Supabase • PostgreSQL • Firebase • Local",
    desc: "Secure relational databases, server-side verification, local offline caches",
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-full bg-primary/30 py-28 md:py-36 text-center xl:text-left overflow-y-auto">
      <Circles />

      {/* developer branding badge */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[300px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-8 px-4 sm:px-6">
        {/* left column: about summary & core pillars */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-4"
          >
            Engineering <span className="text-accent">digital products</span> with clean code &amp; reliable architecture.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            className="max-w-[540px] mx-auto xl:mx-0 mb-6 text-xs sm:text-sm md:text-base text-white/80 leading-relaxed"
          >
            I’m <span className="font-semibold text-white">Ahmad Mehmood</span>, a Full-Stack and Mobile Developer from Pakistan. I specialize in developing cross-platform React Native mobile applications and Next.js full-stack web platforms, with an emphasis on offline-first reliability, type safety, and intuitive user experiences.
          </motion.p>

          {/* Core Engineering Pillars (Replaced fake numerical counters) */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full max-w-xl mx-auto xl:mx-0 mb-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {engineeringPillars.map((pillar, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm hover:border-accent/50 transition-colors"
                >
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-0.5">
                    {pillar.title}
                  </div>
                  <div className="text-[12px] font-semibold text-white mb-1">
                    {pillar.stack}
                  </div>
                  <div className="text-[11px] text-white/60 leading-tight">
                    {pillar.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* right column: tabbed skill & overview details */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] py-4"
        >
          {/* tabs */}
          <div className="flex gap-x-6 xl:gap-x-8 mx-auto xl:mx-0 mb-6 border-b border-white/10 pb-2">
            {aboutData.map((item, itemI) => (
              <button
                key={itemI}
                className={`${
                  index === itemI
                    ? "text-accent border-b-2 border-accent font-semibold"
                    : "text-white/70 hover:text-white"
                } capitalize text-sm sm:text-base pb-2 transition-all duration-200 outline-none`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* tab content */}
          <div className="py-2 flex flex-col gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left"
              >
                {/* title */}
                <div className="font-medium text-xs sm:text-sm text-white/90">
                  {item.title}
                </div>

                {item.stage && (
                  <div className="text-xs sm:text-sm text-accent/90 font-medium">
                    {item.stage}
                  </div>
                )}

                {item.icons && (
                  <div className="flex flex-wrap gap-2.5 items-center justify-center sm:justify-end">
                    {item.icons.map((Icon, iconI) => (
                      <div
                        key={iconI}
                        className="text-lg sm:text-xl text-white/80 hover:text-accent transition-colors duration-200"
                        title={Icon.name}
                      >
                        <Icon />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
