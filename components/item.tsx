import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
// laktris: bg-[#2f1d1d] 
// svart: bg-[#101010]

const Item = () => {
  return (
    <div className="bg-gray-50 rounded-xl text-black md:w-48">
      <Image
        src="/wine.png"
        alt=""
        width={500}
        height={500}
        className="max-h-72 object-contain rounded-t-xl pt-4 hover:p-0 transition-all duration-300"
      />
      <h3 className="p-4 pb-0 font-bold">Villa Puccini</h3>
      <div className="flex gap-2 p-4 pt-2">
        <FaStar size={25} />
        <FaStar size={25} />
        <FaStar size={25} />
        <FaStar size={25} />
        <FaRegStar size={25} />
      </div>
    </div>
  );
};

export default Item;
