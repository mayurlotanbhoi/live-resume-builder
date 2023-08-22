import rootReducer from "./Redux/Reducers/index";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;
