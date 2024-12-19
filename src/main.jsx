import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Component imports
import MainPage from "./MainPage.jsx";

// Styling import
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
