"use client";

import { motion, useCycle, AnimatePresence } from "framer-motion";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "@/constants";
import { sideItemVariants, sideVariants } from "@/utils/motion";
import { Button } from "@nextui-org/button";

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
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 1000,
            }}
            exit={{
              width: 0,
              transition: { delay: 1, duration: 0.8 },
            }}
            className="bg-white shadow-md fixed top-10 left-0 h-screen p-5"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <motion.ul className="flex flex-col items-start gap-5">
                {navLinks.map((e) => (
                  <motion.ul
                    variants={sideItemVariants}
                    key={e.key}
                    className="flex flex-col gap-5 items-start"
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
                      <a href={`#${e.link}`}>{e.text}</a>
                    </motion.li>
                  </motion.ul>
                ))}
                <motion.div
                  variants={sideItemVariants}
                  className="flex items-center gap-3"
                >
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
          </motion.aside>
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
