import { configureStore } from "@reduxjs/toolkit";
import logikaSliceReducer from "./logikaSlise";

export const store = configureStore({
    reducer: {
      logika: logikaSliceReducer,
    }
  });