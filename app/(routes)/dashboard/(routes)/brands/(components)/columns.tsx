"use client";

import { ColumnDef } from "@tanstack/react-table";

export type BrandsColumn = {
  id: string;
  name: string;
};

export const columns: ColumnDef<BrandsColumn>[] = [
  {
    accessorKey: "name",
    header: "Namn",
  },
];
