import { combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "./favouriteReducer";
import jobReducer from "./jobReducer";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  job: jobReducer,
});

export default rootReducer;
