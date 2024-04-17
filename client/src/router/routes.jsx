import React from "react";
const Dashboard = lazy(() => import("@/pages/Dashboard"));
// const Customer = lazy(() => import("@/pages/Customer"));

let routes = {
  expense: [],
  default: [
    {
      path: "/",
      element: <Dashboard />,
    },
    // {
    //   path: "/customer",
    //   element: <Customer />,
    // },
  ],
};
export default routes;
