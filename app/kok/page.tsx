import DarkNavbar from "@/components/dark-navbar";
import Recipe from "@/components/recipe";
import Image from "next/image";

export default function Kok() {
  return (
    <div>
      <DarkNavbar />
      {/* HERO */}
      <Image
        src="/hero-3.jpg"
        alt=""
        width={2000}
        height={2000}
        className="object-cover h-[800px]"
      />
      <h1 className="absolute h-screen inset-0 flex items-center justify-center md:pb-20 max-w-screen-lg mx-auto text-center text-6xl md:text-8xl font-serif font-bold text-white">
        Rätter för alla tillfällen
      </h1>

      <div className="bg-white text-black">
        <div className="max-w-screen-xl mx-auto py-10 px-4">
          {/* HEADER */}
          <div className="md:mb-8 font-bold font-serif text-center">
            <h1 className="text-4xl md:text-5xl">Kök & Recept</h1>
            <div>Dokumenterade rätter och hur de smakar</div>
          </div>

          <div className="flex max-md:flex-col-reverse gap-10">
            {/* MAIN */}
            <div className="flex flex-wrap gap-10 w-full">
              <Recipe />
              <Recipe />
              <Recipe />
              <Recipe />
              <Recipe />
              <Recipe />
              <Recipe />
              <Recipe />
              <Recipe />
              <Recipe />
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
                  Barolo
                </button>
                <button className="h-10 px-4 border rounded-3xl hover:bg-gray-50 hover:text-red-900 hover:border-red-900 text-sm font-bold">
                  Rosso
                </button>
                <button className="h-10 px-4 border rounded-3xl hover:bg-gray-50 hover:text-red-900 hover:border-red-900 text-sm font-bold">
                  BaroloRoso
                </button>
                <button className="h-10 px-4 border rounded-3xl hover:bg-gray-50 hover:text-red-900 hover:border-red-900 text-sm font-bold">
                  Barolo
                </button>
                <button className="h-10 px-4 border rounded-3xl hover:bg-gray-50 hover:text-red-900 hover:border-red-900 text-sm font-bold">
                  Barolo
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10">Kategorier:</div>
          <div>Vin - rött vin - Dokumenterade röda viner och hur de smakar</div>
          <div>Mat - bakverk, vardag, </div>
        </div>
      </div>
    </div>
  );
}
