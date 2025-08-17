import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function POST(
    req: Request,
) {
    try {
        // const { userId } = auth();
        const body = await req.json();

        const { 
            name
        } = body;

        if (!name) {
            return new NextResponse("Name is required", { status: 400 });
        }

        const country = await prismadb.country.create({
            data: {
                name
            }
        });

        return NextResponse.json(country);
    } catch (error) {
        console.log("COUNTRIES_POST", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};

export async function GET(
    req: Request,
) {
    try {
        // const { searchParams } = new URL(req.url);
        // const wineId = searchParams.get("wineId") || undefined;

        const countries = await prismadb.country.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });

        return NextResponse.json(countries);
    } catch (error) {
        console.log("COUNTRIES_GET", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};