/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FloatingDockDesktop } from './socialMedia';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
 
} from "@tabler/icons-react";
import { ButtonsCard } from './buttonui';


function Fotter() {
  interface Social { 
    title: string; 
    icon: React.ReactNode; 
    href: string;
}

const items: Social[] = [
    { title: "Twitter", icon:   <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://twitter.com" },
    { title: "Github", icon:  <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://facebook.com" },
    { title: "LinkedIn", icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://instagram.com" },
] as Social[];
  



    return (
  
        <div className="dot-background w-full h-screen flex items-center">
   
        <div className="w-1/2 p-[10vh] h-[400px] bg-transparent flex flex-col items-center justify-between ">
       <div className=" text-2xl " > Let's Connect! 💌</div>
       <div className="text-pretty">If you ever want to grab a coffee/bubble tea (virtually) or just want a quick chat - you can find me on social media or 
        you can send me a message here!  </div> 
        <div>
        <FloatingDockDesktop items={items} className=''></FloatingDockDesktop>
        </div>
        </div>
      
        
        <div className="w-1/2  h-[400px] p-7 bg-transparent flex flex-col items-center justify-evenly">
                <div className="w-4/5">
                 
                  <input type="text" className=" w-full h-10 rounded-md text-black font-Rampart" placeholder="Name"
                 />
                </div>
                <div className="w-4/5">
                 
                  <input type="text" className=" w-full h-10 rounded-md text-black font-Rampart" placeholder="Email"
                   />
                </div>
                <div className="w-4/5">
                 
                  <input type="text" className=" w-full h-24 rounded-md text-black font-Rampart" placeholder="Message"  />
                </div>
                <div>
                <ButtonsCard className='w-24 bg-transparent border-0'>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" type={'submit'}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
          Connet!
        </span>
      </button>
      </ButtonsCard>
                </div>
        </div>
       
      </div>
         
        )
}

export default Fotter
