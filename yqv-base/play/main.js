import Vue from 'vue';
import App from './app';
// import YqIcon from '@yqv-base/components/icon/index';
// import YqButton from '@yqv-base/components/button/index';
// import '@yqv-base/theme_chalk/src/index.scss';


import {YqButton, YqIcon} from 'yqv-base';
import 'yqv-base/lib/theme-chalk/css/index.css';
console.log(YqButton);
Vue.use(YqButton);
Vue.use(YqIcon);
new Vue({
	render: h => h(App)
}).$mount('#app');
