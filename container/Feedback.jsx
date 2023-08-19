"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant, slideIn } from "@/utils/motion";
import { TypingText } from "@/components/CustomTexts";
import { KeyFeaturesDetails } from "@/constants";
import { Image } from "@nextui-org/image";
import FeedbackCard from "@/components/FeedbackCard";

const Feedback = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="m-4 rounded-xl lg:px-0 lg:my-32 lg:w-[80%] lg:mx-auto flex flex-col items-center justify-center gap-5"
    >
      <TypingText title="FeedBack" textStyles="text-center" />
      <div className="mt-10 w-full">
        <FeedbackCard />
      </div>
    </motion.div>
  );
};

export default Feedback;
