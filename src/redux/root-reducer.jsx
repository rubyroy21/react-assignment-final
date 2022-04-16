import { combineReducers } from "redux";
import countriesReducer from "./reducer";

const rootReducer = combineReducers({
    data: countriesReducer
})

export default rootReducer