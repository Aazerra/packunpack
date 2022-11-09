import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: DashboardView,
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
        },
    ],
});

router.beforeEach(async (to, from) => {
    const sid = localStorage.getItem("sid");
    if (!sid && to.name !== "login") return { name: "login" };
    if (sid && to.name === "login") return { from };
});

export default router;
