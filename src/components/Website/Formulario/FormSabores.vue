<template>
    <div v-for="sabor in $store.getters.sabores" :key="sabor.id">
        <div class="form-check">
            <input class="form-check-input" name="products[]" type="checkbox"
                v-bind:id="sabor.nombre" v-bind:value="sabor.nombre"
                v-bind:data-price="sabor.precio" @click="$store.dispatch('totalIt')">
            <label class="form-check-label"
                v-bind:for="sabor.nombre">{{sabor.nombre}}</label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormSabores'
}
</script>