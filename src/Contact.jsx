import "./Contact.css"

export default function Contact(){

    const handleClick = (webLink) => {
        window.open(webLink, "_blank");
    }
    const linkedIn = 'https://www.linkedin.com/in/phoenix-daak-6aa69424a/';
    const instagram = 'https://www.instagram.com/phoenix_daak/';
    const facebook = 'https://www.facebook.com/phoenix.daak/';

    return(
        <div className="flex mx-50 h-25 border-b-1 border-neutral-300">
            <div className="flex-1 content-center">
                <button className="hover:animate-pulse !bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110">✉️ podaak01@gmail.com</button>
            </div>
            <div className="relative flex flex-1 items-center">
                <div className="absolute right-0">
                    <button className="hover:animate-pulse !bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110" onClick={() => handleClick(linkedIn)}>LinkedIn</button>
                    <button className="hover:animate-pulse !bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110" onClick={() => handleClick(instagram)}>Instagram</button>
                    <button className="hover:animate-pulse !bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110" onClick={() => handleClick(facebook)}>Facebook</button>
                </div>
            </div>
        </div>
    )
}