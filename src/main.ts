import './assets/main.css'
import './assets/reset.css'

import { createApp } from 'vue'
import mock from './mocks/server'
import App from './App.vue'
import {createPinia} from "pinia";

mock.start({
  onUnhandledRequest: 'bypass',
})

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.mount('#app')


