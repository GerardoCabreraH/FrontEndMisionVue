<template>
  <Navbar/>
  <main>
    <Inicio />
    <Nosotros />
    <Precios />
    <Pedidos />
    <Contacto />
  </main>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Inicio from '../components/Website/Inicio.vue'
import Nosotros from '../components/Website/Nosotros.vue'
import Precios from '@/components/Website/Precios.vue'
import Pedidos from '@/components/Website/Pedidos.vue'
import Contacto from '../components/Website/Contacto.vue'
import Footer from '../components/Website/Footer.vue'

export default {
  name: 'IndexView',
  components: {
    Navbar,
    Inicio,
    Nosotros,
    Precios,
    Pedidos,
    Contacto,
    Footer
 }
}
</script>