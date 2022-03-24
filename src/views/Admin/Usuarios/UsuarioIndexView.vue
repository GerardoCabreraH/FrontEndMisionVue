<template>
    <NavbarAdmin />
    <main id="dashboard" class="content">
        <ContadorUsuarios />
        <Usuarios>
            <router-link class="btn btn-success btn-block" to="/admin/usuarios/crear">Crear</router-link>
        </Usuarios>
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
    },
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