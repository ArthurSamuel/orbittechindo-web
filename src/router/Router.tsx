import { createBrowserRouter } from "react-router";
import Home from "../features/home/Home";
import Detail from "../features/detail/Detail";
import Auth from "../features/auth/Auth";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);

export default router;
