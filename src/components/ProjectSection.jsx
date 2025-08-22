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
      </section>
    </section>
  );
}
