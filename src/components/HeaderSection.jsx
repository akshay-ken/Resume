import Switch from "./ToggleSwitch";

export function HeaderSection() {
  return (
    <header className="flex flex-row items-baseline-last gap-x-2 md:gap-x-8 px-1 py-2 md:p-4 border-b-4 border-zinc-900">
      <h1 className="font-zcool md:text-shadow-[5px_4px_2px] text-shadow-[2px_2px_1px] text-shadow-zinc-400 text-2xl md:text-7xl">
        Akshay Nalawade
      </h1>
      <div className="text-[8px]/2 md:text-xl bg-zinc-300 px-1 md:px-3 rounded-xs font-web font-semibold italic">
        <p>College Dropout</p>
        <p>Self-Taught Frontend web developer</p>
      </div>
      <Switch />
    </header>
  );
}
