<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Caracterización de riesgo en viviendas
    
    p(data-aos="fade-up") Existen múltiples riesgos a la salud que se pueden presentar en la vivienda, debido a esto es necesario contar con diferentes estrategias y metodologías que permitan hacer del hogar un espacio saludable, y seguro, por lo que es importante manejar estos conceptos:

    h5.mt-5(data-aos="fade-up") #[i.fas.fa-check-circle(style="color:#3076B6;")] Estrategia de vivienda saludable
    p.mt-4(data-aos="fade-up") De acuerdo con la Organización Panamericana de la Salud (OPS) (2010), en su documento #[em Manual nacional hacia una vivienda saludable] “#[em que viva mi hogar]” la estrategia de vivienda saludable es la concepción de la vivienda como agente de la salud de sus moradores. Implica un enfoque sociológico y técnico de enfrentamiento a los factores de riesgo y promueve una orientación para la ubicación, edificación, habilitación, adaptación, manejo, uso y mantenimiento de la vivienda y su entorno.
    p.mt-3(data-aos="fade-up") Para esta organización, se da importancia y relevancia al saneamiento básico, espacios físicos limpios, libres de vectores, residuos y plagas que funcionan como factores de riesgo así mismo que dichos espacios sean estructuralmente adecuados, y que los individuos cuenten con redes de apoyo para lograr ámbitos psicosociales sanos y seguros, exentos de violencia (abuso físico, verbal, y emocional).
    ul.lista-ul.ps-0.ps-md-5.mb-0.mt-4
      li.d-flex.flex-wrap(data-aos="fade-up")
        i.fas.fa-circle(style="color:#008B8A;")
        p.fw-bold Metodología de enfoque de riesgo en la vivienda
        p.w-100 Cuando se habla de enfoque de riesgo en la vivienda se debe tener una visión global desde el diseño hasta el uso, la vivienda debe contar con buena iluminación y ventilación, el lugar donde se ubica debe ser retirado de zonas de inundación, deslizamientos o cualquier catástrofe natural, la construcción debe ser con materiales resistentes y en general la vivienda debe ser de fácil uso y mantenimiento.
        p.w-100 Adicional a esto es importante verificar el acceso a servicios públicos, la educación sanitaria de los moradores y el contexto social del vecindario, por lo que se debe tener en cuenta lo siguiente:
      li.d-flex.flex-wrap(data-aos="fade-up")
        i.fas.fa-circle(style="color:#008B8A;")
        p.fw-bold Amenazas
        p.w-100 Es todo aquello que puede llegar a afectar la salud siempre y cuando esté asociado a la interrelación con la vivienda, su ubicación o los moradores. Cuando se habla de amenazas se deben tener en cuenta los factores físicos, químicos y biológicos, así como los desastres naturales que se pueden presentar.
        p.w-100 El grado de amenaza dependerá de la magnitud de esta, por ejemplo no es lo mismo el grado de amenaza que puede tener una vivienda que está expuesta a vientos fuertes, que una que está expuesta a huracanes o tornados. Otro ejemplo para considerar es el diferente grado de amenaza que tiene una vivienda que cuenta con acceso a agua potable comparada con otra que solo tiene acceso al agua lluvia, la segunda además de la amenaza que representa el tomar agua sin tratamiento puede generar atracción de vectores, lo que conlleva a tener también una amenaza desde el punto de vista biológico.
        p.w-100 Debido a que cada vivienda cuenta con una amenaza propia de las condiciones del ecosistema donde se ubica resulta necesario establecer un perfil epidemiológico, de este modo es más fácil controlar la magnitud de la amenaza si de antemano se conoce que una población está expuesta, por ejemplo al dengue o a la malaria, en consecuencia se pueden desarrollar capacitaciones de identificación de los síntomas de las enfermedades y realizar acciones de prevención por ejemplo, evitando que los pobladores almacenen agua en tanques sin tapa.
      li.d-flex.flex-wrap(data-aos="fade-up")
        i.fas.fa-circle(style="color:#008B8A;")
        p.fw-bold Vulnerabilidad
        p.w-100 Son las condiciones de susceptibilidad o falta de capacidad para enfrentar una amenaza. El riesgo a la salud de los habitantes se da cuando la vivienda no cumple con las condiciones adecuadas.
        p.w-100 La vulnerabilidad se da en varios aspectos del mismo modo que las amenazas, por consiguiente, existe vulnerabilidad física, química, biológica y social.
        p.w-100 Cuando los materiales de la vivienda no soportan los desastres naturales o se encuentra ubicada por debajo del nivel del río, se habla de viviendas vulnerables desde la perspectiva física. Un inmueble que no cuenta con acceso a agua potable o se encuentra cerca de depósitos de residuos peligrosos presenta vulnerabilidad química. Aquellas que están cerca de rellenos sanitarios o de lugares de estancamiento de aguas tendría vulnerabilidades biológicas y una que se encuentre dentro de zonas donde se presenta conflicto armado tendrían una vulnerabilidad social.
      li.d-flex.flex-wrap(data-aos="fade-up")
        i.fas.fa-circle(style="color:#008B8A;")
        p.fw-bold Exposición
        p.w-100 Es el tiempo en que la vivienda está en una existencia relacionada entre la vulnerabilidad y la amenaza. Por ejemplo, una vivienda que almacena agua en tanques sin tapa se encuentra expuesta al riesgo biológico, ya que los zancudos pueden proliferar con gran facilidad. Estará expuesta todo el tiempo pues se unieron vulnerabilidad (no tener tapa en el tanque) y amenaza (zancudos portadores de enfermedades); se podría reducir la exposición de la vivienda a dos alternativas:
    
    br
    .col-lg-8.mt-5.m-auto
      .row(style="position:relative;")
        .d-none.d-md-block(style="position:absolute;width:100%;top:-30px;")
          figure.text-center
            img(src="@/assets/curso/tema4/1.svg" style="max-width:150px;display:inline;" data-aos="fade-down" alt="Imagen decorativa")
        .d-none.d-md-block(style="position:absolute;width:100%;top:30%;")
          figure.text-center
            img(src="@/assets/curso/tema4/2.svg" style="max-width:180px;display:inline;" data-aos="zoom-in-up" alt="Imagen decorativa")
        .d-none.d-md-block(style="position:absolute;width:100%;bottom:-30px;")
          figure.text-center
            img(src="@/assets/curso/tema4/3.svg" style="max-width:150px;display:inline;" data-aos="fade-up" alt="Imagen decorativa")
        .col-md.mb-4.mb-md-0
          .h-100.p-4.p-md-5.d-flex.align-items-center.align-content-center.flex-wrap(style="background-color:#D5E3F0;border-radius:20px;min-height:400px;")
            p.mb-0.w-100.text-center.pe-0.pe-md-5(data-aos="fade-right") Poner tapa al tanque para evitar la proliferación de zancudos en el agua.
        .d-md-none.mb-4
          figure.text-center
            img(src="@/assets/curso/tema4/2.svg" style="max-width:200px;display:inline;" alt="Imagen decorativa")
        .col-md.mb-4.mb-md-0
          .h-100.p-4.p-md-5.d-flex.align-items-center.align-content-center.flex-wrap(style="background-color:#D5E3F0;border-radius:20px;min-height:400px;")
            p.mb-0.w-100.text-center.ps-0.ps-lg-5(data-aos="fade-left") Vaciar el contenido de agua de los tanques para evitar la proliferación de los zancudos.
    
    br
    
    p.mt-5(data-aos="fade-up") Siempre y cuando no se ejecuten cualquiera de las dos alternativas la vivienda se mantendrá expuesta al riesgo, entre más baja sea la exposición más saludable van a ser los individuos que habitan la vivienda.

    ul.lista-ul.ps-0.ps-md-5.mb-0.mt-4
      li.d-flex.flex-wrap(data-aos="fade-up")
        i.fas.fa-circle(style="color:#008B8A;")
        p.fw-bold Caracterización del riesgo
        p.w-100 Es la valoración de las características y gravedad de la afectación o impacto a la salud por el suceso que une la amenaza, vulnerabilidad y exposición de la vivienda y sus alrededores. El nivel de riesgo depende de la amenaza, el grado de vulnerabilidad y el tiempo de exposición. Por ejemplo, existe una caracterización de riesgo alto cuando una vivienda está construida con latas y madera, y, adicional a esto, se encuentra en una zona de huracanes, en este caso los materiales no son los adecuados para proteger a los habitantes de la amenaza que de por sí es de gran magnitud.
        p.w-100 Del mismo modo, se puede presentar una caracterización de riesgo medio, cuando la vulnerabilidad es alta, pero la amenaza es baja o viceversa. Un ejemplo de esto sería la misma casa de lata y madera, pero ubicada en una zona donde no hay huracanes, tormentas fuertes, deslizamientos, ni ningún desastre natural registrado. En este ejemplo se tiene una vulnerabilidad alta, pero la amenaza es baja, como consecuencia la exposición es media.
        p.w-100 Cuando no existe ni vulnerabilidad ni amenaza se conoce como caracterización de riesgo bajo. Siguiendo con el ejemplo, sería una vivienda construida en concreto, con columnas, vigas y paredes resistentes y geográficamente ubicada lejos de cualquier desastre natural registrado.
      li.d-flex.flex-wrap(data-aos="fade-up")
        i.fas.fa-circle(style="color:#008B8A;")
        p.fw-bold  Manejo o mitigación del riesgo 
        p.w-100 Querer establecer una vivienda saludable debe abordar la mitigación del riesgo a través de procesos de mejoramiento de la vivienda; estos procesos deben ir acompañados de la atención primaria en salud, mantener infraestructura hospitalaria cerca de la vivienda y condiciones que permitan el desarrollo de las personas libre de enfermedad. Lo siguiente paso es cortar los ciclos de transmisión de enfermedades y prevención de enfermedades crónicas.
        p.w-100 Las estrategias de vivienda saludable se deben promulgar a toda la familia y a la comunidad para generar factores protectores de la salud y que entre todos disminuyan los factores de riesgo. Desde las instituciones gubernamentales se deben establecer políticas que permitan mantener la salud de todos los ciudadanos y así mismo cada ciudadano es responsable del mejoramiento de su vivienda para mantener al máximo su salud.




 



  



</template>

<script>
export default {
  name: 'Tema4',
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
