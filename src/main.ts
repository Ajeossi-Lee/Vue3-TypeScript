import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:windi.css'
import pinia from './store'
import icons from '@/config/register-icons'

const app = createApp(App)

app.use(icons)
app.use(router)
app.use(pinia)

app.mount('#app')
