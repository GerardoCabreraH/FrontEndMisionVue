<template>
    <section id="count" class="section-light">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12">
                    <h1 class="text-center">Gestion de productos</h1>
                </div>
                <div class="col-12 col-sm-12 mt-5">
                    <div class="row">
                        <div class="col-12 col-sm-3 my-3">
                            <div class="card text-white bg-success mb-3 h-100 shadow">
                                <div class="card-body text-center">
                                    <p><span class="icon-dashboard"><i class="fas fa-box"></i></span></p>
                                    <p>{{$store.state.productos.length}} Productos</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-3 my-3">
                            <div class="card text-white bg-success mb-3 h-100 shadow">
                                <div class="card-body text-center">
                                    <p><span class="icon-dashboard"><i class="fas fa-calculator"></i></span></p>
                                    <p>{{$store.getters.existencias}} Existencias</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-3 my-3">
                            <div class="card text-white bg-success mb-3 h-100 shadow">
                                <div class="card-body text-center">
                                    <p><span class="icon-dashboard"><i class="fas fa-list"></i></span></p>
                                    <p>{{$store.getters.sabores.length}} Sabores</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-3 my-3">
                            <div class="card text-white bg-success mb-3 h-100 shadow">
                                <div class="card-body text-center">
                                    <p><span class="icon-dashboard"><i class="fas fa-money-bill"></i></span></p>
                                    <p>{{$store.getters.adornos.length}} Adornos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContadorProductos'
}
</script>

<style scoped>
    .section-light {
        padding: 50px 15px;
    }
    .icon-dashboard {
        font-size: 24px;
        color: #ffffff;
    } 
</style>