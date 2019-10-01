const routes = [
  {
    path: "/form-search",
    component: () => import("./pages/PageFormSearch"),
    meta: { name: "Form Search" },
    name: "form-search"
  },
  {
    path: "/advanced-form",
    component: () => import("./pages/PageAdvancedForm"),
    meta: { name: "Advanced Form" },
    name: "advanced-form"
  },
];

export default routes;
