import { createSlice } from "@reduxjs/toolkit";
import { fetchAiData } from "../actions/dataActions";
import { Data } from "../types/dataTypes";

// Defines the structure of the state for managing AI data, including the AI data object, loading indicator, and error message.
interface DataState {
  aiData: Data | null;
  loading: boolean;
  error: string | null;
}

// Represents the initial state for the AI data slice, with null data, loading set to false, and no errors.
const initialState: DataState = {
  aiData: null,
  loading: false,
  error: null,
};

// Defines a Redux slice for managing AI data state, including fetching data asynchronously and handling loading and error states.
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.aiData = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
  // Defines extra reducers for handling pending, fulfilled, and rejected actions of the fetchAiData asynchronous thunk, updating state accordingly.
  extraReducers: (builder) => {
    builder.addCase(fetchAiData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchAiData.fulfilled, (state, action) => {
      state.aiData = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(fetchAiData.rejected, (state, action) => {
      state.aiData = null;
      state.loading = false;
      state.error = action.error.message || "An Error Occured!";
    });
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
