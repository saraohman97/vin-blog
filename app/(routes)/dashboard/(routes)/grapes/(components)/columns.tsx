"use client";

import { ColumnDef } from "@tanstack/react-table";

export type GrapesColumn = {
  id: string;
  name: string;
};

export const columns: ColumnDef<GrapesColumn>[] = [
  {
    accessorKey: "name",
    header: "Namn",
  },
];
