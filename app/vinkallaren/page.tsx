import LightNavbar from "@/components/light-navbar";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";

const Vinkallaren = () => {
  return (
    <div className="bg-gray-50">
      <LightNavbar />
      {/* <div className="bg-white h-14 fixed top-0 w-full" /> */}

      <h1 className="pt-32 px-4 text-center text-8xl max-md:text-4xl font-serif font-bold">
        Villa Puccini
      </h1>
      <h2 className="text-xl pb-4 text-center font-bold font-serif">Toscana</h2>

      <div className="max-w-screen-xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-10">
        <div className="flex max-sm:flex-col">
          <Image
            src="/wine.png"
            alt=""
            width={1000}
            height={1000}
            className="max-h-[1000px] bg-white object-contain border-4 mr-4 border-red-100 w-full py-10 rounded-xl"
          />
          <div>
            <Image
              src="/wine.png"
              alt=""
              width={1000}
              height={1000}
              className="object-contain bg-white border-4 mb-4 border-red-100 w-fit py-10 rounded-xl max-h-96"
            />
            <Image
              src="/wine.png"
              alt=""
              width={1000}
              height={1000}
              className="object-contain bg-white border-4 border-red-100 w-fit py-10 rounded-xl max-h-96"
            />
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-red-800">Om vinet</div>
          <div className="my-4 flex flex-wrap gap-4">
            <div className="border-2 cursor-pointer hover:bg-red-200 hover:border-transparent border-gray-800 text-gray-800 rounded-full py-2 px-6 w-fit">
              Rött vin
            </div>
            <div className="border-2 cursor-pointer hover:bg-red-200 hover:border-transparent border-gray-800 text-gray-800 rounded-full py-2 px-6 w-fit">
              Kryddigt & mustigt
            </div>
            <div className="border-2 cursor-pointer hover:bg-red-200 hover:border-transparent border-gray-800 text-gray-800 rounded-full py-2 px-6 w-fit">
              99 kr
            </div>
            <div className="border-2 cursor-pointer hover:bg-red-200 hover:border-transparent border-gray-800 text-gray-800 rounded-full py-2 px-6 w-fit">
              Italien
            </div>
          </div>

          <div className="font-light mb-4">
            Familjen Castallini odlar vin på cirka 1 000 hektar i Maremma,
            Chianti och Chianti Classico. Villa Puccini är producenten
            Castellanis hyllning till kompositören Giacomo Puccini som vid förra
            sekelskiftet komponerade operor som Tosca, Madame Butterfly och
            Boheme. Puccini bodde i Villa Toscana inte långt från Castellanis
            ägor.{" "}
            <span className="text-red-300 cursor-pointer underline underline-offset-4 font-bold">
              Läs mer på www.website.com
            </span>
          </div>

          {/* 
          <div className="font-bold mb-4">Pris: 99 kr</div>
          <div className="font-bold mb-4">Varifrån: Italien</div> */}
          <div className="font-bold mb-4">Druva: Xdruva</div>
          <div className="font-bold mb-4">Andra vin av samma märke: <span className="underline underline-offset-4 cursor-pointer">Chianti</span></div>

          <div className="flex gap-2">
            <FaStar size={25} />
            <FaStar size={25} />
            <FaStar size={25} />
            <FaStar size={25} />
            <FaRegStar size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vinkallaren;
