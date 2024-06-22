<script setup lang="ts">
import Card from './components/Card.vue'
import Pagination from './components/Pagination.vue'
import Filter from './components/Filter.vue'

import { useStore } from '../store'
console.log('12ewfcdfsdf')
const store = useStore()
store.dispatch('fetchAPI')
</script>

<template>
    <main class="main-container">
        <Filter />
        <section v-if="store.state.results.length" class="container-characters">
            <Card v-for="character in store.state.results" :character="character" />
        </section>
        <p class="text-empty" v-else>О, нет 😢! Ничего не найдено</p>
        <Pagination />
    </main>
</template>

<style scoped>
.main-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.container-characters {
    background: rgb(39, 43, 51);
    height: 88vh;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
}

.text-empty {
    font-size: 30px;
    color: rgb(39, 43, 51);
    padding: 3%;
}
</style>
