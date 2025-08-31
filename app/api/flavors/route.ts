import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(
    req: Request,
) {
    const currentUser = await getCurrentUser();
    if (!currentUser) return NextResponse.error();
    const body = await req.json();

    const { 
        label
    } = body;

    if (!label) {
        return new NextResponse("Label is required", { status: 400 });
    }

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error();
        }
    })

    const flavor = await prismadb.flavor.create({
        data: {
            label,
            userId: currentUser.id

        }
    });

    return NextResponse.json(flavor);
};