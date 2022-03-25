<template>
    <div id="sabores" class="col-12 col-sm-12">
        <div class="row">
            <div class="col-12 col-sm-12 mt-5">
                <h3 class="text-center">Lista de sabores</h3>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-sm-3 my-3" v-for="sabor in $store.getters.sabores" :key="sabor.id">
                <div class="card card-sabores h-100">
                    <img v-bind:src="sabor.imagen"
                        class="card-img-top img-fluid img-card border-bottom border-dark"
                        alt="producto-pastel">
                    <div class="card-body">
                        <h5 class="card-title">{{ sabor.nombre }}</h5>
                        <p class="card-text"><span class="icon"><i class="fas fa-dollar-sign"></i></span>
                            Precio: ${{ sabor.precio.toFixed(2) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sabores'
}
</script>

<style scoped>
.img-card {
    width: 300px;
    height: 200px;
}
.card-sabores {
    width: 100%;
}
</style>