import { ref, computed } from "vue";
import { defineStore } from "pinia";
import client from "@/api";
import router from "@/router";

export const useMainStore = defineStore("main", {
    state: () => ({}),
    getters: {
        sid: () => localStorage.getItem("sid"),
    },
    actions: {
        async login(username: string, password: string) {
            const { data } = await client.post("/login", {
                username,
                password,
            });
            localStorage.setItem("sid", data.sid);
            await router.push("/");
        },
        async register(username: string, password: string, email: string) {
            const { data } = await client.post("/register", {
                username,
                email,
                password,
            });
            console.log(data);
        },
    },
});
