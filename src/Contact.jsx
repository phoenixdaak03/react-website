import "./Contact.css"

export default function Contact(){

    const handleClick = (webLink) => {
        window.open(webLink, "_blank");
    }
    const linkedIn = 'https://www.linkedin.com/in/phoenix-daak-6aa69424a/';
    const instagram = 'https://www.instagram.com/phoenix_daak/';
    const facebook = 'https://www.facebook.com/phoenix.daak/';

    return(
        <div className="transition-all ease-in-out duration-700 lg:flex lg:mx-50 h-25 border-b-1 border-neutral-300">
            <div className="lg:flex lg:content-center flex justify-center items-center">
                <button className="hover:animate-pulse !bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110">✉️ podaak01@gmail.com</button>
            </div>
            <div className="lg:relative lg:flex flex-1 lg:items-center flex justify-center items-center">
                <div className="lg:absolute lg:right-0 items-center">
                    <button className="hover:animate-pulse !bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110" onClick={() => handleClick(linkedIn)}>LinkedIn</button>
                    <button className="hover:animate-pulse !bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110" onClick={() => handleClick(instagram)}>Instagram</button>
                    <button className="hover:animate-pulse !bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110" onClick={() => handleClick(facebook)}>Facebook</button>
                </div>
            </div>
        </div>
    )
}