<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Metodologías de recolección de información
    
    p(data-aos="fade-up") Existe diversos métodos para recopilar información, esto depende del objetivo que se persiga, los instrumentos que se apliquen para recolectar información debe ser muy completos con el fin de que el resultado que arrojen permita la toma de decisiones y el mejoramiento continuo de los procesos. Para la recolección de información se utilizan los siguientes pasos:

    .row.mt-5
      .col-lg-1
      .col-lg-9
        
      .col-lg-2

  



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    indicadorTarjetaHover: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
