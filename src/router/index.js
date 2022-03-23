import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import LoginView from '../views/Admin/LoginView.vue'
import DashboardView from '../views/Admin/DashboardView.vue'
import UsuarioIndexView from '../views/Admin/Usuarios/UsuarioIndexView.vue'
import UsuarioCreateView from '../views/Admin/Usuarios/UsuarioCreateView.vue'
import UsuarioShowView from '../views/Admin/Usuarios/UsuarioShowView.vue'
import UsuarioEditView from '../views/Admin/Usuarios/UsuarioEditView.vue'
import ProductoIndexView from '../views/Admin/Productos/ProductosIndexView.vue'
import ProductoCreateView from '../views/Admin/Productos/ProductoCreateView.vue'
import ProductoShowView from '../views/Admin/Productos/ProductoShowView.vue'
import ProductoEditView from '../views/Admin/Productos/ProductoEditView.vue'
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
    path: '/admin/usuarios/crear/',
    name: 'admin.users.create',
    component: UsuarioCreateView,
    meta: {
      title: 'Pasteleria Monterrorro | Registro de usuarios'
    }
  },
  {
    path: '/admin/usuarios/ver',
    name: 'admin.users.show',
    component: UsuarioShowView,
    meta: {
      title: 'Pasteleria Monterrorro | Informacion del usuario'
    }
  },
  {
    path: '/admin/usuarios/editar/',
    name: 'admin.users.edit', 
    component: UsuarioEditView,
    meta: {
      title: 'Pasteleria Monterrorro | Modificacion del usuario'
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
    path: '/admin/productos/crear/',
    name: 'admin.products.create',
    component: ProductoCreateView,
    meta: {
      title: 'Pasteleria Monterrorro | Registro de productos'
    }
  },
  {
    path: '/admin/productos/ver/',
    name: 'admin.products.show',
    component: ProductoShowView,
    meta: {
      title: 'Pasteleria Monterrorro | Informacion del producto'
    }
  },
  {
    path: '/admin/productos/editar/',
    name: 'admin.products.edit',
    component: ProductoEditView,
    meta: {
      title: 'Pasteleria Monterrorro | Modificacion del producto'
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
