import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import LoginView from '../views/Admin/LoginView.vue'
import DashboardView from '../views/Admin/DashboardView.vue'
import UsuarioIndexView from '../views/Admin/Usuarios/UsuarioIndexView.vue'
import UsuarioCreateView from '../views/Admin/Usuarios/UsuarioCreateView.vue'
import ProductoIndexView from '../views/Admin/Productos/ProductosIndexView.vue'
import ProductoCreateView from '../views/Admin/Productos/ProductoCreateView.vue'
import PedidoIndexView from '../views/Admin/Pedidos/PedidosIndexView.vue'

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
    component: UsuarioIndexView,
    meta: {
      title: 'Pasteleria Monterrorro | Panel de usuarios'
    }
  },
  {
    path: '/admin/usuarios/crear',
    name: 'admin.users.create',
    component: UsuarioCreateView,
    meta: {
      title: 'Pasteleria Monterrorro | Registro de usuarios'
    }
  },
  {
    path: '/admin/productos/',
    name: 'admin.products.index',
    component: ProductoIndexView,
    meta: {
      title: 'Pasteleria Monterrorro | Panel de productos'
    }
  },
  {
    path: '/admin/productos/crear',
    name: 'admin.products.create',
    component: ProductoCreateView,
    meta: {
      title: 'Pasteleria Monterrorro | Registro de productos'
    }
  },
  {
    path: '/admin/pedidos/',
    name: 'admin.orders.index',
    component: PedidoIndexView,
    meta: {
      title: 'Pasteleria Monterrorro | Panel de pedidos'
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
