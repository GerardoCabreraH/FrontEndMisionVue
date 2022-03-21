<template>
    <section id="pedidos" class="section-light">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12">
                    <h2 class="text-center">Realiza tu pedido</h2>
                </div>
                <div class="col-12 col-sm-12 mt-5">
                    <Formulario />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Formulario from "./Formulario/Formulario.vue";
    export default {
    name: "Pedidos",
    components: { Formulario }
}
</script>

<style scoped>
.section-light {
    padding: 50px 15px;
}
</style>