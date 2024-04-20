import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pasta from "./components/pasta/Pasta";
import Pizza from "./components/pizza/Pizza";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/pizza", element: <Pizza /> },
  { path: "/pasta", element: <Pasta /> },
  { path: "/:id", element: <App /> },
  { path: "/:id", element: <App /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
