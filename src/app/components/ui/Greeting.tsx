/* eslint-disable @typescript-eslint/no-unused-vars */
 "use client"
import React from 'react'
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';
import { ButtonsCard } from './buttonui';
import { IconFileCv } from '@tabler/icons-react';
import { h1 } from 'framer-motion/client';
gsap.registerPlugin(TextPlugin)
function Greeting() {
    const tl= gsap.timeline();
    useGSAP(()=>{
        tl.to("#text", {text: {value: "Hello "}, duration:1, delay:1, ease: "none"})
        tl.to("#text", {text: {value: "i'm Rizwan"}, duration:1.5, delay:0.5, ease: "none"})
    })
    
  

    return (
        <>
       <div className='w-[400px] h-[300px] absolute mx-auto top-[250px] inset-0 bg-transparent text-center p-[5vh] text-6xl font-Rampart font-bold text-[#F0EFE2]' id="text">
        </div>
        <div className='w-[120px] h-[40px] absolute mx-auto top-[600px]  inset-0 rounded-full'>
        <ButtonsCard className='w-28 bg-transparent border-0'>
        <button className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50` } type={'submit'}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-lg font-Rampart font-medium text-white backdrop-blur-3xl  hover:${<h1>hello</h1>}` }  >
          Here Cv!
         
        </span>
       
         </button>
        </ButtonsCard>  
        </div> 
       </>
    )
}

export default Greeting
