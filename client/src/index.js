import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Provider } from "react-redux";
import store from "./context/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <AnimatePresence>
        <Provider store={store}>
          <App />
        </Provider>
      </AnimatePresence>
    </Router>
  </React.StrictMode>
);
