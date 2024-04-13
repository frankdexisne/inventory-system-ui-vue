import { createApp } from "vue";
import { Quasar } from "quasar";
import router from "./routes";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";
import "./style.css";

import App from "./App.vue";

createApp(App)
  .use(router)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  .mount("#app");
