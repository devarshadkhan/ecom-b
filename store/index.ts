import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "./storage";
import cartSideSlice from "./slices/cart-side";

const persistConfig = {
  key: "root",
  storage: storage,
  rehydrate: true,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartSlice,
  cartSide: cartSideSlice.reducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
