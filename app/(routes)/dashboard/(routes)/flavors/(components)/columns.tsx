"use client";

import { ColumnDef } from "@tanstack/react-table";

export type FlavorsColumn = {
  id: string;
  name: string;
};

export const columns: ColumnDef<FlavorsColumn>[] = [
  {
    accessorKey: "name",
    header: "Namn",
  },
];
