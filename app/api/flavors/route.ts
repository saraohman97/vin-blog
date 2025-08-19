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

        Object.keys(body).forEach((value: any) => {
            if (!body[value]) {
                NextResponse.error();
            }
        })

        const flavor = await prismadb.flavor.create({
            data: {
                name,
            userId: currentUser.id
            }
        });

        return NextResponse.json(flavor);
    } catch (error) {
        console.log("FLAVORS_POST", error);
        return new NextResponse("Internal error", { status: 500 });
    }
};