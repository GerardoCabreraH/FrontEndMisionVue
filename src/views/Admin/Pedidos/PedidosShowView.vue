<template>
    <NavbarAdmin />
    <main id="dashboard" class="content">
        <VerPedido>
            <router-link class="btn btn-primary btn-block" to="/admin/pedidos">Regresar</router-link>
        </VerPedido>
    </main>
</template>

<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import VerPedido from "@/components/Admin/Pedidos/VerPedido.vue";
export default {
    name: "PedidosShowIndex",
    components: { NavbarAdmin, VerPedido }
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