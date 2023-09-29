import Link from "next/link";
import { ToggleMode } from ".";

export const Header = () => {
  return (
    <div className="h-24 shadow-xl dark:bg-dark-soft bg-white transition-colors duration-300">
      <div className="container flex items-center justify-between h-full">
        <Link href="/">
          <h1 className="font-extrabold lg:text-2xl tracking-wider">Where in the world?</h1>
        </Link>
        <ToggleMode />
      </div>
    </div>
  );
};
