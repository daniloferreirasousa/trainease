import { combineReducers } from "redux";
import userReducer from "./userReducer";

// REDUCERS

const RootReducer = combineReducers({
    user: userReducer,
});

export default RootReducer;