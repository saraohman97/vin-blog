import Image from "next/image";

const TestForm = () => {
  return (
    // <div className="flex flex-col justify-center text-center">
    //   <h1 className="text-4xl italic">Viner</h1>
    //   <div className="text-sm mt-2 mb-10">
    //     Lägg till viner till bloggen
    //   </div>

    //   <form className="flex flex-col gap-10 text-sm font-bold">
    //     <div className="rounded w-full relative lg:w-[600px] mx-auto h-40 flex items-center justify-center">
    //       <Image
    //       src='/bg-blur.jpg'
    //       alt=""
    //       width={400}
    //       height={400}
    //       className="absolute rounded -z-10 inset-0 object-cover h-full"
    //       />
    //       <div className="absolute inset-0 -z-10 bg-white/50"></div>
    //       <label>Lägg till bild</label>
    //     </div>

    //     <div className="lg:w-[600px] mx-auto flex max-lg:flex-col gap-10">
    //       <div className="flex flex-col w-full">
    //         <label>Vinets namn</label>
    //         <input type="text" className="border-b" />
    //       </div>

    //       <div className="flex flex-col w-full">
    //         <label>Vinetgårdets namn/ märke</label>
    //         <input type="text" className="border-b" />
    //       </div>
    //     </div>
    //   </form>
    // </div>
    <div className="grid grid-cols-2">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-light">Rubrik</h2>
        <h3 className="">underrubrik</h3>
      </div>

      <div className="space-y-8">
        <div className="flex gap-4 max-w-[500px]">
          <div className="flex flex-col w-full">
            <label>rubrik</label>
            <input type="text" className="border rounded-md" />
          </div>
          <div className="flex flex-col w-full">
            <label>rubrik</label>
            <input type="text" className="border rounded-md" />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[500px]">
          <label>rubrik</label>
          <input type="text" className="border rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default TestForm;
