"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant, slideIn } from "@/utils/motion";
import { TypingText } from "@/components/CustomTexts";
import { Button } from "@nextui-org/button";
import EbikeCard from "@/components/EbikeCard";

const Ebike = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="m-4 rounded-xl lg:px-0 lg:my-32 lg:w-[80%] lg:mx-auto flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between"
      id="overview"
    >
      <div className="md:w-[50%]">
        <TypingText title="Electric bike" textStyles="text-center" />
        <motion.p
          variants={textVariant(0.4)}
          className="text-center text-gray-400 text-sm mt-4 w-[300px] mx-auto md:mx-0 md:text-left leading-relaxed"
        >
          Find your pace at the edge of the urban frontier for a new path
          forward.
        </motion.p>
        <motion.div
          variants={textVariant(0.5)}
          className="flex flex-col items-center justify-center mt-7 md:flex-row md:gap-3 md:items-start md:justify-start"
        >
          <Button className="rounded-full bg-black text-white text-base font-medium px-7 mb-2">
            Order now
          </Button>
          <div>
            <p className="text-sm text-black text-center">
              From $2,190 <s>$1,190</s>
            </p>
            <p className="text-xs text-gray-400 text-center">
              Discounts available
            </p>
          </div>
        </motion.div>
      </div>
      <div className="m-auto">
        <motion.div variants={textVariant(0.6)} className="relative">
          <EbikeCard />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Ebike;
