import apps from '@modules/apps/router.js'
import forms from '@modules/forms/router.js'
import dashboards from '@modules/dashboards/router.js'
import logins from '@modules/logins/router.js'
const routes = [
  {
    path: "/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      ...apps,
      ...forms,
      ...dashboards,
      ...logins,
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
