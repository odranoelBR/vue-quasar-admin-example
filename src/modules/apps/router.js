const routes = [
  {
    path: "/drag-and-drop",
    component: () => import("./pages/PageDragAndDrop"),
    meta: { name: "Drag and Drop" },
    name: "drag-and-drop"
  }
];

export default routes;
