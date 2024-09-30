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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", index: true, element: <Home /> },
      {
        path: "movies",
        element: <Movies />,
        children: [{ path: ":id", element: <Movie /> }],
      },
      { path: "series", element: <Movies />, children: [
        {
          path: ":id",
          element: <Series/>,
          children: [{ path: ":id", element: <Serie /> }],
        }
      ] },
      { path: "animation", element: <Movies /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
