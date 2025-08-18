import prisma from '@/lib/prismadb'

export default async function getGrapes() {
    try {
        const grapes = await prisma.grape.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return grapes;
    } catch (error: any) {
        throw new Error(error);
    }
}