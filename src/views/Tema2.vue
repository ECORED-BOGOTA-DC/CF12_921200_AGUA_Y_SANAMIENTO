<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Comunicación social
    
    .row.col-lg-10.m-auto
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") La importancia de la comunicación social en los procesos de intervención en salud pública es muy grande, porque, si se transmite información de una manera errónea, la población que la recibe puede transformar los mensajes y realizar acciones totalmente adversas a los objetivos y metas establecidos.
        p.mt-4(data-aos="fade-up") La comunicación social es un proceso de socialización o transmisión de información a un grupo de personas, su objetivo es que el mensaje transmitido sea apropiado por el receptor.
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/1.png" data-aos="fade-left" alt="Imagen decorativa")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.1 Concepto de comunicación
    
    p(data-aos="fade-up") La comunicación según Hoyland (1948), es el proceso por medio del cual el individuo (el comunicador) transmite estímulos (generalmente símbolos verbales) para modificar el comportamiento de otros individuos (perceptores), revisemos este concepto a mayor profundidad a través del video que se expone a continuación:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2nc8ObjHfeM" title="Concepto de comunicación" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador.mt-5

    .titulo-segundo
      h2#t_2_2 2.2  Clases de comunicación
    
    p(data-aos="fade-up") El tipo de información que se quiere comunicar, el método, la cantidad de personas a las que se quiere llegar y el canal por el cual se va a transmitir, definen diferentes clases de comunicación, algunos ejemplos son:

    .tarjeta.tarjeta--azul.p-4.pt-5.pb-5.mb-5.mt-5(style="background-color:#DFEAF3;")
      .col-lg-11.m-auto
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0
              h5 Comunicación directa e indirecta
              p.mt-3 Es aquella comunicación que se realiza de forma directa e inmediata, sin intermediarios, cara a cara; o indirectamente, mediata, transmitida a través de una distancia de espacio, tiempo o de espacio-tiempo entre las partes de la comunicación.
            .col-md-6
              figure
                img(src='@/assets/curso/tema2/2.svg' alt="Imagen decorativa")
          .row
            .col-md-6.mb-4.mb-md-0
              h5 Comunicación recíproca y unilateral
              p.mt-3 La comunicación siempre se efectúa, sea recíprocamente, según lo indica Maletzke (1992), ejemplo de esto es la conversación personal, en la que las partes cambian continuamente sus papeles de emisores y perceptores; o unilateralmente, o sea sin cambio de papeles, de tal modo que una parte continuamente emite y la otra continuamente percibe los mensajes.
            .col-md-6
              figure
                img(src='@/assets/curso/tema2/3.svg' alt="Imagen decorativa")
          .row
            .col-md-6.mb-4.mb-md-0
              h5 Comunicación privada y pública
              p.mt-3 Si lo expresado se dirige exclusivamente a una persona determinada o a un número limitado de personas definidas, se califica como privada. Por el contrario, si la intención del informante es de que el mensaje llegue a cualquiera que está en posición de obtener acceso a él y con el deseo de dirigirse a lo expresado, es decir, si los perceptores no están delimitados ni definidos por el informante, la comunicación tiene el carácter de social o pública (Maletzke, 1992).
            .col-md-6
              figure
                img(src='@/assets/curso/tema2/4.svg' alt="Imagen decorativa")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_3 2.3  Elementos de la comunicación
    
    p(data-aos="fade-up") Son muchos los factores que intervienen en la comunicación o en el proceso de envío y recepción de un mensaje, estos deben atenderse en debida forma, con el fin de que dicho mensaje sea llevado o recibido de manera correcta, algunos de estos factores son: emisor, receptor, mensaje, canal de comunicación, contexto entre otros.
    p.mt-4(data-aos="fade-up") Ahora bien, existen 3 elementos ligados indisolublemente a la comunicación, de acuerdo con Lorente, J y Jiménez, M (2009), estos son:

    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#EAD7C0;")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center(style="background-color:#EAD7C0;")
              h5.mt-5 Aspecto comunicativo
              p.mb-5.mt-5 Intercambio de información, ideas y criterios entre los participantes en la comunicación. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/5.svg')})`}")
              h5.text-center.w-100.mb-0.p-3(style="position:absolute;bottom:0;background-color:#FFA031;") Aspecto comunicativo
      .col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#EAD7C0;")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor(style="background-color:#EAD7C0;")
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center(style="background-color:#EAD7C0;")
              h5.mt-5 Aspecto interactivo
              p.mb-5.mt-5 Intercambio de ayuda y concurso en la comunicación, relacionados con acciones de planificación de la actividad.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/6.svg')})`}")
              h5.text-center.w-100.mb-0.p-3(style="position:absolute;bottom:0;background-color:#FFA031;") Aspecto interactivo
      .col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#EAD7C0;")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center(style="background-color:#EAD7C0;")
              h5.mt-5 Aspecto perceptivo
              p.mb-5.mt-5 Proceso de percepción de los comunicadores, es decir, cómo se perciben ambos en el proceso de comunicación, de lo cual dependerá la comprensión y efectividad en el intercambio comunicativo.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/7.svg')})`}")
              h5.text-center.w-100.mb-0.p-3(style="position:absolute;bottom:0;background-color:#FFA031;") Aspecto perceptivo
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_4 2.4  Factores en la comunicación social
    
    p(data-aos="fade-up") Para Serrano y Zapico (2004), los cuales toman el modelo de comunicación de Laswell de 1948, retoman la existencia de los cinco elementos para analizar un acto de comunicación y son :

    SlyderF.slyderf2_1.mt-5(columnas="col-lg-4")
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/8.svg' alt="Imagen decorativa")
        .tarjeta.color-primario(style="border-radius:10px;")
          .text-center.p-4
            p.text-center.fw-bold.mt-3(style="color:#12263F;") ¿Quién?
            p.mt-4.mb-0 El cual hace referencia a las condiciones del emisor, es decir de quien procede el mensaje.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/9.svg' alt="Imagen decorativa")
        .tarjeta.color-primario(style="border-radius:10px;")
          .text-center.p-4
            p.text-center.fw-bold.mt-3(style="color:#12263F;") ¿Qué?
            p.mt-4.mb-0 Hace referencia al contenido del mensaje transmitido.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/10.svg' alt="Imagen decorativa")
        .tarjeta.color-primario(style="border-radius:10px;")
          .text-center.p-4
            p.text-center.fw-bold.mt-3(style="color:#12263F;") ¿Por qué medio o qué canal?
            p.mt-4.mb-0 Analiza los medios de comunicación por los cuales se transmite el mensaje.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/11.svg' alt="Imagen decorativa")
        .tarjeta.color-primario(style="border-radius:10px;")
          .text-center.p-4
            p.text-center.fw-bold.mt-3(style="color:#12263F;") ¿A quién va dirigida?
            p.mt-4.mb-0 Se realizan análisis de la audiencia, es decir el receptor del mensaje.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/12.svg' alt="Imagen decorativa")
        .tarjeta.color-primario(style="border-radius:10px;")
          .text-center.p-4
            p.text-center.fw-bold.mt-3(style="color:#12263F;") ¿Con qué efectos?
            p.mt-4.mb-0 Analiza los efectos que produce el mensaje en el receptor.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_5 2.5 Características principales
    
    p(data-aos="fade-up") De acuerdo con Alcalay, R (2002), en su documento, la comunicación para la salud como disciplina en las universidades estadounidenses, describe como características principales de la comunicación las siguientes:

    .row.mt-5
      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2.text-white 1
          p.mb-0 Provee un contexto excelente para poner a prueba y aplicar teorías y principios sobre la comunicación social.
      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-numerada.color-acento-botones.p-5.h-100
          .tarjeta-numerada__numero
            .h2.text-white 2
          p.mb-0 Probar y aplicar en el terreno principios basados en la comunicación interpersonal, grupal, organizacional, de masas e intercultural, con miras a mejorar las condiciones de salud de la población y los sistemas de salud.
      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2.text-white 3
          p.mb-0 La comunicación para la salud presta credibilidad y pertinencia.
      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2.text-white 4
          p.mb-0 Se ejerce generalmente en ámbitos interdisciplinarios.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_6 2.6  Medios de comunicación en la promoción de la salud
    
    p(data-aos="fade-up") De acuerdo con Moncada, A (2018), en su artículo #[em La promoción de la salud y los medios de comunicación] describe que el papel que juegan los medios de comunicación en la promoción de la salud es una cuestión que se ha contemplado desde 1986. En la carta de Ottawa se definió a la promoción de la salud como “el proceso de facultar a las personas para que aumenten el control que tienen sobre su salud y para mejorarla”, estableciendo, además, que los medios de comunicación son actores claves para la promoción de la salud.
    p.mt-4(data-aos="fade-up") La importancia de los medios usados para comunicar temas relacionados con salud radica en que lograr que el mensaje emitido sea apropiado y captado por el receptor. Estos medios pueden ser:

    .col-lg-8.m-auto.mt-5
      LineaTiempoD.color-secundario
        div(numero="1" titulo="El panel, póster o folleto")
          .row
            .col-lg-9.mb-4.mb-lg-0
              p.mb-0 Es uno de los de mayor uso por su facilidad de implementación, su inconveniente radica en que solo es apto para personas alfabetizadas, cuando se usan más gráficos e imágenes se debe garantizar que sean adaptados a cualquier persona independiente de su nivel de alfabetismo.
            .col-lg-3
              figure.text-center
                img(src="@/assets/curso/tema2/13.svg" style="max-width:105px;display:inline;" alt="Imagen decorativa")
        div(numero="2" titulo="Prensa escrita")
          .row
            .col-lg-9.mb-4.mb-lg-0
              p.mb-0 Su efectividad es por llegar a mayor cantidad de población en poco tiempo y permite que sea leída en varias ocasiones por el receptor de la información.
            .col-lg-3
              figure.text-center
                img(src="@/assets/curso/tema2/14.svg" style="max-width:105px;display:inline;" alt="Imagen decorativa")
        div(numero="3" titulo="Radio")
          .row
            .col-lg-9.mb-4.mb-lg-0
              p.mb-0 Este es considerado uno de los medios de comunicación de gran capacidad de cobertura, además de su característica de transportabilidad, lo que indica que no importa las distancias mientras el receptor tenga el medio para escuchar puede recibir el mensaje.
            .col-lg-3
              figure.text-center
                img(src="@/assets/curso/tema2/15.svg" style="max-width:105px;display:inline;" alt="Imagen decorativa")
        div(numero="4" titulo="Televisión")
          .row
            .col-lg-9.mb-4.mb-lg-0
              p.mb-0 Considerado uno de los más importantes, el problema fundamental es que es un medio unidireccional, luego no se recibe retroalimentación, pero es considerado el medio de mayor importancia para la parte sanitaria y de salud pública.
            .col-lg-3
              figure.text-center
                img(src="@/assets/curso/tema2/16.svg" style="max-width:105px;display:inline;" alt="Imagen decorativa")
        div(numero="5" titulo="Internet")
          .row
            .col-lg-9.mb-4.mb-lg-0
              p.mb-0 Uno de los medios que se han convertido en pilares para las comunidades por su accesibilidad y su facilidad de uso, sin embargo, en temas de salud se debe tener cuidado con la cantidad de información de dudosa procedencia que se puede encontrar. 
            .col-lg-3
              figure.text-center
                img(src="@/assets/curso/tema2/17.svg" style="max-width:105px;display:inline;" alt="Imagen decorativa")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_7 2.7  Funciones fundamentales de la comunicación
    
    p(data-aos="fade-up") La comunicación, como ya se ha mencionado, es la actividad que consiste en transmitir y/o recibir un mensaje, sus funciones dependen del objetivo que se quiera alcanzar con este intercambio de información, por esta razón existen diversas funciones necesarias y fundamentales de la comunicación.
    p.mt-4(data-aos="fade-up") De acuerdo con Lorente, J y Jiménez, M (2009), dentro de las funciones de la comunicación se encuentran:

    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4(style="background-color:#C9E7FB;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema2/18.svg" data-aos="zoom-in-up" alt="Imagen decorativa")
          h5.mt-4(data-aos="fade-up") Función informativa
          p.mt-3(data-aos="fade-up") Comprende el proceso de transmisión y recepción de la información, pero viéndolo como un proceso de interrelación. A través de ella, el individuo se apropia de la experiencia socio histórica de la humanidad.
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4(style="background-color:#FFE2C0;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema2/19.svg" data-aos="zoom-in-up" alt="Imagen decorativa")
          h5.mt-4(data-aos="fade-up") Función afectivo - valorativa
          p.mt-3(data-aos="fade-up") Muy importante en el marco de la estabilidad emocional de los sujetos y su realización personal. A través de esta función, el hombre se forma una imagen de sí y de los demás.
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4(style="background-color:#C9E7FB;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema2/20.svg" data-aos="zoom-in-up" alt="Imagen decorativa")
          h5.mt-4(data-aos="fade-up") Función reguladora
          p.mt-3(data-aos="fade-up") Por su intermedio se logra la retroalimentación que tiene lugar en todo el proceso comunicativo y sirve para que cada participante conozca el efecto que ocasiona su mensaje y para que pueda evaluarse a sí mismo.


 

    

    
  

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorTarjetaSlide: true,
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
.slyder-a__bullets__item--active
  background-color: #008B8A !important
  border-color: #008B8A
.slyder-a__bullets__item
  background-color: #91C9CE
.slyderf2_1 .slyder-f__btn i
  color: white
  background-color: #008B8A
  border-radius: 100%
  padding: 0.8rem 1rem
  font-size: 1.5rem
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #3076B6
  color: #fff
.linea-tiempo-d__item.row.linea-tiempo-d__item--selected .linea-tiempo-d__item__content
  background-color: #EDF7FE
</style>
