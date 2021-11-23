import Vue from 'vue';
import App from './app';
// import YqIcon from '@yqv-base/components/icon/index';
// import YqButton from '@yqv-base/components/button/index';
// import '@yqv-base/theme_chalk/src/index.scss';


import YqvBaseUi from 'yqv-base';
import 'yqv-base/lib/theme-chalk/css/index.css';
console.log(YqvBaseUi);
Vue.use(YqvBaseUi);
new Vue({
	render: h => h(App)
}).$mount('#app');
