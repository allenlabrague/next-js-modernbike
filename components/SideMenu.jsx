"use client";

import { motion, useCycle, AnimatePresence, easeIn } from "framer-motion";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "@/constants";
import { sideItemVariants, sideVariants } from "@/utils/motion";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

const SideMenu = () => {
  const [open, cycleOpen] = useCycle(false, true);

  const handleLinkClick = () => {
    // Close the side menu when a link is clicked
    cycleOpen();
  };

  const stopPropagation = (e) => {
    // Prevent the click event from bubbling up
    e.stopPropagation();
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={sideVariants}
            className="bg-white fixed top-10 left-0 h-screen p-5 w-full"
          >
            <motion.ul className="flex flex-col items-start gap-5 p-10">
              <p className="uppercase text-xs text-gray-500">navigation</p>
              <Divider className="my-4" />
              {navLinks.map((e) => (
                <motion.ul
                  variants={sideItemVariants}
                  key={e.key}
                  className="flex flex-col gap-5 items-start text-2xl"
                >
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-left"
                    onClick={(e) => {
                      handleLinkClick();
                      stopPropagation(e);
                    }}
                  >
                    <motion.a
                      whileHover={{
                        opacity: 0.6,
                      }}
                      transition={easeIn}
                      href={`#${e.link}`}
                    >
                      {e.text}
                    </motion.a>
                  </motion.li>
                </motion.ul>
              ))}
              <motion.div
                variants={sideItemVariants}
                className="flex flex-col w-full items-center gap-3"
              >
                <Divider className="my-4" />
                <div>
                  <p className="text-sm text-black text-center">
                    From $2,190 <s>$1,190</s>
                  </p>
                  <p className="text-xs text-gray-400 text-center">
                    Discounts available
                  </p>
                </div>
                <Button className="rounded-full bg-black text-white text-base font-medium px-7">
                  Order now
                </Button>
              </motion.div>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        {open ? (
          <button onClick={cycleOpen}>
            <AiOutlineClose fontSize={25} />
          </button>
        ) : (
          <button onClick={cycleOpen}>
            <HiMenuAlt2 fontSize={25} />
          </button>
        )}
      </div>
    </>
  );
};

export default SideMenu;
