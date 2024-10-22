'use client';

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const WinesClient = () => {
    const router = useRouter();
    return ( 
        <div className="flex items-start justify-between">
            <Heading title="Wines" description="Manage wines for the blog" />
            <Button onClick={() => router.push(`/dashboard/wines/new`)} className="bg-black text-white rounded hover:bg-black/90 hover:text-white"><Plus className="mr-2 h-4 w-4" />Add New</Button>

        </div>
     );
}
 
export default WinesClient;