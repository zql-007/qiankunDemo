export const constantRoute = [
  {
    // 登录
    path: "/",
    component: () => import("../view/admin.vue"),
    name: "login", //命名路由做菜单权限
  },
  {
    // 登录
    path: "/son",
    component: () => import("../view/son.vue"),
    name: "son", //命名路由做菜单权限
  },
];
