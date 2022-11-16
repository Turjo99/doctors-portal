import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Components/Appointment.js/Appointment";
import Login from "../Components/Forms/Login";
import Signup from "../Components/Forms/Signup";
import Dashboard from "../Components/Home/Dashboard/Dashboard";
import Home from "../Components/Home/Home";
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
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
