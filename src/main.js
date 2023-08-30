import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import Countdown from 'vue3-flip-countdown'
import $ from 'jquery';

import 'jquery/dist/jquery';
import 'jquery/dist/jquery.slim';

import './assets/style.css'
import './assets/icon.css'

window.$ = window.jQuery = $;

createApp(App).use(router).use(Countdown).mount('#app')