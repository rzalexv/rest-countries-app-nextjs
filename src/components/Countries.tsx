import { Params } from "@/app/page";
import { Card } from ".";
import { getCountries } from "@/utils/getCountries";

export const Countries = async ({ searchParams }: Params) => {
  const countries = await getCountries(searchParams);

  return (
    <>
      {countries.length > 0 ? (
        <>
          {countries
            .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
            .map((country) => (
              <Card country={country} key={country.cca3} />
            ))}
        </>
      ) : (
        <h3 className="font-bold text-2xl">Country not found...</h3>
      )}
    </>
  );
};
