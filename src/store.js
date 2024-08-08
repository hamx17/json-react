import { configureStore } from "@reduxjs/toolkit";

import details  from "./Slice/detailsSlice";
export const store = configureStore({
  reducer: {
    app: details,
  },
});