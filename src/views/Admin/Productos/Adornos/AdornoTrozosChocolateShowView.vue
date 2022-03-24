<template>
    <NavbarAdmin />
    <main id="dashboard" class="content">
        <section id="count" class="section-light">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12">
                        <h1 class="text-center">Información del adorno trozos de chocolate</h1>
                    </div>
                    <div class="col-12 col-sm-12 mt-5">
                        <div class="card shadow">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-sm-12">
                                        <InformacionAdorno>
                                            <div class="form-group">
                                                <img src="../../../../assets/img/productos/trozos-de-chocolate.jpg"
                                                    class="img-fluid img-card" alt="producto-pastel">
                                            </div>
                                            <div class="form-group">
                                                <p><strong>Código del producto:</strong> M00522</p>
                                            </div>
                                            <div class="form-group">
                                                <p><strong>Nombre del producto:</strong> Trozos de chocolate</p>
                                            </div>
                                            <div class="form-group">
                                                <p><strong>Tipo de producto: </strong> Adorno</p>
                                            </div>
                                            <div class="form-group">
                                                <p><strong>Precio del producto: </strong> $50.00</p>
                                            </div>
                                            <div class="form-group">
                                                <p>
                                                    <strong>Descripción del producto:</strong><br>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat. Duis
                                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                                    eu fugiat nulla pariatur. Excepteur sint
                                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                    mollit anim id est laborum.
                                                </p>
                                            </div>
                                            <div class="form-group">
                                                <p><strong>Existencias: </strong> 30</p>
                                            </div>
                                        </InformacionAdorno>
                                    </div>
                                    <div class="col-12 col-sm-12">
                                        <div class="form-group">
                                            <p><strong>Acciones:</strong></p>
                                            <router-link class="btn btn-primary btn-block" to="/admin/productos/">Regresar</router-link>
                                            <router-link class="btn btn-warning btn-block" to="/admin/productos/editar/m00522">Editar</router-link>
                                            <a href="#" class="btn btn-danger btn-block">Eliminar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import InformacionAdorno from "@/components/Admin/Adornos/InformacionAdorno.vue";
export default {
    name: 'AdornoTrozosChocolateShowView',
    components: { NavbarAdmin, InformacionAdorno },
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
.section-light {
    padding: 50px 15px;
}
.img-card {
    width: 300px;
    height: 200px;
}
@media only screen and (max-width: 768px){
    .content {
        width: 100%;
        float: left;
    }
}  
</style>