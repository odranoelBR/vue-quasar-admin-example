const routes = [
  {
    path: "/form-search",
    component: () => import("./pages/PageFormSearch"),
    meta: { name: "Form Search" },
    name: "form-search"
  },
];

export default routes;
