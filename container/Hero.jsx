"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant, slideIn } from "@/utils/motion";
import { Image } from "@nextui-org/image";
import { AiFillPlayCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="pt-10 px-10 m-4 rounded-xl lg:px-0 lg:my-32 lg:w-[80%] lg:mx-auto bg-[url(/bg-black.png)] bg-center bg-no-repeat bg-cover mt-10"
    >
      <motion.p
        variants={textVariant(0.2)}
        className="text-center text-white uppercase font-medium mb-4"
      >
        cowboy 4
      </motion.p>
      <motion.h2
        variants={textVariant(0.3)}
        className="text-3xl font-medium text-center md:text-4xl lg:text-5xl text-white mb-10"
      >
        Dream Machine
      </motion.h2>
      <div className="relative">
        <motion.div
          variants={textVariant(0.4)}
          className="flex items-center justify-center gap-2 z-10"
        >
          <AiFillPlayCircle
            color="white"
            fontSize={25}
            className="cursor-pointer"
          />
          <h3 className="text-sm text-gray-300">Select in action</h3>
        </motion.div>
        <motion.div variants={slideIn("left", "spring", 0.4, 1)}>
          <Image src="bike.png" alt="bike" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
