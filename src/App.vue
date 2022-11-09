<script setup lang="ts">
import { RouterView } from "vue-router";
import { useMainStore } from "@/stores/main";

const mainStore = useMainStore();
mainStore.$subscribe(
    (mutation, state) => {
        if (state.sid) localStorage.setItem("sid", state.sid as string);
        if (!state.sid) localStorage.removeItem("sid");
    },
    {
        detached: true,
    }
);
</script>

<template>
    <div class="header">
        <button v-if="mainStore.isLogin" @click="mainStore.logout">
            Logout
        </button>
    </div>
    <div class="container">
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    display: flex;
    padding: 1em 2em;
    justify-content: flex-end;
}
</style>
