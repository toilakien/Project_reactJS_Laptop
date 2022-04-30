import { combineReducers } from "redux";
import { productReducer } from "./productsReducers";
const reducers=combineReducers({
    productReducer,
})
export default reducers;