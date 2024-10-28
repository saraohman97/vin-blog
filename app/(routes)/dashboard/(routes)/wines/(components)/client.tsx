"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { DataTable } from "./data-table";
import { WinesColumn, columns } from "./columns";

interface WinesClientProps {
  data: WinesColumn[];
}

export default function WinesClient({ data }: WinesClientProps) {
  const router = useRouter();

  return (
    <div className="min-h-[600px] max-w-screen-lg mx-auto md:my-10">
      <div className="flex items-start justify-between">
        <Heading title={`Wines (${data.length})`} description="Manage wines for the blog" />
        <Button
          onClick={() => router.push(`/dashboard/wines/new`)}
          className="bg-black text-white rounded hover:bg-black/90 hover:text-white"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
