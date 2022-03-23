<template>
    <section id="count" class="section-light">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12">
                    <h1 class="text-center">Modificación del usuario Admin</h1>
                </div>
                <div class="col-12 col-sm-12 mt-5">
                    <div class="card shadow">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 col-sm-12">
                                    <div class="form-group">
                                        <label for="name">Nombre de usuario</label>
                                        <input type="text" name="name" id="name" placeholder="Nombre" class="form-control" value="Admin">
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email del usuario</label>
                                        <input type="email" name="email" id="email" placeholder="Email" class="form-control" value="admin@monterollo.com.mx">
                                    </div>
                                    <div class="form-group">
                                        <label for="role">Rol de usuario</label>
                                        <select class="form-control" type="text" id="role" name="role" required>
                                            <option value="">Seleccionar rol de usuario</option>
                                            <option value="Administrador" selected>Administrador</option>
                                            <option value="Usuario">Usuario</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Contraseña de usuario</label>
                                        <input type="password" name="password" id="password" placeholder="Contraseña" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="password-confirm">Confirmar contraseña de usuario</label>
                                        <input type="password" name="password_confirmation" id="password-confirm" placeholder="Confirmar contraseña" class="form-control">
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
    name: 'EditarUsuario'
}
</script>

<style scoped>
.section-light {
    padding: 50px 15px;
}  
</style>