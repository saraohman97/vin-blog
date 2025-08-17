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

        const flavor = await prismadb.flavor.create({
            data: {
                name
            }
        });

        return NextResponse.json(flavor);
    } catch (error) {
        console.log("FLAVORS_POST", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};

export async function GET(
    req: Request,
) {
    try {
        // const { searchParams } = new URL(req.url);
        // const wineId = searchParams.get("wineId") || undefined;

        const flavors = await prismadb.flavor.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });

        return NextResponse.json(flavors);
    } catch (error) {
        console.log("FLAVORS_GET", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};