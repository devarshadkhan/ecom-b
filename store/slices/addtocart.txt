import { createSlice } from "@reduxjs/toolkit";
import { CartProductTypes } from "typings/product";

// const cartInitial =
//     typeof window !== "undefined"
//         ? JSON.parse(localStorage.getItem("cart") || "[]")
//         : [];
const initialState: CartProductTypes = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};



// const stored = {
//     data: {
//         cartItems: [],
//         cartTotalQuantity: 0,
//         cartTotalAmount: 0,
//     } as CartProductTypes,
// };

// (async () => {
//     try {
//         const value = (await localforage.getItem("cart-items")) as any;
//         // This code runs once the value has been loaded
//         // from the offline store.
//         stored.data = value;
//     } catch (err) {
//         // This code runs if there were any errors.
//         console.log(err);
//     }
// })();



const addToCartSlice = createSlice({
    name: "Cart",
    initialState: initialState,
    reducers: {
        // ADD TO CART PRODUCT
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find(
                (item) => item.bed.id === action.payload.bed.id
            );

            if (itemInCart) {
                itemInCart.quantity = itemInCart.quantity + 1;
                itemInCart.total = itemInCart.quantity * itemInCart.bed.price;
                state.cartTotalQuantity = state.cartTotalQuantity + 1;
                state.cartTotalAmount = Number(
                    state.cartTotalAmount + action.payload.total
                );
            } else {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                    total: action?.payload?.price || 0,
                }) as any;
                state.cartTotalQuantity = 1 as number;
                state.cartTotalAmount = Number(
                    state.cartTotalAmount + action.payload.total
                );
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(
                (item) => item.bed.id === action.payload
            );
            if (item?.quantity !== undefined) {
                item.quantity = (item?.quantity + 1) as number;
                state.cartTotalQuantity = (state.cartTotalQuantity +
                    1) as number;
                state.cartTotalAmount = Number(
                    state.cartTotalAmount + item.total
                ) as number;
            }
        },
        decreaseQuantity: (state, action) => {
            console.log({ id: action.payload });

            const item = state.cartItems.find(
                (item) => item.bed.id === action.payload
            );
            if (item?.quantity === 1) {
                item.quantity = 1;
            } else {
                if (item?.quantity) {
                    item.quantity = (item?.quantity - 1) as number;
                    state.cartTotalQuantity = (state.cartTotalQuantity -
                        1) as number;
                    state.cartTotalAmount = Number(
                        state.cartTotalAmount - item.total
                    ) as number;
                }
            }
        },
        removeFromCart: (state, action) => {
            const item = state.cartItems.find(
                (item) => item.bed.id === action.payload
            );
            if (!item) return;

            state.cartItems = state.cartItems.filter(
                (item) => item.bed.id !== action.payload
            );

            state.cartTotalQuantity = state.cartTotalQuantity - item.quantity;
            state.cartTotalAmount =
                Number(state.cartTotalAmount) -
                Number(item.total) * Number(item.quantity);
        },
    },
});

export default addToCartSlice;
