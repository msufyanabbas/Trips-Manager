import { combineReducers } from "redux";

import tripReducers from "./tripReducers";

export const rootReducer = combineReducers({
  trips: tripReducers,
});
