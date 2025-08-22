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
        <section className="w-[40vw] p-1 md:p-4 border-r-2 text-sm md:text-4xl dark:text-zinc-900 font-zcool border-dashed border-zinc-500 dark:border-zinc-50">
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
        <section className="w-[60vw] p-1 md:p-4 flex flex-col gap-y-1 md:gap-y-4">
          <div className="flex flex-row items-center">
            <p className="font-zcool md:text-xl text-xs text-red-400 dark:bg-zinc-600 p-1 md:p-2 rounded-lg bg-zinc-200">
              College Dropout
            </p>
            <p className="font-web text-[8px] md:text-base leading-3 md:leading-6 tracking-tighter md:tracking-wide dark:bg-zinc-600 p-1 text-center md:p-2 rounded-lg bg-zinc-200">
              Dropped out of engineering in 2018 due to financial issues.
              Distance learning delayed by COVID; now focused on self-taught web
              dev with plans for BCA alongside stable employment.
            </p>
          </div>
          <div className="flex flex-row font-zcool">
            <p className="text-xl md:text-5xl p-1 md:p-2 self-center basis-1/4 bg-sky-400">
              12 <sup>th</sup>
            </p>
            <div className="flex flex-col basis-3/4 bg-amber-300 p-1 md:p-2">
              <div className="flex flex-row justify-between ">
                <p>HSC</p>
                <p>2017</p>
                <p>62%</p>
              </div>
              <div className="flex flex-row justify-between text-xs">
                <p>C.K.T college, panvel</p>

                <p>Computer Science</p>
              </div>
            </div>
          </div>
          <div></div>
        </section>
      </div>
    </footer>
  );
}
