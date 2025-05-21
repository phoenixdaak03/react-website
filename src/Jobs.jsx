import "./Jobs.css"
import React from 'react';
import { useState } from 'react';


export default function Jobs({ company, job_title, timeline, logo, experience }) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);


    return (
        <div className="grid grid-cols-1 gap-4 transition-all duration-500 ease-in-out">
            <button onClick={toggleDropdown} className="h-full !bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110 hover:animate-pulse">
                <div className="flex justify-center">
                    <img src={logo} className="size-20"></img>
                    <div className="flex flex-col justify-center pl-2">
                        <h2 className="pl-1 text-xl">{company}</h2>
                    </div>

                </div>
            </button>

            <div className={`mx-2 px-2 overflow-hidden mt-2 transition-all duration-500 ease-in-out ${isOpen
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