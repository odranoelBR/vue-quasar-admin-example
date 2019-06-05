const routes = [
  {
    path: "/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/PageDashboard"),
        meta: { name: "Dashboard One" },
        name: "dash-one"
      },
      {
        path: "/advanced-form-one",
        component: () => import("pages/form/advancedFormOne/advancedFormOne"),
        meta: { name: "Advanced Form One" },
        name: "form"
      },
      {
        path: "/login-one",
        component: () => import("pages/login/login-one"),
        meta: { name: "Login One" },
        name: "login"
      },
      {
        path: "/pricing",
        component: () => import("pages/PagePricing"),
        meta: { name: "Pricing" },
        name: "pricing"
      },
      {
        path: "/drag-and-drop",
        component: () => import("pages/dragAndDrop/dragAndDrop"),
        meta: { name: "Drag and Drop" },
        name: "drag-and-drop"
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push(),
    routes.push({
      path: "*",
      component: () => import("pages/Error404.vue")
    });
}

export default routes;
