import { Params, SearchParams } from "@/app/page";
import { Country } from "@/interfaces";
import { getCountriesByRegion, getCountryByName } from ".";

export const getCountries = async (searchParams: SearchParams) => {
  const { filter, search } = searchParams;

  if (filter && search) {
    const data = await fetch(`https://restcountries.com/v3.1/region/${filter}`);
    const countries: Country[] = await data.json();

    return countries.filter((country) => country.name.common.toLowerCase().includes(search));
  }

  if (filter) {
    const countries = await getCountriesByRegion(filter);
    return countries;
  }

  if (search) {
    const countries = await getCountryByName(search);
    return countries;
  }

  const data = await fetch("https://restcountries.com/v3.1/all");
  const countries: Country[] = await data.json();

  return countries;
};
