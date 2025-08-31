import Client from "./(components)/client";
import { format } from "date-fns";
import { BrandsColumn } from "./(components)/columns";
// import getBrands from "@/actions/getBrands";
import prismadb from "@/lib/prismadb";

const BrandsPage = async () => {
  // const data = await getBrands();

  const data = await prismadb.brand.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatted: BrandsColumn[] = data.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return <Client data={formatted} />;
};

export default BrandsPage;
