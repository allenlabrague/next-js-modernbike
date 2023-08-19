"use client";

import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { navVariants } from "@/utils/motion";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="flex items-center justify-between p-4 py-3 fixed top-0 z-50 bg-white w-full"
    >
      <h2 className="font-semibold uppercase text-2xl">cowboy.</h2>
      <HiMenuAlt3 fontSize={30} />
      {/* <Button className="rounded-full bg-black text-white text-base font-medium px-7">
        Order now THIS IS FOR WEB VIEW
      </Button> */}
    </motion.nav>
  );
};

export default Navbar;
