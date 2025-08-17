import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { brandId: string } }
) {
    try {
        // const { searchParams } = new URL(req.url);
        // const wineId = searchParams.get("wineId") || undefined;

        if (!params.brandId) {
            return new NextResponse("Item id is required", { status: 400 });
        }

        const brand = await prismadb.brand.findMany({
            where: {
                id: params.brandId
            }
        });

        return NextResponse.json(brand);
    } catch (error) {
        console.log("BRAND_GET", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};