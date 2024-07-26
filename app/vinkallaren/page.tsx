import Image from "next/image";

const Vinkallaren = () => {
  return (
    <div>
      <Image
        src="/hero-2.jpg"
        alt=""
        width={2000}
        height={2000}
        className="object-cover h-[800px] object-top"
      />
      <h1 className="absolute h-screen inset-0 flex items-center justify-center pb-20 max-w-screen-lg mx-auto text-center text-8xl font-serif font-bold">
        Rött vin för alla tillfällen
      </h1>

      <div className="bg-[#1B1212]">
        <div className="max-w-screen-xl mx-auto py-10 px-4">
          <div>Kategorier:</div>
          <div>Vin - rött vin - Dokumenterade röda viner och hur de smakar</div>
          <div>Mat - bakverk, vardag, </div>
        </div>
      </div>
    </div>
  );
};

export default Vinkallaren;
