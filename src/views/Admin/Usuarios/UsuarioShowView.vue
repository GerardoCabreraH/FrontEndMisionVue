<template>
   <NavbarAdmin />
   <main id="dashboard" class="content">
      <VerUsuario>
        <router-link class="btn btn-primary btn-block" to="/admin/usuarios">Regresar</router-link>
      </VerUsuario>
   </main>
</template>

<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import VerUsuario from "@/components/Admin/Usuarios/VerUsuario.vue";
export default {
   name: 'UsuarioShowView',
   components: { NavbarAdmin, VerUsuario }
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