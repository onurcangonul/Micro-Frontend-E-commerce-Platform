import ReactDOM from "react-dom/client";
import React from "react";
import "./index.scss";
import("userAuth/UserAuthCSS");
import("productListing/ProductListingCSS");
import("shoppingCart/ShoppingCartCSS");
import("orderHistory/OrderHistory");
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import { store } from "./app/store";

const App = () => (
    <Provider store={store}>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <Router>
      <AppRoutes />
    </Router>
  </Provider>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);
