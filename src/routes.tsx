import { createBrowserRouter } from "react-router-dom";

import ProtectedRoutes from "@/components/protectedRoutes";
import {HomePage, Signup, Login, Profile, Service, Appointment, Bussiness, Staff ,Error} from "@/pages/";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <Error />,
      },
      // {
      //   path: "/profile",
      //   element: <Profile />,
      //   errorElement: <Error />,
      // },
      {
        path: "/appoinment",
        element: <Appointment />,
        errorElement: <Error />,
      },
      {
        path: "/staff",
        element: <Staff />,
        errorElement: <Error />,
      },
      {
        path: "/service",
        element: <Service />,
        errorElement: <Error />,
      },
      {
        path: "/bussiness",
        element: <Bussiness />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />,
  },
]);

export default router;