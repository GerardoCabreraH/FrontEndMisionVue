<template>
    <form action="#">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" name="password" id="password" placeholder="Contraseña" class="form-control" required>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-success btn-block">Enviar</button>
        </div>
    </form>
</template>

<script>
  export default {
    name: 'FormLogin'
  }
</script>