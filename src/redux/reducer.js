import { combineReducers } from "redux";

import contactReducer from "store/contact/reducer";
// import authReducer from "store/auth/reducer";

const reducer = combineReducers({
  contact: contactReducer,
  // auth: authReducer,
});

export default reducer;
