<template>
    <NavbarAdmin />
    <main id="dashboard" class="content">
        <EditarProducto>
            <router-link class="btn btn-primary btn-block" to="/admin/productos/ver">Regresar</router-link>
        </EditarProducto>
    </main>
</template>

<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import EditarProducto from "@/components/Admin/Productos/EditarProducto.vue";
export default {
    name: "ProductoEditView",
    components: { NavbarAdmin, EditarProducto }
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