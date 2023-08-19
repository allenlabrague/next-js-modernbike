"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant, slideIn } from "@/utils/motion";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { useState } from "react";

const Footer = () => {
  const [activeStates, setActiveStates] = useState([true, false, false]);

  const handleDivClick = (index) => {
    const newActiveStates = activeStates.map((state, i) => i === index);
    setActiveStates(newActiveStates);
  };

  const renderDiv = (index, color) => {
    const isActive = activeStates[index];
    return (
      <div onClick={() => handleDivClick(index)}>
        {isActive ? (
          <div className="border-1 border-white p-1 rounded-full transition-all">
            <div className={`rounded-full bg-[${color}] text-black w-4 h-4`} />
          </div>
        ) : (
          <div className="border-1 border-gray-400 opacity-25 p-1 rounded-full transition-all">
            <div className={`rounded-full bg-[${color}] text-black w-4 h-4`} />
          </div>
        )}
      </div>
    );
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="pt-10 px-6 m-4 rounded-xl lg:px-0 lg:my-32 lg:w-[80%] lg:mx-auto bg-[url(/bg-black.png)] bg-center bg-no-repeat bg-cover mt-28"
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
        Mount up, ride on.
      </motion.h2>
      <div className="relative">
        <motion.div
          variants={textVariant(0.4)}
          className="flex items-center justify-center gap-2 z-10"
        >
          <div className="bg-[#353535] w-[130px] h-[45px] my-auto rounded-full z-10 flex items-center justify-center gap-2">
            {renderDiv(0, "#535355")}
            {renderDiv(1, "#FFF4CC")}
            {renderDiv(2, "#FFFFFF")}
          </div>
          <Button className="rounded-full bg-white text-black text-base font-medium px-7 mb-2">
            Order now
          </Button>
        </motion.div>
        <motion.div
          variants={slideIn("left", "spring", 0.4, 1)}
          className="mt-10"
        >
          <Image src="bike.png" alt="bike" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
