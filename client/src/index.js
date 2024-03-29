import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MenuProvider from "./context/MenuProvider";
import FilterProvider from "./context/FilterProvider";
import { ToastContainer } from "react-toastify";
import NameProvider from "./context/NameProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MenuProvider>
      <FilterProvider>
        <NameProvider>
          <BrowserRouter>
            <App />
            <ToastContainer />
          </BrowserRouter>
        </NameProvider>
      </FilterProvider>
    </MenuProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
