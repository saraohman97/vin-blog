import Client from "./(components)/client";
import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { BrandsColumn } from "./(components)/columns";
import getBrands from "@/actions/getBrands";

const BrandsPage = async () => {
  const data = await getBrands();

  const formatted: BrandsColumn[] = data.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return <Client data={formatted} />;
};

export default BrandsPage;
