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
      img(src="@/assets/curso/intro1.png" data-aos="zoom-in-up")
    
    p.mt-5(data-aos="fade-up") De acuerdo con el documento del Ministerio deLa intervención en salud es un proceso esencial, que incluye estrategias políticas, educativas, sociales y económicas. Su propósito principal es implementar dichas estrategias que cobijen todo un entorno comunitario y el éxito de su implementación radica de la relación de todos los entes públicos y privados, aunado a la adaptación de las políticas en salud pública con la calidad de la prestación de los servicios y la buena participación y recepción de la comunidad en general. Salud y Protección Social (2016), su política de atención integral en salud se define como un sistema de salud al servicio de la gente. Esta política nace en pro de garantizar el derecho a la salud, en consecuencia, el objetivo principal es mejorar la salud de la población a través del acceso a los servicios de manera oportuna, eficaz, con calidad y acogiendo el principio de promoción de la salud. Por esta razón el objetivo de este componente formativo denominado #[strong “Principios de atención integral”], es que profundice sobre el sistema integral en salud, como sus procedimientos, métodos de evaluación y normas de seguridad, tanto para la salud pública como para la conservación del medio ambiente. Por lo anterior le invitamos a desarrollar con mucho entusiasmo el presente componente formativo.
    
        
    
   
    

    
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
