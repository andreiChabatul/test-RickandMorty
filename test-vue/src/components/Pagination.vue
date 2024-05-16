<script setup lang="ts">
import { useStore } from '@/store';
import Paginator, { type PageState } from 'primevue/paginator';

const store = useStore();

function setPage(event: PageState) {
    store.commit('setPage', event.page + 1);
    store.dispatch('fetchAPI');
}

</script>

<template>
    <div class="overflow-auto">
        <Paginator @page="setPage" :rows="20" :totalRecords=store.state.totalRecords :currentPage=store.state.page>
        </Paginator>
    </div>
</template>
