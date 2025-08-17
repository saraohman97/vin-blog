import Client from "./(components)/client";
import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { CountriesColumn } from "./(components)/columns";

const CountriesPage = async () => {
  const countries = await prismadb.country.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

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
