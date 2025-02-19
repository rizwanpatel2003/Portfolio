"use client"
import React from "react";
import { motion } from "framer-motion";


 
export function LampDemo() {
  return (
    
  
      <motion.h2
        initial={{ opacity: 0, y: 600 }}
        whileInView={{ opacity: 1, y: 300 }}
        transition={{
          delay: 0.3,
          duration: 1,
         
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-lg font-medium tracking-tight text-transparent md:text-7xl"
      >
        Rizwan Patel
      </motion.h2>

 
  );
}