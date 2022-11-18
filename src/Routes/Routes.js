import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Components/Appointment.js/Appointment";
import Login from "../Components/Forms/Login";
import Signup from "../Components/Forms/Signup";

import Home from "../Components/Home/Home";
import MyAppointment from "../Components/MyAppointment/MyAppointment";
import Dashboard from "../Dashboard/Dashboard";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
    ],
  },
]);
