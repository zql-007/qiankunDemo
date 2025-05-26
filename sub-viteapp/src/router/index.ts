// 通过vue-router实现路由配置
import { createRouter, createWebHistory } from "vue-router";
// import { constantRoute } from "./routers";
const constantRoute = [
  {
    path: "/",
    component: () => import("../view/admin.vue"),
    name: "login", //命名路由做菜单权限
  },
  {
    path: "/son",
    component: () => import("../view/son.vue"),
    name: "son", //命名路由做菜单权限
  },
];
// 创建路由器
let router = createRouter({
  // 路由模式必须改为history模式，不然不生效
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoute,
  //   滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
export default router;
