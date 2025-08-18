import prisma from '@/lib/prismadb'

export default async function getFlavors() {
    try {
        const flavors = await prisma.flavor.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return flavors;
    } catch (error: any) {
        throw new Error(error);
    }
}