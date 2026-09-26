import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="min-h-full bg-primary/30 py-28 md:py-36 flex items-center overflow-y-auto">
      <Circles />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-start">
          {/* text description column */}
          <div className="text-center flex xl:w-[28vw] flex-col xl:text-left pt-2 xl:pt-8">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              Featured work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[450px] mx-auto xl:mx-0 text-xs sm:text-sm md:text-base text-white/70 leading-relaxed"
            >
              Real, verified engineering projects built with clean code and
              practical architecture — spanning cross-platform React Native
              mobile applications, Next.js full-stack systems, and robust
              cloud services.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex flex-col gap-y-2 text-xs text-white/50"
            >
              <div className="flex items-center gap-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>100% genuine code &amp; verified stacks</span>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Production Android APK deliverables</span>
              </div>
            </motion.div>
          </div>

          {/* slider column */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[72%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
