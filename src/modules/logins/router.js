const routes = [
  {
    path: "/login-one",
    component: () => import("./pages/login-one"),
    meta: { name: "Login One" },
    name: "login"
  },
];

export default routes;
