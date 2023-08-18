"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant, slideIn } from "@/utils/motion";
import { TypingText } from "@/components/CustomTexts";
import { KeyFeaturesDetails } from "@/constants";
import { Image } from "@nextui-org/image";

const KeyFeatures = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="px-10 m-4 rounded-xl lg:px-0 lg:my-32 lg:w-[80%] lg:mx-auto flex flex-col items-center justify-center gap-5"
    >
      <TypingText title="Key features" textStyles="text-center" />
      {KeyFeaturesDetails.map((e) => (
        <motion.div
          variants={textVariant(0.6)}
          className="grid place-items-center gap-5"
        >
          <Image key={e.title} src={e.image} alt={`image ${e.title}`} />
          <h3 className=" text-2xl font-semibold">{e.title}</h3>
          <p className="text-gray-400 text-center">{e.subtitle}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default KeyFeatures;
