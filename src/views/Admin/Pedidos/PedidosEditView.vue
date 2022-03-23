<template>
    <NavbarAdmin />
    <main id="dashboard" class="content">
        <EditarPedido>
            <router-link class="btn btn-primary btn-block" to="/admin/pedidos/">Regresar</router-link>
        </EditarPedido>
    </main>
</template>

<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import EditarPedido from "@/components/Admin/Pedidos/EditarPedido.vue";
export default {
    name: "PedidosEditView",
    components: { NavbarAdmin, EditarPedido }
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
