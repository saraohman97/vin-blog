"use client";

import Navbar from "@/components/navbar";
import StarsRating from "@/components/stars";
import { Wine } from "@/types";
import Image from "next/image";

interface WineProps {
  item: Wine;
}

const SingleWineClient: React.FC<WineProps> = ({ item }) => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />

      <h1 className="pt-32 px-4 text-center text-8xl max-md:text-4xl font-serif font-bold">
        {item?.brand}
      </h1>
      <h2 className="text-xl pb-4 text-center font-bold font-serif">
        {item?.label}
      </h2>

      <div className="max-w-screen-xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-10">
        <div className="flex max-md:flex-col max-md:gap-2">
          <Image
            src={item?.images[0]?.url}
            alt=""
            width={1000}
            height={1000}
            className={`max-h-96 md:max-h-[1000px] bg-white border-4 mr-4 border-red-100 w-full rounded-xl ${
              item?.zoomImage ? "object-cover py-0" : "object-contain py-10"
            }`}
          />
          {!item?.zoomImage && (
            <div className="max-md:flex max-md:w-full max-md:gap-2">
              <Image
                src={item?.images?.[1]?.url || item?.images?.[0]?.url}
                alt=""
                width={1000}
                height={1000}
                className={`object-contain bg-white border-4 mb-4 border-red-100 w-full py-10 px-2 rounded-xl max-h-96`}
              />
              <Image
                src={item?.images?.[2]?.url || item?.images?.[0]?.url}
                alt=""
                width={1000}
                height={1000}
                className="object-contain bg-white border-4 border-red-100 w-full py-10 px-2 rounded-xl max-h-96"
              />
            </div>
          )}
        </div>

        <div>
          <div className="text-2xl font-bold text-red-800">Om vinet</div>
          <div className="my-4 flex flex-wrap gap-4">
            {item?.color && (
              <div className="border-2 cursor-pointer hover:bg-red-200 hover:border-transparent border-gray-800 text-gray-800 rounded-full py-2 px-6 w-fit">
                {item?.color}
              </div>
            )}
            {item?.flavor && (
              <div className="border-2 cursor-pointer hover:bg-red-200 hover:border-transparent border-gray-800 text-gray-800 rounded-full py-2 px-6 w-fit">
                {item?.flavor}
              </div>
            )}
            {item?.country && (
              <div className="border-2 cursor-pointer hover:bg-red-200 hover:border-transparent border-gray-800 text-gray-800 rounded-full py-2 px-6 w-fit">
                {item?.country}
              </div>
            )}
          </div>

          <div className="font-light mb-4">
            {item?.description}{" "}
            <span className="text-red-300 cursor-pointer underline underline-offset-4 font-bold">
              Läs mer på www.website.com
            </span>
          </div>

          {item?.price && (
            <div className="font-bold mb-4">Pris: {item?.price} KR</div>
          )}
          {item?.grape && (
            <div className="font-bold mb-4">Druva: {item?.grape}</div>
          )}
          <div className="font-bold mb-4">
            Andra viner av samma märke:{" "}
            <span className="underline underline-offset-4 cursor-pointer">
              {item?.brand}
            </span>
          </div>
          <StarsRating item={item} />
        </div>
      </div>
    </div>
  );
};

export default SingleWineClient;
