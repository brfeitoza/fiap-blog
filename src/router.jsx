import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Post from "./pages/Post";
import AllPosts from "./pages/AllPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
  },
  {
    path: "post/:slug",
    element: <Post />,
  },
  {
    path: "posts",
    element: <AllPosts />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router}>{router.element}</RouterProvider>;
};
