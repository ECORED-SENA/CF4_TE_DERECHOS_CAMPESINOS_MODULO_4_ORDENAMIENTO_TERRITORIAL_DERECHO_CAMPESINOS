export default {
  global: {
    Name: 'Sostenibilidad ambiental',
    Description:
      'En este componente se abordará aspectos propiciando conocimientos a partir de la sostenibilidad ambiental, los contextos normativos de la política ambiental, el impacto ambiental, la estructura del impacto ambiental,  medidas correctivas y restauradoras de acuerdo a la naturaleza y su actividad y lo referente a las licencias ambientales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        titulo: 'Sostenibilidad ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Principios de la sostenibilidad ambiental',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Teorías sobre sostenibilidad ambiental',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Contextos normativos y política ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Política ambiental',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Relación entre normatividad y política ambiental',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Impacto ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Propósitos y alcance del impacto ambiental',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Marco normativo del impacto ambiental',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos de impacto ambiental y sus características',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estructura de estudios de impacto ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Caracterización del sitio',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Identificación de riesgos y amenazas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Identificación de impactos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Licencia ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Requisitos, procedimiento y normativa',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Procedimiento para obtener la licencia ambiental',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Normativa aplicable en Colombia',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Normativa y referentes internacionales',
            hash: 't_5_4',
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
        download: 'downloads/dist.pdf',
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
      tema: 'Uso racional de los recursos naturales.',
      referencia:
        'GuerrerosPlanet (2021). Recursos Naturales | Videos Educativos Para Niños. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EVwqO0QqNUU',
    },
    {
      tema: 'Prevención y mitigación de impactos ambientales.',
      referencia:
        'UN Environment Programme. (2021). What is ecosystem restoration? (Spanish) [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9YsWg7wfxjI&t=20s',
    },
  ],
  glosario: [
    {
      termino: 'Amenazas',
      significado:
        'es un fenómeno, evento o proceso natural, socionatural o antrópico que tiene el potencial de causar daño a las personas, los ecosistemas, la infraestructura, los bienes o las actividades humanas.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'es cualquier cambio positivo o negativo que una actividad humana provoca sobre el ambiente, afectando elementos como el agua, el aire, el suelo, la biodiversidad, el paisaje o las condiciones sociales y económicas de una comunidad.',
    },
    {
      termino: 'Licencias ambientales',
      significado:
        'es una autorización otorgada por la autoridad ambiental competente que permite la ejecución de un proyecto, obra o actividad que pueda generar impactos ambientales significativos. A través de esta licencia, la autoridad evalúa previamente los posibles impactos y establece condiciones, requisitos y obligaciones para prevenir, mitigar, corregir o compensar los efectos sobre el ambiente.',
    },
    {
      termino: 'Licencias ambientales',
      significado:
        'es una autorización otorgada por la autoridad ambiental competente que permite la ejecución de un proyecto, obra o actividad que pueda generar impactos ambientales significativos. A través de esta licencia, la autoridad evalúa previamente los posibles impactos y establece condiciones, requisitos y obligaciones para prevenir, mitigar, corregir o compensar los efectos sobre el ambiente.',
    },
    {
      termino: 'Medidas compensatorias',
      significado:
        'son acciones destinadas a restablecer, reemplazar o equilibrar los efectos negativos inevitables que una actividad humana genera sobre el ambiente, cuando dichos impactos no pueden ser evitados, mitigados o corregidos completamente.',
    },
    {
      termino: 'Medidas correctivas',
      significado:
        'son acciones que se implementan para reparar, detener o revertir un impacto ambiental negativo que ya ocurrió como resultado de una actividad humana. Su objetivo es restablecer las condiciones originales del ambiente o reducir al mínimo el daño ya generado, evitando que continúe o se agrave.',
    },
    {
      termino: 'Medio biótico',
      significado:
        'es el conjunto de seres vivos que habitan un territorio y las interacciones que establecen entre sí y con su entorno. Incluye la flora, fauna, microorganismos, comunidades biológicas y ecosistemas, así como los procesos ecológicos que permiten su funcionamiento y equilibrio.',
    },
    {
      termino: 'Medio físico',
      significado:
        'es el conjunto de elementos naturales y abióticos que conforman el entorno de un área determinada. Incluye los componentes geológicos, geomorfológicos, climáticos, hídricos y edáficos (suelo) que influyen en las condiciones ambientales y en el desarrollo de los ecosistemas.',
    },
    {
      termino: 'Medio socioeconómico',
      significado:
        'es el conjunto de elementos sociales, culturales y económicos que caracterizan a la población en un territorio. Incluye aspectos como la dinámica demográfica, la organización social, las actividades económicas, la infraestructura, los servicios públicos, la cultura, la salud, la educación y las condiciones de bienestar de la comunidad.',
    },
    {
      termino: 'Política ambiental',
      significado:
        'es el conjunto de estrategias, principios, normas, decisiones y acciones formuladas por el Estado para proteger el ambiente, gestionar de manera sostenible los recursos naturales y prevenir, mitigar o corregir los impactos ambientales derivados de las actividades humanas. Establece los lineamientos para la conservación de la biodiversidad, el control de la contaminación, la gestión del riesgo y la promoción del desarrollo sostenible.',
    },
    {
      termino: 'Principios de la sostenibilidad ambiental',
      significado:
        'un conjunto de directrices fundamentales que orientan las decisiones, políticas y acciones para garantizar que el desarrollo económico y social se realice sin deteriorar los ecosistemas, preservando la biodiversidad, los recursos naturales y la calidad ambiental para las generaciones presentes y futuras.',
    },
    {
      termino: 'Riesgos',
      significado:
        'es la probabilidad de que un evento peligroso (amenaza) cause efectos negativos sobre las personas, los ecosistemas, los bienes o la infraestructura, debido a la exposición y vulnerabilidad de estos elementos.',
    },
    {
      termino: 'Sostenibilidad ambiental',
      significado:
        'es la capacidad de mantener el equilibrio de los ecosistemas y asegurar que los recursos naturales se utilicen de manera responsable, garantizando que las generaciones presentes satisfagan sus necesidades sin comprometer la capacidad de las generaciones futuras para satisfacer las suyas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arboleda, J. (2012). Gestión ambiental y evaluación del impacto ambiental.',
      link: '',
    },
    {
      referencia:
        'Arboleda, J. (2012). Gestión ambiental y evaluación del impacto ambiental. ECOE.',
      link: '',
    },
    {
      referencia:
        'Arboleda, J. (2012). Gestión ambiental y evaluación del impacto ambiental. ECOE Ediciones.',
      link: '',
    },
    {
      referencia: 'Banco Mundial. (2018). Environmental and Social Framework.',
      link: '',
    },
    {
      referencia:
        'Banco Mundial. (2018). Environmental and Social Framework: Environmental Assessment.',
      link: '',
    },
    {
      referencia:
        'Cardona, O. D. (2008). Gestión del riesgo de desastres: conceptos, métodos y herramientas. CEPAL.',
      link: '',
    },
    {
      referencia:
        'Comisión Brundtland. (1987). Nuestro futuro común. Naciones Unidas.',
      link: '',
    },
    {
      referencia:
        'Comisión Mundial sobre Medio Ambiente y Desarrollo. (1987). Nuestro futuro común. Naciones Unidas.',
      link: '',
    },
    {
      referencia:
        'Conesa Fernández-Vitora, V. (2010). Guía metodológica para la evaluación del impacto ambiental. Mundi-Prensa.',
      link: '',
    },
    {
      referencia:
        'Conesa Fernández-Vítora, V. (2010). Guía metodológica para la evaluación del impacto ambiental. Madrid: Mundi-Prensa.',
      link: '',
    },
    {
      referencia:
        'Conesa Fernández-Vitora, V. (2010). Metodología para la evaluación de impacto ambiental.',
      link: '',
    },
    {
      referencia:
        'Conesa Fernández-Vitora, V. (2010). Metodología para la evaluación de impacto ambiental. Mundi-Prensa.',
      link: '',
    },
    {
      referencia:
        'Conesa, F. (2010). Guía metodológica para la evaluación del impacto ambiental. Mundi-Prensa.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993). Ley 99 de 1993.',
      link: '',
    },
    {
      referencia:
        'Cunningham, W. et al. (2017). Environmental Science: A Global Concern.',
      link: '',
    },
    {
      referencia:
        'Cunningham, W., Cunningham, M., & Saigo, B. (2017). Environmental Science: A Global Concern. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Glasson, J., Therivel, R., & Chadwick, A. (2012). Introduction to Environmental Impact Assessment. Routledge.',
      link: '',
    },
    {
      referencia:
        'Glasson, J., Therivel, R., & Chadwick, A. (2013). Introduction to Environmental Impact Assessment (4th ed.). Routledge.',
      link: '',
    },
    {
      referencia:
        'IAIA. (1999). Principles of Environmental Impact Assessment Best Practice.',
      link: '',
    },
    {
      referencia:
        'International Association for Impact Assessment (IAIA). (2022). Principles of Environmental Impact Assessment Best Practice.',
      link: '',
    },
    {
      referencia:
        'Ley 99 de 1993 (Colombia). Por la cual se crea el Ministerio del Medio Ambiente y el SINA.',
      link: '',
    },
    {
      referencia:
        'MADS. (2012). Política Nacional para la Gestión Integral de la Biodiversidad y sus Servicios Ecosistémicos (PNGIBSE).',
      link: '',
    },
    {
      referencia:
        'MinAmbiente. (2018). Guía para la Evaluación de Impactos Ambientales.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible – MADS. (2018). Guía para la elaboración de estudios de impacto ambiental.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (MADS). (1993). Ley 99 de 1993: por la cual se crea el Ministerio del Medio Ambiente.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (MADS). (2012). Política Nacional para la Gestión Integral de la Biodiversidad y sus Servicios Ecosistémicos.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (MADS). (2012). Política Nacional para la Gestión Integral de la Biodiversidad y sus Servicios Ecosistémicos (PNGIBSE).',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (MADS, Colombia). Guía para la evaluación de impacto ambiental.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible de Colombia. (2015). Decreto 1076 de 2015 – Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible de Colombia. (2018). Guía para la elaboración de estudios de impacto ambiental.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2012). Política Nacional para la Gestión Integral de la Biodiversidad y sus Servicios Ecosistémicos. Gobierno de Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2014). Decreto 2041 de 2014.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). Decreto 1076 de 2015 – Decreto Único Reglamentario del Sector Ambiente.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). Guía para la identificación y evaluación de impactos ambientales. MinAmbiente.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (1992). Declaración de Río sobre Medio Ambiente y Desarrollo.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (1992). Declaración de Río sobre Medio Ambiente y Desarrollo. ONU.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (2015). Objetivos de Desarrollo Sostenible (ODS).',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas (ONU). (2020). Restauración de ecosistemas: guía práctica para la acción.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (2015). Transformar nuestro mundo: la Agenda 2030 para el Desarrollo Sostenible. ONU.',
      link: '',
    },
    {
      referencia:
        'PNUMA. (2019). Perspectivas del Medio Ambiente Mundial GEO-6. Programa de las Naciones Unidas para el Medio Ambiente.',
      link: '',
    },
    {
      referencia:
        'Programa de las Naciones Unidas para el Medio Ambiente. (2021). Informe sobre el estado del medio ambiente. PNUMA.',
      link: '',
    },
    {
      referencia:
        'Sadler, B. & Verheem, R. (1996). Strategic Environmental Assessment.',
      link: '',
    },
    {
      referencia:
        'Sánchez, L. (2015). Evaluación de Impacto Ambiental: conceptos y métodos. Ediciones Pirámide.',
      link: '',
    },
    {
      referencia:
        'Sánchez, L. E. (2015). Evaluación de impacto ambiental: conceptos y métodos.',
      link: '',
    },
    {
      referencia:
        'Sánchez, L. E. (2015). Evaluación de impacto ambiental: conceptos y métodos. Oficinas de la Unión.',
      link: '',
    },
    {
      referencia:
        'SER (Society for Ecological Restoration). (2019). Principles and Standards for Ecological Restoration.',
      link: '',
    },
    {
      referencia:
        'UNEP. (2002). Environmental Impact Assessment Training Resource Manual.',
      link: '',
    },
    {
      referencia:
        'UNESCO. (2010). Natural Hazards and Risk Assessment Handbook.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yuly Soley Alarcón Pérez',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima ',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}
