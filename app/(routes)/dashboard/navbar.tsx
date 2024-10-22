"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: `/dashboard`,
      label: "CMS",
      active: pathname === `/dashboard`,
    },
    {
      href: `/dashboard/settings`,
      label: "Settings",
      active: pathname === `/dashboard/settings`,
    },
    {
      href: `/dashboard/wines`,
      label: "Wines",
      active: pathname === `/dashboard/wines`,
    },
  ];

  return (
    <div className="h-16">
      <div className="p-4 border-b h-16 shadow flex items-center gap-10 max-lg:justify-between fixed top-0 bg-white right-0 left-0">
        <h1 className="font-bold font-sans text-lg">Dashboard</h1>
        <Menu className="lg:hidden" />
        <div className="flex flex-wrap gap-4 max-lg:hidden max-lg:absolute">
          {routes?.map((route) => (
            <Link
              key={route.label}
              href={route.href}
              className={`text-sm ${
                route.active ? "text-black" : "text-stone-500"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
