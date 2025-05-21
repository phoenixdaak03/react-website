import "./Projects.css"

export default function Projects({projectTitle, description, topic, logo, code="", report=""}){
    return(
        
        <button className="!bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110 h-full"> 
            <div className="text-left border-1 border-neutral-300 bg-neutral-700 h-full pt-35 pl-2 pr-4">
                <img src={logo} alt="" className="size-5 mb-5"/>
                <h2 className="text-xl pb-2">{topic}</h2>
                <p className="text-sm">{description}</p>
            </div>
        </button>
        
    )
}