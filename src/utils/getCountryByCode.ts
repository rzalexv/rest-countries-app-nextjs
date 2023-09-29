import { Country } from "@/interfaces";

export const getCountryByCode = async (code: string): Promise<Country | undefined> => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  if (!res.ok) {
    return undefined;
  }
  const data = await res.json();
  return data[0];
};
