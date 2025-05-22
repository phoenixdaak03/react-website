export default function Introduction() {

    const handleClick = (dir) => {
        window.open(dir, "_blank");
    }

    return (
        <div className="">
            <div className="flex justify-center pt-5">
                <p className="text-[20px] text-center">Hi, I'm Phoenix 👋</p>
            </div>
            <div className="flex justify-center pb-10">
                <button className="hover:animate-pulse !bg-transparent !border-none !outline-none !transition delay-150 duration-700 ease-in-out hover:text-white hover:scale-110" onClick={() => handleClick("Resume/P_DaakResume.pdf")}>
                    <div className="rounded-lg flex justify-center items-center bg-neutral-700 h-10 w-30 border-1 border-neutral-300">
                            My Resume
                    </div>
                </button>
            </div>
            
            <div className="flex justify-center lg:mx-120">
                <p className="text-[40px] text-center">Computer Science and Engineering, Data Analytics, UI Design, and a Pursuit for Success</p>
            </div>
        </div>
    )
}