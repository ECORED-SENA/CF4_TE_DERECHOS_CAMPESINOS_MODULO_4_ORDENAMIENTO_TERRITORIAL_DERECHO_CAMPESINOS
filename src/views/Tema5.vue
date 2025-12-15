<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Licencia ambiental
    
    .row.align-items-center.m-0.mb-5
      .col-xl.style___box_2.ajuste___box_2_1(data-aos="fade-right")
        p.mb-0 La licencia ambiental es la autorización previa que otorga la autoridad ambiental competente para la ejecución de proyectos, obras o actividades que pueden generar un deterioro grave al ambiente. Su propósito es garantizar que la actividad propuesta incluya medidas adecuadas de prevención, mitigación, corrección, compensación y seguimiento de los impactos ambientales. En Colombia, esta figura constituye un instrumento fundamental de la gestión ambiental, regulado por la Ley 99 de 1993 y el Decreto 1076 de 2015.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img58.png", alt="").m-auto
  
    <!-- BLOQUE 1 -->
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Requisitos, procedimiento y normativa

    p.mb-3 Requisitos generales para obtener la licencia ambiental.
    p.mb-5 A continuación, se detallan los principales <strong>requisitos exigidos para tramitar la licencia ambiental</strong>, los cuales pueden variar según la autoridad competente, pero comparten elementos comunes fundamentales:

    <!-- ACORDION A -->
    .bg--img_03
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img59.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Solicitud formal").ajuste-cajaAcordion
              p.mb-3 Presentada por el titular del proyecto e incluye:
              <ul class="fa-ul estilo___ul_4 mb-3">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Datos del solicitante.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Identificación del proyecto.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Localización y área de influencia.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Documentación legal básica.</li>
              </ul>
            .row(titulo="Estudio de Impacto Ambiental (EIA)").ajuste-cajaAcordion
              p.mb-3 Documento técnico clave que contiene:
              <ul class="fa-ul estilo___ul_4 mb-3">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Descripción detallada del proyecto.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Línea base ambiental (medio físico, biótico y social).</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Identificación y valoración de impactos.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Plan de Manejo Ambiental (PMA).</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Evaluación de riesgos y contingencias.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Programa de seguimiento y monitoreo.</li>
              </ul>
            .row(titulo="Términos de referencia (TDR)").ajuste-cajaAcordion
              p.mb-3 Lineamientos técnicos emitidos por el Ministerio de Ambiente o por la autoridad competente que orientan la elaboración del EIA.
            .row(titulo="Certificados y documentos adicionales").ajuste-cajaAcordion
              p.mb-3 Incluyen:
              <ul class="fa-ul estilo___ul_4 mb-3">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Certificado de uso del suelo.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cartografía y coordenadas geográficas.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Documentos que acrediten propiedad, tenencia o permisos previos.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Estudios complementarios según la actividad (hidrología, geotecnia, biodiversidad, etc.).</li>
              </ul> 

    <!-- BLOQUE 2 -->
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Procedimiento para obtener la licencia ambiental

    p.mb-5 El proceso de obtención de la licencia ambiental sigue una <strong>secuencia estructurada de etapas</strong>, desde la consulta inicial hasta el seguimiento posterior a su otorgamiento.

    .fondo___carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img60.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Consulta de requisitos y TDR
            p.mb-0 El solicitante identifica la normativa y los términos de referencia aplicables a su proyecto.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img61.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Presentación del EIA
            p.mb-0 El Estudio de Impacto Ambiental y la documentación correspondiente se entregan ante la autoridad competente (ANLA o autoridad ambiental regional).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img62.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Evaluación técnica del EIA
            p.mb-3 La autoridad realiza:
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Revisión técnica del estudio.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Solicitud de información adicional.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Visitas de campo.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Revisión de la participación ciudadana.</li>
            </ul> 
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img63.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Decisión de la autoridad
            p.mb-3 Puede:
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aprobar la licencia con obligaciones específicas.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Negarla por insuficiencia técnica o incompatibilidad ambiental.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Otorgarla condicionada a medidas adicionales.</li>
            </ul> 
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img64.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Seguimiento y control
            p.mb-3 Una vez emitida la licencia, el proyecto queda sujeto a:
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Monitoreos ambientales.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Informes de cumplimiento.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Auditorías externas.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Supervisión permanente por parte de la autoridad ambiental.</li>
            </ul> 

        <!-- BLOQUE 3 -->
        Separador
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Normativa aplicable en Colombia

    p.mb-5 El marco normativo colombiano establece <strong>las leyes, decretos y resoluciones que regulan el licenciamiento ambiental</strong>. 

    .row.justify-content-center
      .col-xl-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Ley 99 de 1993").ajuste-cajaAcordion
            p.mb-3 Crea el Sistema Nacional Ambiental (SINA) e introduce la figura de la licencia ambiental como instrumento de control.
          .row(titulo="Decreto 1076 de 2015").ajuste-cajaAcordion
            p.mb-3 Compila la normativa ambiental, incluyendo:
            <ul class="fa-ul estilo___ul_4 mb-3">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Actividades sujetas a licencia.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Competencias de las autoridades ambientales.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Procedimientos de evaluación, otorgamiento y seguimiento.</li>
            </ul>
          .row(titulo="Decreto 2041 de 2014").ajuste-cajaAcordion
            p.mb-3 Reglamenta específicamente el procedimiento de licenciamiento ambiental. Posteriormente fue integrado en el Decreto 1076.
          .row(titulo="Resoluciones específicas").ajuste-cajaAcordion
            p.mb-3 Aplicables según el tipo de proyecto:
            <ul class="fa-ul estilo___ul_4 mb-3">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Resolución 631 de 2015: establece criterios para vertimientos.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Resolución 1407 de 2018: regula la gestión de residuos de envases y empaques.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Términos de referencia emitidos por ANLA para sectores como hidrocarburos, minería, infraestructura, energía, entre otros.</li>
            </ul> 

    <!-- BLOQUE 4 -->
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Normativa y referentes internacionales

    p.mb-5 Además de la legislación nacional, existen <strong>directrices y buenas prácticas internacionales</strong> que orientan la evaluación ambiental, especialmente en proyectos con financiación multilateral. Se destacan las siguientes:

    .row.align-items-center.justify-content-center.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-9.style___box_10
        figure.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/img65.png', alt='' style="max-width: 132px")
        h4 International Association for Impact Assessment (IAIA)
        p.mb-0 Proporciona directrices metodológicas para la evaluación de impacto ambiental a nivel global.
      .col-xl-6.col-md-9.ajuste___box_10.espacio___movil_3
        figure.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/img66.png', alt='' style="max-width: 198px")
        h4 Banco Mundial y BID
        p.mb-0 Establecen buenas prácticas para la evaluación y gestión ambiental en proyectos financiados por estos organismos multilaterales.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
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
