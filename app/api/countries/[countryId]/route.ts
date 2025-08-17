import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { countryId: string } }
) {
    try {
        // const { searchParams } = new URL(req.url);
        // const wineId = searchParams.get("wineId") || undefined;

        if (!params.countryId) {
            return new NextResponse("Item id is required", { status: 400 });
        }

        const country = await prismadb.country.findMany({
            where: {
                id: params.countryId
            }
        });

        return NextResponse.json(country);
    } catch (error) {
        console.log("COUNTRY_GET", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};