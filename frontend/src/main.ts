import { createApp } from "vue";
import App from "@/app/App.vue";
import { createPinia } from "pinia";
import VueCookies from "vue-cookies";

const app = createApp(App);
const pinia = createPinia();

app.use(VueCookies, { expires: "7d" });
app.use(pinia);
app.mount("#app");
