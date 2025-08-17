import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { grapeId: string } }
) {
    try {
        // const { searchParams } = new URL(req.url);
        // const wineId = searchParams.get("wineId") || undefined;

        if (!params.grapeId) {
            return new NextResponse("Item id is required", { status: 400 });
        }

        const grape = await prismadb.grape.findMany({
            where: {
                id: params.grapeId
            }
        });

        return NextResponse.json(grape);
    } catch (error) {
        console.log("GRAPE_GET", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};