import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { flavorId: string } }
) {
    try {
        // const { searchParams } = new URL(req.url);
        // const wineId = searchParams.get("wineId") || undefined;

        if (!params.flavorId) {
            return new NextResponse("Item id is required", { status: 400 });
        }

        const flavor = await prismadb.flavor.findMany({
            where: {
                id: params.flavorId
            }
        });

        return NextResponse.json(flavor);
    } catch (error) {
        console.log("FLAVOR_GET", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};