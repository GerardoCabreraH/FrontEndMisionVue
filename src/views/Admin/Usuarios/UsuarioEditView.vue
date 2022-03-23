<template>
   <NavbarAdmin />
   <main id="dashboard" class="content">
      <EditarUsuario>
        <router-link class="btn btn-primary btn-block" to="/admin/usuarios/">Regresar</router-link>
      </EditarUsuario>
   </main>
</template>

<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import EditarUsuario from "@/components/Admin/Usuarios/EditarUsuario.vue";
export default {
   name: 'UsuarioEditView',
   components: { NavbarAdmin, EditarUsuario }
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