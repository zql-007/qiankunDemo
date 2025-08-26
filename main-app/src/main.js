import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
import { registerMicroApps, start } from "qiankun";
import mainApp from "./main-app";
// 全局注册 Element UI
Vue.use(ElementUI);

registerMicroApps(mainApp, {
  beforeLoad: (app) => {
    console.log("before load app.name====>>>>>", app.name);
  },
  beforeMount: [
    (app) => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    },
  ],
  afterMount: [
    (app) => {
      console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    },
  ],
});
start();
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
