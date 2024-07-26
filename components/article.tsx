
import Image from "next/image";

const Article = () => {

  return (
    <>
      <div
        className="text-black bg-gray-50 border w-full rounded-xl"
      >
        <h1 className="px-10 pt-20 font-bold text-center text-4xl font-serif italic">
          Hemgjorda glassbåtar
        </h1>

        <div className="flex gap-10 p-10">
          {/* INGREDIENSER */}
          <div className="w-[500px] leading-loose text-gray-700 border-r p-4 flex flex-col items-right justify-center rounded text-right">
            <div className="font-bold font-serif text-xl mb-3">Ingredienser</div>
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

        {/* IMAGE */}
        <Image
          src="/article.webp"
          alt=""
          width={1000}
          height={1000}
          className={`max-h-[400px] object-cover rounded-b-xl shadow-xl`}
        />
      </div>
    </>
  );
};

export default Article;
