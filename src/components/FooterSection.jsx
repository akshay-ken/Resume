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
        <section className="w-[60vw] p-1 md:p-4 flex flex-col  md:gap-y-4">
          <div className="flex flex-row items-start">
            <p className="font-zcool md:text-3xl text-base h-6 md:h-18 basis-full md:basis-1/4 text-center  text-red-400 dark:bg-zinc-600 md:p-2 rounded-lg bg-zinc-200">
              College Dropout
            </p>
            <p className="font-web text-[8px] md:text-base hidden h-18 md:block  dark:text-zinc-200 leading-3 basis-3/4  md:leading-5 tracking-tighter md:tracking-wide dark:bg-zinc-600 p-1 text-center md:p-2 rounded-lg bg-zinc-200">
              Dropped out of engineering in 2018 due to financial issues.
              Distance learning delayed by COVID; now focused on self-taught web
              dev with plans for BCA alongside stable employment.
            </p>
          </div>
          <div className="flex flex-row justify-center font-zcool">
            <p className="text-xs md:text-5xl p-1 md:p-2 text-center ordinal basis-1/2 bg-zinc-200 dark:text-zinc-200 dark:bg-zinc-600 md:basis-1/4 rounded-lg">
              12 <sup>th</sup>
            </p>
            <div className="md:flex flex-col basis-3/4 hidden justify-around px-4 bg-zinc-200 dark:text-zinc-200 dark:bg-zinc-600 rounded-lg">
              <div className="flex flex-row justify-between text-2xl">
                <p>HSC</p>
                <p>2017</p>
                <p>62%</p>
              </div>
              <div className="flex flex-row justify-between text-base">
                <p>C.K.T college, panvel</p>

                <p>Computer Science</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center font-zcool">
            <p className="text-xs md:text-5xl p-1 md:p-2 text-center ordinal basis-1/3 bg-zinc-200 dark:text-zinc-200 dark:bg-zinc-600 md:basis-1/4 rounded-lg">
              10 <sup>th</sup>
            </p>
            <div className="md:flex flex-col basis-3/4 hidden justify-around px-4 bg-zinc-200 dark:text-zinc-200 dark:bg-zinc-600 rounded-lg">
              <div className="flex flex-row justify-between text-2xl">
                <p>SSC</p>
                <p>2015</p>
                <p>74%</p>
              </div>
              <div className="flex flex-row justify-between text-base">
                <p>S.E.S school, Kalamboli</p>
                <p>Mumbai University</p>
              </div>
            </div>
          </div>
          <div></div>
        </section>
      </div>
    </footer>
  );
}
