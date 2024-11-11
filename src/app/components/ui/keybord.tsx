"use client";


import { cn } from "../../lib/utils";

import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";
import { LinkPreview } from "./link-preview";




export const MacbookScroll = ({
  showGradient,badge 

 
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
 
  

  

  
  return (
    
      
     <div className=" w-full h-screen dot-background">
      <div className=" text-center mt-5 font-Rampart font-semibold text-4xl flex items-center justify-center underline decoration-[#F0EFE2] decoration-1 underline-offset-8 shadow-md ">
        <h1> Tech Stack</h1>
        <span> <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      className="ml-2 "
    >
      <path d="M13.5 3a.5.5 0 01.5.5V11H2V3.5a.5.5 0 01.5-.5h11zm-11-1A1.5 1.5 0 001 3.5V12h14V3.5A1.5 1.5 0 0013.5 2h-11zM0 12.5h16a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5z" />
    </svg></span>
        
      </div>

      <div className="h-[25rem] w-[50rem] bg-gray-200 dark:bg-[#272729]  rounded-2xl overflow-hidden relative top-[120px] mx-auto ">
      
        <div className="h-10 w-full relative">
          <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#505050]
          " />
        </div>
        <div className="flex relative h-[18rem]">
          <div className="mx-auto w-[10%] overflow-hidden  h-full">
            <SpeakerGrid />
          </div>
          <div className="mx-auto w-[80%] h-full">
            <Keypad />
          </div>
          <div className="mx-auto w-[10%] overflow-hidden  h-16">
            <SpeakerGrid />
          </div>
        </div>
       
        <div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
        {showGradient && (
          <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t dark:from-black from-white via-white dark:via-black to-transparent z-50"></div>
        )}
        {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
      </div>
  
     </div> 
    
        
    
   
  );
};



export const Trackpad = () => {
  return (
    <div
      className="w-[40%] mx-auto h-32  rounded-xl my-1"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

export const Keypad = () => {
  return (
    <div className="h-full rounded-md bg-[#050505] mx-1 p-1">
      {/* First Row */}
      <Row>
        <KBtn
          className="w-14 items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start"
        >
          esc
        </KBtn>
        <KBtn>
          <IconBrightnessDown className="h-[15px] w-[15px]" />
          <span className="inline-block mt-1 ">F1</span>
        </KBtn>

        <KBtn>
          <IconBrightnessUp className="h-[13px] w-[13px]" />
          <span className="inline-block mt-1">F2</span>
        </KBtn>
        <KBtn>
          <IconTable className="h-[13px] w-[13px]" />
          <span className="inline-block mt-1">F3</span>
        </KBtn>
        <KBtn>
          <IconSearch className="h-[13px] w-[13px]" />
          <span className="inline-block mt-1 ">F4</span>
        </KBtn>
        <KBtn>
          <IconMicrophone className="h-[13px] w-[13px]" />
          <span className="inline-block mt-1 ">F5</span>
        </KBtn>
        <KBtn>
          <IconMoon className="h-[13px] w-[13px]" />
          <span className="inline-block mt-1 ">F6</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackPrev className="h-[13px] w-[13px]" />
          <span className="inline-block mt-1 ">F7</span>
        </KBtn>
        <KBtn>
          <IconPlayerSkipForward className="h-[13px] w-[13px]" />
          <span className="inline-block mt-1 ">F8</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackNext className="h-[13px] w-[13px] " />
          <span className="inline-block mt-1 ">F9</span>
        </KBtn>
        <KBtn>
          <IconVolume3 className="h-[13px] w-[13px]" />
          <span className="inline-block mt-1 ">F10</span>
        </KBtn>
        <KBtn>
          <IconVolume2 className="h-[13px] w-[13px]" />
          <span className="inline-block mt-1 ">F11</span>
        </KBtn>
        <KBtn>
          <IconVolume className="h-[13px] w-[13px]" />
          <span className="inline-block mt-1 ">F12</span>
        </KBtn>
        <KBtn>
          <div className="h-4 w-4 rounded-full  bg-gradient-to-b from-20% from-neutral-900 via-black via-50% to-neutral-900 to-95% p-px">
            <div className="bg-black h-full w-full rounded-full" />
          </div>
        </KBtn>
      </Row>

      {/* Second row */}
      <Row>
        <KBtn>
          <span className="block text-xs">~</span>
          <span className="block mt-1 text-xs">`</span>
        </KBtn>

        <KBtn>
          <span className="block">!</span>
          <LinkPreview imgSrc="/nodeimg.jpg">
          <span className="block text-lg">
          <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" className=" text-green-600">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 4.213L7.5.42 1 4.213v6.574l1.006.587 2.057-.832A1.5 1.5 0 005 9.152V4h1v5.152a2.5 2.5 0 01-1.562 2.317l-1.34.542L7.5 14.58l6.5-3.792V4.213zM7 6a2 2 0 012-2h1.167C11.179 4 12 4.82 12 5.833V6h-1v-.167A.833.833 0 0010.167 5H9a1 1 0 000 2h1a2 2 0 110 4H9a2 2 0 01-2-2h1a1 1 0 001 1h1a1 1 0 100-2H9a2 2 0 01-2-2z"
        clipRule="evenodd"
      />
    </svg>
          </span>
          </LinkPreview>
        </KBtn>
        <KBtn>
          <span className="block">@</span>
          <span className="block text-xs">2</span>
        </KBtn>
        <KBtn>
          <span className="block">#</span>
          <span className="block text-xs">3</span>
        </KBtn>
        <KBtn>
          <span className="block">$</span>
          <span className="block text-xs">4</span>
        </KBtn>
        <KBtn>
          <span className="block">%</span>
          <span className="block text-xs">5</span>
        </KBtn>
        <KBtn>
          <span className="block">^</span>
          <span className="block text-xs">6</span>
        </KBtn>
        <KBtn>
          <span className="block">&</span>
          <span className="block text-xs">7</span>
        </KBtn>
        <KBtn>
          <span className="block">*</span>
          <span className="block text-xs">8</span>
        </KBtn>
        <KBtn>
          <span className="block">(</span>
          <span className="block text-xs">9</span>
        </KBtn>
        <KBtn>
          <span className="block">)</span>
          <span className="block text-xs">0</span>
        </KBtn>
        <KBtn>
          <span className="block">&mdash;</span>
          <span className="block text-xs">_</span>
        </KBtn>
        <KBtn>
          <span className="block">+</span>
          <span className="block text-xs"> = </span>
        </KBtn>
        <KBtn
          className="w-14 items-end justify-end pr-[4px] pb-[2px] text-pretty "
          childrenClassName="items-end text-[9px] text-pretty  "
        >
          delete
        </KBtn>
      </Row>

      {/* Third row */}
      <Row>
        <KBtn
          className="w-14 items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start text-[9px]"
        >
          tab
        </KBtn>
        <KBtn>
          <span className="block text-xs">Q</span>
        </KBtn>

        <KBtn>
          <span className="block text-xs">W</span>
        </KBtn>
        <KBtn>
       
          <span className="block text-lg">
            <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
             className=" text-gray-100"
             >
           <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
           </svg>
          </span>
        
        </KBtn>
        <KBtn>
        <LinkPreview imgSrc="/react.png" className="bg-black">
          <span className="block text-blue-400 text-lg">
          <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
    
      
    >
      <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
    </svg>

          </span>
          </LinkPreview>
        </KBtn>
        <KBtn>
        <LinkPreview imgSrc="/tailwind.png">
          <span className="block text-lg">
          <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" className=" text-blue-300">
      <path
        fill="currentColor"
        d="M7.5 2.5c-1.026 0-1.908.277-2.6.87-.688.59-1.137 1.447-1.387 2.516a.5.5 0 00.897.4c.316-.452.632-.723.936-.863.294-.135.611-.162.975-.065.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156.582.359 1.305.6 2.264.61.026 0 1.908-.277 2.6-.87.688-.59 1.138-1.447 1.387-2.516a.5.5 0 00-.897-.4c-.316.452-.632.723-.936.863-.294.135-.611.162-.975.065-.366-.098-.65-.386-1.095-.87l-.015-.016c-.336-.365-.745-.81-1.305-1.156-.582-.359-1.305-.6-2.264-.6zM4 7c-1.026 0-1.908.277-2.6.87C.712 8.46.263 9.317.013 10.386a.5.5 0 00.897.4c.316-.452.632-.723.936-.863.294-.135.611-.162.975-.065.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156.582.359 1.305.6 2.264.6 1.026 0 1.908-.277 2.6-.87.688-.59 1.138-1.447 1.387-2.516a.5.5 0 00-.897-.4c-.316.452-.632.723-.936.863-.294.135-.611.162-.975.065-.366-.098-.65-.386-1.095-.87l-.015-.016c-.335-.365-.745-.81-1.305-1.156C5.682 7.24 4.959 7 4 7z"
      />
    </svg>

          </span>
          </LinkPreview>
        </KBtn>
        <KBtn>
          <span className="block text-xs">Y</span>
        </KBtn>
        <KBtn>
          <span className="block text-xs">U</span>
        </KBtn>
        <KBtn>
          <span className="block text-xs">I</span>
        </KBtn>
        <KBtn>
          <span className="block text-xs">O</span>
        </KBtn>
        <KBtn>
        <LinkPreview imgSrc="/postman.jpg">

          <span className="block text-lg">
          <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className=" text-orange-400"
    >
      <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 00-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 11.847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 01-.067-.032.06.06 0 01.01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 01-.085-.039.072.072 0 01.013-.093zm-3.646 6.058a.076.076 0 01-.069-.083.077.077 0 01.022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 00-.117.256l.203.865a.125.125 0 01-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 00.119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 012.459-2.684l-1.61 1.613a.119.119 0 000 .169l1.247 1.247a1.817 1.817 0 01-2.093-.343zm2.578 0a1.714 1.714 0 01-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zm-.1-1.544a.143.143 0 00-.053.157.416.416 0 01-.053.45.14.14 0 00.023.197.141.141 0 00.084.03.14.14 0 00.106-.05.691.691 0 00.087-.751.138.138 0 00-.194-.033z" />
    </svg>
          </span>
          </LinkPreview>
        </KBtn>
        <KBtn>
          <span className="block ">{`{`}</span>
          <span className="block text-xs">{`[`}</span>
        </KBtn>
        <KBtn>
          <span className="block ">{`}`}</span>
          <span className="block text-xs">{`]`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`|`}</span>
          <span className="block text-xs">{`\\`}</span>
        </KBtn>
      </Row>

      {/* Fourth Row */}
      <Row>
        <KBtn
          className="w-[3.5rem] items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start text-[9px]"
        >
          caps lock
        </KBtn>
        <KBtn>
        <LinkPreview imgSrc="/appwrite.png">
        <span className="block text-lg">
        <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
       className=" text-pink-600 "
    >
      <path d="M7.834 4C4.094 4.09.584 6.816.06 11.014a7.993 7.994 0 003.122 7.368c2.757 2.08 6.198 2.047 8.82.538a7.993 7.994 0 10-.005-13.834A7.84 7.84 0 007.831 4zm.122 1.485a6.525 6.526 0 016.484 5.537c0 .007.002.013.003.02.02.143.037.287.048.433l.006.054c.01.15.016.303.017.456 0 .084-.005.168-.008.252-.002.058-.003.117-.007.175a6.68 6.68 0 01-.03.335l-.01.08c-.015.12-.033.24-.055.358l-.01.048c-.022.124-.05.248-.08.37l-.006.025a6.578 6.58 0 01-.41 1.15c-.007.016-.017.033-.024.05a6.538 6.54 0 01-1.62 2.115l-.054.046c-.08.067-.162.13-.245.194-.055.042-.11.084-.168.125-.04.03-.08.056-.122.084a6.68 6.68 0 01-1.123.612 6.517 6.518 0 01-6.468-.8C.069 14.184.838 7.96 5.457 6.004a6.512 6.513 0 012.499-.518zm.61 3.72c-.183 0-.343.013-.352.032-.01.024-.132.504-.264 1.074-.136.57-.353 1.468-.475 2-.235.974-.377 1.613-.377 1.698 0 .023.146.042.325.042h.325l.146-.65.423-1.796c.15-.635.334-1.408.405-1.72.07-.31.14-.591.155-.624.014-.043-.066-.057-.31-.057zm-2.441 1.6l-.438.47-.433.47.127.15c.07.086.264.298.428.472l.302.32h.856l-.405-.438c-.221-.235-.405-.46-.405-.49 0-.032.17-.243.377-.47.207-.23.376-.428.376-.45 0-.02-.178-.034-.395-.034zm3.27 0c-.231 0-.415.014-.415.028s.08.103.18.202c.366.367.624.678.61.74-.009.032-.188.253-.405.484l-.39.428h.437l.438-.005.4-.438c.22-.244.4-.46.4-.49 0-.023-.188-.244-.424-.493l-.423-.457z" />
    </svg>
        </span>
        </LinkPreview>
        </KBtn>

        <KBtn>
        <span className="block text-xs">S</span>
        </KBtn>
        <KBtn>
          <span className="block text-xs">D</span>
        </KBtn>
        <KBtn>
        <LinkPreview imgSrc="/firebase.png">
          <span className="block text-lg">
          <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
     className="  text-orange-300 "
    >
      <path d="M5.239 15.063L7.21 2.381a.453.453 0 01.847-.145l2.12 3.979-4.938 8.848zM19.24 18.14L17.363 6.469a.454.454 0 00-.766-.246L4.76 18.14l6.55 3.691c.411.23.912.23 1.323 0l6.607-3.691zM13.917 7.955L12.4 5.052a.452.452 0 00-.8 0L4.939 16.989l8.978-9.034z" />
         </svg>
          </span>
          </LinkPreview>
        </KBtn>
        <KBtn>
        <LinkPreview imgSrc="/Github.png">
          <span className="block text-2xl">
          <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
     className=" bg-black"
    >
      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
    </svg>
          </span>
          </LinkPreview>
        </KBtn>
        <KBtn>
        <LinkPreview imgSrc="/html.png">
          <span className="block text-lg">
          <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
       className=" bg-orange-300"
    >
      <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
    </svg>
          </span>
          </LinkPreview>
        </KBtn>
        <KBtn>
        <LinkPreview imgSrc="/javaScript.jpg">
          <span className="block text-lg">
          <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      className="  text-yellow-200"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M20 4l-2 14.5-6 2-6-2L4 4z" />
      <path d="M7.5 8h3v8l-2-1M16.5 8H14a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h1.423a.5.5 0 01.495.57L15.5 15.5l-2 .5" />
       </svg>
          </span>
          </LinkPreview>
        </KBtn>
        <KBtn>
          <span className="block text-xs">K</span>
        </KBtn>
        <KBtn>
          <span className="block text-xs">L</span>
        </KBtn>
        <KBtn>
          <span className="block">{`:`}</span>
          <span className="block text-xs">{`;`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`"`}</span>
          <span className="block text-xs">{`'`}</span>
        </KBtn>
        <KBtn
          className="w-[5rem] items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          return
        </KBtn>
      </Row>

      {/* Fifth Row */}
      <Row>
        <KBtn
          className="w-[5.5rem] items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start text-10px"
        >
          shift
        </KBtn>
        <KBtn>
          <span className="block text-xs">Z</span>
        </KBtn>
        <KBtn>
          <span className="block text-xs">X</span>
        </KBtn>
        <KBtn>
        <LinkPreview imgSrc="/css.png">
          <span className="block text-lg">
          <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
       className=" text-blue-600 "
    >
      <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z" />
    </svg>
          </span>
          </LinkPreview>
        </KBtn>
        <KBtn>
          <span className="block text-xs">V</span>
        </KBtn>
        <KBtn>
        <LinkPreview imgSrc="/bootstrap.png">
          <span className="block text-lg">
          <svg
      viewBox="0 0 576 512"
      fill="currentColor"
      height="1em"
      width="1em"
      className="text-purple-700"
    >
      <path d="M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5c32.8-.1 50.9-13.3 50.9-36.9zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1C508.3 60 484.5 32 452.5 32H123.7C91.6 32 67.9 60.1 69 90.5c1 29.3-.3 67.2-9.8 98.1-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1 9.5 30.9 10.9 68.8 9.8 98.1-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5-1-29.3.3-67.2 9.8-98.1 9.6-31 25.7-50.6 52.1-53.1v-28.5c-26.3-2.5-42.5-22.1-52-53.1zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4 0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3 0 42.1-31.3 67.5-83.2 67.5zm-10-108.7h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5 0-25.7-18.6-38.9-54.5-38.9z" />
    </svg>
          </span>
          </LinkPreview>
        </KBtn>
        <KBtn>
        <LinkPreview imgSrc="/nextjs.jpg">
          <span className="block text-lg">
          <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" className=" text-gray-300">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 7.5a7.5 7.5 0 1111.697 6.216L4.907 4.21A.5.5 0 004 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 010 7.5zM10 10V4h1v6h-1z"
        clipRule="evenodd"
      />
    </svg>
          </span>
          </LinkPreview>
        </KBtn>
        <KBtn>
        <LinkPreview imgSrc="/mongodb.jpg">
          <span className="block text-2xl">
          <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className=" text-green-500 "
    >
      <path d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 01-.48-.48L12 9l.45 10a3.57 3.57 0 01-.45.48z" />
    </svg>
          </span>
          </LinkPreview>
        </KBtn>
        <KBtn>
          <span className="block">{`<`}</span>
          <span className="block text-xs">{`,`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`>`}</span>
          <span className="block text-xs">{`.`}</span>
        </KBtn>{" "}
        <KBtn>
          <span className="block">{`?`}</span>
          <span className="block text-xs">{`/`}</span>
        </KBtn>
        <KBtn
          className="w-[5.5rem] items-end justify-end  pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          shift
        </KBtn>
      </Row>

      {/* sixth Row */}
      <Row>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-end w-full pr-1">
            <span className="block ">fn</span>
          </div>
          <div className="flex justify-start w-full pl-1">
            <IconWorld className="h-[10px] w-[10px]" />
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-end w-full pr-1">
            <IconChevronUp className="h-[10px] w-[10px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block ">control</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-end w-full pr-1">
            <OptionKey className="h-[10px] w-[10px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block ">option</span>
          </div>
        </KBtn>
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        >
          <div className="flex justify-end w-full pr-1">
            <IconCommand className="h-[10px] w-[10px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn className="w-[15rem]"></KBtn>
        <KBtn
          className="w-15"
          childrenClassName="h-full justify-between py-[4px]"
        >
          <div className="flex justify-start w-full pl-1">
            <IconCommand className="h-[10px] w-[10px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-start w-full pl-1">
            <OptionKey className="h-[10px] w-[10px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">option</span>
          </div>
        </KBtn>
        <div className="w-[7rem] mt-[18px]  h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center">
          <KBtn className="w-8 h-5">
            <IconCaretUpFilled className="h-[6px] w-[6px]" />
          </KBtn>
          <div className="flex">
            <KBtn className="w-8 h-5">
              <IconCaretLeftFilled className="h-[6px] w-[6px]" />
            </KBtn>
            <KBtn className="w-8 h-5">
              <IconCaretDownFilled className="h-[6px] w-[6px]" />
            </KBtn>
            <KBtn className="w-8 h-5">
              <IconCaretRightFilled className="h-[6px] w-[6px]" />
            </KBtn>
          </div>
        </div>
      </Row>
    </div>
  );
};
export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  return (
    <div
      className={cn(
        "p-[0.5px] rounded-[4px]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white"
      )}
    >
      <div
        className={cn(
          "h-10 w-10 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center ",
          className
        )}
        style={{
          boxShadow:
            "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "text-neutral-200 text-[5px] w-full flex justify-center items-center flex-col",
            childrenClassName,
            backlit && "text-white"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const Row = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-[2.5px] mb-[2px] w-full flex-shrink-0">
      {children}
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="flex px-[0.5px] gap-[2px] mt-2 h-40"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    ></div>
  );
};

export const OptionKey = ({ className }: { className: string }) => {
  return (
    <svg
      fill="none"
      version="1.1"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <rect
        stroke="currentColor"
        strokeWidth={2}
        x="18"
        y="5"
        width="10"
        height="2"
      />
      <polygon
        stroke="currentColor"
        strokeWidth={2}
        points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
      />
      <rect
        id="_Transparent_Rectangle_"
        className="st0"
        width="32"
        height="32"
        stroke="none"
      />
    </svg>
  );
};