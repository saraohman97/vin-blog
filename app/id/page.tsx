import Image from "next/image";
import { BsPrinter } from "react-icons/bs";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Vinkallaren = () => {
  return (
    <div className="bg-gray-50">
      {/* <div className="bg-white h-14 fixed top-0 w-full" /> */}

      <h1 className="pt-32 px-4 text-center text-8xl max-md:text-4xl font-serif font-bold max-w-screen-lg mx-auto">
        Hemgjorda glassbåtar
      </h1>
      <h2 className="text-xl pb-10 text-center font-bold font-serif">
        Dessert
      </h2>

      <div className="max-w-screen-xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-10">
        <div className="flex max-sm:flex-col w-full">
          <Image
            src="/article.webp"
            alt=""
            width={1000}
            height={1000}
            className="h-[1000px] w-2/3 bg-white object-cover border-4 mr-4 border-red-100 rounded-xl"
          />
          <div className="w-1/3">
            <Image
              src="/article.webp"
              alt=""
              width={1000}
              height={1000}
              className="object-cover bg-white border-4 mb-4 border-red-100 rounded-xl h-[395px] w-40"
            />
            <Image
              src="/article.webp"
              alt=""
              width={1000}
              height={1000}
              className="object-cover bg-white border-4 border-red-100 rounded-xl h-[395px] w-40"
            />
          </div>
        </div>
        <div>
          {/* <div className="text-2xl font-bold text-red-800">Om dessert</div> */}
          {/* <div className="my-4 flex flex-wrap gap-4">
            <div className="border-2 cursor-pointer bg-white hover:bg-red-200 hover:border-transparent border-gray-800 text-gray-800 rounded-full py-2 px-6 w-fit">
              Dessert
            </div>
            <div className="border-2 cursor-pointer bg-white hover:bg-red-200 hover:border-transparent border-gray-800 text-gray-800 rounded-full py-2 px-6 w-fit">
              15 min
            </div>
          </div> */}

          <div className="text-center flex gap-8">
            <div>30 min</div>
            <div>|</div>
            <div className="flex gap-4 items-center">
              <IoCloudDownloadOutline size={20} />
              <BsPrinter size={20} />
              <CiFacebook size={20} />
              <CiInstagram size={20} />
            </div>

            <div>|</div>

            <div className="flex items-center gap-2">
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaRegStar size={25} />
            </div>
          </div>

          <div className="font-light my-8">
            <div className="text-2xl font-bold text-red-800">Ingredienser</div>
            <div className="border-b pt-2">6 mjuka tacobåtar </div>
            <div className="border-b pt-2">1 liter vaniljglass</div>
            <div className="border-b pt-2">1 dl jordubbssylt</div>
            <div className="border-b pt-2">200 g mörk choklad</div>
          </div>

          <div className="text-2xl font-bold text-red-800">Gör såhär</div>
          <ol className="space-y-4 list-decimal text-gray-700 ml-10">
            {/* <div className="font-bold font-serif text-xl mb-3">Gör såhär</div> */}
            <li>
              Ställ ut tortillaskålarna på en bricka som får plats i frysen.
            </li>
            <li>
              Vispa vaniljglassen mjuk med en elvisp och häll sedan ner den i en
              spritspåse.
            </li>
            <li>
              Fyll botten av tortillaskålarna med vaniljglass och fördela sedan
              jordgubbssylten i mitten i varje skål. Spritsa sedan på ett lager
              vaniljglass till. Ställ in i frysen tills de är helt frysta, ca 4
              timmar.
            </li>
            <li>
              Hacka och smält chokladen över vattenbad. Doppa sedan glassbåtarna
              i chokladen. Servera direkt eller frys in.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Vinkallaren;
