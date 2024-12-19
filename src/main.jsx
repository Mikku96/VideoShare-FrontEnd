import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Component imports
import MainHeader from "./Header/MainHeader.jsx";

// Styling import
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHeader />,
    children: [
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
