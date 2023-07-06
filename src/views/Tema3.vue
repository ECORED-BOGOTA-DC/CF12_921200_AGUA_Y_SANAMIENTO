<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Caracterización de comunidades
    
    p(data-aos="fade-up") Cuando se realiza un trabajo con comunidad es necesario hacer una intervención donde se establezcan diferentes factores que puedan afectar la salud; una vez se tengan los resultados se pueden plantear mejoras en el hábitat de la comunidad, integrando los diferentes entornos donde los habitantes se mueven en su día a día.

    h3.subtitulo_cf(data-aos="fade-up") Intervención a comunidades

    p.mt-4(data-aos="fade-up") Busca el mejoramiento de la calidad de vida y salud de la población requiere que se actúe sobre los determinantes sociales de la salud, a través de procesos participativos organizados alrededor de entornos específicos (Ministerio de Salud y Protección Social, 2013). Razón por la cual la ejecución operativa de este componente se realizará a través de los siguientes programas:

    .p-4.mt-5(style="background-color:#DBEFFC;")
      .row
        .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
          h5(data-aos="fade-up") #[i.fas.fa-check-circle(style="color:#3076B6;")] Hábitat saludable
          p.mt-4(data-aos="fade-up") Cuando se habla de hábitat saludable se deben tener en cuenta todos los factores que pueden afectar el bienestar de un individuo, algunos de los más importantes son la vivienda, el entorno educativo, el entorno comunitario y el entorno laboral.
          h5.mt-5(data-aos="fade-up") #[i.fas.fa-check-circle(style="color:#3076B6;")] Vivienda saludable
          p.mt-4(data-aos="fade-up") El Ministerio de Salud y Protección Social (2013), define el concepto de vivienda saludable como un espacio de residencia caracterizado por un conjunto de condiciones que influyen de manera favorable en los procesos de restauración, protección y promoción de la salud e incentiva la actividad creadora y el aprendizaje de sus moradores. 
          p.mt-3(data-aos="fade-up") De igual manera, establece la vivienda como espacio vital que debe cumplir con una serie de características para que brinde seguridad, protección, intimidad y contribuya al bienestar de cada una de las personas que la habitan. Estas son:
        .col-lg-4(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/1.png" data-aos="fade-left")
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-lg-11.m-auto(titulo="Ubicación")
            .col-md-6.col-lg-8.mb-4.mb-md-0
              p La vivienda debe estar situada en un terreno estable, retirada de cualquier riesgo natural que se pueda presentar en la zona, tales como deslizamientos de tierra, inundaciones y de los riesgos antrópicos tales como líneas de tensión, desechos industriales y otros.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/3.svg')
          .row.col-lg-11.m-auto(titulo="Diseño y espacio")
            .col-md-6.col-lg-8.mb-4.mb-md-0
              p Debe tener en cuenta los factores climáticos de la zona donde está construida, facilitar hábitos de higiene, tener buena ventilación e iluminación.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/4.svg')
          .row.col-lg-11.m-auto(titulo="Materiales")
            .col-md-6.col-lg-8.mb-4.mb-md-0
              p Deben garantizar que no haya agujeros en techos ni paredes, permitir fácil limpieza, impermeabilizar el agua lluvia y ser estables frente a las condiciones climatológicas.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/5.svg')
          .row.col-lg-11.m-auto(titulo="Entorno")
            .col-md-6.col-lg-8.mb-4.mb-md-0
              p Debe tener una infraestructura social básica que permita el desarrollo humano integral, puestos de salud, escuelas, zonas recreativas, culturales y libres de basuras.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/6.svg')
          .row.col-lg-11.m-auto(titulo="Condiciones higiénico - sanitarias")
            .col-md-6.col-lg-8.mb-4.mb-md-0
              p Las aguas lluvias y las aguas negras tienen desagües técnica y ambientalmente apropiados, la evacuación de excrementos es técnica y ambientalmente apropiada, los residuos se pueden manipular técnicamente dentro de la vivienda. 
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/7.svg')
          .row.col-lg-11.m-auto(titulo="Uso de energía")
            .col-md-6.col-lg-8.mb-4.mb-md-0
              p Se puede utilizar diferentes formas de energía dentro de la vivienda, si la cocina utiliza carbón o leña el humo no interfiere con la salud de los habitantes, en caso de ser a gas no se presenta hollín y la llama es azul.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/8.svg')
          .row.col-lg-11.m-auto(titulo="Espacio social")
            .col-md-6.col-lg-8.mb-4.mb-md-0
              p Dispone de equipos inmuebles mínimos que permite el desarrollo integral del humano, los padres habitan en cuarto diferente a los hijos, si hay una actividad productiva dentro de la vivienda debe estar en una zona diferente al lugar donde se duerme. 
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/9.svg')
      .col-lg-4
        .h-100(style="background-color:#DFE9F2;")
          figure.bg-white
            img(src="@/assets/curso/tema3/2.svg" data-aos="fade-left")
    
    .col-lg-10.m-auto.mt-5
      .tarjeta.color-primario.p-4.p-md-5(style="background-color:#FFECD5;")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema3/26.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.fw-bold.mb-1 Manual de vivienda saludable
                p.text-small.mb-0 Si desea consultar diferentes factores que interfieren en una vivienda saludable consulte el manual de vivienda saludable del Ministerio de Salud y Protección Social en las páginas 39 a la 117, que se encuentra en el material complementario. 
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/manual-educativo-nacional-vivienda-saludable.pdf" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
    
    .p-4.mt-5(style="background-color:#DBEFFC;")
      h5(data-aos="fade-up") #[i.fas.fa-check-circle(style="color:#3076B6;")] Entornos educativos saludables
      p.mt-4(data-aos="fade-up") El Ministerio de Salud y Protección Social (2013), define el concepto de entorno educativo saludable en su documento plan decenal de salud pública 2012 – 2021, como el espacio geográfico en donde habita la comunidad educativa; donde se construye y reproduce la cultura, se desarrolla el pensamiento, la afectividad y los comportamientos básicos para producir nuevos conocimientos, se buscan alternativas, mejores formas de vivir y relacionarse con su entorno. Los entornos educativos saludables (jardín, escuela, universidades) contribuyen al desarrollo humano de la comunidad educativa, propiciando acciones integrales de promoción de la salud, prevención de la enfermedad en torno al centro educativo, promoviendo el desarrollo humano sostenible de las niñas, los niños, los adolescentes y los jóvenes a través del desarrollo de habilidades y destrezas para cuidar su salud, la de su familia, su comunidad y su ambiente.
      p.mt-4(data-aos="fade-up") El tener un entorno educativo saludable tiene varias ventajas para los estudiantes, algunas de estas son:

      ul.lista-ul.mt-4
        li(data-aos="fade-up")
          i.lista-ul__vineta
          | Favorece la apropiación de conocimiento y desarrollo de habilidades.
        li(data-aos="fade-up")
          i.lista-ul__vineta
          | Promueve la convivencia entre diferentes actores sociales y la comunidad educativa.
        li(data-aos="fade-up")
          i.lista-ul__vineta
          | Favorecen el enfoque diferencial y la especificidad cultural.
        li(data-aos="fade-up")
          i.lista-ul__vineta
          | Adaptan y adoptan soluciones tecnológicas, de infraestructuras efectivas y sostenibles.
    
    .col-lg-7.m-auto.mt-5
      .cajon.color-acento-botones.p-4(style="background-color:#BFEEF4;")
        p.mb-0(data-aos="fade-up") Cuando se tiene un entorno educativo saludable se beneficia toda la comunidad educativa, que está constituida por estudiantes (niños, niñas, adolescentes, adultos y vejez) acudientes, directivos, educadores, administradores escolares, universitarios, establecimientos de educación para el trabajo y el desarrollo humano y egresados. 
    
    p.mt-5(data-aos="fade-up") Para lograr un entorno educativo saludable se deben articular diferentes componentes, entre los cuales están:

    .col-lg-10.m-auto.mt-5
      AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row.col-lg-11.m-auto(titulo="Políticas y normatividad para el desarrollo humano")
          .col-md-6.col-lg-8.mb-4.mb-md-0
            p Se deben integrar las políticas de nivel nacional a las instituciones educativas con el fin de generar espacios más saludables, ya que se van a manejar de forma adecuada los residuos sólidos peligrosos y no peligrosos, se realizará vigilancia de la calidad de agua y se permitirá la participación ciudadana en diferentes procesos por mencionar algunos ejemplos de las políticas actuales a nivel nacional.
          .col-md-6.col-lg-4
            figure
              img(src='@/assets/curso/tema3/10.png')
        .row.col-lg-11.m-auto(titulo="Ambientes que favorecen el desarrollo humano")
          .col-md-6.col-lg-8.mb-4.mb-md-0
            p Se deben tener en cuenta los espacios físicos, sociales y ambientales para el mejoramiento de la calidad en la educación, el conjunto de estos espacios se conoce como ambiente. Un ambiente saludable minimiza la probabilidad que la comunidad sufra estrés, enfermedades por factores ambientales y se mantenga segura y protegida.
          .col-md-6.col-lg-4
            figure
              img(src='@/assets/curso/tema3/27.png')
        .row.col-lg-11.m-auto(titulo="Gestión de Servicios sociales para el desarrollo humano")
          .col-md-6.col-lg-8.mb-4.mb-md-0
            p Se establecen los actores sociales del entorno educativo como seres multidimensionales que no solo deben cumplir con las labores académicas, sino que tienen un papel en la sociedad, se forman con integralidad y desarrollan sus competencias mejorando su calidad de vida. Los servicios sociales dentro de los entornos educativos permiten potenciar estas habilidades blandas en la comunidad educativa, permitiendo el desarrollo intra e interpersonal.
          .col-md-6.col-lg-4
            figure
              img(src='@/assets/curso/tema3/11.png')
        .row.col-lg-11.m-auto(titulo="Participación social para el desarrollo humano ")
          .col-md-6.col-lg-8.mb-4.mb-md-0
            p Propiciar la participación de todos los miembros en todas las etapas de los proyectos educativos, desde el diagnóstico, el diseño de planes de trabajo, la implementación y la evaluación se convierte en un protector para el desarrollo y la calidad de vida de los sujetos.
          .col-md-6.col-lg-4
            figure
              img(src='@/assets/curso/tema3/12.png')
        .row.col-lg-11.m-auto(titulo="Gestión del conocimiento para la promoción del desarrollo humano ")
          .col-md-6.col-lg-8.mb-4.mb-md-0
            p Promover la investigación, difusión, adaptación y adopción de productos, procesos, tecnologías, estrategias, formas de organización social o de intervenciones que ofrecen soluciones efectivas, eficientes, eficaces y sostenibles, genera un ambiente saludable para las necesidades de la institución educativa y la comunidad.
          .col-md-6.col-lg-4
            figure
              img(src='@/assets/curso/tema3/13.png')
    
    .p-4.mt-5(style="background-color:#DBEFFC;")
      h5(data-aos="fade-up") #[i.fas.fa-check-circle(style="color:#3076B6;")] Entornos comunitarios saludables
      p.mt-4(data-aos="fade-up") El Ministerio de Salud y Protección Social (2013), en su documento Plan Decenal De Salud Pública 2012 – 2021, establece que el entorno comunitario está constituido por un conjunto de escenarios en los cuales los individuos y los grupos sociales ejercen su autonomía funcional y política, enmarcados en relaciones sociales que pueden proteger o deteriorar su salud y que han sido construidas históricamente.
      p.mt-3(data-aos="fade-up") Los procesos de concentración urbana de la población ejercen una presión sobre la infraestructura de los municipios incluyendo disponibilidad de servicios públicos, transporte, vivienda, educación, espacios recreativos, trabajo y el equipamiento en salud, que afectan la salud y calidad de vida de la población. Para tener un entorno comunitario saludable es importante cumplir con varios enfoques que están relacionados en el marco de la Política de Atención Integral en Salud, estos son:
      ul.lista-ul.ps-0.ps-md-5.mb-0.mt-4
        li.d-flex.flex-wrap(data-aos="fade-up")
          i.fas.fa-circle(style="color:#008B8A;")
          p.fw-bold.mb-0 Enfoque de derechos
          p.w-100 Se deben analizar las desigualdades de la comunidad y corregirlos con ayuda de políticas públicas y programas de desarrollo que garanticen los derechos antes aludidos. Adicionalmente, se debe reconocer que a todas las personas se les debe garantizar el acceso a una serie de atenciones en el curso de sus vidas, que se orientan a desarrollar sus capacidades y a promover el más alto nivel de bienestar.
        li.d-flex.flex-wrap(data-aos="fade-up")
          i.fas.fa-circle(style="color:#008B8A;")
          p.fw-bold.mb-0 Determinantes sociales
          p.w-100 Se establecen de acuerdo con las acciones de cada sector, en los espacios o momentos en los que se desarrolla y desenvuelve el ser humano, es decir, se debe promover salud, educación, trabajo, vivienda, transporte, hábitat, etc.
        li.d-flex.flex-wrap(data-aos="fade-up")
          i.fas.fa-circle(style="color:#008B8A;")
          p.fw-bold.mb-0 Enfoque diferencial
          p.w-100 En este enfoque se hace énfasis en que todos los individuos son iguales ante la comunidad a pesar de las posibles diferencias que puedan tener (sexo, religión, estrato, etc.), de este modo cualquier ciudadano tiene el derecho a ejercer una ciudadanía desde la diferencia, en escenarios de una democracia participativa, de inclusión igualitaria de ciudadanos y ciudadanas en la escena política y en la toma de decisiones en la esfera privada y pública.
        li.d-flex.flex-wrap(data-aos="fade-up")
          i.fas.fa-circle(style="color:#008B8A;")
          p.fw-bold.mb-0 Curso de vida
          p.w-100 En el desarrollo humano, los resultados en salud dependen de la interacción de diferentes factores a lo largo del curso de la vida, de experiencias acumulativas y situaciones presentes de cada individuo, para tener un entorno comunitario es necesario adoptar políticas epidemiológicas para que los habitantes estén menos expuestos a los riesgos desde la gestación hasta su vida adulta.
          p.w-100 Llegar a tener un entorno comunitario saludable es un proceso en el que deben intervenir todos los actores sociales hasta poder cumplir con características específicas que permiten el desarrollo individual y colectivo. 
          p.w-100 Se puede hablar entonces de entorno comunitario saludable cuando los actores:
    
    .col-lg-10.m-auto.mt-5
      figure
        img(src="@/assets/curso/tema3/15.svg" data-aos="zoom-in-up")
      
      .tarjeta.color-primario.p-4.p-md-5.mt-5(style="background: linear-gradient(180deg, rgba(48,118,182,1) 0%, rgba(129,212,250,1) 100%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema3/16.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.fw-bold.mb-1 Estrategia de entorno comunitario saludable
                p.text-small.mb-0 Para fortalecer el tema se puede consultar el documento de estrategia de entorno comunitario saludable que se encuentra en el material complementario.
              .col-sm-auto
                a.boton.color-primario(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/estrategia-entorno-comunitario-2019.pdf" target="_blank")
                  span(style="color:#12263F !important;") Descargar
                  i.fas.fa-file-download(style="color:#12263F !important;")
    
    .p-4.mt-5(style="background-color:#DBEFFC;")
      h5(data-aos="fade-up") #[i.fas.fa-check-circle(style="color:#3076B6;")] Entornos de trabajo saludables
      p.mt-4(data-aos="fade-up") El Ministerio de Salud y Protección Social (2013), en su documento plan decenal de salud pública 2012 - 2021 establece que el entorno laboral es el espacio del territorio donde las personas y los grupos sociales se organizan para producir bienes y servicios. En él se expresan las relaciones construidas socialmente, que determinan exposiciones diferenciales y resultados desiguales en la salud de las personas en función de la posición ocupacional en las cadenas productivas nacionales y transnacionales.
      p.mt-3(data-aos="fade-up") Así mismo, el Ministerio de Salud y Protección Social (2016) en su documento Entorno Laboral Saludable Como Incentivo Al Talento Humano En Salud, establece que los espacios laborales saludables deben tener en cuenta tres factores importantes que son:
      ul.lista-ul.ps-0.ps-md-5.mb-0.mt-4
        li.d-flex.flex-wrap(data-aos="fade-up")
          p #[i.fas.fa-circle(style="color:#008B8A;")] #[strong Espacio físico:] es la combinación entre puestos de trabajo y condiciones ambientales. Se deben tener en cuenta aspectos como la ergonomía, iluminación, ventilación, temperatura, entre otras. Un espacio físico idóneo puede mejorar la productividad, la motivación laboral, el espíritu de trabajo, la satisfacción en el trabajo y la calidad de vida general.
          p Con el fin de mejorar los espacios físicos y por ende el entorno laboral, se debe construir políticas de trabajo seguro, autocuidado, desarrollo de habilidades, buenas prácticas laborales y salud emocional del trabajador.
        li.d-flex.flex-wrap(data-aos="fade-up")
          p #[i.fas.fa-circle(style="color:#008B8A;")] #[strong Medio psicosocial:] es la interacción que tiene el trabajador con su labor, la satisfacción con la misma y el desarrollo que tiene al realizarla. El principal factor que se debe tener en cuenta para mejorar el medio psicosocial es la estabilidad laboral, puesto que el miedo que más presentan los trabajadores es la pérdida de su empleo. Este puede llevar a episodios de estrés, pérdida de productividad, problemas de salud, entre otros.
          p El segundo factor de mayor importancia es la supervisión. La mayor parte de los trabajadores tiene baja participación en la toma de decisiones, escasos niveles de comunicación y apoyo, junto a la ausencia de políticas de conciliación. Asimismo, el conflicto y la ambigüedad de roles, el exceso de responsabilidad, la escasez de formación y reciclaje, la inseguridad laboral, la ausencia de oportunidades de promoción profesional y desarrollo, por lo que es necesario diseñar planes que permitan la mejora del medio psicosocial en la organización.
        li.d-flex.flex-wrap(data-aos="fade-up")
          p #[i.fas.fa-circle(style="color:#008B8A;")] #[strong Apoyo social:] con el fin de mejorar las relaciones interpersonales se realizan diferentes entrenamientos en resolución de problemas, manejo eficaz del tiempo, y la adopción de estilos de vida saludables que faciliten el distanciamiento del trabajo en horario extralaboral. Los trabajadores así obtienen distintas herramientas de mejoramiento en la calidad de vida. Una vez el trabajador cuenta con esas herramientas se inician prácticas de motivación basadas en el modelo Herzberg donde se llevan a los trabajadores a actuar y vincular con su desempeño y satisfacción a la empresa, y se le asignan procesos organizacionales que influyen para que tanto los motivos del trabajador como los de la empresa vayan en la misma dirección.
    
    .col-lg-10.m-auto.mt-5
      .tarjeta.color-primario.p-4.p-md-5(style="background: linear-gradient(180deg, rgba(48,118,182,1) 0%, rgba(129,212,250,1) 100%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema3/16.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.fw-bold.mb-1 Estrategia de entorno laboral saludable
                p.text-small.mb-0 Con el fin de ampliar los conocimientos se invita a consultar el documento estrategia de entorno laboral saludable, páginas del 6 al 10, que se encuentra en el material complementario.
              .col-sm-auto
                a.boton.color-primario(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/TH/entorno-laboral-saludable-incentivo-ths-final.pdf" target="_blank")
                  span(style="color:#12263F !important;") Descargar
                  i.fas.fa-file-download(style="color:#12263F !important;")
    
    .p-4.mt-5(style="background-color:#DBEFFC;")
      h5(data-aos="fade-up") #[i.fas.fa-check-circle(style="color:#3076B6;")] Procesos productivos sostenibles
      p.mt-4.mb-0(data-aos="fade-up") De acuerdo con la alcaldía mayor de Bogotá en su decreto 182 (2003), el objetivo general de la producción sostenible es mejorar la calidad de vida de la población, el entorno ambiental y la competitividad empresarial. Una vez se logra este objetivo, se obtienen diferentes ventajas para el bienestar general de la sociedad, algunas de estas son:
    
    br
    br
    .col-lg-10.m-auto.mt-5
      .row.p-4.p-md-0(style="background-color:#FFD0A9;border:3px #DB6B17 solid;min-height:100px;")
        .col-lg-1
        .col-lg-8
          .p-4.bg-white(style="border-radius:20px;border:5px #DB6B17 solid;margin-top:-70px;" data-aos="zoom-in-up")
            p.mb-0(style="font-size:18px;") Se reconoce en todos los niveles jerárquicos de las organizaciones el concepto de sostenibilidad y este se tiene en cuenta desde la planificación hasta la toma de decisiones de las inversiones que se realizan.
    br
    br
    .col-lg-10.m-auto.mt-5
      .row.p-4.p-md-0(style="background-color:#FFD0A9;border:3px #DB6B17 solid;min-height:100px;")
        .col-lg-1
        .col-lg-8
          .p-4.bg-white(style="border-radius:20px;border:5px #DB6B17 solid;margin-top:-60px;" data-aos="zoom-in-up")
            p.mb-0(style="font-size:18px;") Se previenen y minimizan los riesgos para la salud humana y el medio ambiente.
    
    br
    br
    .col-lg-10.m-auto.mt-5
      .row.p-4.p-md-0(style="background-color:#FFD0A9;border:3px #DB6B17 solid;min-height:100px;")
        .col-lg-1
        .col-lg-8
          .p-4.bg-white(style="border-radius:20px;border:5px #DB6B17 solid;margin-top:-60px;" data-aos="zoom-in-up")
            p.mb-0(style="font-size:18px;") Se optimiza el uso de los recursos naturales dentro de los diferentes procesos.
    
    br
    br
    .col-lg-10.m-auto.mt-5
      .row.p-4.p-md-0(style="background-color:#FFD0A9;border:3px #DB6B17 solid;min-height:100px;")
        .col-lg-1
        .col-lg-8
          .p-4.bg-white(style="border-radius:20px;border:5px #DB6B17 solid;margin-top:-60px;" data-aos="zoom-in-up")
            p.mb-0(style="font-size:18px;") Se promueve la adopción de producción más limpia en procesos productivos de otras empresas.
    
    p.mt-5(data-aos="fade-up") Para lograr implementar los programas de producción sostenible es necesario realizar una serie de pasos con el fin de transformar los procesos productivos convencionales en alternativas más amigables con el medio ambiente. Esta serie de pasos consiste en:

    .col-lg-10.m-auto.mt-5
      PasosA.color-primario(tipo="n")
        .row
          .col-md-6.col-lg-8.mb-4.mb-md-0(style="place-self:center;")
            h5(data-aos="fade-right") Educación y divulgación
            p.mb-0(data-aos="fade-right") Se deben generar procesos donde las personas del común conozcan los conceptos de la producción sostenible, educar a los consumidores para que prefieran este tipo de productos y trabajar con los empresarios, consultores y demás técnicos para un conocimiento no solamente básico sino también especializado en el tema.
          .col-md-6.col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema3/17.svg' data-aos="fade-left")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema3/18.svg' data-aos="fade-right")
          .col-md-6.col-lg-8(style="place-self:center;")
            h5.text-start(data-aos="fade-left") Asistencia técnica ambiental
            p.mb-0.text-start(data-aos="fade-left") Desde las instituciones gubernamentales se deben proponer una serie de medidas que promuevan en las empresas la solución de los problemas, a través de medidas más preventivas que correctivas. 
        .row
          .col-md-6.col-lg-8.mb-4.mb-md-0(style="place-self:center;")
            h5(data-aos="fade-right") Transferencia de tecnologías y acceso a información
            p.mb-0(data-aos="fade-right") Se debe asegurar un adecuado flujo de información y soporte a la transferencia de las mejores tecnologías disponibles y prácticas empresariales, así como a la adecuada apropiación del “#[em know-how]” o el “saber hacer”.
          .col-md-6.col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema3/19.svg' data-aos="fade-left")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema3/20.svg' data-aos="fade-right")
          .col-md-6.col-lg-8(style="place-self:center;")
            h5.text-start(data-aos="fade-left") Fomento de investigación
            p.mb-0.text-start(data-aos="fade-left") Se deben incentivar las actividades de investigación en producción y operación sostenible, además del apoyo económico se debe acompañar en la elaboración de estudios y proyectos piloto con componentes de investigación aplicada.
    
    .p-4.mt-5(style="background-color:#DBEFFC;")
      h5(data-aos="fade-up") #[i.fas.fa-check-circle(style="color:#3076B6;")] Ecosistemas estratégicos saludables
      p.mt-4.mb-0(data-aos="fade-up") El Ministerio de Salud y Protección Social (2013), en su documento plan decenal de salud pública 2012 - 2021 establece que la mayor parte del territorio nacional ha sido sometida a usos no sostenibles, que han dado como resultado una disminución de la capacidad productiva de los ecosistemas por destrucción de biodiversidad, erosión, sedimentación, contaminación de suelos y aguas y afectación del balance hídrico de las cuencas, entre otras razones. En conjunto estos procesos han tenido un impacto importante en la salud pública de los territorios; por lo que requiere una respuesta intersectorial, mediante políticas y acciones dirigidas a prevenir el deterioro de los ecosistemas de mayor valor por sus bienes y servicios ecológicos, indispensables para el desarrollo nacional, regional y local; proteger la biodiversidad y la diversidad cultural. De manera específica se incluyen en estos ecosistemas los bosques, páramos, cuencas hídricas, humedales, manglares y mares.
      p.mt-4.mb-0(data-aos="fade-up") De acuerdo con Márquez, G. (2002), en su documento ecosistemas estratégicos, bienestar y desarrollo, estos son :

    .tarjeta.tarjeta--azul.p-4.pt-5.pb-5.mb-5.mt-5(style="background-color:#DFEAF3;")
      .col-lg-11.m-auto
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0
              h5 Ecosistemas de necesidades básicas
              p.mt-3 El abastecimiento de agua, aire, alimentos, energía y vivienda depende de ecosistemas, los cuales deben ser vigilados. En caso de fallar, por ejemplo, el abastecimiento de agua el PIB de una ciudad puede ir a cero.
            .col-md-6
              figure
                img(src='@/assets/curso/tema3/21.svg')
          .row
            .col-md-6.mb-4.mb-md-0
              h5 Ecosistemas para productividad 
              p.mt-3 Son aquellos donde se desarrollan actividades económicas tales como la agricultura, ganadería, minería, entre otras. Si bien, es frecuente la referencia de capital natural, en los análisis económicos se debe ir más allá de la valorización y priorizar la salud del ecosistema, ya que de allí depende el abastecimiento de agua, energía, materias primas, etc.
            .col-md-6
              figure
                img(src='@/assets/curso/tema3/22.png')
          .row
            .col-md-6.mb-4.mb-md-0
              h5 Ecosistemas para prevención de riesgos 
              p.mt-3 Deslizamientos, inundaciones, terremotos, incendios y otras catástrofes naturales se pueden presentar en diferentes lugares, sin embargo, se han desarrollado mecanismos naturales reguladores de tales catástrofes. Por citar un ejemplo, los bosques tienen la capacidad de amortiguar las crecientes e inundaciones a través de su manejo del agua, al tiempo que disminuyen los riesgos de erosión y deslizamientos. Mantener la salud de estos ecosistemas minimizando la afectación que puede hacer el hombre, permite maximizar la capacidad preventiva frente al desastre.
            .col-md-6
              figure
                img(src='@/assets/curso/tema3/23.svg')
          .row
            .col-md-6.mb-4.mb-md-0
              h5 Ecosistemas en relaciones políticas y sociales
              p.mt-3 La salud y mantenimiento de los ecosistemas cobra creciente importancia en las relaciones internacionales, en la medida que se reconocen como actores fundamentales en la minimización de impactos ambientales de carácter global como el cambio climático o el deterioro de la capa de ozono.
            .col-md-6
              figure
                img(src='@/assets/curso/tema3/24.svg')
          .row
            .col-md-6.mb-4.mb-md-0
              h5 Ecosistemas para equilibrio ecológico
              p.mt-3 La salud de estos ecosistemas permite tener control en la regulación hídrica, mantenimiento de diversidad, riqueza biológica, lo que garantiza seguridad alimentaria y control del clima.
            .col-md-6
              figure
                img(src='@/assets/curso/tema3/25.svg')







 
    



</template>

<script>
export default {
  name: 'Tema3',
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
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #D5E3F0
.acordion1 .acordion__accion__btn--a i, .acordion1 .acordion__accion__btn--b i
  color: #FFA031
.pasos-a__linea__esquina__linea
  border-radius: 0px
.pasos-a.color-primario .pasos-a__circle div
  color: #fff
.slyder-a__bullets__item--active
  background-color: #008B8A !important
  border-color: #008B8A
.slyder-a__bullets__item
  background-color: #91C9CE
</style>
