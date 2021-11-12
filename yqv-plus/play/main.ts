import {createApp} from 'vue'
import App from './app.vue';
import ZIcon from '@z-plus/components/icon'
import '@z-plus/theme-chalk/src/index.scss';
const app = createApp(App);

app.use(ZIcon);
app.mount('#app')