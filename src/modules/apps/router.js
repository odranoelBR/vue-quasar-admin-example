const routes = [
  {
    path: "/drag-and-drop",
    component: () => import("./pages/PageDragAndDrop"),
    meta: { name: "Drag and Drop" },
    name: "drag-and-drop"
  },
  {
    path: "/pricing",
    component: () => import("./pages/PagePricing"),
    meta: { name: "Pricing" },
    name: "pricing"
  }
];

export default routes;
