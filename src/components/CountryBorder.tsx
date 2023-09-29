import { FC } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getCountryByCode } from "@/utils";

interface Props {
  border: string;
}

export const CountryBorder: FC<Props> = async ({ border }) => {
  const country = await getCountryByCode(border);
  if (!country) notFound();

  return (
    <Link href={`/country/${country.cca3}`} className="inline-flex text-sm gap-2 items-center shadow-lg bg-white rounded-md py-1 px-3 transition-colors duration-300 hover:bg-neutral-200 dark:bg-dark-soft dark:text-white dark:hover:bg-slate-700">
      <span className="text-2xl">{country.flag}</span> {country.name.common}
    </Link>
  );
};
