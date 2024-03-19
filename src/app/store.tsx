import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../reducers/dataSlice";

// Configures the Redux store using configureStore from Redux Toolkit, specifying the dataReducer as the root reducer.
const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;

// Exports the RootState type to represent the state shape of the Redux store and AppDispatch type to represent the store's dispatch function.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
