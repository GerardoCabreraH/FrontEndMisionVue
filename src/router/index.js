import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import LoginView from '../views/Admin/LoginView.vue'
import DashboardView from '../views/Admin/DashboardView.vue'
import UsuarioView from '../views/Admin/Usuarios/UsuarioIndexView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
    meta: {
      title: 'Pasteleria Monterrorro | Pagina de inicio'
    }
  },
  {
    path: '/admin/login/',
    name: 'admin.login',
    component: LoginView,
    meta: {
      title: 'Pasteleria Monterrorro | Iniciar sesion pastelero'
    }
  },
  {
    path: '/admin/dashboard/',
    name: 'admin.dashboard',
    component: DashboardView,
    meta: {
      title: 'Pasteleria Monterrorro | Panel de pastelero'
    }
  },
  
  {
    path: '/admin/usuarios/',
    name: 'admin.users.index',
    component: UsuarioView,
    meta: {
      title: 'Pasteleria Monterrorro | Panel de usuarios'
    }
  },
  //{
    //path: '/about',
    //name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router
