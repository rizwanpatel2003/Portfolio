"use client"


import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRouter } from 'next/navigation';




gsap.registerPlugin(ScrollTrigger);
function  LandingProducts() {
  const router = useRouter();

     useGSAP(()=>{
      gsap.to('#box1',{
           
        scale:0.3,
        opacity:0,
       
       scrollTrigger:{
        trigger:"#box1",
        scroller:"body",
        markers:false,
        start:"top 30%",
        end:"bottom 15%",
        scrub:1,
   
        
       }
         })
         gsap.to('#box2',{
           
          scale:0.5,
          opacity:0,
         
         scrollTrigger:{
          trigger:"#box2",
          scroller:"body",
          markers:false,
          start:"top 30%",
          end:"bottom 15%",
          scrub:1,
          
         }
    })
    gsap.to('#box3',{
               
      opacity:0,
       scale:0,
     
     scrollTrigger:{
      trigger:"#box3",
      scroller:"body",
      markers:false,
      start:"top 30%",
      end:"bottom 15%",
      scrub:1,
      
      
     }
    })
        
        
    
        
    
     })
  
  

  
       

  return (
   <>
    
   
   <div className=' w-full  flex  items-center justify-evenly gap-16 flex-col mt-10 dot-background' id='head'>
           <h1 className=' text-center  mt-3 font-Rampart font-semibold  text-4xl underline-offset-8 underline decoration-white'>My projects</h1>
        <div className=' w-[90%] md:w-[60%]  h-[350px] md:h-[500px]    bg-white sticky top-5   flex flex-col justify-end shadow-sm shadow-white rounded-md bg-cover overflow-hidden ' style={{backgroundImage: `url('/landingpic.png')`}} id='box1' onClick={()=>{
           router.push('https://github.com/rizwanpatel2003/comfy')
        }}>
        <h1 className="font-serif  bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent text-md md:text-2xl font-bold bg-cover "> Comfy -Ecommerce </h1>
        <h1 className="font-serif bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent text-sm md:text-2xl font-bold"> MERN Stack </h1>
              </div>
              <div className=' w-[90%] md:w-[60%]   h-[350px] md:h-[500px]   bg-white sticky top-5  bg-cover flex flex-col justify-end shadow-sm shadow-white rounded-md '  style={{backgroundImage: `url('/scamImg.png')`}} id='box2' onClick={()=>{
           router.push('https://github.com/rizwanpatel2003/Scambaiters')
        }}>
              <h1 className="font-serif bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent text-md md:text-2xl font-bold ">Scambaiter-Social Welfare</h1>
              <h1 className="font-serif bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent text-sm md:text-xl font-bold"> Next.js</h1>
              </div>
              <div className=' w-[90%] md:w-2/3  h-[350px] md:h-[500px]    bg-white  bg-cover flex flex-col justify-end shadow-sm shadow-white rounded-md '    style={{backgroundImage: `url('/portfolioimg.png')`}} id='box3'  onClick={()=>{
           router.push('https://github.com/rizwanpatel2003/Portfolio')}}>
              <h1 className="font-serif bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent text-md md:text-2xl font-bold "> Portfolio- Innovative web design</h1>
              <h1 className="font-serif bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent text-sm md:text-xl font-bold"> Next.js</h1>
              </div>
              
   </div>

  
     
    
  </>
)
}

export default LandingProducts
