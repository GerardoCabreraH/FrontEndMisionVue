<template>
    <section id="count" class="section-light">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12">
                    <h1 class="text-center">Información del usuario Admin</h1>
                </div>
                <div class="col-12 col-sm-12 mt-5">
                    <div class="card shadow">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 col-sm-12">
                                    <div class="form-group">
                                        <img src="../../../assets/img/productos/sabor-chocolate.jpg" class="img-fluid img-card" alt="producto-pastel">
                                    </div>
                                    <div class="form-group">
                                        <p><strong>Código del producto:</strong> M00222</p>
                                    </div>
                                    <div class="form-group">
                                        <p><strong>Nombre del producto:</strong> Chocolate</p>
                                    </div>
                                    <div class="form-group">
                                        <p><strong>Tipo de producto: </strong> Sabor</p>
                                    </div>
                                    <div class="form-group">
                                        <p><strong>Precio del producto: </strong> $50.00</p>
                                    </div>
                                    <div class="form-group">
                                        <p>
                                            <strong>Descripción del producto:</strong><br>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                    <div class="form-group">
                                        <p><strong>Existencias: </strong> 30</p>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12">
                                    <div class="form-group">
                                        <p><strong>Acciones:</strong></p>
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
    name: 'VerProducto'
}
</script>

<style scoped>
.section-light {
    padding: 50px 15px;
}
.img-card {
    width: 300px;
    height: 200px;
}  
</style>