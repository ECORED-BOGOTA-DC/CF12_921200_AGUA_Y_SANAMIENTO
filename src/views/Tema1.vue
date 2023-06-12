<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Política de atención integral en salud
    
    p(data-aos="fade-up") La importancia de la comunicación social en los procesos de intervención en salud pública es muy grande, porque, si se transmite información de una manera errónea, la población que la recibe puede transformar los mensajes y realizar acciones totalmente adversas a los objetivos y metas establecidos. Se invita a ver el siguiente video animado que lo contextualiza en el tema.
    p.mt-4(data-aos="fade-up") La comunicación social es un proceso de socialización o transmisión de información a un grupo de personas, su objetivo es que el mensaje transmitido sea apropiado por el receptor.
    
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    h3.subtitulo_cf(data-aos="fade-up") Factores de riesgo

    p.mt-4(data-aos="fade-up") La Organización Mundial de la Salud (OMS), define los factores de riesgo para la salud como cualquier rasgo, característica o exposición de un individuo que aumente su probabilidad de sufrir una enfermedad o lesión. Entre los factores de riesgo más importantes cabe citar la insuficiencia ponderal, las prácticas sexuales de riesgo, la hipertensión, el consumo de tabaco y alcohol, el agua insalubre, las deficiencias del saneamiento y la falta de higiene. (Organización Mundial de la Salud, 2020).

    .col-lg-8.m-auto.mt-5
      .bloque-texto-d.color-secundario.p-4
        .bloque-texto-d__texto.mb-2.d-flex
          i.fas.fa-quote-left(style="color:#00BCD4;" data-aos="fade-right")
          div
            p(data-aos="fade-up") De acuerdo con González C y Agudo T (2003), en su documento Factores de riesgo: aspectos generales, conceptos, organización y práctica clínica, describen que teóricamente un factor puede modificar la probabilidad de una enfermedad tanto aumentándole como disminuyéndola, sin embargo, tradicionalmente se reserva el uso de ese término para aquellos que aumentan la probabilidad de enfermar, mientras que los factores que la disminuyen son conocidos como protectores. 
            .text-end.w-100.d-block
              i.fas.fa-quote-right(style="color:#00BCD4;align-self:self-end;" data-aos="fade-left")
    
    p.mt-5(data-aos="fade-up") Dentro de las variables a considerar se encuentran de acuerdo con González C y Agudo T (2003) en su documento factores de riesgo, los siguientes aspectos generales:

    ol.lista-ol.mt-4
      li(data-aos="fade-up")
        span.text-bold 1. 
        | La exposición: que se usa en los estudios epidemiológicos para indicar que una persona ha estado en contacto o posee el factor de riesgo analizado.
      li(data-aos="fade-up")
        span.text-bold 2. 
        | El medio físico: agentes infecciosos, fármaco o sustancias químicas.
      li(data-aos="fade-up")
        span.text-bold 3. 
        | El medio psíquico: estrés.
      li(data-aos="fade-up")
        span.text-bold 4. 
        | El medio social: comportamiento o estilo de hábitos de vida, así como características socioeconómicas y del medio de trabajo.
      li(data-aos="fade-up")
        span.text-bold 5. 
        |  Alteraciones genéticas: mutaciones o polimorfismos que colaboran en la activación o la potencialización de riesgos que se traducen en enfermedades.

    h3.subtitulo_cf(data-aos="fade-up")  Factores protectores

    p.mt-4(data-aos="fade-up") Páramo, A. (2011) en su artículo factores de riesgo y factores de protección en la adolescencia: análisis de contenido a través de grupos de discusión, menciona la definición de Donas Durak donde establece que los factores protectores:
   
    .col-lg-7.m-auto.mt-5
      .cajon.color-acento-botones.p-4(style="background-color:#BFEEF4;")
        p.mb-0(data-aos="fade-up") Son características detectables en un individuo, familia, grupo o comunidad que favorecen el desarrollo humano, el mantenimiento o la recuperación de la salud; y que pueden contrarrestar los posibles efectos de los factores de riesgo, de las conductas de riesgo y, por lo tanto, reducir la vulnerabilidad, ya sea general o específica. (p.4).
    
    p.mt-5(data-aos="fade-up") En los factores protectores se encuentran:

    .col-lg-10.m-auto.mt-4.row
      .col-lg.pe-0
        .h-100.p-4.p-md-5(style="background-color:#FFA031;border-radius:20px 0px 0px 20px;")
          figure.text-center
            img(src="@/assets/curso/tema1/1.svg" data-aos="zoom-in-up" style="max-width:150px;display:inline;")
          h3.mt-4.text-white.text-center(data-aos="fade-up") Factores protectores de amplio espectro
          p.mt-3.text-white.text-center(data-aos="fade-up") Son aquellos que indican que la persona tiene mayores condiciones y conductas protectoras que favorecen el no sufrir de daños o riesgos a su salud, por ejemplo, el tener una vida activa en ejercicio, una dieta saludable.
      .col-lg.ps-0
        .h-100.p-4.p-md-5(style="background-color:#4DB1F0;border-radius:0px 20px 20px 0px;")
          figure.text-center
            img(src="@/assets/curso/tema1/2.svg" data-aos="zoom-in-up" style="max-width:150px;display:inline;")
          h3.mt-4.text-white.text-center(data-aos="fade-up") Factores protectores específicos
          p.mt-3.text-white.text-center(data-aos="fade-up") Actividades que generan disminución de ciertas conductas de riesgo puntuales, por ejemplo, hacer una dieta específica o reducir el consumo total o parcial de algún alimento o bebida.




      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
<style lang="sass">
.bloque-texto-d.color-secundario:before
  background-color: #E8F2FE
  width: 80%
  left: 20%
.bloque-texto-d
  border-top: 1px solid #00BCD4
</style>
