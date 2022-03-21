import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [{ id: '1', imagen: 'img/productos/sabor-vanilla.jpg', nombre: 'Vanilla', precio: '30.00', tipo: 'Sabor' }, { id: '2', imagen: 'img/productos/sabor-chocolate.jpg', nombre: 'Chocolate', precio: '30.00', tipo: 'Sabor' }, { id: '3', imagen: 'img/productos/sabor-fresa.jpg', nombre: 'Fresa', precio: '30.00', tipo: 'Sabor' }, { id: '4', imagen: 'img/productos/sabor-limon.png', nombre: 'Limón', precio: '30.00', tipo: 'Sabor' }, { id: '5', imagen: 'img/productos/trozos-de-chocolate.jpg', nombre: 'Trozos de chocolate', precio: '30.00', tipo: 'Adorno' }, { id: '6', imagen: 'img/productos/trozos-de-mango.png', nombre: 'Trozos de mango', precio: '30.00', tipo: 'Adorno' }, { id: '7', imagen: 'img/productos/trozos-de-fresa.jpg', nombre: 'Trozos de fresa', precio: '30.00', tipo: 'Adorno' }, { id: '8', imagen: 'img/productos/trozos-de-durazno.jpg', nombre: 'Trozos de durazno', precio: '30.00', tipo: 'Adorno' }],
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
    }
  },
  modules: {
  }
})
