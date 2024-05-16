<script setup lang="ts">
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import { useStore } from '@/store';
import { Status } from '@/types';

const store = useStore();
const selectStatus: Array<Status | undefined> = [Status.Alive, Status.Dead, Status.Unknown];

function filterEvent() {
    store.commit('setPage', 1)
    store.dispatch('fetchAPI')
}

function filterReset() {
    store.commit('resetFilter')
    store.dispatch('fetchAPI')
}

</script>

<template>
    <div class="container">
        <InputText type="text" v-model="store.state.filterName" placeholder="Введите имя" />
        <Dropdown v-model="store.state.filterStatus" :options="selectStatus" placeholder="Выберите статус"
            class="w-full md:w-14rem" />
        <Button label="Применить" severity="info" @click="filterEvent" />
        <Button :disabled="!(store.state.filterName || store.state.filterStatus)" label="Сбросить" severity="info"
            @click="filterReset" />
    </div>
</template>

<style scoped>
.container {
    padding: 1%;
    display: flex;
    gap: 1%;
    justify-content: center
}

@media (max-width: 650px) {
    .container {
        gap: 3%;
        flex-direction: column;
    }
}
</style>
