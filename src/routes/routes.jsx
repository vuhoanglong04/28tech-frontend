import { createBrowserRouter } from "react-router-dom";
import Home from "./../pages/Home";
import Courses from "../pages/Courses";
import Blog from "../pages/Blog";
import PostsByTopic from "../pages/PostsByTopic";
import PostDetail from "../pages/PostDetail";
import CourseDetail from "../pages/CourseDetail";
import Dashboard from "./../pages/Dashboard";
import Checkout from "./../pages/Checkout";
import Cart from "./../pages/Cart";
import Login from "./../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import ValidateOTP from "../pages/ValidateOTP";
import DetailOrder from "../pages/DetailOrder";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:id",
    element: <Courses />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/topic/:slug",
    element: <PostsByTopic />,
  },
  {
    path: "/blog/post/:slug",
    element: <PostDetail />,
  },
  {
    path: "/course/:slug",
    element: <CourseDetail />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/orders/:id",
    element: <DetailOrder />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/validate-otp",
    element: <ValidateOTP />,
  },
];
export default routes;
