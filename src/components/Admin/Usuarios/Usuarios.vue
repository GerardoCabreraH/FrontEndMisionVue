<template>
    <section id="pedidos" class="section-light">
        <div class="usuarios">
            <div class="card shadow">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12 col-sm-12">
                            <h2 class="text-center">Tabla de usuarios</h2>
                        </div>
                        <div class="col-12 col-sm-12 mt-5">
                            <ListaUsuarios />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ListaUsuarios from "./ListaUsuarios.vue";
export default {
    name: "Usuarios",
    components: { ListaUsuarios }
}
</script>

<style scoped>
.section-light {
    padding: 50px 15px;
} 
</style>