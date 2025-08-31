import Client from "./(components)/client";
import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { BrandsColumn } from "./(components)/columns";
import getBrands from "@/actions/getBrands";

const BrandsPage = async () => {
  const brands = await getBrands();

  const formatted: BrandsColumn[] = brands.map((item) => ({
    id: item.id,
    name: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <>
      <Client data={formatted} />
    </>
  );
};

export default BrandsPage;
