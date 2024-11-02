import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { wineId: string } }
) {
    try {
        // const { searchParams } = new URL(req.url);
        // const wineId = searchParams.get("wineId") || undefined;

        if (!params.wineId) {
            return new NextResponse("Item id is required", { status: 400 });
        }

        const wine = await prismadb.wine.findMany({
            where: {
                id: params.wineId
            },
            include: {
                images: true
            }
        });

        return NextResponse.json(wine);
    } catch (error) {
        console.log("WINE_GET", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};