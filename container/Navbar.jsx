"use client";

import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { navVariants } from "@/utils/motion";
import { navLinks } from "@/constants";
import SideMenu from "@/components/SideMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="flex items-center justify-between p-4 py-3 fixed top-0 z-50 bg-white w-full"
    >
      <div className="flex items-center gap-6">
        <h2 className="font-semibold uppercase text-2xl">cowboy.</h2>
        {navLinks.map((e) => (
          <ul key={e.key} className="hidden md:flex items-center">
            <li className="font-medium text-sm">
              <Link href={`#${e.link}`}>{e.text}</Link>
            </li>
          </ul>
        ))}
      </div>

      <div className="flex md:hidden">
        <SideMenu />
      </div>
      <div className="hidden md:flex items-center gap-3">
        <div className="hidden lg:block">
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
      </div>
    </motion.nav>
  );
};

export default Navbar;
