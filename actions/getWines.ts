import prisma from '@/lib/prismadb'

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/wines`

export interface IWinesParams {
    brand?: String;
    flavor?: string;
    country?: string;
    grape?: string;
}

export default async function getWines(params: IWinesParams) {
    const { brand, flavor, country, grape } = params;

    let query: any = {};

    if (brand) {
        query.brand = brand;
    }

    if (flavor) {
        query.flavor = flavor;
    }

    if (country) {
        query.country = country;
    }

    if (grape) {
        query.grape = grape;
    }

    try {
        const wines = await prisma.wine.findMany({
            where: query,
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