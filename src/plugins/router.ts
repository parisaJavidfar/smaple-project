import type { App } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";

import Index from "../screens/index.vue";
import Coin from "../screens/coin/[id]/index.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/coin/:id", component: Coin },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const install = (app: App) => {
  app.use(router);
};

export { router, install };
