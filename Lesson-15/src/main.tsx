// <= IMPORTS =>
import "./index.css";
import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { ProductsProvider } from "./context/ProductsProvider.js";
import { CartProvider } from "./context/CartProvider.js";

// <= SELECTING THE ROOT ELEMENT =>
const rootElement = document.getElementById("root") as HTMLDivElement;

// <= CREATING THE ROOT ELEMENT =>
const root = createRoot(rootElement);

// <= RENDERING THE APP =>
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
