import WinesClient from "./(components)/client";
import { format } from "date-fns";
import { WinesColumn } from "./(components)/columns";
import getDashboardWines from "@/actions/getDashboardWines";

const WinesPage = async () => {
  const wines = await getDashboardWines();

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
    zoomImage: item.zoomImage,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <>
      <WinesClient data={formattedWines} />
    </>
  );
};

export default WinesPage;
