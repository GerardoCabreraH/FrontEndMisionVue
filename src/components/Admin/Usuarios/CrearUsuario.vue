<template>
    <section id="usuarios" class="section-light">
        <div class="container">
            <div class="card shadow">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12 col-sm-12">
                            <h2 class="text-center">Registro de usuarios</h2>
                        </div>
                        <div class="col-12 col-sm-12 mt-5">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-sm-12">
                                        <div class="form-group">
                                            <label for="name">Nombre de usuario</label>
                                            <input type="text" name="name" id="name" placeholder="Nombre" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="email">Email del usuario</label>
                                            <input type="email" name="email" id="email" placeholder="Email" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="role">Rol de usuario</label>
                                            <select class="form-control" type="text" id="role" name="role" required>
                                                <option value="">Seleccionar rol de usuario</option>
                                                <option value="Administrador">Administrador</option>
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
                                        <div class="form-group">
                                            <slot></slot>
                                            <button type="button" class="btn btn-success btn-block">Guardar</button>
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
    name: 'CrearUsuario'
}
</script>
<style scoped>
    .section-light {
        padding: 50px 15px;
    } 
</style>