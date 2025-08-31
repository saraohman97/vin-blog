import Client from "./(components)/client";
import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { FlavorsColumn } from "./(components)/columns";
import getFlavors from "@/actions/getFlavors";

const FlavorsPage = async () => {
  const flavors = await getFlavors();

  const formatted: FlavorsColumn[] = flavors.map((item) => ({
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

export default FlavorsPage;
