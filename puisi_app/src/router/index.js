import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PoemList from '../components/PoemList.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/poems', component: PoemList },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
