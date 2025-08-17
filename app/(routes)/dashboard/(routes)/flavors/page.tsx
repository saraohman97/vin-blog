import Client from "./(components)/client";
import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { FlavorsColumn } from "./(components)/columns";

const FlavorsPage = async () => {
  const flavors = await prismadb.flavor.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatted: FlavorsColumn[] = flavors.map((item) => ({
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

export default FlavorsPage;
