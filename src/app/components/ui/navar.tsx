/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import Link from "next/link";




export const FloatingNav = ({
  
  className,
}: {
  
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  const handleClick = () => {
    console.log('Div was clicked!');
  };


  return (
    <>
     <div className="w-10 h-10 mr-3 mt-2  float-right invisible " onClick={handleClick} >
    <svg fill="none" viewBox="0 0 24 24" height="3em" width="3em" >
      <path
        fill="currentColor"
        d="M7 6a3 3 0 00-3 3h16a3 3 0 00-3-3H7zM7 18a3 3 0 01-3-3h16a3 3 0 01-3 3H7zM3 11a1 1 0 100 2h18a1 1 0 100-2H3z"
      />
    </svg>
    </div> 
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
        //   y: -100,
        }}
        animate={{
        //   y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
          <Link
         
            href={""}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden text-white">Home</span>
            <span className="hidden sm:block text-sm text-white">Home</span>
          </Link>
          <Link
         
            href={"/Projects"}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden text-white">Projects</span>
            <span className="hidden sm:block text-sm text-white">Projects</span>
          </Link>
          <Link
         
            href={"/contact"}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden font-Rampart">Contact</span>
            <span className="hidden sm:block text-sm font-Rampart text-white">Contact</span>
          </Link>
        
        
      </motion.div>
    </AnimatePresence>
  
     {/* <div className="w-10 h-10 mr-3 mt-2  float-right " onClick={handleClick} >
    <svg fill="none" viewBox="0 0 24 24" height="3em" width="3em" >
      <path
        fill="currentColor"
        d="M7 6a3 3 0 00-3 3h16a3 3 0 00-3-3H7zM7 18a3 3 0 01-3-3h16a3 3 0 01-3 3H7zM3 11a1 1 0 100 2h18a1 1 0 100-2H3z"
      />
    </svg>
    </div>  */}
    </>

  );
};
