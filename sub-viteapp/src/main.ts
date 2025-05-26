import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let app: any;
// 判断是否在qiankun环境下
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  createApp(App).use(router).mount("#app");
} else {
  renderWithQiankun({
    // qiankun的生命周期，挂载
    mount(props) {
      // 传递的值可以获取到了
      app = createApp(App);
      app.use(router);
      app.mount(
        props.container
          ? props.container.querySelector("#app")
          : document.getElementById("app")
      );
    },
    // 应用加载
    bootstrap() {
      console.log("--bootstrap");
    },
    // 修改
    update(props) {
      console.log("--update", props);
    },
    // 销毁
    unmount() {
      console.log("--unmount");
      app?.unmount();
    },
  });
}
