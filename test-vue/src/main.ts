import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { key, store } from './store'
import PrimeVue from 'primevue/config';


createApp(App).use(store, key).use(PrimeVue).mount('#app')
