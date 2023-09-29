import { FC } from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FaArrowLeft } from "react-icons/fa";

import { formatNumber, getCountryByCode } from "@/utils";
import { CountryBorder } from "@/components";
import { Country } from "@/interfaces";

interface Params {
  code: string;
}

interface Props {
  params: Params;
}

export async function generateStaticParams() {
  const countries: Country[] = await fetch("https://restcountries.com/v3.1/all").then((res) => res.json());

  return countries.map((country) => ({
    code: country.cca3,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = params;
  const country = await getCountryByCode(code);
  if (!country) return {};

  return {
    title: `RestCountriesApp | ${country.name.common}`,
    description: `Short description for the country of ${country.name.common}${country.subregion ? ` located in the continent of ${country.subregion}.` : "."}`,
    keywords: [],
    openGraph: {
      title: `RestCountriesApp | ${country.name.common}`,
      images: [country.flags.png],
      description: `Short description for the country of ${country.name.common}${country.subregion ? ` located in the continent of ${country.subregion}.` : "."}`,
    },
  };
}

const CountryPage: FC<Props> = async ({ params }) => {
  const country = await getCountryByCode(params.code);

  if (!country) notFound();

  const languages = Object.values(country.languages || {});
  const currencies = Object.values(country.currencies || {});
  const nativeNames = Object.values(country.name.nativeName || {});

  return (
    <div className="container my-20">
      <Link href="/" className="shadow-xl rounded-md px-8 py-2 inline-flex items-center gap-2 transition-colors duration-300 hover:bg-neutral-200 dark:bg-dark-soft dark:hover:bg-slate-700">
        <FaArrowLeft size={14} /> Back
      </Link>

      <div className="gap-6 grid sm:justify-items-center lg:grid-cols-2 mt-12 xl:justify-items-start xl:gap-24">
        <Image src={country.flags.svg} alt={country.flags.alt || country.name.common} width={320} height={200} className="w-full max-w-xl xl:max-w-full" />
        <div className="grid gap-5">
          <h1 className="text-2xl font-extrabold">{country.name.common}</h1>

          <div className="grid gap-8 sm:grid-cols-2">
            <ul className="grid gap-2">
              <li>
                <span className="font-extrabold">Native Name: </span>
                {nativeNames.map((native, index) => {
                  if (index == nativeNames.length - 1) return <span key={index}>{native.common}</span>;
                })}
              </li>
              <li>
                <span className="font-extrabold">Population:</span> {formatNumber(country.population)}
              </li>
              <li>
                <span className="font-extrabold">Region:</span> {country.region}
              </li>
              <li>
                <span className="font-extrabold">Sub Region:</span> {country.subregion || "No data found"}
              </li>
              <li>
                <span className="font-extrabold">Capital:</span> {country.capital?.join(", ") || "No data found"}
              </li>
            </ul>
            <ul className="grid gap-2 auto-rows-min">
              <li>
                <span className="font-extrabold">Top Level Domain:</span> {country.tld}
              </li>
              <li>
                <span className="font-extrabold">Currency: </span>
                {currencies.map((currency, index) => (
                  <span key={index}>{currency.name}</span>
                ))}
              </li>

              <li>
                <span className="font-extrabold">Languagues: </span>
                {languages.length > 0 ? <span>{languages.join(", ")}</span> : "No data found"}
              </li>
            </ul>

            <div className="grid sm:col-span-2 gap-5 md:grid-flow-col">
              <p className="font-extrabold">Border Countries:</p>
              {country.borders && country.borders.length > 0 ? (
                <ul className="flex gap-4 flex-wrap">
                  {country.borders?.map((border, index) => (
                    <CountryBorder key={index} border={border} />
                  ))}
                </ul>
              ) : (
                <span>No borders with another country</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
