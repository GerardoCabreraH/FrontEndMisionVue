<template>
    <div class="card shadow">
        <div class="card-body">
            <div class="row">
                <div class="col-12 col-sm-12">
                    <h2 class="text-center">Sabores</h2>
                </div>
                <div class="col-12 col-sm-12 mt-5">
                    <ul class="list-group" v-if="$store.getters.sabores">
                        <li class="list-group-item" v-for="sabor in $store.getters.sabores" :key="sabor.id"><router-link
                                :to="'/admin/productos/ver/' + sabor.slug">Sabor:
                                {{sabor.nombre}} Existencias: {{sabor.existencias}}</router-link></li>
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
    name: 'ListaSabores'
}
</script>