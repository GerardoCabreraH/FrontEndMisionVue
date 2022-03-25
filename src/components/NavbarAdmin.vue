<template>
    <header id="menu">
        <nav class="navbar navbar-expand-lg navbar-light navbarAdmin">
            <div class="container">
                <button type="button" id="navbarBrandAdmin" class="navbar-brand btn btn-link" @click="$store.dispatch('showSidebar')"><i
                        class="fas fa-cogs"></i></button>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">Admin</li>
                    </ul>
                </div>
            </div>
        </nav>
        <section id="sidebar" class="sidebarAdmin">
            <div class="sidebarLogo">
                <div class="row">
                    <div class="col-12 col-sm-12 text-center">
                        <img src="../assets/img/pasteleria-monterrollo-fondo-blanco.png" alt="logo-monterrollo"
                            class="img-fluid img-sidebar">
                        <p>Pastelería Monterrollo</p>
                    </div>
                </div>
            </div>
            <div class="sidebarContent">
                <div class="row">
                    <div class="col-12 col-sm-12 d-flex flex-column justify-content-center">
                        <ul>
                            <li>
                                <router-link to="/admin/dashboard" class="nav-link">
                                    <p><i class="fas fa-tachometer-alt"></i> Dashboard</p>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/productos" class="nav-link">
                                    <p><i class="fas fa-box"></i> Sabores y Adornos</p>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/pedidos" class="nav-link">
                                    <p><i class="fas fa-list"></i> Pedidos</p>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/usuarios" class="nav-link">
                                    <p><i class="fas fa-user"></i> Usuarios</p>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/" class="nav-link">
                                    <p><i class="fas fa-sign-out-alt"></i> Cerrar sesión</p>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </header>
</template>
<script>
export default {
    name: 'NavbarAdmin'
}
</script>
<style scoped>
.navbarAdmin {
    background-color: #FCE6E2;
    width: 80%;
    float: right;
    padding: 25px 0;
}
#navbarBrandAdmin {
    display: none;
}
/*Sidebar*/
.img-sidebar {
    width: 50px;
    height: 50px;
}
.sidebarAdmin {
    background-color: #ffcccc;
    height: 100%;
    width: 20%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    float: left;
}
.sidebarAdmin ul {
    list-style-type: none;
}
.sidebarAdmin li a {
    color: #000000;
}
.sidebarLogo {
    border-bottom: #fc6344 1px solid;
    width: 100%;
    padding: 20px 0;
}
.sidebarContent {
    width: 100%;
    padding: 20px;
}
@media only screen and (max-width: 768px){
    #navbarBrandAdmin {
        display: block;
    }
    .sidebarAdmin {
        display: none;
        width: 100%;
        float: left;
        overflow-x: hidden;
        overflow-y: hidden;
        top: 92px;
    }
    .navbarAdmin {
        width: 100%;
        float: left;
    }
    .sidebarAdmin li a {
        font-size: 12px;
    }
    .content {
        width: 100%;
        float: left;
    }
}
</style>