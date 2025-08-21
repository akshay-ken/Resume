import { useEffect, useState } from "react";
import { HeaderSection } from "./HeaderSection";
import { AboutMeSection } from "./AboutMeSection";

export function MainPage() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(
    function () {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [darkMode]
  );

  function handleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <main>
      <HeaderSection toggleDarkMode={handleDarkMode} checkValue={darkMode} />
      <AboutMeSection />
    </main>
  );
}
