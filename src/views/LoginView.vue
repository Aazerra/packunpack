<template>
    <div class="row">
        <div class="col-md-12"><h1>PackUnpack</h1></div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <form>
                <div class="form-group mt-3">
                    <label for="username">Username:</label>
                    <input
                        id="username"
                        class="form-control"
                        type="text"
                        v-model="username"
                    />
                </div>
                <div class="form-group mt-3">
                    <label for="password">Password:</label>
                    <input
                        id="password"
                        class="form-control"
                        type="password"
                        v-model="password"
                    />
                </div>
                <div class="form-group mt-3">
                    <button
                        @click="login"
                        type="submit"
                        class="btn btn-primary"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { ref } from "vue";

const username = ref("");
const password = ref("");
const mainStore = useMainStore();
const login = (e: any) => {
    e.preventDefault();
    mainStore.login(username.value, password.value);
};
</script>

<style scoped>
.form-control {
    width: auto !important;
}
</style>
