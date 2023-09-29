import { Country } from "@/interfaces";

const getCountriesCode = async () => {
  const data = await fetch("https://restcountries.com/v3.1/all");
  const countries: Country[] = await data.json();

  return countries.map((country) => ({
    code: country.cca3,
  }));
};

export default async function sitemap() {
  const countries = await getCountriesCode();

  const countriesCode = countries.map((country) => ({
    url: `${process.env.NEXT_PUBLIC_URL}/country/${country.code}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...countriesCode,
  ];
}
