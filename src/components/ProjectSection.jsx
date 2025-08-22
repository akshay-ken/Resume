export function ProjectSection() {
  return (
    <section>
      <div className="font-zcool text-xl md:text-3xl border-y-4 text-center bg-zinc-300 dark:bg-zinc-600 dark:text-zinc-300 border-zinc-900 dark:border-zinc-400">
        Projects
      </div>

      <section className="flex flex-col p-1 md:p-4 gap-y-2 md:gap-y-5">
        <div className="flex flex-row justify-between font-zcool">
          <p className="text-base md:text-2xl bg-zinc-200 dark:bg-zinc-300 dark:text-zinc-700 p-1 md:p-2 rounded-sm tracking-tighter md:tracking-wide leading-4 md:leading-6">
            Frontend Mentor Challenges {" (35+ Projects)"}
          </p>
          <p className="text-base md:text-2xl bg-zinc-200 dark:bg-zinc-300 dark:text-zinc-700 p-1 md:p-2 rounded-sm tracking-tighter md:tracking-wide leading-4 md:leading-6">
            Technologies:-{" "}
            <span className="text-xs md:text-base">React.js Tailwind CSS</span>
          </p>
        </div>
        <p className="font-web text-sm md:text-xl text-justify dark:text-zinc-200 leading-4 md:leading-7 tracking-tighter md:tracking-wide">
          <span className="font-zcool text-base md:text-2xl dark:text-zinc-700 bg-zinc-200 rounded-sm p-1 md:p-2 dark:bg-zinc-300">
            Overview
          </span>
          Practicing React.js and Tailwind CSS skills through ongoing Frontend
          Mentor challenges over several months, applying concepts from 'React
          Key Concepts' by Packt Publishers. Using Git workflow for version
          control while building responsive web interfaces. Currently focused on
          mastering frontend fundamentals with plans to expand into backend
          development.
        </p>
      </section>
    </section>
  );
}
