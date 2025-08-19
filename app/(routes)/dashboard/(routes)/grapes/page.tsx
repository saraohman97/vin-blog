import Client from "./(components)/client";
import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { GrapesColumn } from "./(components)/columns";
import getGrapes from "@/actions/getGrapes";

const GrapesPage = async () => {
  const grapes = await getGrapes();

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
