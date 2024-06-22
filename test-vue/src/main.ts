import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { key, store } from './store'
import PrimeVue from 'primevue/config'
import router from './router'


createApp(App)
    .use(router)
    .use(store, key)
    .use(PrimeVue)
    .mount('#app')
