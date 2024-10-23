import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Register from "./Register";
function Body() {
  const approuter = createBrowserRouter([
    {
      path: "/browse",
      element: <Browse />,
    },

    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
}
export default Body;
