<template>
    <main class="login">
        <section id="login" class="section-dark h-100">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 d-flex justify-content-center align-content-center">
                        <div class="card shadow h-100">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-sm-12 text-center">
                                        <img src="https://pasteleria.celtech.com.mx/assets/img/Pasteleria%20Monterrollo-Fondo%20Blanco.png" alt="logo-monterrollo" class="img-fluid img-login">
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
    components: { FormLogin },
    mounted() {
        let body = document.querySelector('body');
        body.style.backgroundColor = "#ffcccc";
    }
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
}
</style>