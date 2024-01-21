import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../custom.scss";
import BaseSection from "./components/Base/BaseSection.vue";

const app = createApp(App);
app.component("base-section", BaseSection);
app.mount("#app");
