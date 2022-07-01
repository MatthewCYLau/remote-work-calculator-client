import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Users from "@/views/Users.vue";
import TaskForm from "@/views/TaskForm.vue";
import EditProfile from "@/views/EditProfile.vue";
import TaskPage from "@/views/Task.vue";
import Home from "@/views/Home.vue";
import Calculate from "@/views/Calculate.vue";
import Profile from "@/views/Profile.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
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
    path: "/register",
    component: Register,
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
