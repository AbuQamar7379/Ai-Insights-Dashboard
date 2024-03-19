import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from "../reducers/dataSlice";

/*
 Combines multiple reducers, into a single root reducer using combineReducers 
 from Redux Toolkit, and exports the RootState type.
*/
const rootReducer = combineReducers({
  data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
