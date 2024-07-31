// main: bg-blue-900
// main: bg-slate-800

import Image from "next/image";
import { FaWineBottle } from "react-icons/fa";
import { IoApps } from "react-icons/io5";
import { PiArticleMedium } from "react-icons/pi";

const Dashboard = () => {
  return (
    <div className="relative bg-gray-900 min-h-screen text-gray-50">
      {/* NAVBAR */}
      {/* -------------------------------------- */}
      <div className="w-80 h-full fixed left-0 p-6">
        {/* HEADING */}
        <h1 className="text-xl font-bold uppercase">Dashboard</h1>
        <h2 className="text-gray-400 uppercase text-sm mb-6">
          Management system
        </h2>

        {/* NAVLINKS */}
        <div className="flex items-center gap-2 w-full bg-gray-900/10 p-4 rounded shadow-xl">
          <IoApps /> CMS
        </div>
        <div className="flex items-center gap-2 w-full bg-gradient-to-r from-gray-900 to-blue-900 p-4 rounded shadow-xl shadow-blue-900">
          <FaWineBottle />
          Viner
        </div>
        <div className="flex items-center gap-2 w-full bg-gray-900/10 p-4 rounded shadow-xl">
          <PiArticleMedium /> Artiklar
        </div>

        {/* PROFILE */}
        <div className="fixed bottom-8 left-52 z-40">
          <Image
            src="/hero.jpg"
            alt=""
            width={500}
            height={500}
            className="object-cover rounded-full h-20 w-20 border-4 border-blue-900 shadow-md shadow-blue-500"
          />
        </div>
      </div>

      {/* -------------------------------------- */}

      {/* MAIN */}
      {/* -------------------------------------- */}
      <div className="bg-slate-800 fixed w-screen-[2/3] left-80 top-0 bottom-0 right-0 rounded-l-2xl p-10">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl">Välkommen Sara!</h1>
            <h2 className="text-gray-400 mb-6">
              Här är ditt innehållshanteringssystem (CMS)
            </h2>
          </div>

          <div>
            <input
              type="text"
              className="bg-black/50 h-12 rounded-s shadow-xl shadow-blue-900/60 px-4"
            />
            <button className="h-12 bg-gradient-to-r from-gray-900 to-blue-900 rounded shadow-xl shadow-blue-900 w-20">
              Sök
            </button>
          </div>
        </div>

        {/* FORM */}
        {/* -------------------------------------- */}
        <div>
          <h1 className="my-2 text-2xl font-bold text-gray-400">
            Lägg till vin
          </h1>
          
          <div className="flex items-center gap-10 w-full">
            {/* NAME */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="name" className="font-bold">
                Namn
              </label>
              <input
                type="text"
                className="bg-white bg-opacity-50 px-4 py-2 rounded w-full"
              />
            </div>
            {/* LABEL */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="name" className="font-bold">
                Märke
              </label>
              <input
                type="text"
                className="bg-white bg-opacity-50 px-4 py-2 rounded w-full"
              />
            </div>
          </div>

          {/* DESC */}
          <div className="flex flex-col gap-1 mt-4">
            <label className="font-bold" htmlFor="desc">Beskrivning</label>
            <textarea name="desc" id="desc" className="bg-white bg-opacity-50 px-4 py-2 rounded" rows={5}></textarea>
          </div>

          <div className="mt-4">Color •••</div>
          <div>Flavour •••••</div>

          <div>Country, price, graphe</div>

          <div>Review</div>
        </div>
        {/* -------------------------------------- */}

        {/* CMS */}
        {/* <div>
          <div className="bg-slate-500 rounded-xl p-10 shadow-xl shadow-slate-600">
            kub
          </div>
        </div> */}
      </div>
      {/* -------------------------------------- */}
    </div>
  );
};

export default Dashboard;
