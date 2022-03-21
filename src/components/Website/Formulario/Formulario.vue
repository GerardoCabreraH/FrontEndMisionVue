<template>
    <form>
        <div class="row">
            <div class="col-12 col-sm-6">
                <h3 class="text-center">Datos personales</h3>
                <div class="form-group">
                    <label for="name">Nombre completo</label>
                    <input type="text" name="name" id="name" placeholder="Nombre" class="form-control">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email"
                        class="form-control">
                </div>
                <div class="form-group">
                    <label for="phone">Teléfono</label>
                    <input type="phone" name="phone" id="phone" placeholder="Telefono" maxlength="10"
                        class="form-control">
                </div>
            </div>
            <div class="col-12 col-sm-6">
                <h3 class="text-center">Detalles del pedido</h3>
                <div class="form-group">
                    <label for="name">Sabores</label>
                    <FormSabores />
                </div>
                <div class="form-group">
                    <label for="subject">Adornos</label>
                    <FormAdornos />
                </div>
            </div>
            <div class="col-12 col-sm-12">
                <div class="form-group">
                    <label for="description">Descripción del pedido</label>
                    <textarea type="text" id="description" name="description" rows="5"
                        placeholder="Descripción" class="form-control"></textarea>
                </div>
                <div class="form-group">
                    <label for="total">Total del pedido</label>
                    <input type="total" name="total" id="total" placeholder="Total" class="form-control"
                        readonly>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-success btn-block">Enviar</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import FormSabores from "./FormSabores.vue";
import FormAdornos from "./FormAdornos.vue";
export default {
    name: "Formulario",
    components: { FormSabores, FormAdornos }
}
</script>

<style scoped>
textarea {
    resize: none;
}
</style>