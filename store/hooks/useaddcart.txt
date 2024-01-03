import React from "react";
import useAppDispatch from "./usedispatch";
import useAppSelector from "./useselector";
import addToCartSlice from "store/slices/addtocart";
import { useRouter } from "next/router";

/**
 * Custom Hook For Add To Cart
 * @returns
 */
const useAddCart = () => {
    const dispatch = useAppDispatch();

    const cartState = useAppSelector((state) => state.addToCart);

    // ADD FROM CART
    const addToCart = React.useCallback(
        (data: any) => {
            dispatch(addToCartSlice.actions.addToCart(data));
        },
        [dispatch]
    );
    // ADD FROM CART
    const increaseQuantity = React.useCallback(
        (id: any) => {
            dispatch(addToCartSlice.actions.increaseQuantity(id));
        },
        [dispatch]
    );
    // ADD FROM CART
    const decreaseQuantity = React.useCallback(
        (id: any) => {
            dispatch(addToCartSlice.actions.decreaseQuantity(id));
        },
        [dispatch]
    );
    // REMOVE FROM CART
    const removeFromCart = React.useCallback(
        (id: any) => {
            dispatch(addToCartSlice.actions.removeFromCart(id));
        },
        [dispatch]
    );

    // Return Values
    return {
        cartState,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    };
};
export default useAddCart;
