<template>
    <div class="card shadow">
        <div class="card-body">
            <div class="row">
                <div class="col-12 col-sm-12">
                    <h2 class="text-center">Adornos restantes</h2>
                </div>
                <div class="col-12 col-sm-12 mt-5">
                    <ul class="list-group" v-if="$store.getters.adornos">
                        <li class="list-group-item" v-for="adorno in $store.getters.adornos" :key="adorno.id"><a
                                href="#">Adorno:
                                {{adorno.nombre}} Existencias: {{adorno.existencias}}</a></li>
                    </ul>
                    <ul class="list-group" v-else>
                         <li class="list-group-item">Sin resultados</li>
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

