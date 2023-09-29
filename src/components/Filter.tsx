"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const options = [
  {
    id: "1",
    option: "Africa",
  },
  {
    id: "2",
    option: "Americas",
  },
  {
    id: "3",
    option: "Asia",
  },
  {
    id: "4",
    option: "Europe",
  },
  {
    id: "5",
    option: "Oceania",
  },
];

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const search = params.get("search");

  return (
    <div className="max-w-[220px] relative">
      <button className="w-full h-full justify-between py-4 px-8 bg-white dark:bg-dark-soft rounded-lg shadow-lg flex items-center gap-8 transition-colors duration-300" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-sm">Filter by Region</span>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>

      {isOpen && (
        <ul className="absolute left-0 right-0 rounded-lg py-4 px-6 top-[calc(100%+1rem)] bg-white dark:bg-dark-soft z-50 transition-colors duration-300">
          <li className="cursor-pointer">
            <Link
              href={{
                pathname,
                query: {
                  ...(search ? { search } : {}),
                },
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              All
            </Link>
          </li>
          {options.map(({ id, option }) => (
            <li key={id} className="cursor-pointer">
              <Link
                href={{
                  pathname,
                  query: {
                    ...(search ? { search } : {}),
                    filter: option.toLowerCase(),
                  },
                }}
                onClick={() => setIsOpen(!isOpen)}
              >
                {option}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
