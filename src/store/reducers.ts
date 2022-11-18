import { Irespons } from "./../interfaces/state";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 3 as number,
  popularDishes: {} as Irespons,
  hotAppetizers: {} as Irespons,
  salads: {} as Irespons,
  soups: {} as Irespons,
  pizza: {} as Irespons,
  paste: {} as Irespons,
  desserts: {} as Irespons,
  sauces: {} as Irespons,
  beverages: {} as Irespons,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
