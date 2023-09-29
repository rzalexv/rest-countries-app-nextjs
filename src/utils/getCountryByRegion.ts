import { Country } from "@/interfaces";

export const getCountriesByRegion = async (region: string) => {
  const data = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  const countries: Country[] = await data.json();
  return countries;
};
