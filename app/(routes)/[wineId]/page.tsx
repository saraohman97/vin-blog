import LightNavbar from "@/components/light-navbar";
import prismadb from "@/lib/prismadb";
import { Image as ImageType } from "@/types";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import SingleWineClient from "./client";

const SingleWinePage = async ({ params }: { params: { wineId: string } }) => {
  const wine = await prismadb.wine.findUnique({
    where: {
      id: params.wineId
    },
    include: {
      images: true
    }
  })

  return (
    <SingleWineClient item={wine} />
  );
};

export default SingleWinePage;
