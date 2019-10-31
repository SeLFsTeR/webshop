import { createStore } from "redux";

// TODO: change import to ./reducers
import reducer from "./reducers/products";

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, enhancer);

export default store;
