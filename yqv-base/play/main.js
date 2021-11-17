import Vue from 'vue';
import App from './app';
import YqIcon from '@yqv-base/components/icon/index';
import '@yqv-base/theme_chalk/src/index.scss';

Vue.use(YqIcon);
new Vue({
	render: h => h(App)
}).$mount('#app');