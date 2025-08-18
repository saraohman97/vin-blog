import prisma from '@/lib/prismadb'

export default async function getCountries() {
    try {
        const countries = await prisma.country.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return countries;
    } catch (error: any) {
        throw new Error(error);
    }
}