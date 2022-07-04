import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Calculate from "@/views/Calculate.vue";
import LookUp from "@/views/LookUp.vue";
import Results from "@/views/Results.vue";
import Calculation from "@/views/Calculation.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "home", component: Home, meta: { requiresAuth: false } },
  {
    path: "/calculate",
    name: "calculate",
    component: Calculate,
    meta: { requiresAuth: false },
  },
  {
    path: "/results",
    name: "results",
    component: Results,
    meta: { requiresAuth: false },
    props: true,
  },
  {
    path: "/look-up",
    name: "lookup",
    component: LookUp,
    meta: { requiresAuth: false },
  },
  {
    path: "/calculations/:id",
    name: "calculation",
    component: Calculation,
    meta: { requiresAuth: false },
    props: (route) => ({ id: route.params.id }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
