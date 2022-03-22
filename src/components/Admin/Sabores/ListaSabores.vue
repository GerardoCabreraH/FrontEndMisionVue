<template>
    <div class="card shadow">
        <div class="card-body">
            <div class="row">
                <div class="col-12 col-sm-12">
                    <h2 class="text-center">Sabores</h2>
                </div>
                <div class="col-12 col-sm-12 mt-5">
                    <ul class="list-group">
                        <li class="list-group-item" v-for="sabor in $store.getters.sabores" :key="sabor.id"><a
                                href="#">Sabor:
                                {{sabor.nombre}} Existencias: {{sabor.existencias}}</a></li>
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