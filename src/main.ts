import App from "./App.vue";
import Router from "./routes/routes";
import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";

const pinia = createPinia();

createApp(App).use(Router).use(pinia).mount("#app");
