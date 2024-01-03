import React from "react";
import useAppDispatch from "./usedispatch";
import useAppSelector from "./useselector";
import cartSideSlice from "store/slices/cart-side";

/**
 * Custom Hook For Add To Cart
 * @returns
 */
const useSide = () => {
  const dispatch = useAppDispatch();
  const cartSideState = useAppSelector((state) => state.cartSide);

  // ADD FROM CART
  const updateSideBar = React.useCallback(
    (value: boolean) => {
      dispatch(cartSideSlice.actions.updateSideBar(value));
    },
    [dispatch]
  );

  return { cartSideState, updateSideBar };
};
export default useSide;
