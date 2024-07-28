import Image from "next/image";
import { BsPrinter } from "react-icons/bs";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Article = () => {
  return (
    <div className="relative">

      <div className="text-black bg-gray-50 border w-full rounded-xl">
        {/* TEXT */}
        <h1 className="font-bold font-serif text-3xl text-center pt-10 pb-0 text-gray-700">
        Hemgjorda glassbåtar
      </h1>
        <div className="flex gap-10 p-10">
          {/* INGREDIENSER */}
          <div className="w-[500px] leading-loose text-gray-700 border-r p-4 flex flex-col items-right justify-center rounded text-right">
            <div className="font-bold font-serif text-xl mb-3">
              Ingredienser
            </div>
            <div>6 mjuka tacobåtar </div>
            <div>1 liter vaniljglass</div>
            <div>1 dl jordubbssylt</div>
            <div>200 g mörk choklad</div>
          </div>

          {/* BESKRIVNING */}
          <ol className="space-y-4 list-decimal text-gray-700">

            <div className="font-bold font-serif text-xl mb-3">Gör såhär</div>
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

        <div className="px-4 pb-4 text-center flex gap-8">
          <div>labels</div>
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
        {/* IMAGE */}
        <Image
          src="/article.webp"
          alt=""
          width={1000}
          height={1000}
          className={`max-h-[400px] object-cover rounded-b-xl`}
        />
      </div>
    </div>
  );
};

export default Article;
