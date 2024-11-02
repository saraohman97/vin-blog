import prisma from '@/lib/prismadb'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/wines`

export default async function getWines() {
    try {
        const wines = await prisma.wine.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                images: true
            }
        })

        return wines;
    } catch (error: any) {
        throw new Error(error);
    }
}