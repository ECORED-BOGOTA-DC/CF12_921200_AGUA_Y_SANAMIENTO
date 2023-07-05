export default {
  global: {
    componenteFormativo: 'Estrategias de intervención en salud pública',
    descripcionCurso:
      'Para realizar intervenciones dentro del marco de la salud pública, es importante conocer el funcionamiento del sistema y las estrategias de intervención en las comunidades, identificando sus condiciones de vida. Por consiguiente, es necesario implementar estrategias de comunicación y atención comunitaria para poder establecer las medidas de prevención y control de enfermedades.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Enfermedades de interés en salud pública',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación social',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de comunicación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clases de comunicación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Elementos de la comunicación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Factores en la comunicación social',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Características principales',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Medios de comunicación en la salud',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Funciones fundamentales de la comunicación',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Caracterización de comunidades',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Caracterización de riesgo en viviendas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Metodologías de recolección de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Procesos de vigilancia y control sanitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Procesos misionales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Procesos estratégicos',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Medidas de prevención',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Buenas prácticas agrícolas',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Buenas prácticas de manufactura',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'HACCP',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Procesos de control para agua de consumo',
            hash: 't_7_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Enfermedades de interés en salud pública.',
      referencia:
        'Acuerdo 117. Ministerio de salud. Bogotá. Colombia. 22 diciembre 1998.',
      tipo: 'Normatividad Nacional',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/ACUERDO%20117%20DE%201998.pdf',
    },
    {
      tema: '4. Caracterización del riesgo en vivienda.',
      referencia:
        'Ministerio de Salud y Protección Social (2013) Manual Educativo Nacional Hacía una vivienda saludable que viva mi hogar.',
      tipo: 'Manual',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/manual-educativo-nacional-vivienda-saludable.pdf',
    },
    {
      tema: '4. Caracterización de riesgo en vivienda.',
      referencia:
        'Ministerio de salud (MINSALUD). (2018). Estrategia de entorno comunitario Saludable. Dirección de Promoción y Prevención. Subdirección de salud ambiental.',
      tipo: 'Manual',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/estrategia-entorno-comunitario-2019.pdf',
    },
    {
      tema: '4. Caracterización de riesgo en vivienda',
      referencia:
        'Ministerio de Salud Y Protección Social. (2016). Entorno laboral saludable dirección de desarrollo y talento humano en salud.',
      tipo: 'Documento gubernamental',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/TH/entorno-laboral-saludable-incentivo-ths-final.pdf',
    },
    {
      tema: '4. Caracterización de riesgo en vivienda',
      referencia:
        'Ministerio de Salud y Protección Social, (2013) Resolución 1229.',
      tipo: 'Normatividad Nacional',
      link:
        'https://drive.google.com/file/d/1Qnb3QVU9U-zgs8FaCrvv5WZ7uALNvU4I/view?usp=sharing',
    },
    {
      tema: '6. Procesos de vigilancia y control sanitario.',
      referencia:
        'Ministerio de la Protección Social. (2009). Resolución 082 de 2009. Por medio de la cual se adoptan unos formularios para la práctica de visitas de inspección sanitaria a los sistemas de suministro de agua para consumo humano.',
      tipo: 'Normatividad Nacional',
      link:
        'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2009%20Resoluci%C3%B3n%20082%20Buenas%20pr%C3%A1cticas%20sanitarias.pdf',
    },
    {
      tema: '7. Medidas de prevención.',
      referencia:
        'Organización Mundial de la Salud. (2020). Sistema HACCP los 7 principios.',
      tipo: 'Página web',
      link:
        'https://www.paho.org/hq/index.php?option=com_content&view=article&id=10913:2015-sistema-haccp-siete-principios&Itemid=41452&lang=es',
    },
  ],
  glosario: [
    {
      termino: 'Comunicación',
      significado:
        'transmisión de señales mediante un código común al emisor y al receptor (Real Academia Española, 2020).',
    },
    {
      termino: 'Desarrollo de la comunidad',
      significado:
        'es el conjunto de procesos económicos, políticos, culturales y sociales, que integran los esfuerzos de la población, sus organizaciones y las del Estado, para mejorar la calidad de vida de las comunidades (Ministerio de Salud y Protección Social, 2018).',
    },
    {
      termino: 'Ecosistemas Estratégicos',
      significado:
        'son las zonas de páramos, subpáramos, los nacimientos de agua y las zonas de recarga de acuíferos como áreas de especial importancia ecológica gozan de protección especial, por lo que las autoridades ambientales deberán adelantar las acciones tendientes a su conservación y manejo, las que podrán incluir su designación como áreas protegidas. Los ecosistemas estratégicos garantizan la oferta de bienes y servicios ambientales esenciales para el desarrollo humano sostenible del país. Estos ecosistemas se caracterizan por mantener equilibrios y procesos ecológicos básicos tales como la regulación de climas, del agua, realizar la función de depuradores del aire, agua y suelos; la conservación de la biodiversidad (Ministerio de Salud y Protección Social, 2018).',
    },
    {
      termino: 'Entorno',
      significado:
        'ambiente, lo que rodea, conjunto de características que definen el lugar y la forma de ejecución de una aplicación (Real Academia Española, 2020).',
    },
    {
      termino: 'Hábitat',
      significado:
        'lugar de condiciones apropiadas para que viva un organismo, especie o comunidad animal o vegetal, espacio construido en el que vive el hombre (Real Academia Española, 2020).',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcalay, R. (2002). La comunicación para la salud como disciplina en las universidades estadounidense.',
      link: 'https://iris.paho.org/handle/10665.2/8953',
    },
    {
      referencia:
        'Busse, P y Godoy, S. (2016). Comunicación y salud. <em>Cuadernos.info</em>',
      link:
        'https://scielo.conicyt.cl/scielo.php?script=sci_arttext&pid=S0719-367X2016000100001&lng=es&tlng=es',
    },
    {
      referencia:
        'González, C y Agudo, A. (2003). Factores de riesgo: aspectos generales. Conceptos, organización y práctica clínica. 5 edición. España.',
      link: '',
    },
    {
      referencia:
        'Lorente, J y Jiménez, M. (2009). La comunicación en salud desde las perspectivas ética, asistencial, docente y gerencial.',
      link: '',
    },
    {
      referencia:
        'Maletzke, G. (1992). Psicología de la comunicación social. Quipus.',
      link: '',
    },
    {
      referencia:
        'Márquez, G. (2002). Ecosistemas estratégicos, bienestar y desarrollo. Educación para la gestión ambiental: una experiencia con los funcionarios del sistema nacional ambiental en la sierra nevada de Santa Marta, 103-115. Santa Marta.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2009). Mis buenas prácticas agrícolas "Guía para agro empresarios". Yerimpresos.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud. (22 de diciembre de 1998) Acuerdo 117 de 1998.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Acuerdo-117-de-1998.pdf',
    },
    {
      referencia:
        'Ministerio de Salud (MINSALUD). (2018). Estrategia de entorno comunitario saludable. Dirección de Promoción y Prevención. Subdirección de Salud Ambiental.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Entorno laboral saludable dirección de desarrollo y talento humano en salud.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2013) Manual educativo nacional hacía una vivienda saludable que viva mi hogar.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Plan Decenal de Salud Pública 2012 - 2021. Imprenta Nacional de Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016) Protocolo Autocontrol persona prestadora del servicio público de acueducto y los procesos de supervisión por parte de la Autoridad Sanitaria.',
      link: '',
    },
    {
      referencia:
        'Moncada, A. (2018). La promoción de la salud y los medios de comunicación describe que el papel que juegan los medios de comunicación en la Promoción de la Salud.',
      link:
        'https://www.easp.es/web/blogps/2018/05/15/la-promocion-de-la-salud-y-los-medios-de-comunicacion/',
    },
    {
      referencia:
        'Resolución 082 de 2009. [Ministerio de Salud y Protección Social]. Por medio de la cual se adoptan unos formularios para la práctica de visitas de inspección sanitaria a los sistemas de suministro de agua para consumo humano. Bogotá D.C. 16 de enero de 2009.',
      link: '',
    },
    {
      referencia:
        'Resolución 1229 de 2013. [Ministerio de Salud y Protección Social]. Por la cual se establece el modelo de inspección, vigilancia y control sanitario para los productos de uso y consumo humano. 23 de abril de 2013.',
      link: '',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (26 de 07 de 2020). El sistema HACCP: Los siete principios. OMS.',
      link:
        'https://www.paho.org/hq/index.php?option=com_content&view=article&id=10913:2015-sistema-haccp-siete-principios&Itemid=41452&lang=es',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2010). Hacia una Vivienda Saludable. Manual Educativo Nacional.',
      link: '',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (23 de 7 de 2020). Principio II: Establecer los puntos críticos de control. OPS.',
      link:
        'https://www.paho.org/hq/index.php?option=com_content&view=article&id=10915:2015-principio-ii-establecer-los-puntos-criticos-de-control&Itemid=41432&lang=es',
    },
    {
      referencia:
        'Parada, Y. G., & Moreno Garzón, A. (1999). Aprender a investigar. ARFO Editores LTDA.',
      link: '',
    },
    {
      referencia:
        'Páramo, A. (2011). Factores de riesgo y factores de protección en la adolescencia: análisis de contenido a través de grupos de discusión. Terapia Psicológica, 29(1), 85-95.',
      link: '',
    },
    {
      referencia:
        'Real Academia Española. (27 de 7 de 2020). Definición de Comunicación. RAE.',
      link: 'https://dle.rae.es/comunicaci%C3%B3n',
    },
    {
      referencia:
        'Serrano, J. C., y Zapico Alonso, F. (2004). La fórmula de comunicación de Lasswell como método para implementar bases de datos documentales en los medios audiovisuales. Investigación Bibliotecológica, 18(37), 111- 131.',
      link: 'http://dx.doi.org/10.22201/iibi.0187358xp.2004.37.4048',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Adriana Marcela Suarez Eljure',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
