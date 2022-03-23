<template>
    <NavbarAdmin />
    <main id="dashboard" class="content">
        <ContadorProductos />
        <Productos>
            <router-link class="btn btn-success btn-block" to="/admin/productos/crear">Crear</router-link>
        </Productos>
    </main>
</template>

<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import ContadorProductos from "../../../components/Admin/Productos/ContadorProductos.vue";
import Productos from "@/components/Admin/Productos.vue";
export default {
    name: "ProductosIndexView",
    components: { 
        NavbarAdmin, 
        ContadorProductos, 
        Productos 
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