import type { App } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const install = (app: App) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "dark",
    },
  });
  app.use(vuetify);
};

export { install };
