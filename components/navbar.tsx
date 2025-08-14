"use client";

import Link from "next/link";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { GiEasterEgg, GiOakLeaf } from "react-icons/gi";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { TbBeach, TbChristmasBall } from "react-icons/tb";

interface NavbarProps {
  dark?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ dark }) => {
  const [short, setShort] = useState(false);

  const changeNavbar = () => {
    window.scrollY >= 700 ? setShort(true) : setShort(false);
  };
  window.addEventListener("scroll", changeNavbar);

  return (
    <div
      className={`fixed top-0 w-full z-40 bg-transparent ${
        dark ? "text-white" : "text-black"
      } 
      ${short && dark ? "hidden" : ""}
      `}
    >
      <div className="h-14 flex max-md:flex-col max-md:items-start items-center justify-between max-w-screen-2xl mx-auto p-4 font-serif">
        <div className="flex gap-4 max-md:flex-col max-md:items-start items-center">
          <Link href="/" className="text-3xl mr-10">
            Vin & Mat
          </Link>

          <div className="flex gap-4 items-center">
            <Link
              href="/vinkallaren"
              className="hover:underline underline-offset-8 hover:text-black/70 cursor-pointer"
            >
              Vinkällare
            </Link>
            <Link
              href="/kok"
              className="hover:underline underline-offset-8 hover:text-black/70 cursor-pointer"
            >
              Kök
            </Link>
            <div className="group flex items-center gap-1 underline-offset-8 relative hover:text-black/70 cursor-pointer w-fit">
              Tillfällen <BiChevronDown className="group-hover:hidden" />
              <BiChevronUp className="invisible group-hover:visible" />
              <div className="invisible group-hover:visible absolute shadow top-6 right-0 bg-white min-w-40 text-gray-800">
                <Link
                  href="/jul"
                  className="py-2 px-4 flex items-center gap-1 border-t hover:text-red-900 cursor-pointer transition-colors duration-300"
                >
                  <TbChristmasBall /> Jul
                </Link>
                <div className="py-2 px-4 flex items-center gap-1 border-t hover:text-red-900 cursor-pointer transition-colors duration-300">
                  <GiEasterEgg /> Påsk
                </div>
                <div className="py-2 px-4 flex items-center gap-1 border-t hover:text-red-900 cursor-pointer transition-colors duration-300">
                  <TbBeach /> Sommar
                </div>
                <div className="py-2 px-4 flex items-center gap-1 border-t hover:text-red-900 cursor-pointer transition-colors duration-300">
                  <GiOakLeaf />
                  Höst
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`border ${
            dark ? "" : "border-black/30"
          } h-fit bg-transparent max-md:hidden px-8 py-1 flex items-center gap-2 rounded-3xl hover:bg-black/10 cursor-pointer`}
        >
          <MdOutlinePersonAddAlt /> Anställ mig
        </div>
      </div>
    </div>
  );
};

export default Navbar;
