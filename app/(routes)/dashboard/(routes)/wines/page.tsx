import WinesClient from "./(components)/client";
import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { WinesColumn, columns } from "./(components)/columns";
// import { formatter } from "@/lib/utils";

const WinesPage = async () => {
  const wines = await prismadb.wine.findMany({
    include: {
      images: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedWines: WinesColumn[] = wines.map((item) => ({
    id: item.id,
    label: item.label,
    brand: item.brand,
    description: item.description,
    color: item.color,
    flavor: item.flavor,
    country: item.country,
    price: item.price,
    grape: item.grape,
    review: item.review,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <>
      <WinesClient data={formattedWines} />
    </>
  );
};

export default WinesPage;
