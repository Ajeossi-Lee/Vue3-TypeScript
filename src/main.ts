import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/service/modules/test'
import 'virtual:windi.css'
import pinia from './store'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
