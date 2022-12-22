export default {
  global: {
    componenteFormativo:
      'Control de la operación de los sistemas de tratamiento de aguas residuales',
    descripcionCurso:
      'En este componente formativo se establecen los criterios para el aprendizaje integral del control de vertimientos, de acuerdo con lineamientos técnicos y legales a nivel nacional. Todo ello, teniendo en cuenta las necesidades de los sectores económicos colombianos, el desarrollo tecnológico y la innovación en equipos, materiales y sistemas de tratamientos eficientes en la recolección, manejo, evacuación, diseños, construcción, puesta en marcha, operación y mantenimiento de los sistemas de tratamiento de aguas residuales.',
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.svg'),
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal_2.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/images/header/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/images/header/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/images/header/3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/images/header/4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/images/header/5.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos Generales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Sistemas para el tratamiento físico, químico y biológico del agua residual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tratamientos primarios del agua residual',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tratamientos secundarios del agua residual',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Tratamientos terciarios del agua residual',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Variables a considerar en una planta de tratamiento de agua residual',
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Concentración',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Carga contaminante',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Eficiencia del PTAR',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Procesos y protocolos de mantenimiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Emergencias y contingencias en el tratamiento de vertimientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos de emergencias',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Protocolos de emergencias',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Tratamiento de lodos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Equipos hidráulicos, mecánicos, eléctricos y de control',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      // desarrolloContenidos: true,
      //},
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
  referencias: [
    {
      referencia:
        'Acuatecnia S.A.S. (2018). Tratamiento de aguas residuales. Acuatecnia.',
      link: 'https://acuatecnica.com/tratamiento-primario-aguas-residuales/',
    },
    {
      referencia:
        'Aguas industriales. (2015). Instalación con tecnología SBR. Aguas industriales.',
      link:
        'http://aguasindustriales.es/ventajas-y-desventajas-de-los-reactores-biologicos-secuenciales-sbr/',
    },
    {
      referencia:
        'Aguas Sigma. (2016). Sistema de flotación por aire disuelto. Aguas Sigma',
      link:
        'http://aguasigma.com/es/equipos-tratamiento-aguas/sistema-daf.html',
    },
    {
      referencia:
        'Decreto 3100 de 2003. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por medio del cual se reglamentan las tasas retributivas por la utilización directa del agua como receptor de los vertimientos puntuales y se toman otras determinaciones. Octubre 30 de 2003.',
    },
    {
      referencia:
        'Decreto 1287 de 2014. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por el cual se establecen criterios para el uso de los biosólidos generados en plantas de tratamiento de aguas residuales municipales. Julio 10 de 2014.',
    },
    {
      referencia:
        'FRC Systems International. (2015). Floculadores. FRC Systems.',
      link: 'https://frcsystems.com/flocculators-daf-systems/?lang=es',
    },
    {
      referencia:
        'Fundación para el conocimiento. (2007). Reactores biológicos de membrana (MBR): una alternativa de tratamiento para la reutilización del agua. MADRIMASD. ',
      link: 'https://www.madrimasd.org/blogs/remtavares/2007/04/12/63351',
    },
    {
      referencia: 'Hidritec. (s.f.). Electrocoagulación. Hidritec',
      link: 'http://www.hidritec.com/hidritec/electrocoagulacion',
    },
    {
      referencia: 'Hidrometálica. (s.f.). Biodiscos. Hidrometálica.',
      link: 'https://hidrometalica.com/biodiscos/',
    },
    {
      referencia: 'Hidrometálica. (s.f.). Espesador de fangos. Hidrometálica',
      link: 'https://hidrometalica.com/espesador-de-fangos/',
    },
    {
      referencia:
        'Ingenieria Liquid Technologies de Monterrey S.A. de C. V. (s.f.). Floculantes. Floculantes',
      link: 'https://floculantes.com/',
    },
    {
      referencia:
        'Jardín Botánico de Bogotá y Universidad Libre. (2013). Guía metodológica para la formulación de proyectos ambientales escolares. UNILIBRE',
      link: 'http://www.unilibre.edu.co/praeul/images/stories/pdfs/2013/h9.pdf',
    },
    {
      referencia: 'Maldonado, V. (s.f.). Sedimentación',
      link: 'http://www.ingenieroambiental.com/4014/siete.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial (2011). Plan de gestión del riesgo para el manejo de vertimientos.',
      link:
        'https://www.cornare.gov.co/Tramites-Ambientales/TR/TR-manejo_vertimientos.pdf ',
    },
    {
      referencia:
        'Pedraza, S. (2018). Unidad de tratamiento por biodiscos. Feria FIMA. ',
    },
    {
      referencia:
        'Tecpa. (2018). Filtros verdes en depuración de aguas residuales. Tecpa.',
      link: 'https://www.tecpa.es/filtro-verde-depuracion-aguas-residuales/',
    },
    {
      referencia:
        'Tratamiento del agua. (2016). Lagunas de oxidación. Tratamiento del agua.',
      link:
        'https://www.tratamientodelagua.com.mx/lagunas-de-oxidacion-que-son/',
    },
    {
      referencia: 'Universidad Veracruzana. (s.f.). Bioingeniería',
      link:
        'https://sites.google.com/site/bioingenieriauv15/unidad-1-sistemas-de-depuracion-de-agua/1-3-filtros-verdes',
    },
  ],
  glosario: [
    {
      termino: 'Alcantarillado',
      significado:
        'Conjunto de estructuras para la evacuación de las aguas residuales bien sean industriales, domésticas o de aguas lluvias. También existe el alcantarillado de aguas combinadas que se encarga del transporte de todo tipo de agua sin importar su proveniencia. El sistema más adecuado para el transporte de agua a nivel municipal es el alcantarillado separado, pues divide las aguas residuales y las aguas lluvias de manera independiente, lo que evita aumentar caudales de aguas contaminadas.Jardín Botánico de Bogotá y Universidad Libre. (2013). Guía metodológica para la formulación de proyectos ambientales escolares (p. 50).',
    },
    {
      termino: 'Contaminación del agua',
      significado:
        'Se entiende por contaminación del medio hídrico la acción y el efecto de introducir materias o formas de energía, o inducir condiciones en el agua que, de modo directo o indirecto, impliquen una alteración perjudicial de su calidad en relación con su función ecológica o usos posteriores. Es muy fácil contaminar el agua cuando se encuentra en forma líquida y de vapor, pero no en estado sólido (hielo). Con frecuencia el sabor, el olor y el aspecto del agua indican que está contaminada, pero la presencia de contaminantes peligrosos solo se puede detectar mediante pruebas químicas y biológicas específicas y precisas. Existen contaminantes físicos (líquidos y sólidos), químicos y biológicos. Jardín Botánico de Bogotá y Universidad Libre. (2013). Guía metodológica para la formulación de proyectos ambientales escolares (p. 50).',
    },
    {
      termino: 'Contaminantes biológicos',
      significado:
        'ncluyen hongos, bacterias y virus que provocan enfermedades; algas y otras plantas acuáticas. Algunas bacterias son inofensivas y otras participan en la degradación de la materia orgánica contenida en el agua. Jardín Botánico de Bogotá y Universidad Libre. (2013). Guía metodológica para la formulación de proyectos ambientales escolares (p. 52).',
    },
    {
      termino: 'Contaminantes inorgánicos ',
      significado:
        'Provienen de descargas domésticas, agrícolas e industriales o de la erosión del suelo. Los más frecuentes son cloruros, sulfatos, nitratos y carbonatos, también desechos ácidos, alcalinos y gases tóxicos disueltos en el agua como los óxidos de azufre, de nitrógeno, amoníaco, cloro y sulfuro de hidrógeno (ácido sulfhídrico). Gran parte de estos contaminantes son liberados directamente a la atmósfera y bajan arrastrados por la lluvia. Esta lluvia ácida tiene efectos nocivos que pueden observarse tanto en la vegetación como en edificios y monumentos de las ciudades industrializadas. Jardín Botánico de Bogotá y Universidad Libre. (2013). Guía metodológica para la formulación de proyectos ambientales escolares (p. 51).',
    },
    {
      termino: 'Contaminantes orgánicos',
      significado:
        'Provienen de los desechos humanos y animales, del producto de la descomposición de estos, de los restos de los mataderos, del procesamiento de los alimentos; de productos químicos industriales de origen natural como aceites, grasas, breas y tinturas; y de diversos productos químicos sintéticos como pinturas, herbicidas, insecticidas, entre otros. Los contaminantes orgánicos consumen el oxígeno disuelto en el agua y afectan la vida acuática (eutrofización).Jardín Botánico de Bogotá y Universidad Libre. (2013). Guía metodológica para la formulación de proyectos ambientales escolares (p. 52).',
    },
    {
      termino: 'Contaminantes sólidos del agua ',
      significado:
        'Entre los contaminantes sólidos se encuentran la arena, la arcilla, la tierra, la ceniza, la materia vegetal agrícola, las grasas, la brea, el papel, el hule, los plásticos, la madera y los metales, entre muchos otros tipos de residuos comúnmente arrojados a las fuentes y rondas. Jardín Botánico de Bogotá y Universidad Libre. (2013). Guía metodológica para la formulación de proyectos ambientales escolares (p. 51).',
    },
  ],
  complementario: [
    {
      tema:
        'Sistemas para el tratamiento físico, químico y biológico del agua residual',
      referencia:
        'TV Agro. (2015). Tratamiento de aguas residuales EMPAS [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LLqFBBHJ6yA',
    },
    {
      tema:
        'Sistemas para el tratamiento físico, químico y biológico del agua residual',
      referencia:
        'Syner Tech S.A.S. (2016). Plantas de tratamiento de aguas residuales [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VpY5j-fVw8o&t=100s ',
    },
    {
      tema:
        'Sistemas para el tratamiento físico, químico y biológico del agua residual',
      referencia:
        'EPM.ESP. (2016). Tratamiento de aguas residuales - Planta San Fernando [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3bEhLJLR7UU ',
    },
    {
      tema: 'Procesos y protocolos de mantenimiento',
      referencia:
        'EMDUPAR. (2012). Manual de operación y mantenimiento del sistema de tratamiento de aguas residuales. EMDUPAR.',
      tipo: 'Manual',
      link:
        'https://www.emdupar.gov.co/index.php/la-entidad/sistema-integrado-de-gestion/Planeacion/Manuales/MA-GM-01%20MANUAL%20DE%20OPERACION%20Y%20MANTENIMIENTO%20PTAR.pdf/download ',
    },
    {
      tema: 'Procesos y protocolos de mantenimiento',
      referencia:
        'Díaz, N. (2016). Manual de operación, mantenimiento y limpieza PTAR.',
      tipo: 'Manual',
      link:
        'https://repositorio.uisek.edu.ec/bitstream/123456789/2889/1/Anexo%209%20Tesis%20Nidia%20D%C3%ADaz.pdf',
    },
    {
      tema: 'Emergencias y contingencias en el tratamiento de vertimientos',
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2011). Plan de gestión del riesgo para el manejo de vertimientos.',
      tipo: 'Plan',
      link:
        'https://www.cornare.gov.co/Tramites-Ambientales/TR/TR-manejo_vertimientos.pdf',
    },
    {
      tema: 'Emergencias y contingencias en el tratamiento de vertimientos',
      referencia:
        'FOPAE- (2013). Guía para elaborar planes de emergencia y contingencias.  ',
      tipo: 'Guía',
      link:
        'https://www.sire.gov.co/documents/82884/85386/ANEXO+3-+GUIA+PLANES+EMERGENCIA+Y+CONTINGENCIAS.pdf/2010161a-6762-4699-82c2-38090fb38f92 ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diana Carolina Triana Guarnizo',
        cargo: 'Instructor',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Esperanza Ortiz Russi',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de diseño y metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional ',
        centro: 'Centro Agropecuario La Granja  - Regional Tolima',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de Estilo',
        centro: 'Centro de diseño y metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Diana Carolina Acevedo Barón ',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
