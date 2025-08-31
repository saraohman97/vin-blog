"use client";

import { ColumnDef } from "@tanstack/react-table";

export type BrandsColumn = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<BrandsColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
    {
    accessorKey: "createdAt",
    header: "Skapad",
  },
];
