const routes = [
  {
    path: "/",
    component: () => import("./pages/PageDashboard"),
    meta: { name: "Dashboard One" },
    name: "dash-one"
  },
];

export default routes;
