<template>
    <NavbarAdmin />
    <main id="dashboard" class="content">
        <CrearProducto>
            <router-link class="btn btn-primary btn-block" to="/admin/productos/">Regresar</router-link>
        </CrearProducto>
    </main>
</template>

<script>
import CrearProducto from "../../../components/Admin/Productos/CrearProducto.vue";
import NavbarAdmin from "@/components/NavbarAdmin.vue";
export default {
    name: "ProductoCreateView",
    components: { CrearProducto, NavbarAdmin },
    mounted() {
      let body = document.querySelector('body');
      body.style.backgroundColor = "#ffffff";
    }
}
</script>

<style scoped>
    .content {
        width: 80%;
        float: right;
        position: relative;
    }
    @media only screen and (max-width: 768px){
        .content {
            width: 100%;
            float: left;
        }
    }
</style>