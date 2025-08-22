import { FaReact } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFileJsx } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
export function FooterSection() {
  return (
    <footer>
      <div className="font-zcool text-xl md:text-3xl border-y-4 border-zinc-900 dark:border-zinc-400 flex flex-row justify-around bg-zinc-300 dark:bg-zinc-600 dark:text-zinc-300">
        <p>Skills</p>
        <p>Education</p>
      </div>
      <div className="flex flex-row mb-8">
        <section className="w-[40vw] p-1 md:p-4 border-r-2 text-sm md:text-4xl dark:text-zinc-200 font-zcool border-dashed border-zinc-500 dark:border-zinc-50">
          <div className="grid grid-rows-3 grid-cols-4 gap-1 md:gap-4">
            <div className="flex flex-row items-center justify-center col-span-2 gap-x-1 md:gap-x-4 bg-zinc-200 dark:bg-zinc-400 md:py-4 rounded-md">
              <FaReact />
              React.js
            </div>
            <div className="flex flex-row items-center justify-center col-span-2 gap-x-1 md:gap-x-4 bg-zinc-200 dark:bg-zinc-400 md:py-4 rounded-md">
              <LuLayoutDashboard />
              Layout
            </div>
            <div className="flex flex-row items-center justify-center col-span-3 gap-x-1 md:gap-x-4 bg-zinc-200 dark:bg-zinc-400 md:py-4 rounded-md">
              <RiTailwindCssFill />
              Tailwind CSS
            </div>
            <div className="flex flex-row items-center justify-center bg-zinc-200 dark:bg-zinc-400 md:py-4 rounded-md">
              <PiFileJsx />
            </div>
            <div className="flex flex-row items-center justify-center col-span-3 gap-x-1 md:gap-x-4 bg-zinc-200 dark:bg-zinc-400 md:py-4 rounded-md">
              <IoLogoJavascript /> JavaScript
            </div>
            <div className="flex flex-row items-center justify-center gap-x-1 md:gap-x-4 bg-zinc-200 dark:bg-zinc-400 md:py-4 rounded-md">
              <FaGitAlt />
            </div>
          </div>
        </section>
        <section className="w-[60vw] p-1 md:p-4 bg-rose-400"></section>
      </div>
    </footer>
  );
}
