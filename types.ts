export interface Wine {
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
    images: Image[];
}

export interface Image {
    id: string;
    url: string;
}