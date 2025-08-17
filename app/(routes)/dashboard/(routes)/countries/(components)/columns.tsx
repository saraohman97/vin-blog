"use client";

import { ColumnDef } from "@tanstack/react-table";

export type CountriesColumn = {
  id: string;
  name: string;
};

export const columns: ColumnDef<CountriesColumn>[] = [
  {
    accessorKey: "name",
    header: "Namn",
  },
];
