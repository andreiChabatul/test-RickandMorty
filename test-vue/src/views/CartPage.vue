<script setup lang="ts">
import { useStore } from '@/store';
import CartItem from './components/CartItem.vue';
import { useRoute, useRouter } from 'vue-router';
import Tag from 'primevue/tag';
import Button from 'primevue/button';

const route = useRoute();
const router = useRouter()
const store = useStore();
store.dispatch('fetchCharacter', route.query.id);

const next = () => {
    router.replace(`/cart?id=${Number(route.query.id) + 1}`)
    store.dispatch('fetchCharacter', Number(route.query.id) + 1);
}

const prev = () => {
    router.replace(`/cart?id=${Number(route.query.id) - 1}`)
    store.dispatch('fetchCharacter', Number(route.query.id) - 1);
}

</script>

<template>
    <RouterLink class="link-home" to="/">
        <Tag class="span-home" severity="info" icon='pi pi-home' value='Go to Home'></Tag>
    </RouterLink>
    <div class="cart-container">
        <Button @click="prev" icon="pi pi-angle-left" severity="secondary" text raised />
        <div>
            <section v-if="store.state.results[0]">
                <CartItem if :character="store.state.results[0]" v-auto-animate/>
            </section>
            <p class="text-empty" v-else>О, нет 😢! Ничего не найдено</p>
        </div>
        <Button @click="next" icon="pi pi-angle-right" severity="secondary" text raised />
    </div>
</template>

<style scoped>
.cart-container {
    padding-top: 3%;
    display: flex;
    justify-content: center;
    gap: 10%;
}

.link-home {
    margin: 1%;
    display: inline-block;
    text-decoration: none;
    position: absolute;
    left: 0;
    transition: all .4s;
}

.link-home:hover {
    transform: scale(1.05);
}

.span-home {

    width: max-content;
    font-size: 18px;
    font-weight: 700;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
}

.text-empty {
    padding: 3%;
    color: whitesmoke;
}
</style>
