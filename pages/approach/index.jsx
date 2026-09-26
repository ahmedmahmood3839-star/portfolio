import { motion } from "framer-motion";

import ApproachSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Approach = () => {
  return (
    <div className="min-h-full bg-primary/30 py-28 md:py-36 text-center overflow-y-auto">
      <div className="container mx-auto h-full flex flex-col justify-center px-4 sm:px-6">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-4"
        >
          <span className="inline-block bg-accent/15 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
            Engineering Methodology
          </span>
          <h2 className="h2">
            How I <span className="text-accent">Build.</span>
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm md:text-base text-white/70 font-light mt-2">
            A structured 5-stage lifecycle turning raw project ideas into
            high-performance, production-ready applications.
          </p>
        </motion.div>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full mt-4"
        >
          <ApproachSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Approach;
