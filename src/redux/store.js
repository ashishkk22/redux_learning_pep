import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools/extension";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
