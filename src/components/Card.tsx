import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Country } from "@/interfaces";
import { formatNumber } from "@/utils";

interface Props {
  country: Country;
}

export const Card: FC<Props> = ({ country }) => {
  return (
    <Link href={`/country/${country.cca3}`} className="block shadow-xl rounded-lg overflow-hidden dark:bg-dark-soft max-w-[280px] w-full h-fit transition-colors duration-300">
      <div className="h-40 relative">
        <Image src={country.flags.png} alt={country.flags.alt || country.name.common} className="object-cover" fill sizes="(min-width: 640px) 50vw,100vw" />
      </div>
      <div className="p-6">
        <h3 className="font-extrabold text-lg">{country.name.common}</h3>
        <ul className="mt-4 grid gap-1">
          <li>
            <span className="font-semibold">Population:</span> {formatNumber(country.population)}
          </li>
          <li>
            <span className="font-semibold">Region:</span> {country.region}
          </li>
          {country.capital && country.capital?.length > 1 ? (
            <li>
              <span className="font-semibold">Capitals:</span>
              <ul>
                {country.capital?.map((capital, index) => (
                  <li key={index}>- {capital}</li>
                ))}
              </ul>
            </li>
          ) : (
            <li>
              <span className="font-semibold">Capital:</span> {country.capital || "No data found"}
            </li>
          )}
        </ul>
      </div>
    </Link>
  );
};
