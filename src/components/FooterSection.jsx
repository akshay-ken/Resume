import { FaReact } from "react-icons/fa";
export function FooterSection() {
  return (
    <footer>
      <div className="font-zcool text-xl md:text-3xl border-y-4 border-zinc-900 dark:border-zinc-400 flex flex-row justify-around bg-zinc-300 dark:bg-zinc-600 dark:text-zinc-300">
        <p>Skills</p>
        <p>Education</p>
      </div>
      <div className="flex flex-row">
        <section className="w-[40vw] p-1 md:p-4 bg-sky-400 border-r-2 font-zcool border-dashed border-zinc-500 dark:border-zinc-50">
          <div className="grid grid-rows-3 grid-cols-4">
            <div>
              <FaReact />
              React.js
            </div>
          </div>
        </section>
        <section className="w-[60vw] p-1 md:p-4 bg-rose-400"></section>
      </div>
    </footer>
  );
}
