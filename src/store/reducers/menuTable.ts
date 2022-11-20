import { stateRes } from "./../../interfaces/state";
import { Irespons } from "../../interfaces/state";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const initialState: stateRes = {
  name: null,
  items: [],
  pageCount: 12,
};

type stateType = typeof initialState;

const counterSlice = createSlice({
  name: "menuTable",
  initialState,
  reducers: {
    addMenu(state: stateType, action: PayloadAction<Irespons>) {
      state.name = action.payload.name;
      state.items = action.payload.items;
    },
  },
});

export const { addMenu } = counterSlice.actions;
export default counterSlice.reducer;
