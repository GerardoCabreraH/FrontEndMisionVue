<template>
    <section id="restantes" class="section-light">
        <div class="container">
            <div class="card shadow">
                <div class="card-body">
                    <div class="col-12 col-sm-12">
                        <h2 class="text-center">Tabla de productos</h2>
                        <slot></slot>
                    </div>
                    <div class="col-12 col-sm-12 mt-5">
                        <div class="row">
                            <div class="col-12 col-sm-6">
                                <ListaSabores />
                            </div>
                            <div class="col-12 col-sm-6">
                                <ListaAdornos />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ListaSabores from "./Sabores/ListaSabores.vue";
import ListaAdornos from "./Adornos/ListaAdornos.vue";
export default {
    name: "Productos",
    components: { ListaSabores, ListaAdornos }
}
</script>

<style scoped>
.section-light {
    padding: 50px 15px;
}
</style>