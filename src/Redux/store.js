/** @format */
import rootReducer from "./reducers";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
