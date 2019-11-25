import { combineReducers } from "redux";

import photos from "./photos";
import counter from "./counter";

const rootReducer = combineReducers({ photos, counter });

export default rootReducer;