<template>
    <NavbarAdmin />
    <main id="dashboard" class="content">
        <ContadorUsuarios />
        <Usuarios />
    </main>
</template>

<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue"
import ContadorUsuarios from "@/components/Admin/Usuarios/ContadorUsuarios.vue"
import Usuarios from "@/components/Admin/Usuarios/Usuarios.vue"
export default {
    name: 'UsuarioIndexView',
    components: {
        NavbarAdmin,
        ContadorUsuarios,
        Usuarios
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