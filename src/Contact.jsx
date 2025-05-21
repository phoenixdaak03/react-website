import "./Contact.css"

export default function Contact(){
    return(
        <div className="flex mx-50 h-25 border-b-1 border-neutral-300">
            <div className="flex-1 content-center">
                <button className="!bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110">✉️ podaak01@gmail.com</button>
            </div>
            <div className="relative flex flex-1 items-center">
                <div className="absolute right-0">
                    <button className="!bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110">LinkedIn</button>
                    <button className="!bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110">Instagram</button>
                    <button className="!bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110">Facebook</button>
                </div>
            </div>
        </div>
    )
}