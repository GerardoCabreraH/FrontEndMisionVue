import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [{ id: '1', codigo: 'M00122', slug: 'm00122', imagen: 'img/productos/sabor-vanilla.jpg', nombre: 'Vanilla', precio: 50.00, tipo: 'Sabor', existencias: 30 }, { id: '2', codigo: 'M00222', slug: 'm00222', imagen: 'img/productos/sabor-chocolate.jpg', nombre: 'Chocolate', precio: 50.00, tipo: 'Sabor', existencias: 30 }, { id: '3', codigo: 'M00322', slug: 'm00322', imagen: 'img/productos/sabor-fresa.jpg', nombre: 'Fresa', precio: 50.00, tipo: 'Sabor', existencias: 30 }, { id: '4', slug: 'm00422', codigo: 'M00422', imagen: 'img/productos/sabor-limon.png', nombre: 'Limón', precio: 50.00, tipo: 'Sabor', existencias: 30 }, { id: '5', codigo: 'M00522', slug: 'm00522', imagen: 'img/productos/trozos-de-chocolate.jpg', nombre: 'Trozos de chocolate', precio: 50.00, tipo: 'Adorno', existencias: 30 }, { id: '6', codigo: 'M00622', slug: 'm00622', imagen: 'img/productos/trozos-de-mango.png', nombre: 'Trozos de mango', precio: 50.00, tipo: 'Adorno', existencias: 30 }, { id: '7', codigo: 'M00722', slug: 'm00722', imagen: 'img/productos/trozos-de-fresa.jpg', nombre: 'Trozos de fresa', precio: 50.00, tipo: 'Adorno', existencias: 30 }, { id: '8', codigo: 'M00822', slug: 'm00822', imagen: 'img/productos/trozos-de-durazno.jpg', nombre: 'Trozos de durazno', precio: 50.00, tipo: 'Adorno', existencias: 30 }],
    usuarios: [{codigo: "U00122", slug: 'u00122', nombre: "Admin", email:"admin@monterollo.com.mx", rol: "Administrador"}],
    pedidos: [{ id: '1', codigo: 'P00122', slug: 'p00122', nombre: 'Gerardo Cabrera', email: 'gerardo_cabrera@correo.com', telefono: '8183912893', productos: ['Vanilla'], descripcion: 'Descripcion', total: 25.00}],
  },
  getters: {
    sabores (state) {
      return state.productos.filter(function (producto) {
        return producto.tipo == "Sabor";
      })
    },
    adornos (state) {
      return state.productos.filter(function (producto) {
        return producto.tipo == "Adorno";
      })
    },
    ingresos(state) {
      const ingreso = state.pedidos.reduce(function (total, pedido) {
        return total + pedido.total;
      }, 0);
      return ingreso.toFixed(2);
    },
    existencias(state) {
      const existencia = state.productos.reduce(function (total, producto) {
        return total + producto.existencias;
      }, 0);
      return existencia;
    },
  },
  mutations: {
    totalIt() {
      var input = document.getElementsByClassName("form-check-input");
      var total = 0;
      for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
          total += parseFloat(input[i].dataset.price);
        }
      }
      document.getElementsByName("total")[0].value = total.toFixed(2);
    },
  },
  actions: {
    totalIt (context) {
      context.commit('totalIt')
    },
    showSidebar() {
      var sidebar = document.getElementById("sidebar");
      var dashboard = document.getElementById("dashboard");
      if (sidebar.style.display === "none" && dashboard.style.display === "block") {
        sidebar.style.display = "block";
        dashboard.style.display = "none";
      } else {
        sidebar.style.display = "none";
        dashboard.style.display = "block";
      }
    },
  },
  modules: {
  },
})
