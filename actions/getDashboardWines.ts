import prisma from '@/lib/prismadb'

export default async function getDashboardWines() {

    try {
        const wines = await prisma.wine.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return wines;
    } catch (error: any) {
        throw new Error(error);
    }
}