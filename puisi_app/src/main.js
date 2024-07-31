import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'animate.css';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
