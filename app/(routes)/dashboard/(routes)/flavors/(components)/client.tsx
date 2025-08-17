"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { DataTable } from "./data-table";
import { FlavorsColumn, columns } from "./columns";

interface ClientProps {
  data: FlavorsColumn[];
}

export default function Client({ data }: ClientProps) {
  const router = useRouter();

  return (
    <div className="min-h-[600px] max-w-screen-lg mx-auto md:my-10">
      <div className="flex items-start justify-between">
        <Heading
          title={`Smaker (${data.length})`}
          description="Hantera viner för bloggen"
        />
        <Button
          onClick={() => router.push(`/dashboard/flavors/new`)}
          className="bg-black text-white rounded hover:bg-black/90 hover:text-white"
        >
          <Plus className="mr-2 h-4 w-4" />
          Lägg till ny
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
