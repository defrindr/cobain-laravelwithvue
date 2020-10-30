
import App from './components/ExampleComponent.vue';
require('./bootstrap');
window.Vue = require('vue');

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
