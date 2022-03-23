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
                                        <p><strong>Código del usuario:</strong> U00122</p>
                                    </div>
                                    <div class="form-group">
                                        <p><strong>Nombre del usuario:</strong> Admin</p>
                                    </div>
                                    <div class="form-group">
                                        <p><strong>Email del usuario:</strong> admin@monterollo.com.mx</p>
                                    </div>
                                    <div class="form-group">
                                        <p><strong>Rol del usuario:</strong> Administrador</p>
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
    name: 'VerUsuario'
}
</script>

<style scoped>
.section-light {
    padding: 50px 15px;
}  
</style>