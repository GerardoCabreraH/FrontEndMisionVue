<template>
    <NavbarAdmin />
    <main id="dashboard" class="content">
        <ContadorPedidos />
        <Pedidos />
    </main>
</template>
<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import ContadorPedidos from "../../../components/Admin/Pedidos/ContadorPedidos.vue";
import Pedidos from "@/components/Admin/Pedidos.vue";
export default {
    name: "PedidosIndexView",
    components: { NavbarAdmin, ContadorPedidos, Pedidos },
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