"use client";

import { ColumnDef } from "@tanstack/react-table";

export type WinesColumn = {
  id: string;
  label: string;
  brand: string;
  description: string;
  color: string;
  flavor: string;
  country: string;
  price: string;
  grape: string;
  review: string;
  zoomImage: boolean;
};

export const columns: ColumnDef<WinesColumn>[] = [
  {
    accessorKey: "label",
    header: "Etikett",
  },
  {
    accessorKey: "brand",
    header: "Företag",
  },
  {
    accessorKey: "price",
    header: "Pris",
  },
];
