<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure
      img(src="@/assets/curso/intro1.png" data-aos="zoom-in-up" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-up") La intervención en salud es un proceso esencial, que incluye estrategias políticas, educativas, sociales y económicas. Su propósito principal es implementar dichas estrategias que cobijen todo un entorno comunitario y el éxito de su implementación radica de la relación de todos los entes públicos y privados, aunado a la adaptación de las políticas en salud pública con la calidad de la prestación de los servicios y la buena participación y recepción de la comunidad en general.
    
        
    
   
    

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    indicadorTarjetaFlip: true,
  }),
}
</script>
<style lang="sass"></style>
