import SingleWineClient from "./client";
import React from "react";
import { redirect } from "next/navigation";

interface WineIdProps {
  params: {
    wineId: string;
  }
}

const SingleWinePage: React.FC<WineIdProps> = async ({params}) => {
  const wine = await prisma?.wine.findFirst({
    where: {
      id: params.wineId
    },
    include: {
      images: true
    }
  })

  if(!wine) {
    redirect("/")
  }

  return (
    <SingleWineClient item={wine} />
  );
};

export default SingleWinePage;
