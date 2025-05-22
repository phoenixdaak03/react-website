import "./Jobs.css"
import React from 'react';
import { useState } from 'react';


export default function Jobs({ company, job_title, timeline, logo, experience }) {

    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);


    return (
        <div className="transition-all ease-in-out duration-700 lg:grid lg:grid-cols-1 lg:gap-4 pt-4 lg:pt-8">
           <div className="flex justify-center">
                <button onClick={toggleDropdown} className="h-full !bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110 hover:animate-pulse">
                    <div className="flex justify-center items-center">
                        <img src={logo} className="size-20"></img>
                        <div className="flex flex-col justify-center pl-2">
                            <h2 className="pl-1 text-xl">{company}</h2>
                        </div>

                    </div>
                </button>
           </div>
            
            

            <div className={`mb-4 mx-2 px-2 overflow-hidden transition-all duration-500 ease-in-out ${isOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}>

                {isOpen && (
                    <>
                        <h2 className="text-xl pb-2">{job_title} ({timeline})</h2>
                        <p className="text-sm">{experience}</p>
                    </>
                )}

            </div>
        </div>
    )
}