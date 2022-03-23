<template>
    <NavbarAdmin />
    <main id="dashboard" class="content">
        <VerProducto>
            <router-link class="btn btn-primary btn-block" to="/admin/productos/">Regresar</router-link>
            <router-link class="btn btn-warning btn-block" to="/admin/productos/editar">Editar</router-link>
            <a href="#" class="btn btn-danger btn-block">Eliminar</a>
        </VerProducto>
    </main>
</template>

<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import VerProducto from "../../../components/Admin/Productos/VerProducto.vue";
export default {
    name: "ProductoShowView",
    components: { NavbarAdmin, VerProducto }
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