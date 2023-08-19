"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import { TypingText } from "@/components/CustomTexts";
import RideAWeekCard from "@/components/RideAWeekCard";

const RideAWeek = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="px-10 m-4 rounded-xl lg:px-0 lg:my-32 lg:w-[80%] lg:mx-auto flex flex-col items-center justify-center gap-5"
    >
      <TypingText title="Ride A Week" textStyles="text-center" />
      <div className="flex flex-col gap-5 mt-10">
        <motion.p variants={textVariant(0.4)} className="text-sm text-start">
          With your phone docked in sight, your bike becomes an all-knowing
          companion. Connected to your every move and on the lookout for what's
          ahead, now's your chance to wander and wonder.
        </motion.p>
        <motion.p variants={textVariant(0.5)} className="text-sm text-start">
          Your next ride is no longer a question of if or when. Rather, where
          to? A swift first kick powers the speed you need for an active ride
          and an easy climb.
        </motion.p>
      </div>
      <RideAWeekCard />
    </motion.div>
  );
};

export default RideAWeek;
