import Client from "./(components)/client";
import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { BrandsColumn } from "./(components)/columns";

const BrandsPage = async () => {
  const brands = await prismadb.brand.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatted: BrandsColumn[] = brands.map((item) => ({
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

export default BrandsPage;
