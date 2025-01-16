import "./style.css";
import { createApp, type Plugin } from "vue";

import App from "./App.vue";

const app = createApp(App);

Object.values<Plugin>(import.meta.glob("./plugins/*.ts", { eager: true })).map(
  (plugin) => plugin.install?.(app),
);

app.mount("#app");
