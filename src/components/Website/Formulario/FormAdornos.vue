<template>
    <div v-for="adorno in $store.getters.adornos" :key="adorno.id">
        <div class="form-check">
            <input class="form-check-input" name="products[]" type="checkbox"
                v-bind:id="adorno.nombre" v-bind:value="adorno.nombre"
                v-bind:data-price="adorno.precio" @click="$store.dispatch('totalIt')">
            <label class="form-check-label"
                v-bind:for="adorno.nombre">{{adorno.nombre}}</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormAdornos'
    }
</script>