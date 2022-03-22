<template>
    <NavbarAdmin />
    <main id="dashboard" class="content">
        <ContadorDashboard />
        <Productos />
        <Pedidos />
    </main>
</template>

<script>
import ContadorDashboard from "@/components/Admin/ContadorDashboard.vue"
import Productos from "@/components/Admin/Productos.vue"
import Pedidos from "@/components/Admin/Pedidos.vue"
import NavbarAdmin from "@/components/NavbarAdmin.vue"

export default {
    name: 'DashboardView',
    components: {
    ContadorDashboard,
    Productos,
    Pedidos,
    NavbarAdmin
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