"use client";

// main: bg-blue-900
// main: bg-slate-800
// darkmode: 9,9,11 RGB, 09090B hexcode

import WineForm from "./components/wine-form";
import DashboardNavbar from "../components/dashboard-navbar";
import Header from "../components/header";
import NavigationFeeds from "../components/navigation-feeds";
import NavigationTabs from "../components/navigation-tabs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import WineClient from "./components/client";
import TestForm from "../components/test-form";
import { Menu } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="relative h-screen">
      {/* <div className="relative h-[300px]">
        <Image
          src="/hero-2.jpg"
          alt=""
          fill
          className="absolute object-cover w-full max-h-[300px] z-0"
        />
        <div className="bg-black/50 h-full w-full absolute inset-0 flex items-center justify-center text-white">hej</div>
      </div> */}

      {/* HEADING */}
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto p-4">
        <div>
          <h1 className="text-xl font-bold uppercase">Dashboard</h1>
          <h2 className="text-gray-400 uppercase text-sm">Management system</h2>
        </div>

        {/* NAVLINKS */}
        <div className="lg:hidden self-start">
          <Menu />
        </div>
        <div className="flex font-bold text-sm max-lg:hidden">
          <Link
            href="/dashboard"
            className="p-3 hover:underline underline-offset-4"
          >
            Vin
          </Link>
          <Link
            href="/dashboard/vin"
            className="p-3 hover:underline underline-offset-4"
          >
            Kök
          </Link>
          <Button className="ml-6">Logga ut</Button>
        </div>
      </div>

      {/* <WineClient /> */}
      <div className="max-w-screen-xl mx-auto p-4">
        <TestForm />
        {/* <WineForm /> */}
      </div>
    </div>
  );
};

export default Dashboard;
