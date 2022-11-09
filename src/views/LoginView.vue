<template>
    <input type="text" v-model="username" />
    <input type="password" v-model="password" />
    <button @click="login">Login</button>
</template>

<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { ref } from "vue";

const username = ref("");
const password = ref("C@h&g8$*X4WA6h8%");
const mainStore = useMainStore();
const login = () => {
    mainStore.login(username.value, password.value);
};
</script>

<style scoped></style>
