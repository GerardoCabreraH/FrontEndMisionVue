<template>
    <section id="count" class="section-light">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12">
                    <h1 class="text-center">Dashboard</h1>
                </div>
                <div class="col-12 col-sm-12 mt-5">
                    <div class="row">
                        <div class="col-12 col-sm-12 my-3">
                            <div class="card text-white bg-success mb-3 h-100 shadow">
                                <div class="card-body text-center">
                                    <p><span class="icon-dashboard"><i class="fas fa-user"></i></span></p>
                                    <p>{{$store.state.usuarios.length}} Usuarios</p>
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
    name: 'ContadorUsuarios'
}
</script>
<style scoped>
    .section-light {
        padding: 50px 15px;
    }
    .icon-dashboard {
        font-size: 24px;
        color: #ffffff;
    } 
</style>