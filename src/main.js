import  router  from './router/index.js';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/index.css';

const app=createApp(App)
app.use(router)
app.mount('#app')
