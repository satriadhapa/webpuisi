import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PoemList from '../components/PoemList.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/poems', component: PoemList },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
