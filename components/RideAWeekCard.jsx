"use client";

import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { Image } from "@nextui-org/image";

const RideAWeekCard = () => {
  return (
    <motion.div variants={textVariant(0.6)} className="relative mt-10">
      <Image isZoomed src="/rideimg.png" className="relative" />
      <div className="flex items-end justify-between absolute bottom-4 left-4 md:bottom-10 md:left-10 md:right-10 right-4 z-10">
        <div className="flex flex-col gap-1 w-[150px] md:w-[300px]">
          <motion.h3
            variants={textVariant(0.7)}
            className="text-base text-start text-white font-medium md:text-3xl"
          >
            Ride stats
          </motion.h3>
          <motion.p
            variants={textVariant(0.8)}
            className="text-xs text-start text-gray-300 md:text-base"
          >
            With a constant ally tuned into the road, it will keep you moving
            well informed.
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-3">
          <motion.div
            variants={textVariant(0.7)}
            className="bg-[#282825] gap-2 rounded-lg flex items-center justify-center py-1 w-[160px]"
          >
            <Image src="/applestore.png" />
            <div>
              <p className="text-start text-white text-xs">Download on the</p>
              <h3 className="text-start text-white font-medium">App Store</h3>
            </div>
          </motion.div>
          <motion.div
            variants={textVariant(0.8)}
            className="bg-[#282825] gap-2 rounded-lg flex items-center justify-center py-1 w-[160px]"
          >
            <Image src="/playstore.png" />
            <div>
              <p className="text-start text-white text-xs uppercase">
                get it on
              </p>
              <h3 className="text-start text-white font-medium">Google Play</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RideAWeekCard;
