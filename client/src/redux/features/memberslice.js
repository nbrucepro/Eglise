import { createSlice } from "@reduxjs/toolkit";

export const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
  },
  reducers: {
    reset: () => initialState,
    getAllMembers: (state, action) => {
      state.members = action.payload;
    },
  },
});

export const {
    getAllMembers
} = membersSlice.actions;

export default membersSlice.reducer;