<template>
    <div class="card shadow">
        <div class="card-body">
            <div class="row">
                <div class="col-12 col-sm-12">
                    <h2 class="text-center">Adornos restantes</h2>
                </div>
                <div class="col-12 col-sm-12 mt-5">
                    <ul class="list-group">
                        <li class="list-group-item" v-for="adornos in $store.getters.adornos" :key="adornos.id"><a
                                href="#">Adorno:
                                {{adornos.nombre}} Existencias: {{adornos.existencias}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListaAdornos'
}
</script>

