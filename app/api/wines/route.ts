import getCurrentUser from "@/actions/getCurrentUser";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function POST(
    req: Request,
) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) return NextResponse.error();
    
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

        Object.keys(body).forEach((value: any) => {
            if (!body[value]) {
                NextResponse.error();
            }
        })

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
                },
                userId: currentUser.id
            }
        });

        return NextResponse.json(wine);
    } catch (error) {
        console.log("WINES_POST", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};

