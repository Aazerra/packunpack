import { ref, computed } from "vue";
import { defineStore } from "pinia";
import client from "@/api";
import router from "@/router";

export const useMainStore = defineStore("main", {
    state: () => ({
        sid: localStorage.getItem("sid"),
        schedule: [],
    }),
    getters: {
        isLogin: (state) => state.sid !== null && state.sid.length !== 0,
    },
    actions: {
        async getUserData() {
            const { data } = await client.post(`/sid/${this.sid}`);
            this.schedule = data.table;
        },
        async login(username: string, password: string) {
            const { data } = await client.post("/login", {
                username,
                password,
            });
            this.sid = data.sid;
            await router.push("/");
        },
        async logout() {
            this.sid = null;
            await router.push("/login");
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
