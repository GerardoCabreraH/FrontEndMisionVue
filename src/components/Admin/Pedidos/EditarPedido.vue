<template>
    <section id="count" class="section-light">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12">
                    <h1 class="text-center">Modificación del pedido P00121</h1>
                </div>
                <div class="col-12 col-sm-12 mt-5">
                    <div class="card shadow">
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <h2 class="text-center">Datos personales</h2>
                                        <div class="form-group">
                                            <label for="name">Nombre completo del cliente</label>
                                            <input type="text" name="name" id="name" placeholder="Nombre" class="form-control"
                                                value="Gerardo Rafael Cabrera Herrera">
                                        </div>
                                        <div class="form-group">
                                            <label for="email">Email del cliente</label>
                                            <input type="email" name="email" id="email" placeholder="Email" class="form-control"
                                                value="gera_cabrera@correo.com">
                                        </div>
                                        <div class="form-group">
                                            <label for="phone">Teléfono del cliente</label>
                                            <input type="phone" name="phone" id="phone" placeholder="Telefono" maxlength="10" class="form-control"
                                                value="8183912893">
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <h2 class="text-center">Detalles del pedido</h2>
                                        <div class="form-group">
                                            <label>Sabores</label>
                                            <div class="form-check">
                                                <input class="form-check-input" name="products[]" type="checkbox" id="vanillaCheckbox"
                                                    value="Vanilla" data-price="25.00" @click="totalIt()" checked>
                                                <label class="form-check-label" for="vanillaCheckbox">Vanilla</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" name="products[]" type="checkbox" id="chocolateCheckbox"
                                                    value="Chocolate" data-price="25.00" @click="totalIt()" checked>
                                                <label class="form-check-label" for="chocolateCheckbox">Chocolate</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" name="products[]" type="checkbox" id="fresaCheckbox"
                                                    value="Fresa" data-price="25.00" @click="totalIt()" checked>
                                                <label class="form-check-label" for="fresaCheckbox">Fresa</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" name="products[]" type="checkbox" id="limonCheckbox"
                                                    value="Limón" data-price="25.00" @click="totalIt()" checked>
                                                <label class="form-check-label" for="limonCheckbox">Limón</label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Adornos</label>
                                            <div class="form-check">
                                                <input class="form-check-input" name="products[]" type="checkbox"
                                                    id="trozosChocolateCheckbox" value="Trozos de chocolate" data-price="25.00" @click="totalIt()" checked>
                                                <label class="form-check-label" for="trozosChocolateCheckbox">Trozos de chocolate</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" name="products[]" type="checkbox"
                                                    id="trozosMangoCheckbox" value="Trozos de mango" data-price="25.00" @click="totalIt()" checked>
                                                <label class="form-check-label" for="trozosMangoCheckbox">Trozos de mango</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" name="products[]" type="checkbox"
                                                    id="trozosFresaCheckbox" value="Trozos de fresa" data-price="25.00" @click="totalIt()" checked>
                                                <label class="form-check-label" for="trozosFresaCheckbox">Trozos de fresa</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" name="products[]" type="checkbox"
                                                    id="trozosDuraznoCheckbox" value="Trozos de durazno" data-price="25.00" @click="totalIt()" checked>
                                                <label class="form-check-label" for="trozosDuraznoCheckbox">Trozos de durazno</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-12">
                                        <div class="form-group">
                                            <label for="description">Descripción del pedido</label>
                                            <textarea type="text" id="description" name="description" rows="5" placeholder="Descripción"
                                                class="form-control">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="total">Total del pedido</label>
                                            <input type="text" name="total" id="total" placeholder="Total" class="form-control" readonly
                                                value="$200.00">
                                        </div>
                                        <div class="form-group">
                                            <slot></slot>
                                            <button type="button" class="btn btn-success btn-block">Enviar</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'EditarPedido'
}
</script>

<style scoped>
.section-light {
    padding: 50px 15px;
}
textarea {
    resize: none;
}
</style>