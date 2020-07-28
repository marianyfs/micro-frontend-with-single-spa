import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@myf/spa",
  app: () => import("@myf/spa"),
  activeWhen: () => true,
});

registerApplication({
  name: "@myf/app1",
  app: () => import("@myf/app1"),
  activeWhen: (location) => location.pathname === "/app1",
});

registerApplication({
  name: "@myf/app2",
  app: () => import("@myf/app2"),
  activeWhen: (location) => location.pathname === "/app2",
});

start();
