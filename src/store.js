import { configureStore } from "@reduxjs/toolkit";
import cauhoi from "./features/cauhoi";
export const store = configureStore({
  reducer: { cauhoi: cauhoi },
});
