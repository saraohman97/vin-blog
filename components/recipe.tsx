import Image from "next/image";
import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";

const Recipe = () => {
  return (
    <Link href="/id" className="bg-gray-50 rounded-xl text-black md:w-48">
      <Image
        src="/article.webp"
        alt=""
        width={500}
        height={500}
        className="h-80 object-cover rounded-t-xl hover:p-0 transition-all duration-300"
      />
      <h3 className="p-4 pb-0 font-bold">Hemgjorda glassbåtar</h3>
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

export default Recipe;
