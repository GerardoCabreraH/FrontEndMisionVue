import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [{ id: '1', codigo: 'M00122', slug: 'm00122', imagen: 'https://cdn.pixabay.com/photo/2015/01/06/02/52/vanilla-589820_960_720.jpg', nombre: 'Vanilla', precio: 50.00, tipo: 'Sabor', existencias: 30 }, { id: '2', codigo: 'M00222', slug: 'm00222', imagen: 'https://cdn.pixabay.com/photo/2013/10/30/21/03/chocolate-203276_960_720.jpg', nombre: 'Chocolate', precio: 50.00, tipo: 'Sabor', existencias: 30 }, { id: '3', codigo: 'M00322', slug: 'm00322', imagen: 'https://cdn.pixabay.com/photo/2016/04/14/18/42/strawberry-jam-1329440_960_720.jpg', nombre: 'Fresa', precio: 50.00, tipo: 'Sabor', existencias: 30 }, { id: '4', slug: 'm00422', codigo: 'M00422', imagen: 'https://cdn.pixabay.com/photo/2020/05/29/06/07/watercolor-fruit-5233886_960_720.png', nombre: 'Limón', precio: 50.00, tipo: 'Sabor', existencias: 30 }, { id: '5', codigo: 'M00522', slug: 'm00522', imagen: 'https://cdn.pixabay.com/photo/2013/09/18/18/24/chocolate-183543_960_720.jpg', nombre: 'Trozos de chocolate', precio: 50.00, tipo: 'Adorno', existencias: 30 }, { id: '6', codigo: 'M00622', slug: 'm00622', imagen: 'https://cdn.pixabay.com/photo/2016/02/23/17/36/mango-1218147_960_720.png', nombre: 'Trozos de mango', precio: 50.00, tipo: 'Adorno', existencias: 30 }, { id: '7', codigo: 'M00722', slug: 'm00722', imagen: 'https://cdn.pixabay.com/photo/2018/04/19/17/43/food-3333790_960_720.jpg', nombre: 'Trozos de fresa', precio: 50.00, tipo: 'Adorno', existencias: 30 }, { id: '8', codigo: 'M00822', slug: 'm00822', imagen: 'https://cdn.pixabay.com/photo/2015/12/03/13/51/peach-1074997_960_720.jpg', nombre: 'Trozos de durazno', precio: 50.00, tipo: 'Adorno', existencias: 30 }],
    usuarios: [{codigo: "U00122", slug: 'u00122', nombre: "Admin", email:"admin@monterollo.com.mx", rol: "Administrador"}],
    pedidos: [{ id: '1', codigo: 'P00122', slug: 'p00122', nombre: 'Gerardo Cabrera', email: 'gerardo_cabrera@correo.com', telefono: '8183912893', productos: ['Vanilla', 'Chocolate', 'Fresa', 'Limon', 'Trozos de chocolate', 'Trozos de mango', 'Trozos de fresa', 'Trozos de durazno'], descripcion: 'Descripcion', total: 25.00 }],
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
  actions: {
    totalIt (context) {
      context.commit('totalIt')
    },
    showSidebar (context) {
      context.commit('showSidebar')
    },
  },
  modules: {
  },
})
