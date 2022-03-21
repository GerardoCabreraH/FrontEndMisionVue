<template>
    <section id="precios" class="section-dark">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12">
                    <h2 class="text-center">Precios</h2>
                </div>
                <Sabores />
                <Adornos />
            </div>
        </div>
    </section>
</template>

<script>
import Sabores from "./Partials/Sabores.vue";
import Adornos from "./Partials/Adornos.vue";
export default {
    name: "Precios",
    components: { Sabores, Adornos }
}
</script>

<style scoped>
.section-dark {
    padding: 50px 15px;
    background-color: #ffcccc;
}
</style>