import { configureStore } from "@reduxjs/toolkit";
import membersSlice from "./features/memberslice";

export default configureStore({
  reducer: {
    membersSlice,
  },
});
