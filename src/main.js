import { createApp } from 'vue';
import router from './router';
import store from './store';

import App from './App.vue';

const Vue = createApp(App);
Vue.config.silent = true;

Vue.use(store);
Vue.use(router);

Vue.mount('#app');
