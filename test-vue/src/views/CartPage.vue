<script setup lang="ts">
import { useStore } from '@/store';
import CartItem from './components/CartItem.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = useStore()
store.dispatch('fetchCharacter', route.query.id)

</script>

<template>
    <section v-if="store.state.results[0]" class="container-characters">
        <CartItem if :character="store.state.results[0]" />
    </section>
    <p class="text-empty" v-else>О, нет 😢! Ничего не найдено</p>

</template>

<style scoped></style>
