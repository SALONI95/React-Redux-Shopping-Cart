import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../types/product";

type Cart = {
  product: IProduct;
  quantity: number;
  price: number;
  discount: number;
};

type InitialState = {
  cartItems: Cart[];
};
const initialState: InitialState = {
  cartItems: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const currItem = action.payload;

      const isExist = state.cartItems.find(
        (item) => item.product.id == currItem.id
      );
      // let quantity:number =1,price:number = currItem.price, discount:number =0;
      if (isExist) {
        isExist.quantity += 1;
        isExist.price += currItem.price;
      } else {
        state.cartItems.push({
          product: currItem,
          quantity: 1,
          price: currItem.price,
          discount: 0,
        });
      }
      return state;
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const isItemExist = state.cartItems.find(
        (items) => items.product.id == action.payload
      );

      if (!isItemExist) return;

      if (isItemExist?.quantity > 1) {
        isItemExist.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (items) => items.product.id != action.payload
        );
      }
      return state;
    },
  },
});

export const { addToCart, removeItem } = productSlice.actions;
export default productSlice.reducer;
