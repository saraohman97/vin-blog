import { User } from "@prisma/client";

export type Wine = {
    id: string;
    label: string;
    brand: string;
    description: string;
    color: string;
    flavor: string;
    country: string;
    price: string;
    grape: string;
    review: string;
    zoomImage: boolean;
    images: Image[];
}

export type Brand = {
    id: string;
    name: string;
}

export type Flavor = {
    id: string;
    name: string;
}

export type Grape = {
    id: string;
    name: string;
}

export type Country = {
    id: string;
    name: string;
}

export type Image = {
    id: string;
    url: string;
}

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}