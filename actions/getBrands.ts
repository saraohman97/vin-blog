import prisma from '@/lib/prismadb';

export default async function getBrands() {
    try {
        const brands = await prisma.brand.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        return brands;
    } catch (error: any) {
        throw new Error(error);
    };
};