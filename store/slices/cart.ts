import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Coupon } from "network-requests/types";

interface CartItemProps {
  id?: string;
  quantity: number;
  total: number;
  type: string;
  bed: {
    _id: string;
    variantId: string;
    name: string;
    image: string;
    price: number;
    size: string;
    categories: string[];
    slug: string;
  };
  accessories: {
    headboard: {
      _id: string;
      name: any;
      image: string;
      price: number;
    };
    storage: {
      _id: string;
      name: any;
      image: string;
      price: number;
    };
    feet: {
      _id: string;
      name: any;
      image: string;
      price: number;
    };
    mattress: {
      _id: string;
      name: any;
      image: string;
      price: number;
    };
    color: {
      _id: string;
      name: any;
      image: string;
    };
  };
}

interface CartState {
  totalPrice: number;
  items: CartItemProps[];
  coupon: Coupon | null;
  // extraDelivery: {
  //   price: number;
  //   name: string;
  // };
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  coupon: null,
  // extraDelivery: {
  //   price: 0,
  //   name: `Free Kerb side delivery to the door (Flat or apartments Ground floor
  //     communal area only)`,
  // },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // setExtraDelivery(state, action) {
    //   state.extraDelivery = action.payload;
    // },
    setCoupon(state, action) {
      state.coupon = action.payload;
    },

    addItem(state, action: PayloadAction<CartItemProps>) {
      const item = action.payload;
      //  found item with same accessories
      const foundItem = checkForSameAccessoryAndGetData(
        state.items,
        item.accessories
      );

      const accessories = item.accessories;
      const sameAccessory = checkForSameAccessory(state.items, accessories);

      console.log({ sameAccessory });

      if (foundItem) {
        if (sameAccessory && item.bed.size === foundItem.bed.size) {
          foundItem.quantity++;
          state.totalPrice += foundItem.total;
        } else {
          state.items.push(item);
          state.totalPrice += item.total;
        }
      } else {
        state.items.push({ ...item, id: nanoid() });
        state.totalPrice += item.total * item.quantity;
      }
    },

    removeItem(state, action) {
      const id = action.payload;
      const foundItem = state.items.find((item) => item.id === id);

      if (foundItem) {
        state.totalPrice -= foundItem.total * foundItem.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    increaseQuantity(state, action) {
      const id = action.payload;
      const foundItem = state.items.find((item) => item.id === id);

      if (foundItem) {
        foundItem.quantity++;
        state.totalPrice += foundItem.total;
      }
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const foundItem = state.items.find((item) => item.id === id);

      if (foundItem) {
        foundItem.quantity--;
        state.totalPrice -= foundItem.total;
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addItem: addItemToCart,
  removeItem: removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  setCoupon,
  // setExtraDelivery,
} = cartSlice.actions;

export default cartSlice.reducer;

const checkForSameAccessory = (items: CartItemProps[], accessories: any) => {
  const findItem = items.find(
    (cartItem) =>
      cartItem?.accessories?.color?._id === accessories?.color?._id &&
      cartItem?.accessories?.headboard?._id === accessories?.headboard?._id &&
      cartItem?.accessories?.storage?._id === accessories?.storage?._id &&
      cartItem?.accessories?.feet?._id === accessories?.feet?._id &&
      cartItem?.accessories?.mattress?._id === accessories?.mattress?._id &&
      cartItem?.accessories?.color?._id === accessories?.color?._id
  );
  return !!findItem;
};

const checkForSameAccessoryAndGetData = (
  items: CartItemProps[],
  accessories: any
) => {
  const findItem = items.find(
    (cartItem) =>
      cartItem?.accessories?.color?._id === accessories?.color?._id &&
      cartItem?.accessories?.headboard?._id === accessories?.headboard?._id &&
      cartItem?.accessories?.storage?._id === accessories?.storage?._id &&
      cartItem?.accessories?.feet?._id === accessories?.feet?._id &&
      cartItem?.accessories?.mattress?._id === accessories?.mattress?._id &&
      cartItem?.accessories?.color?._id === accessories?.color?._id
  );
  return findItem;
};
