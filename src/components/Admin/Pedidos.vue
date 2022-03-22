<template>
    <section id="pedidos" class="section-light">
        <div class="container">
            <div class="card shadow">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12 col-sm-12">
                            <h2 class="text-center">Tabla de pedidos</h2>
                        </div>
                        <div class="col-12 col-sm-12 mt-5">
                            <ListaPedidos />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ListaPedidos from "./Pedidos/ListaPedidos.vue";
export default {
    name: "Pedidos",
    components: { ListaPedidos }
}
</script>

<style scoped>
.section-light {
    padding: 50px 15px;
}
</style>