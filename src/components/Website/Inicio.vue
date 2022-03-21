<template>
    <section id="inicio" class="hero"></section>
</template>

<script>
export default {
  name: 'Inicio'
}
</script>

<style scoped>
.hero {
    background-image: url('../../assets/img/pasteleria-monterrollo-portada.png');
    background-repeat: none;
    background-position: center;
    background-size: 100% 100%;
    width: 100%;
    height: 640px;
}
@media only screen and (max-width: 768px){
  .hero {
    height: 400px;
  }
}
</style>