"use client";

import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const debounced = useDebouncedCallback((value: string) => {
    if (!value) {
    }

    if (value.trim() == "") {
      params.delete("search");
      const url = `${pathname}?${params.toString()}`;
      router.push(url);
    } else {
      params.set("search", value);
      const url = `${pathname}?${params.toString()}`;
      router.push(url);
    }
  }, 500);

  return (
    <div className="flex max-w-md relative rounded-lg shadow-lg w-full">
      <input type="text" className=" rounded-lg w-full pl-20 py-4 pr-8 dark:bg-dark-soft placeholder:opacity-80 dark:placeholder:text-white transition-colors duration-300" placeholder="Search for a country..." aria-label="Input to search for any country by name" onChange={(e) => debounced(e.target.value)} />
      <div className="absolute h-full flex items-center justify-center left-8 text-light-gray dark:text-white">
        <FaSearch size={16} />
      </div>
    </div>
  );
};
