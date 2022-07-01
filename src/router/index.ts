import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Calculate from "@/views/Calculate.vue";
import Success from "@/views/Success.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "home", component: Home, meta: { requiresAuth: false } },
  {
    path: "/calculate",
    name: "calculate",
    component: Calculate,
    meta: { requiresAuth: false },
  },
  {
    path: "/success",
    name: "success",
    component: Success,
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
