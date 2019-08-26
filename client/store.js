import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/reducers.js";

//Store connects reducer file & reduxDevTools;
const store = createStore(reducers, composeWithDevTools());

//Export the store;
export default store;
