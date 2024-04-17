import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllMembers } from "./memberslice";

export const fetchMembers = createAsyncThunk(
  "members/fetchMembers",
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(
        "https://eglise.onrender.com/api/members"
      );
      console.log("response", response.data);
      dispatch(getAllMembers(response.data));
    } catch (error) {
      console.error("Error fetching members:", error);
      throw error; // Throw the error to be handled by createAsyncThunk
    }
  }
);
