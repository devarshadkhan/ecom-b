import React from "react";

type Both = string | number;
// TYPES FOR BED SIZE
interface ProductDataTypes {
    _id?: any;
    value?:
        | string
        | number
        | boolean
        | readonly string[]
        | readonly number[]
        | readonly boolean[]
        | null
        | undefined;
    id?: Both;
    content?: any;
    iconUrl?: string;
    imageUrl?: string;
    price?: Both;
    image?: string;
    name: string;
}
interface BedSizeProps {
    value: any;
    items: any;
    onClickItem: (value: ProductDataTypes) => void;
}
interface BedTypes {
    bed: {
        _id: any;
        id: string;
        bedId: string;
        size: string;
        name: string;
        image: string;
        price: number;
    };

    accessories: {
        color: {
            _id: string;
            name: string;
            image: string;
        };
        storage: {
            _id: string;
            name: string;
            price: number;
        };
        feet: {
            _id: string;
            name: string;
            price: number;
        };
        headboard: {
            _id: string;
            name: string;
            price: number;
        };
        mattress: {
            _id: string;
            name: string;
            price: number;
        };
    };
    total: number;
    quantity: number;
}

interface CartProductTypes {
    cartItems: BedTypes[];
    cartTotalQuantity: number;
    cartTotalAmount: number;
    totalPrice:number;
}

interface ProductProperties {
    price: string | number;
    size?: number | string;
    content: string;
    imageUrl: string;
    iconUrl: string;
}

// PRODUCT API DATA TYPES
interface SingleProductTypes {
    name: string;
    description: string;
    category: string;
    options: {
        bedSize: ProductProperties[];
        bedColor: ProductProperties[];
        // NO Need Image URL
        bedHeadBoard: ProductProperties[];
        bedStorage: ProductProperties[];
        bedFeet: ProductProperties[];
        bedMatters: ProductProperties[];
    };
}
