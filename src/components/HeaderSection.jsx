export function HeaderSection() {
  return (
    <header className="flex flex-row items-baseline-last gap-x-2 md:gap-x-8 px-1 py-2 md:p-4 bg-red-400">
      <h1 className="font-zcool text-3xl md:text-7xl">Akshay Nalawade</h1>
      <div className="text-[8px]/2 md:text-xl font-web font-semibold italic">
        <p>College Dropout</p>
        <p>Self-Taught Frontend web developer</p>
      </div>
    </header>
  );
}
