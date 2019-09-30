import apps from '@modules/apps/router.js'
const routes = [
  {
    path: "/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      ...apps,
      {
        path: "/",
        component: () => import("pages/PageDashboard"),
        meta: { name: "Dashboard One" },
        name: "dash-one"
      },
      {
        path: "/form-search",
        component: () => import("pages/PageFormSearch"),
        meta: { name: "Form Search" },
        name: "form-search"
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
