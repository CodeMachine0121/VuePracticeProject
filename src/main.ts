import './assets/main.css'
import './assets/reset.css'

import { createApp } from 'vue'
import mock from './mocks/server'
import App from './App.vue'
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

mock.start({
  onUnhandledRequest: 'bypass',
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(pinia)
app.mount('#app')


