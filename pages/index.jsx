import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";

import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-28 xl:text-left h-full container mx-auto px-4 sm:px-6">
          {/* role badge */}
          <motion.div
            variants={fadeIn("down", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-3"
          >
            <span className="inline-block bg-accent/15 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-widest px-3.5 py-1 rounded-full">
              Full-Stack &amp; Mobile Developer
            </span>
          </motion.div>

          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.25)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mb-4"
          >
            Ahmad <span className="text-accent">Mehmood</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-md xl:max-w-xl mx-auto xl:mx-0 mb-8 text-sm md:text-base text-white/80 leading-relaxed font-light"
          >
            Building modern web platforms, mobile applications, and practical
            AI-powered experiences. Specializing in offline-first React Native
            architectures, full-stack Next.js systems, and clean, reliable code.
          </motion.p>

          {/* clear call-to-actions */}
          <motion.div
            variants={fadeIn("down", 0.45)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-wrap items-center justify-center xl:justify-start gap-3 sm:gap-4"
          >
            {/* View Projects CTA */}
            <Link
              href="/work"
              className="inline-flex items-center gap-x-2 bg-accent hover:bg-accent/85 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-accent/25 hover:scale-105"
            >
              <span>View Projects</span>
              <BsArrowRight className="text-sm" />
            </Link>

            {/* GitHub CTA */}
            <Link
              href="https://github.com/ahmedmahmood3839-star"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
            >
              <BsGithub className="text-base" />
              <span>GitHub</span>
            </Link>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-x-2 bg-white/5 hover:bg-white/15 text-white/90 hover:text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-full border border-white/10 transition-all duration-300"
            >
              <HiEnvelope className="text-base text-accent" />
              <span>Contact</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* image & particle system */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0 pointer-events-none">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar / branding badge */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
