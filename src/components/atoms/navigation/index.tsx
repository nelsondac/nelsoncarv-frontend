"use client";

import ThemeContext, {
  ThemeContextProvider,
} from "@/components/store/ThemeContext";
import Link from "next/link";
import { useContext } from "react";
import { MoonIcon } from "../icons/icons";

const Navigation = () => {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(ThemeContext);

  function switchTheme() {
    themeCtx.toggleThemeHandler();
  }

  return (
    <div className="sticky top-0 z-20 py-2 md:px-6 md:py-6 md:mb-6 dark:bg-black bg-white duration-300	">
      <div className="container px-1 mx-auto flex items-center justify-between">
        <div className="items-start flex">
          <Link
            href="/"
            className={
              "font-medium tracking-wider transition-colors text-gray-900 dark:hover:text-sky-500 hover:text-sky-500  dark:text-white"
            }
          >
            Nelson Carvalho
          </Link>
        </div>
        <div className="flex justify-items-end">
          <button
            onClick={switchTheme}
            className="h-6 w-6 text-black dark:text-white"
          >
            <MoonIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
