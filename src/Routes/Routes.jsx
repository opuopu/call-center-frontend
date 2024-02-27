import { createBrowserRouter } from "react-router-dom";
import UserLogin from "../Components/User/UserLogin.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import MainLayout from "../Layout/MainLayout.jsx";
import routeGenerator from "../utils/routeGenerator.js";
import { managerPath } from "./ManagerRoutes.jsx";
import { userPath } from "./UserRoutes.jsx";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";
import App from "../App.js";
import ChangePassword from "../Pages/ChangePassword.jsx";
import ResetPasswordForm from "../Components/PasswordResetForm/PasswordResetForm.jsx";
import ResetPassword from "../Pages/ResetPassword.jsx";
import ResetSessions from "../Pages/ResetSessions.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/change-password",
    element: <ChangePassword></ChangePassword>,
  },
  {
    path: "/reset-password",
    element: <ResetPassword></ResetPassword>,
  },
  {
    path: "/reset-session",
    element: <ResetSessions />,
  },
  {
    path: "/manager",
    element: (
      <PrivateRoutes>
        <MainLayout></MainLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      ...routeGenerator(managerPath),
    ],
  },
  {
    path: "/user",
    element: (
      <PrivateRoutes>
        <MainLayout></MainLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      ...routeGenerator(managerPath),
    ],
  },
  {
    path: "/user-login",
    element: <UserLogin />,
  },
]);
export default router;
