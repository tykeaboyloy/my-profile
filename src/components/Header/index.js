"use client";
import Link from "next/link";
import { MoonIcon, SunIcon } from "../Icons";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useRef, useEffect, useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setClick(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className=" p-4 px-5 sm:px-10 flex justify-end items-center sm:mx-8 md:mx-14 dark:bg-dark bg-[#fff] border-x-[1px] border-zinc-100 dark:border-zinc-300/20">
      <button
        className="inline-block md:hidden z-50 mx-7"
        onClick={toggle}
        ref={dropdownRef}
        aria-label="Hamburger Menu"
      >
        <div className="w-8 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  md:hidden
        absolute top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
      </nav>

      <nav
        className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden md:flex
        absolute top-4 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
      </nav>

      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={cx(
          "w-8 h-8 ease ml-2 items-center rounded-full p-1",
          mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
        )}
        aria-label="theme-switcher"
      >
        {mode === "light" ? (
          <MoonIcon className={"fill-dark"} />
        ) : (
          <SunIcon className={"fill-dark"} />
        )}
      </button>
    </header>
  );
};

export default Header;
