import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import router from './router/router'

import './assets/style.css'
import './assets/icon.css'

createApp(App).use(router).mount('#app')