<template>
    <div id="adornos" class="col-12 col-sm-12">
        <div class="row">
            <div class="col-12 col-sm-12 mt-5">
                <h3 class="text-center">Lista de adornos</h3>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-sm-3 my-3" v-for="adorno in $store.getters.adornos" :key="adorno.id">
                <div class="card card-sabores h-100">
                    <img v-bind:src="adorno.imagen"
                        class="card-img-top img-fluid img-card border-bottom border-dark"
                        alt="producto-pastel">
                    <div class="card-body">
                        <h5 class="card-title">{{ adorno.nombre }}</h5>
                        <p class="card-text"><span class="icon"><i class="fas fa-dollar-sign"></i></span>
                            Precio: ${{ adorno.precio }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Adornos'
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