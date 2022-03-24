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
import SaborVanillaShowView from '../views/Admin/Productos/Sabores/SaborVanillaShowView.vue'
import SaborChocolateShowView from '../views/Admin/Productos/Sabores/SaborChocolateShowView.vue'
import SaborFresaShowView from '../views/Admin/Productos/Sabores/SaborFresaShowView.vue'
import SaborLimonShowView from '../views/Admin/Productos/Sabores/SaborLimonShowView.vue'
import SaborVanillaEditView from '../views/Admin/Productos/Sabores/SaborVanillaEditView.vue'
import SaborChocolateEditView from '../views/Admin/Productos/Sabores/SaborChocolateEditView.vue'
import SaborFresaEditView from '../views/Admin/Productos/Sabores/SaborFresaEditView.vue'
import SaborLimonEditView from '../views/Admin/Productos/Sabores/SaborLimonEditView.vue'
import AdornoTrozosChocolateShowView from '../views/Admin/Productos/Adornos/AdornoTrozosChocolateShowView.vue'
import AdornoTrozosMangoShowView from '../views/Admin/Productos/Adornos/AdornoTrozosMangoShowView.vue'
import AdornoTrozosFresaShowView from '../views/Admin/Productos/Adornos/AdornoTrozosFresaShowView.vue'
import AdornoTrozosDuraznoShowView from '../views/Admin/Productos/Adornos/AdornoTrozosDuraznoShowView.vue'
import AdornoTrozosChocolateEditView from '../views/Admin/Productos/Adornos/AdornoTrozosChocolateEditView.vue'
import AdornoTrozosMangoEditView from '../views/Admin/Productos/Adornos/AdornoTrozosMangoEditView.vue'
import AdornoTrozosFresaEditView from '../views/Admin/Productos/Adornos/AdornoTrozosFresaEditView.vue'
import AdornoTrozosDuraznoEditView from '../views/Admin/Productos/Adornos/AdornoTrozosDuraznoEditView.vue'
import PedidoIndexView from '../views/Admin/Pedidos/PedidosIndexView.vue'
import PedidoShowView from '../views/Admin/Pedidos/PedidosShowView.vue'
import PedidoEditView from '../views/Admin/Pedidos/PedidosEditView.vue'

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
    path: '/admin/login',
    name: 'admin.login',
    component: LoginView,
    meta: {
      title: 'Pasteleria Monterrorro | Iniciar sesion pastelero'
    }
  },
  {
    path: '/admin/dashboard',
    name: 'admin.dashboard',
    component: DashboardView,
    meta: {
      title: 'Pasteleria Monterrorro | Panel de pastelero'
    }
  },
  {
    path: '/admin/usuarios',
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
    path: '/admin/usuarios/ver/u00122',
    name: 'admin.users.show',
    component: UsuarioShowView,
    meta: {
      title: 'Pasteleria Monterrorro | Informacion del usuario'
    }
  },
  {
    path: '/admin/usuarios/editar/u00122',
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
    path: '/admin/productos/crear',
    name: 'admin.products.create',
    component: ProductoCreateView,
    meta: {
      title: 'Pasteleria Monterrorro | Registro de productos'
    }
  },
  {
    path: '/admin/productos/ver/m00122',
    name: 'admin.products.sabor.vainilla.show',
    component: SaborVanillaShowView,
    meta: {
      title: 'Pasteleria Monterrorro | Informacion del producto'
    }
  },
  {
    path: '/admin/productos/ver/m00222',
    name: 'admin.products.sabor.chocolate.show',
    component: SaborChocolateShowView,
    meta: {
      title: 'Pasteleria Monterrorro | Informacion del producto'
    }
  },
  {
    path: '/admin/productos/ver/m00322',
    name: 'admin.products.sabor.fresa.show',
    component: SaborFresaShowView,
    meta: {
      title: 'Pasteleria Monterrorro | Informacion del producto'
    }
  },
  {
    path: '/admin/productos/ver/m00422',
    name: 'admin.products.sabor.limon.show',
    component: SaborLimonShowView,
    meta: {
      title: 'Pasteleria Monterrorro | Informacion del producto'
    }
  },
  {
    path: '/admin/productos/ver/m00522',
    name: 'admin.products.adorno.chocolate.show',
    component: AdornoTrozosChocolateShowView,
    meta: {
      title: 'Pasteleria Monterrorro | Informacion del producto'
    }
  },
  {
    path: '/admin/productos/ver/m00622',
    name: 'admin.products.adorno.mango.show',
    component: AdornoTrozosMangoShowView,
    meta: {
      title: 'Pasteleria Monterrorro | Informacion del producto'
    }
  },
  {
    path: '/admin/productos/ver/m00722',
    name: 'admin.products.adorno.fresa.show',
    component: AdornoTrozosFresaShowView,
    meta: {
      title: 'Pasteleria Monterrorro | Informacion del producto'
    }
  },
  {
    path: '/admin/productos/ver/m00822',
    name: 'admin.products.adorno.durazno.show',
    component: AdornoTrozosDuraznoShowView,
    meta: {
      title: 'Pasteleria Monterrorro | Informacion del producto'
    }
  },
  {
    path: '/admin/productos/editar/m00122',
    name: 'admin.products.sabor.vainilla.edit',
    component: SaborVanillaEditView,
    meta: {
      title: 'Pasteleria Monterrorro | Modificacion del producto'
    }
  },
  {
    path: '/admin/productos/editar/m00222',
    name: 'admin.products.sabor.chocolate.edit',
    component: SaborChocolateEditView,
    meta: {
      title: 'Pasteleria Monterrorro | Modificacion del producto'
    }
  },
  {
    path: '/admin/productos/editar/m00322',
    name: 'admin.products.sabor.fresa.edit',
    component: SaborFresaEditView,
    meta: {
      title: 'Pasteleria Monterrorro | Modificacion del producto'
    }
  },
  {
    path: '/admin/productos/editar/m00422',
    name: 'admin.products.sabor.limon.edit',
    component: SaborLimonEditView,
    meta: {
      title: 'Pasteleria Monterrorro | Modificacion del producto'
    }
  },
  {
    path: '/admin/productos/editar/m00522',
    name: 'admin.products.adorno.chocolate.edit',
    component: AdornoTrozosChocolateEditView,
    meta: {
      title: 'Pasteleria Monterrorro | Modificacion del producto'
    }
  },
  {
    path: '/admin/productos/editar/m00622',
    name: 'admin.products.adorno.mango.edit',
    component: AdornoTrozosMangoEditView,
    meta: {
      title: 'Pasteleria Monterrorro | Modificacion del producto'
    }
  },
  {
    path: '/admin/productos/editar/m00722',
    name: 'admin.products.adorno.fresa.edit',
    component: AdornoTrozosFresaEditView,
    meta: {
      title: 'Pasteleria Monterrorro | Modificacion del producto'
    }
  },
  {
    path: '/admin/productos/editar/m00822',
    name: 'admin.products.adorno.durazno.edit',
    component: AdornoTrozosDuraznoEditView,
    meta: {
      title: 'Pasteleria Monterrorro | Modificacion del producto'
    }
  },
  {
    path: '/admin/pedidos',
    name: 'admin.orders.index',
    component: PedidoIndexView,
    meta: {
      title: 'Pasteleria Monterrorro | Panel de pedidos'
    }
  },
  {
    path: '/admin/pedidos/ver/p00122',
    name: 'admin.orders.show',
    component: PedidoShowView,
    meta: {
      title: 'Pasteleria Monterrorro | Informacion del pedido'
    }
  },
  {
    path: '/admin/pedidos/editar/p00122',
    name: 'admin.orders.edit',
    component: PedidoEditView,
    meta: {
      title: 'Pasteleria Monterrorro | Modificacion del pedido'
    }
  },
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
