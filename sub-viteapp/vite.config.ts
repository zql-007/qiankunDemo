import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
// const packName = require('./package').name  // 必须要指定当前子应用命名
// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: "/sub-vite", //必须和基座也就是主应用的activeRule值一致
    server: {
      port: 3002, //端口号
      cors: true,
      origin: "http://localhost:3002", //运行地址
      headers: {
        "Access-Control-Allow-Origin": "*", //避免跨域
      },
    },
    plugins: [
      vue(),
      qiankun("sub-vite", {
        useDevMode: true,
      }),
    ],
  });
};
