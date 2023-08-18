"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "framer-motion";
import { EbikeSlide } from "@/utils/motion";
import { EbikeDetails } from "@/constants";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const EbikeCard = () => {
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, EbikeDetails.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div className="flex items-center justify-center relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={EbikeDetails[imageIndex]}
            custom={direction}
            variants={EbikeSlide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="relative w-[300px]"
          />
        </AnimatePresence>
      </div>
      <div
        className="bg-white rounded-full p-4 absolute z-10 left-5 top-[45%] text-black cursor-pointer"
        onClick={() => paginate(1)}
      >
        <AiOutlineArrowLeft fontSize={20} />
      </div>
      <div
        className="bg-white rounded-full p-4 absolute z-10 right-5 top-[45%] text-black cursor-pointer"
        onClick={() => paginate(-1)}
      >
        <AiOutlineArrowRight />
      </div>
    </>
  );
};

export default EbikeCard;
