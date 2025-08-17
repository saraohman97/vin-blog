import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
) {
    try {
        const body = await req.json();

        const { 
            name
        } = body;

        if (!name) {
            return new NextResponse("Name is required", { status: 400 });
        }

        Object.keys(body).forEach((value: any) => {
            if (!body[value]) {
                NextResponse.error();
            }
        })

        const brand = await prismadb.brand.create({
            data: {
                name
            }
        });

        return NextResponse.json(brand);
    } catch (error) {
        console.log("BRANDS_POST", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};

export async function GET(
    req: Request,
) {
    try {
        // const { searchParams } = new URL(req.url);
        // const wineId = searchParams.get("wineId") || undefined;

        const brands = await prismadb.brand.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });

        return NextResponse.json(brands);
    } catch (error) {
        console.log("BRANDS_GET", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};