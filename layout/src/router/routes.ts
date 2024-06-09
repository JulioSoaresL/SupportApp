import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import CreateTicket from '../views/CreateTicket.vue';
import ViewTicket from '../views/ViewTicket.vue';
import Choose from "../views/Choose.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ChooseMenu',
    component: Choose,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/create-ticket',
    name: 'CreateTicket',
    component: CreateTicket,
    meta: { requiresAuth: true },
  },
  {
    path: '/tickets/:id',
    name: 'ViewTicket',
    component: ViewTicket,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});


export default router;
