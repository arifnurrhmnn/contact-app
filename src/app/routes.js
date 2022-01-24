import { lazy } from "react";

const AllRoutes = [
  // DEFAULT PAGES
  {
    path: "/",
    component: lazy(() => import("pages/Home")),
    name: "Home",
  },
  /*
   ---------------------------------------------
    YOUR URL PAGES
   ---------------------------------------------
  */
  {
    path: "/add-contact",
    component: lazy(() => import("pages/AddContact")),
    name: "Add",
  },
  {
    path: "/update-contact/:id",
    component: lazy(() => import("pages/UpdateContact")),
    name: "Update",
  },
  /*
    ---------------------------------------------
    PLEASE KEEP PUT IT AT THE BOTTOM
    ---------------------------------------------
  */
  {
    path: "*",
    component: lazy(() => import("pages/404")),
    name: "Page not found",
  },
];

export default AllRoutes;
