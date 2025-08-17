import { Wine } from "@/types";
import Link from "next/link";
import Image from "next/image";
import StarsRating from "./stars";
// laktris: bg-[#2f1d1d]
// svart: bg-[#101010]

interface WineItemProps {
  item: Wine;
}

const WineItem: React.FC<WineItemProps> = ({ item }) => {
  return (
    <Link
      href={`/${item.id}`}
      className="bg-gray-50 rounded-xl text-black md:w-48"
    >
      <Image
        src={item?.images?.[0]?.url}
        alt=""
        width={500}
        height={500}
        className={`h-72 object-contain rounded-t-xl pt-4 hover:p-0 transition-all duration-300 ${
          item.zoomImage && "pt-0 object-cover"
        }`}
      />
      <h3 className="p-4 pb-0 font-bold">{item.brand}</h3>
      <StarsRating item={item} />
    </Link>
  );
};

export default WineItem;
