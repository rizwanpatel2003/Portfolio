"use client"

import Fotter from "./components/ui/fotter";
import Greeting from "./components/ui/Greeting";
import { MacbookScroll } from "./components/ui/keybord";
import Moon from "./components/ui/moon";
import { FloatingNav } from "./components/ui/navar";
import LandingProducts from "./components/ui/projects";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";

export default function Home() {
  return (
    <>
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
