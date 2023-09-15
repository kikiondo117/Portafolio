import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { Toggle } from "../Theme/Toggle";
import { MenuItem } from "./MenuItem";
import clsx from "clsx";

export function Navbar() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <header className="fixed top-0 left-0 w-full md:relative bg-white dark:bg-[#202020] z-20">
      <nav
        className={clsx(
          "flex flex-col justify-between items-center mx-auto py-4 md:h-fit md:flex-row",
          { "h-16": !showMenu }
        )}
      >
        <div className="w-full flex justify-between items-center md:w-fit  md:mx-0">
          <Logo />

          <button
            className="visible md:hidden"
            onClick={() => setShowMenu((prevState) => !prevState)}
          >
            🛵
          </button>

          <Toggle />
        </div>

        <ul
          className={clsx(
            "duration-300 ease-in-out transition-all w-full flex flex-col justify-center items-center md:h-fit  md:w-fit md:flex-row md:justify-between md:items-center",
            {
              "h-screen gap-8": showMenu,
              "h-screen -translate-x-full": !showMenu,
            }
          )}
        >
          <MenuItem hidde={() => setShowMenu(false)} id="home">
            kikis
          </MenuItem>
          <MenuItem hidde={() => setShowMenu(false)} id="about">
            Acerca de
          </MenuItem>
        </ul>
      </nav>
    </header>
  );
}
