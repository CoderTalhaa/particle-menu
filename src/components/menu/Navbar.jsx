"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Gamja_Flower } from "next/font/google";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import "./nav.css";
import useAnimStore from "@/useAnimStore";
import { FaDiamond } from "react-icons/fa6";

const gamjaFlower = Gamja_Flower({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const menu = useAnimStore((state) => state.menu);
  const setMenu = useAnimStore((state) => state.setMenu);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="w-full fixed top-0 left-0 p-5 z-[120] pointer-events-auto ">
        <div className="flex justify-between items-center text-5xl ">
          <Link href="/" className={`${gamjaFlower.className} text-white `}>
            TALHA
          </Link>
          <div onClick={handleClick} className="navButton">
            <motion.div
              className="navSlider"
              animate={{ top: menu ? "-100%" : "0" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="navText ">
                <PerspectiveText text="MENU" />
              </div>
              <div className="navText text-white">
                <PerspectiveText text="CLOSE" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {menu && <MMenu menu={menu} setMenu={setMenu} />}
      </AnimatePresence>
    </>
  );
}

function PerspectiveText({ text }) {
  return (
    <div className="perspectiveText">
      <p className="navP">{text}</p>
      <p className="navP">{text}</p>
    </div>
  );
}

const MMenu = () => {
  const menu = useAnimStore((state) => state.menu);
  const setMenu = useAnimStore((state) => state.setMenu);
  const links = [
    {
      name: "HOME",
      path: "/",
      index: 0,
    },

    {
      name: "ABOUT",
      path: "/about",
      index: 1,
    },
    {
      name: "CONTACT",
      path: "/contact",
      index: 2,
    },
    {
      name: "PROJECT",
      path: "/project",
      index: 3,
    },
  ];

  const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

  const height = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition,
    },
    exit: {
      opacity: 0,
      transition,
    },
  };

  const translate = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    enter: (i) => ({
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: i[0] },
    }),
    exit: (i) => ({
      y: "100%",
      opacity: 0,
      transition: { ...transition, delay: i[1] },
    }),
  };

  const getChar = (title) => {
    let chars = [];
    title.split("").forEach((char, index) => {
      chars.push(
        <motion.span
          custom={[index * 0.02, (title.length - index) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={index}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  const indexPath = (path) => {
    switch (path) {
      case "/":
        return 0;
      case "/about":
        return 1;
      case "/contact":
        return 2;
      case "/project":
        return 3;
      default:
        return 0;
    }
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const setSelectedModel = useAnimStore((state) => state.setSelectedModel);
  const selectedModel = useAnimStore((state) => state.selectedModel);

  const hover = useAnimStore((state) => state.hover);
  const setHover = useAnimStore((state) => state.setHover);

  const handle = (index) => {
    setSelectedModel(index);
    setHoveredIndex(index);
    setHover(true);
  };
  const handleOut = () => {
    setHoveredIndex(null);
    setHover(false);
  };

  const pathname = usePathname();
  useEffect(() => {
    if (menu === false) {
      setSelectedModel(indexPath(pathname));
    }
  }, [menu, pathname]);

  return (
    <>
      <motion.div
        variants={height}
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-blur"
      ></motion.div>
      <motion.div
        variants={height}
        initial="initial"
        animate="enter"
        exit="exit"
        className=" fixed top-0 left-0 w-full h-full z-50 pointer-events-none "
      >
        <div className=" flex flex-col justify-center items-start text-8xl h-[100vh] gap-5 pl-36 ">
          {links.map((link, index) => {
            const isHover = hoveredIndex === index;
            return (
              <Link
                key={index}
                href={link.path}
                style={{
                  pointerEvents: menu ? "auto " : "none",
                  color: pathname === link.path ? "red" : "white",
                }}
                className="overflow-hidden pb-2 flex justify-center items-center text-center "
                onClick={() => setMenu(!menu)}
                onPointerEnter={() => handle(link.index)}
                onPointerLeave={handleOut}
              >
                <motion.div
                  className={`${isHover ? "scale-[0.6]" : "scale-[0.3]"} ${
                    isHover ? "-rotate-90" : "rotate-0"
                  } transition-all  duration-200 ease-in-out `}
                >
                  <FaDiamond />
                </motion.div>
                <p
                  className={`flex m-0 pr-6 font-roboto font-bold uppercase ${
                    isHover ? "translate-x-6" : "translate-x-0"
                  }  transition-all duration-200 ease-linear   `}
                >
                  {getChar(link.name)}
                </p>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};
