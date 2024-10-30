import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Movies from "./pages/Movies/index.tsx";
import Home from "./pages/Home/index.tsx";
import Movie from "./pages/Movies/Movie/index.tsx";
import Series from "./pages/Series/index.tsx";
import Serie from "./pages/Series/Serie/index.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import Login from "./pages/Login/index.tsx";
import Register from "./pages/Register/index.tsx";
import { AuthContextProvider } from "./context/auth.context.tsx";
import Info from "./pages/Info/index.tsx";
import GenreComponent from "./components/Genre/Genre.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthContextProvider><App /></AuthContextProvider>,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          { path: "/", index: true, element: <Home /> },
          {
            path: "/genres",
            element: <GenreComponent/>
          },
          {
            path: "movies",
            element: <Movies />,
          },
          {
            path: "movies/:id",
            element: <Movie />,
          },
          {
            path: "series",
            element: <Series />
          },
          {
            path: "series/:id",
            element: <Serie />,
          },
          {
            path: "user/:id",
            element: <Info/>
          }
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
