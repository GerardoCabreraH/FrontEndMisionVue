<template>
    <section id="count" class="section-light">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12">
                    <h1 class="text-center">Información del usuario P00122</h1>
                </div>
                <div class="col-12 col-sm-12 mt-5">
                    <div class="card shadow">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <h3 class="text-center">Datos personales</h3>
                                    <div class="form-group">
                                        <p><strong>Nombre del cliente:</strong> Gerardo Rafael Cabrera Herrera</p>
                                    </div>
                                    <div class="form-group">
                                        <p><strong>Email del cliente:</strong> gera_cabrera@correo.com</p>
                                    </div>
                                    <div class="form-group">
                                        <p><strong>Teléfono del cliente:</strong> 8183912893</p>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <h3 class="text-center">Detalles del pedido</h3>
                                    <div class="form-group">
                                        <p><strong>Código del pedido:</strong> P00122</p>
                                    </div>
                                    <div class="form-group">
                                        <p>
                                            <strong>Sabores:</strong><br>
                                            Vanilla<br> 
                                            Chocolate<br> 
                                            Fresa<br> 
                                            Limón<br>
                                        </p>
                                    </div>
                                    <div class="form-group">
                                        <p>
                                            <strong>Adornos:</strong><br> 
                                            Trozos de chocolate<br> 
                                            Trozos de mango<br> 
                                            Trozos de fresa<br> 
                                            Trozos de durazno<br>
                                        </p>
                                    </div>
                                    <div class="form-group">
                                        <p><strong>Descripción del pedido:</strong><br> 
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                    <div class="form-group">
                                        <p><strong>Total del pedido:</strong> $200.00</p>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12">
                                    <div class="form-group">
                                        <p>Acciones:</p>
                                        <slot></slot>
                                    </div>
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
    name: 'VerPedido'
}
</script>

<style scoped>
.section-light {
    padding: 50px 15px;
} 
</style>