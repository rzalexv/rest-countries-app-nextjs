import { Country } from "@/interfaces";

export const getCountryByName = async (name: string) => {
  const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const countries: Country[] = await data.json();
  return countries;
};
