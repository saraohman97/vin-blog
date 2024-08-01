import Image from "next/image";
import { FaWineBottle } from "react-icons/fa";
import { IoApps } from "react-icons/io5";
import { PiArticleMedium } from "react-icons/pi";

const DashboardNavbar = () => {
  return (
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
      <div className="fixed bottom-6 left-60 z-40">
        <Image
          src="/hero.jpg"
          alt=""
          width={500}
          height={500}
          className="object-cover rounded-full h-14 w-14 border-4 border-blue-900 shadow-md shadow-blue-500"
        />
      </div>
    </div>
  );
};

export default DashboardNavbar;
