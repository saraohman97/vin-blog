"use client";

import Navbar from "@/components/navbar";
import StarsRating from "@/components/stars";
import { Image as ImageType, Wine } from "@prisma/client";
import Image from "next/image";

interface WineProps {
  item:
    | (Wine & {
        images: ImageType[];
      })
    | null;
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

      <div className="max-w-screen-xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-10 w-full">
        {/* IMAGES GRID */}
        <div className="grid grid-cols-4 grid-rows-4 gap-2 max-h-[700px]">
          <div className={`col-span-3 row-span-4 max-md:col-span-4 max-md:row-span-3`}>
            <Image
              src={`${item?.images.map((image) => image.url)}`}
              alt=""
              width={1000}
              height={1000}
              className={`bg-white border-4 border-red-100 rounded-xl h-full ${
                item?.zoomImage ? "object-cover p-0" : "object-contain p-10"
              }`}
            />
          </div>
          <div className="row-span-2 max-md:row-span-1 max-md:col-span-2">
            <Image
              src={`${item?.images.map((image) => image.url)}`}
              alt=""
              width={1000}
              height={1000}
              className={`bg-white border-4 border-red-100 rounded-xl h-full ${
                item?.zoomImage ? "object-cover p-0" : "object-contain p-2"
              }`}
            />
          </div>
          <div className="row-span-2 max-md:row-span-1 max-md:col-span-2">
            <Image
              src={`${item?.images.map((image) => image.url)}`}
              alt=""
              width={1000}
              height={1000}
              className={`bg-white border-4 border-red-100 rounded-xl h-full ${
                item?.zoomImage ? "object-cover p-0" : "object-contain p-2"
              }`}
            />
          </div>
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
            {/* <span className="text-red-300 cursor-pointer underline underline-offset-4 font-bold">
              Läs mer på www.website.com
            </span> */}
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
