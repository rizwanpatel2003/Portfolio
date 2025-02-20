"use client"

import Fotter from "./components/ui/fotter";
import Greeting from "./components/ui/Greeting";
import { MacbookScroll } from "./components/ui/keybord";
import Moon from "./components/ui/moon";
import { FloatingNav } from "./components/ui/navar";
import LandingProducts from "./components/ui/projects";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Home() {

  useGSAP(()=>{
    gsap.to('#text1',{
         
    
      x:"-1200px",
      duration:5,
      delay:1,
     })})

  return (
    <>
    <h1 className="text-center text-[10px] md:text-sm" id="text1">the position of the moon changes with time from evening to morning</h1>
     <Moon></Moon>
     <Greeting></Greeting>
     <FloatingNav className="w-[300px] h-[55px] rounded-full  bg-black shadow-sm shadow-white font-Rampart  "></FloatingNav>
    <ShootingStars  ></ShootingStars>
    <StarsBackground></StarsBackground>
    <MacbookScroll></MacbookScroll>
    <LandingProducts></LandingProducts>
      <Fotter></Fotter>
    
    </>  
  );
}
