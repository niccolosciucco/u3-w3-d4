import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import jobReducer from "../reducers/jobReducer";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  job: jobReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
