import { createBrowserRouter } from "react-router-dom";
import UserLogin from "../Components/User/UserLogin.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import MainLayout from "../Layout/MainLayout.jsx";
import routeGenerator from "../utils/routeGenerator.js";
import { managerPath } from "./ManagerRoutes.jsx";
import { userPath } from "./UserRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/manager",
    element: (
      <PrivateRoutes>
        <MainLayout></MainLayout>
      </PrivateRoutes>
    ),
    children: routeGenerator(managerPath),
  },
  {
    path: "/user",
    element: (
      <PrivateRoutes>
        <MainLayout></MainLayout>
      </PrivateRoutes>
    ),
    children: routeGenerator(userPath),
  },
  {
    path: "/user-login",
    element: <UserLogin />,
  },
]);
export default router;
