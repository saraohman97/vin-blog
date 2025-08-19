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
                name,
            userId: currentUser.id

            }
        });

        return NextResponse.json(brand);
    } catch (error) {
        console.log("BRANDS_POST", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};