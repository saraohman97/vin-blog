import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function POST(
    req: Request,
) {
    try {
        // const { userId } = auth();
        const body = await req.json();

        const { 
            label,
            brand,
            description,
            color,
            flavor,
            country,
            price,
            grape,
            review,
            zoomImage,
            images
        } = body;

        if (!label) {
            return new NextResponse("Label is required", { status: 400 });
        }

        if (!images || !images.length) {
            return new NextResponse("Image is required", { status: 400 });
        }

        const wine = await prismadb.wine.create({
            data: {
                label,
                brand,
                description,
                color,
                flavor,
                country,
                price,
                grape,
                review,
                zoomImage,
                images: {
                    createMany: {
                        data: [
                            ...images.map((image: { url: string }) => image)
                        ]
                    }
                }
            }
        });

        return NextResponse.json(wine);
    } catch (error) {
        console.log("WINES_POST", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};

export async function GET(
    req: Request,
) {
    try {
        // const { searchParams } = new URL(req.url);
        // const wineId = searchParams.get("wineId") || undefined;

        const wine = await prismadb.wine.findMany({
            include: {
                images: true
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        return NextResponse.json(wine);
    } catch (error) {
        console.log("WINES_GET", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};