<template>
    <main class="login">
        <section id="login" class="section-dark h-100">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 d-flex justify-content-center align-content-center">
                        <div class="card shadow">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-sm-12 text-center">
                                        <img src="../assets/img/pasteleria-monterrollo-fondo-blanco.png" alt="logo-monterrollo" class="img-fluid img-login">
                                    </div>
                                    <div class="col-12 col-sm-12">
                                        <h1 class="text-center">Login</h1>
                                        <h2 class="text-center">Si eres pastelero que trabaja con nosotros, favor de iniciar sesión</h2>
                                    </div>
                                    <div class="col-12 col-sm-12">
                                        <FormLogin />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import FormLogin from "@/components/Admin/FormLogin.vue";
  export default {
    name: "LoginView",
    components: { FormLogin }
}
</script>

<style scoped>
.img-login {
    width: 150px;
    height: 150px;
}
.login {
    padding-top: 50px;
    padding-bottom: 50px;
    width: 100%;
    height: 100%;
    background-color: #ffcccc;
}
</style>