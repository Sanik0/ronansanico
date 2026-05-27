import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* NAVIGATION */}
      <nav className="w-full px-15 bg-black flex items-center justify-center">
        {/* LOGO */}
        <div className={"flex w-full items-center justify-start gap-0"}>
          <h1 className={"text-white whitespace-nowrap font-semibold text-md py-3 pl-0 px-2.5 border-r-[0.5px] border-[#CCCCCC]/30"}>SANICORONAN</h1>
          <p className={"textext-[#CCCCCC] whitespace-nowrap font-medium text-xs px-2.5"}>
            SOFTWARE DEVELOPER
          </p>
        </div>

        {/* NAVIGATION LINKS */}
        <ul className={"list-none w-full p-0 m-0 flex items-center justify-center gap-0"}>
          <li className={"flex items-center whitespace-nowrap  text-[#CCCCCC] font-medium hover:bg-white/20 transition-all py-4 cursor-pointer text-xs px-2.5 border-l-[0.5px] border-[#CCCCCC]/30"}>
            ABOUT ME
          </li>
          <li className={"self-stretch flex items-center whitespace-nowrap text-[#CCCCCC] font-medium hover:bg-white/20 transition-all py-4 cursor-pointer text-xs px-2.5 border-l-[0.5px]  border-[#CCCCCC]/30"}>
            TECH STACK
          </li>
          <li className={"self-stretch flex items-center whitespace-nowrap text-[#CCCCCC] font-medium hover:bg-white/20 transition-all py-4 cursor-pointer text-xs px-2.5 border-l-[0.5px]  border-[#CCCCCC]/30"}>
            PROJECTS
          </li>
          <li className={"self-stretch flex items-center whitespace-nowrap text-[#CCCCCC] font-medium hover:bg-white/20 transition-all py-4 cursor-pointer text-xs px-2.5 border-l-[0.5px]  border-[#CCCCCC]/30"}>
            CERTIFICATES
          </li>
          <li className={"self-stretch flex items-center whitespace-nowrap text-[#CCCCCC] font-medium hover:bg-white/20 transition-all py-4 cursor-pointer text-xs px-2.5 border-l-[0.5px] border-r-[0.5px] border-[#CCCCCC]/30"}>
            TESTIMONIALS
          </li>

        </ul>

        {/* CV */}
        <div className={"list-none w-full p-0 m-0 flex items-center justify-end gap-0"}>
          <div className={"flex items-center texttext-[#CCCCCC] font-medium hover:bg-white/20 transition-all py-4 cursor-pointer text-xs px-2.5 border-l-[0.5px] border-[#CCCCCC]/30"}>
            CHECK MY CV
          </div>
          <div className={"flex items-center texttext-[#CCCCCC] font-medium hover:bg-white/20 transition-all py-3 cursor-pointer text-xs px-2.5 border-l-[0.5px] border-r-[0.5px] border-[#CCCCCC]/30"}>
            <span className="material-symbols-outlined text-[24px]">
              arrow_drop_down
            </span>
          </div>

        </div>
      </nav>

      {/* HERO SECTION */}
      <div className={"w-full flex items-center relative justify-center h-133 gap-0"}>
        <div className={"w-full p-15 absolute inset-0 h-full"}>

          <div className={"relative"}>
            <div className={"relative"}>
              <h1 className={"text-[200px] leading-none font-anton text-black whitespace-nowrap"}>RONAN SANICO</h1>
              <h1 className={"text-[200px] leading-none font-anton text-black whitespace-nowrap"}>DEVELOPER.</h1>
            </div>

            <div className={"absolute inset-0 ml-7"}>
              <h1 style={{ WebkitTextStroke: '2px #000000' }} className={"text-[200px] text-transparent leading-none mt-2.5 font-anton whitespace-nowrap"}>RONAN SANICO</h1>
              <h1 style={{ WebkitTextStroke: '2px #000000' }} className={"text-[200px] text-transparent leading-none mt-2.5 font-anton whitespace-nowrap"}>DEVELOPER.</h1>
            </div>
          </div>


        </div>
        <div className={"w-full border-b-[0.5px] border-r-[0.5px] border-black h-full bg-none"}></div>
        <div className={"w-full max-w-[43%] border-b-[0.5px] border-r-[0.5px] border-black h-full bg-[#FF2D00]"}></div>
      </div>
    </div>
  );
}
