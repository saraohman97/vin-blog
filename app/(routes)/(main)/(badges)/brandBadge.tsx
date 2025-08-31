"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";

interface BadgeProps {
  name: string;
  selected?: boolean;
}

const BrandBadge: React.FC<BadgeProps> = ({ name, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      brand: name,
    };

    if (params?.get("brand") === name) {
      delete updatedQuery.brand;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [name, params, router]);

  return (
    <button
      onClick={handleClick}
      className={`h-10 px-4 border rounded-3xl hover:bg-gray-50 hover:text-red-900 hover:border-red-900 text-sm font-bold ${selected && 'text-black/20'}`}
    >
      {name}
    </button>
  );
};

export default BrandBadge;
