import React from 'react';
import { useState } from 'react';
import "./PreviousWebsite.css";



export default function PreviousWebsite() {
    const handleClick = () => {
        window.open("https://phoenixdaak03.github.io", "_blank");
    }
  return (   
      <button className="!bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110" onClick={handleClick}>
       <div className="flex justify-center items-center bg-neutral-700 h-15 w-60 border-1 border-neutral-300">
            My Previous Website <img src="./Images/externalLink.png" alt="" className="pl-1"/>
       </div>
      </button>
  );
}
