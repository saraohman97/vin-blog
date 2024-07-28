import Article from "@/components/article";
import Image from "next/image";

const kok = () => {
  return (
    <>
      <div className="bg-white h-14 fixed top-0 w-full" />

      <div className="bg-white text-black">
        <div className="max-w-screen-xl mx-auto py-20 px-4">
          {/* HEADER */}
          <div className="md:mb-8 font-bold font-serif text-center">
            <h1 className="text-4xl md:text-5xl">Kök & Recept</h1>
            <div>Dokumenterade rätter och hur de smakar</div>
          </div>

          <div className="flex max-md:flex-col-reverse gap-10">
            {/* MAIN */}
            <div className="flex flex-wrap gap-10 w-full">
              <Article />
              <Article />
              <Article />
            </div>

            {/* SIDEBAR */}
            <div className="p-4 md:w-1/3 rounded-xl h-fit">
              <h3 className="mb-2 font-serif font-bold">Sök</h3>
              <input
                type="text"
                placeholder="Namn / datum"
                className="h-10 w-full font-serif bg-transparent px-4 border rounded-full outline-none hover:bg-gray-50 mb-4"
              />
              <div className="flex flex-wrap gap-2">
                <button className="h-10 px-4 border rounded-3xl hover:bg-gray-50 hover:text-red-900 hover:border-red-900 text-sm font-bold">
                  Middag
                </button>
                <button className="h-10 px-4 border rounded-3xl hover:bg-gray-50 hover:text-red-900 hover:border-red-900 text-sm font-bold">
                  Bakelse
                </button>
                <button className="h-10 px-4 border rounded-3xl hover:bg-gray-50 hover:text-red-900 hover:border-red-900 text-sm font-bold">
                  Vin
                </button>
                <button className="h-10 px-4 border rounded-3xl hover:bg-gray-50 hover:text-red-900 hover:border-red-900 text-sm font-bold">
                  Recept
                </button>
                <button className="h-10 px-4 border rounded-3xl hover:bg-gray-50 hover:text-red-900 hover:border-red-900 text-sm font-bold">
                  Artikel
                </button>
              </div>

              <Image
                src="/heart-text.png"
                alt=""
                width={1000}
                height={1000}
                className="mt-10"
              />
            </div>
          </div>

          <div className="mt-10">Kategorier:</div>
          <div>Vin - rött vin - Dokumenterade röda viner och hur de smakar</div>
          <div>Mat - bakverk, vardag, </div>
        </div>
      </div>
    </>
  );
};

export default kok;
