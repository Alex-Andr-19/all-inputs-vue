import { createApp } from 'vue';
import router from './router';
import store from './store';
import inputStore from './components/inputs/index.js';

import App from './App.vue';

const Vue = createApp(App);
Vue.config.silent = true;

Vue.use(store);
Vue.use(router);

inputStore.forEach(component => {
    Vue.component(component.name, component);
})

Vue.mount('#app');
