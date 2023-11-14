import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import components
import BabyNina from "./pages/baby-nina";
import ErrorPage from "./error-page";
import TodoList from "./components/TodoList";
import TTT from "./components/TicTacToe";
import PixelArtMaker from "./components/PixelArtMaker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "todo",
        element: <TodoList/>
      },
      {
        path: "tic-tac-toe",
        element: <TTT/>
      },
      {
        path: 'pixelart',
        element: <PixelArtMaker/>
      }, //more paths.
      // 4 in a row game
    ],
  },
  {
    path: "ninatje",
    element: <BabyNina />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
