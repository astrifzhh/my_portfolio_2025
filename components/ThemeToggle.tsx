import { useState, useEffect } from "react";
// Icon
import { LuMoonStar } from "react-icons/lu";
import { LuSunMedium } from "react-icons/lu";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check the user's preference in localStorage
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Update the HTML class
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    // Save preference in localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {/* Toggle{" "} */}
      {theme === "light" ? (
        <>
          <LuMoonStar className="" />
        </>
      ) : (
        <>
          <LuSunMedium className="" />
        </>
      )}
      {/* {" "} Mode */}
    </button>
  );
};

export default ThemeToggle;
