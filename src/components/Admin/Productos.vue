<template>
    <section id="restantes" class="section-light">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <ListaSabores />
                </div>
                <div class="col-12 col-sm-6">
                    <ListaAdornos />
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