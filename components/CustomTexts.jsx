"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";

export const TypingText = ({ title }) => (
  <motion.p
    variants={textContainer}
    className="font-medium text-center md:text-left text-5xl text-black"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold text-white md:text-[64px] text-[40px] ${textStyles}`}
  >
    {title}
  </motion.h2>
);
