import { Image as ImageType, Wine } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";
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
        // src="/wine.png"
        src={item?.images?.[0]?.url}
        alt=""
        width={500}
        height={500}
        className="max-h-72 h-full object-contain rounded-t-xl pt-4 hover:p-0 transition-all duration-300"
      />
      <h3 className="p-4 pb-0 font-bold">{item.brand}</h3>
      <div className="flex gap-2 p-4 pt-2">
        <FaStar size={25} />
        <FaStar size={25} />
        <FaStar size={25} />
        <FaStar size={25} />
        <FaRegStar size={25} />
      </div>
    </Link>
  );
};

export default WineItem;
