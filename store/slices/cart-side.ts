import { createSlice } from "@reduxjs/toolkit";

const cartSideSlice = createSlice({
  name: "Cart Side",
  initialState: {
    show: false,
  },
  reducers: {
    updateSideBar: (state, action) => {
      state.show = action.payload;
    },
  },
});

export default cartSideSlice;
