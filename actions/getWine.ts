import prisma from '@/lib/prismadb'

export default async function getWine({params}: {params: {wineId: string}}) {
    try {
        const wine = await prisma.wine.findUnique({
            where: {
                id: params.wineId as string
            }
        })

        return wine;
    } catch (error: any) {
        throw new Error(error);
    }
}