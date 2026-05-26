import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* NAVIGATION */}
      <nav className="w-full px-15 bg-black flex items-center justify-between">
        {/* LOGO */}
        <div className={"flex items-center px-15 gap-0"}>
          <h1 className={"text-white font-semibold text-md py-3 px-2.5 border-r-[0.5px] border-[#CCCCCC]"}>SANICORONAN</h1>
          <p className={"text-gray-400 font-semibold text-xs px-2.5"}>
            SOFTWARE DEVELOPER
          </p>
        </div>

        {/* NAVIGATION LINKS */}
        <ul className={"list-none p-0 m-0 flex items-center justify-center gap-0"}>
          <li className={"text-white font-medium py-3 hover:bg-white/20 transsition-all cursor-pointer text-xs px-2.5 border-l-[0.5px]  border-r-[0.5px] border-[#CCCCCC]"}>
            ABOUT ME
          </li>
          <li className={"text-gray-400 font-medium py-3 hover:bg-gray-400/20 transsition-all cursor-pointer text-xs px-2.5 border-r-[0.5px] border-[#CCCCCC]"}>
            TECH STACK
          </li>
          <li className={"text-gray-400 font-medium py-3 hover:bg-gray-400/20 transsition-all cursor-pointer text-xs px-2.5 border-r-[0.5px] border-[#CCCCCC]"}>
            PROJECTS
          </li>
          <li className={"text-gray-400 font-medium py-3 hover:bg-gray-400/20 transsition-all cursor-pointer text-xs px-2.5 border-r-[0.5px] border-[#CCCCCC]"}>
            CERTIFICATES
          </li>
          <li className={"text-gray-400 font-medium py-3 hover:bg-gray-400/20 transsition-all cursor-pointer text-xs px-2.5 border-r-[0.5px] border-[#CCCCCC]"}>
            TESTIMONIALS
          </li>

        </ul>

        {/* CV */}
        <div className={"list-none p-0 m-0 flex items-center justify-center gap-0"}>
          <div className={"text-white py-3 hover:bg-white/20 transsition-all cursor-pointer font-medium text-xs px-2.5 border-l-[0.5px]  border-r-[0.5px] border-[#CCCCCC]"}>
            CHECK MY CV
          </div>
          <div className={"text-gray-400 py-3 hover:bg-gray-400/20 transsition-all cursor-pointer font-medium text-xs px-2.5 border-r-[0.5px] border-[#CCCCCC]"}>
            <span className="material-symbols-outlined text-[24px]">
              arrow_drop_down
            </span>
          </div>

        </div>
      </nav>
    </div>
  );
}
