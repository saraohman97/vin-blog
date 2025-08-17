import getWines from "@/actions/getWines";
import Navbar from "@/components/navbar";
import WineItem from "@/components/wine-item";
import Image from "next/image";
// laktris: bg-[#1B1212]
// black: bg-[#0b0b0b]

export default async function Home() {
  const wines = await getWines();

  return (
    <main>
      <Navbar dark />

      {/* HERO */}
      <Image
        src="/hero.jpg"
        alt=""
        width={2000}
        height={2000}
        className="object-cover h-[800px]"
      />
      <h1 className="absolute h-screen inset-0 text-white flex items-center justify-center md:pb-20 max-w-screen-lg mx-auto text-center text-6xl md:text-8xl font-serif font-bold">
        Rött vin för alla tillfällen
      </h1>

      <div className="bg-white text-black">
        <div className="max-w-screen-xl mx-auto py-10 px-4">
          {/* HEADER */}
          <div className="md:mb-8 font-bold font-serif text-center">
            <h1 className="text-4xl md:text-5xl">Vinkällaren</h1>
            <div>Dokumenterade röda viner och hur de smakar</div>
          </div>

          <div className="flex max-md:flex-col-reverse gap-10">
            {/* MAIN */}
            <div className="flex flex-wrap gap-10 w-full">
              {wines.length ? (
                <>
                  {wines.map((item) => {
                    return <WineItem key={item.id} item={item} />;
                  })}
                </>
              ) : (
                "Inga inlägg"
              )}
            </div>

            {/* SIDEBAR */}
            <div className="p-4 md:w-1/3 rounded-xl h-fit">
              <h3 className="mb-2 font-serif font-bold">Sök</h3>
              <input
                type="text"
                placeholder="Namn / datum"
                className="h-10 w-full font-serif bg-transparent px-4 border rounded-full outline-none hover:bg-gray-50 mb-4"
              />

              <div className="flex flex-wrap gap-2 max-md:hidden">
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

          {/* FOOTER */}
          <div className="mt-20 leading-loose tracking-wide font-bold">
            <div>Välkommen!</div>
            <div>Det här är min vinblogg.</div>
            <div>Men det är inte inte bara en vinblogg,</div>
            <div>utan också en Matblogg. Här serveras allt mellan</div>
            <div>
              vin, mat, desserter, bakverk och idéer. Innehållet är möjligen{" "}
            </div>
            <div>enögt, då jag har mina favoritsmaker. </div>
          </div>
        </div>
      </div>
    </main>
  );
}
