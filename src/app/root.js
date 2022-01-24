import React from "react";
import App from "./app";
import "sass/main.scss";

// Use Redux
import { Provider } from "react-redux";
import { store } from "redux/store"; // Import redux store

// Root
export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
