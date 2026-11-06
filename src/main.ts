import App from "./App.vue";
import Router from "./routes/routes";
import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";

const pinia = createPinia();

/*
  Waiting one frame lets the HTML in the first response paint before the application
  replaces it. A tab opened in the background has no frames, so it mounts at once.
*/
const app = createApp(App).use(Router).use(pinia);
const mount = () => app.mount("#app");

if (document.hidden) mount();
else requestAnimationFrame(() => setTimeout(mount));
