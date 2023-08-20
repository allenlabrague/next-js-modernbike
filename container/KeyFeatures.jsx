"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
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
      className="m-4 rounded-xl lg:px-0 lg:my-32 lg:w-[80%] lg:mx-auto"
      id="keyfeatures"
    >
      <TypingText title="Key features" />
      <div className="grid place-content-center gap-10 md:grid-cols-2 lg:grid-cols-4 place-items-center mt-12">
        {KeyFeaturesDetails.map((e) => (
          <motion.div variants={textVariant(0.6)}>
            <div className="flex flex-col items-center justify-center gap-1">
              <Image
                isZoomed
                key={e.title}
                src={e.image}
                alt={`image ${e.title}`}
              />
              <h3 className="text-2xl font-semibold mt-5">{e.title}</h3>
              <p className="text-gray-400 text-center text-sm w-[300px] leading-relaxed">
                {e.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default KeyFeatures;
