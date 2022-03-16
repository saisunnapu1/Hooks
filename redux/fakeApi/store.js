import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./Reducer";
import rootReducer from "./rootReducer";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
console.log(rootReducer, "hsi");
export default store;
