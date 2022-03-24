<template>
    <NavbarAdmin />
    <main id="dashboard" class="content">
        <CrearUsuario>
            <router-link class="btn btn-primary btn-block" to="/admin/usuarios">Regresar</router-link>
        </CrearUsuario>
    </main>
</template>
<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import CrearUsuario from "@/components/Admin/Usuarios/CrearUsuario.vue";
export default {
    name: "UsuarioCreateView",
    components: { NavbarAdmin, CrearUsuario }
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