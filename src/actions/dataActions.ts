import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../api/mockApi";
import { Data } from "../types/dataTypes";

/**
 * Asynchronously fetches AI data using the mock API.
 * @returns {Promise<Data>} A promise that resolves with the fetched data.
 * @throws Throws an error if the fetch operation fails.
 */

export const fetchAiData = createAsyncThunk<Data, void>(
  "data/fetchAiData",
  async () => {
    try {
      let response = await fetchData();
      return response;
    } catch (err) {
      throw err;
    }
  }
);
