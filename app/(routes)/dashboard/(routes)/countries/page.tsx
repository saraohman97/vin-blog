import Client from "./(components)/client";
import { format } from "date-fns";
import { CountriesColumn } from "./(components)/columns";
import getCountries from "@/actions/getCountries";

const CountriesPage = async () => {
  const countries = await getCountries();

  const formatted: CountriesColumn[] = countries.map((item) => ({
    id: item.id,
    name: item.name,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <>
      <Client data={formatted} />
    </>
  );
};

export default CountriesPage;
