import { createStore, applyMiddleware } from "redux"; // Redux
import reducer from "./reducer";
import MAIN_MIDDLEWARE from "./middleware";

// Redux: Store
const store = createStore(reducer, applyMiddleware(...MAIN_MIDDLEWARE));

// Exports
export { store };
