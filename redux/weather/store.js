import { createStore } from "redux";
import userReducer from "./Reducer";

const store1 = createStore(userReducer);
export default store1;
