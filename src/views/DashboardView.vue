<template>
    <div class="row">
        <div class="col-md-12">
            <br />
            <h1>Your Schedule Table</h1>
            <br />
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th :key="day" v-for="day in dayOfWeek">
                            {{ capitalize(day) }}
                        </th>
                    </tr>
                </thead>
                <tbody v-if="mainStore.schedule.length > 0">
                    <tr :key="row" v-for="row in 10">
                        <td>{{ row }}</td>
                        <td :key="i" v-for="i in 5">
                            {{ mainStore.schedule[i - 1][row - 1] }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <CardComponent> </CardComponent>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useMainStore } from "@/stores/main";
const capitalize = (item: string) => {
    return item[0].toUpperCase() + item.substring(1);
};
const dayOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
];
const mainStore = useMainStore();

onMounted(() => {
    mainStore.getUserData();
});
</script>

<style scoped></style>
