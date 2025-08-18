"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import BrandBadge from "./(badges)/brandBadge";
import FlavorBadge from "./(badges)/flavorBadge";
import GrapeBadge from "./(badges)/grapeBadge";
import CountryBadge from "./(badges)/countryBadge";
import { Brand, Country, Flavor, Grape } from "@/types";

interface SidebarProps {
  brands: Brand[];
  countries: Country[];
  flavors: Flavor[];
  grapes: Grape[];
}

const Sidebar: React.FC<SidebarProps> = ({
  brands,
  flavors,
  countries,
  grapes,
}) => {
  const params = useSearchParams();
  const brand = params?.get("brand");
  const country = params?.get("country");
  const flavor = params?.get("flavor");
  const grape = params?.get("grape");
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  if (!isMainPage) return null;

  return (
    <div className="p-4 md:w-1/3 rounded-xl h-fit">
      {/* <h3 className="mb-2 font-serif font-bold">Sök</h3> */}
      {/* <input
        type="text"
        placeholder="Namn / datum"
        className="h-10 w-full font-serif bg-transparent px-4 border rounded-full outline-none hover:bg-gray-50 mb-4"
      /> */}

      <div className="flex flex-wrap gap-2 max-md:hidden">
        <h2 className="text-sm font-bold w-full underline underline-offset-2 font-serif text-red-900">
          Länder
        </h2>
        {countries.map((item) => (
          <CountryBadge
            key={item.id}
            name={item.name}
            selected={country === item.name}
          />
        ))}

        <h2 className="text-sm font-bold w-full underline underline-offset-2 font-serif text-red-900">
          Vingårdar
        </h2>
        {brands.map((item) => (
          <BrandBadge
            key={item.id}
            name={item.name}
            selected={brand === item.name}
          />
        ))}

        <h2 className="text-sm font-bold w-full underline underline-offset-2 font-serif text-red-900">
          Druvor
        </h2>
        {grapes.map((item) => (
          <GrapeBadge
            key={item.id}
            name={item.name}
            selected={grape === item.name}
          />
        ))}

        <h2 className="text-sm font-bold w-full underline underline-offset-2 font-serif text-red-900">
          Smaker
        </h2>
        {flavors.map((item) => (
          <FlavorBadge
            key={item.id}
            name={item.name}
            selected={flavor === item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
