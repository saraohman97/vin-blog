import Client from "./(components)/client";
import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { GrapesColumn } from "./(components)/columns";

const GrapesPage = async () => {
  const grapes = await prismadb.grape.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatted: GrapesColumn[] = grapes.map((item) => ({
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

export default GrapesPage;
