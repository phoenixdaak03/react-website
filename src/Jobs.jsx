import "./Jobs.css"
import React from 'react';
import { useState } from 'react';


export default function Jobs({company, job_title, timeline, logo, experience}){
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    
    return(
        <div className="grid grid-cols-1 gap-4">
            <button onClick={toggleDropdown} className="h-full !bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110">
                <div className="flex justify-center">
                    <img src={logo} className="size-20"></img>
                    <div className="flex flex-col justify-center pl-2">
                        <h2 className="pl-1 text-xl">{company}</h2>
                    </div>
                
                </div>
            </button>

        <div>
            {isOpen && (<p className="">hello world</p>)}
        </div>
        
        </div>
    )
}