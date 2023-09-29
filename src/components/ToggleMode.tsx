"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiMoon, HiOutlineMoon } from "react-icons/hi";

export const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  const handleTheme = () => (isDark ? setTheme("light") : setTheme("dark"));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="flex gap-2 items-center font-semibold">
        <HiOutlineMoon size="20px" />
        Light Mode
      </button>
    );
  }
  return (
    <>
      <button className="flex gap-2 items-center font-semibold" onClick={handleTheme}>
        {isDark ? (
          <>
            <HiMoon size="20px" /> Dark
          </>
        ) : (
          <>
            <HiOutlineMoon size="20px" /> Light
          </>
        )}
        &nbsp;Mode
      </button>
    </>
  );
};
