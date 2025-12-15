<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Estructura de estudios de impacto ambiental

    .row.align-items-center.m-0.mb-5
      .col-xl.style___box_2.ajuste___box_2(data-aos="fade-right")
        p.mb-0 El <strong>Estudio de Impacto Ambiental (EIA)</strong> es el instrumento técnico básico para la toma de decisiones respecto a proyectos, obras o actividades que requieren licencia ambiental. Se exige siempre que esta <strong>licencia sea necesaria</strong>, conforme a la legislación vigente. Su contenido y profundidad deben adecuarse a las características y al entorno del proyecto, y debe incluir al menos los siguientes componentes:
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img34.png", alt="").m-auto
    
    <!-- BLOQUE 1 -->
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Caracterización del sitio

    p.mb-5 A continuación, se presenta un pódcast que explica de manera detallada la caracterización del sitio, abordando sus componentes físicos, bióticos y socioeconómicos como elementos clave para el análisis ambiental previo a cualquier intervención.

    <!-- PODCAST -->
    .row.align-items-center.m-0
      .col-xl
        .row.align-items-center.style___box_5(data-aos="zoom-in")
          .col-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src="@/assets/curso/temas/img35.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Lo invitamos a escuchar el siguiente pódcast:
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Caracterización del sitio: fundamentos para el análisis ambiental integral"
              :audio="require('@/assets/componentes/audios/Podcast_CF4_Derechos_campesinos_M4_ORDENAMIENTO_TERRITORIAL_DERECHO_CAMPESINOS.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/temas/img36.png" style="max-width: 400px").m-auto

    <!-- BLOQUE 2 -->
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Identificación de riesgos y amenazas

    p.mb-3 La <strong>identificación de riesgos y amenazas</strong> es un proceso técnico que permite reconocer los eventos potenciales que pueden causar daños al ambiente, la infraestructura o las comunidades. Este proceso es fundamental dentro de la <strong>gestión del riesgo</strong>, los <strong>estudios de impacto ambiental (EIA)</strong> y los <strong>planes de ordenamiento territorial</strong>, ya que facilita la planificación de medidas preventivas, correctivas o de mitigación.
    p.mb-5 En este contexto, es importante distinguir entre los conceptos de <strong>amenaza y riesgo</strong>, así como clasificar los diferentes tipos de amenazas que pueden presentarse en el área de influencia de un proyecto.

    .row.justify-content-center
      .col-xl-9
        .row.justify-content-center.mb-5
          .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .estilo___tarjeta(data-aos="zoom-in")
              .estilo___tarjeta_img
                figure
                  img(src="@/assets/curso/temas/img37.svg", alt='' style="max-width: 110px").m-auto
              .estilo___tarjeta_body
                h4.text-center Amenaza
                p.mb-3 Probabilidad de ocurrencia de un evento físico, natural o antrópico con capacidad de causar daño. 
                p.mb-0 <strong>Ejemplos</strong>: inundaciones, deslizamientos, vertimientos tóxicos, incendios forestales.
          
          .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .estilo___tarjeta(data-aos="zoom-in")
              .estilo___tarjeta_img
                figure
                  img(src="@/assets/curso/temas/img38.svg", alt='' style="max-width: 110px").m-auto
              .estilo___tarjeta_body.ajuste___box_body
                h4.text-center Riesgo
                p.mb-0 Probabilidad de que se generen pérdidas como consecuencia de la interacción entre una amenaza y las condiciones de vulnerabilidad del territorio.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img39.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de amenazas

    p.mb-5 A continuación, se presenta un video que analiza los distintos tipos de amenazas, destacando sus características y ejemplos representativos, con el fin de comprender su impacto sobre el medio ambiente y las comunidades humanas.

    <!-- VIDEOS -->
    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") <strong>Video</strong>: TEXTO

    <!-- BLOQUE 3 -->
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Identificación de impactos

    p.mb-5 La identificación de impactos ambientales permite comprender cómo las actividades de un proyecto transforman su entorno, analizando las características del territorio, las interacciones generadas y la magnitud de los cambios para orientar decisiones responsables.

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 1.
      span Identificación de impactos ambientales 
    figure(data-aos="zoom-in").mb-2
      img(src='@/assets/curso/temas/img40.svg', alt='Diagrama sobre la identificación de impactos ambientales que organiza el proceso en cuatro etapas: descripción del proyecto con fases y actividades, línea base ambiental con componentes físicos, bióticos y socioeconómicos, identificación de interacciones mediante listas, matrices, diagramas y cartografía, y determinación de impactos considerando causa, efecto, extensión y duración.').m-auto
    figcaption.mb-5(data-aos="zoom-in") Nota. Elaboración propia a partir de Fernández 2010)

    p.mb-5 La <strong>identificación de impactos ambientales</strong> constituye la fase inicial de un <strong>Estudio de Impacto Ambiental (EIA)</strong>. En esta etapa se determinan y describen los efectos potenciales que un proyecto, obra o actividad puede generar sobre los componentes del medio <strong>físico, biótico y socioeconómico</strong>.

    .row.justify-content-center
      .col-xl-8
        .row.align-items-center.m-0.style___box_3.mb-5(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img41.jpg", alt="").m-auto
          .col-xl
            p.mb-0 El propósito central es <strong>reconocer qué impactos podrían ocurrir, dónde, cómo y en qué magnitud</strong>, antes de que se materialicen. Esto permite anticipar los efectos negativos y potenciar los positivos mediante una adecuada planificación ambiental (Conesa, 2010).
    
    p.mb-5 Este análisis implica examinar las <strong>interacciones causa-efecto</strong> entre las actividades del proyecto y el entorno, teniendo en cuenta la diversidad de impactos que pueden surgir según su:

    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            h4.text-center Carácter
            p.mb-0 Positivos o negativos.

      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___tarjeta_rob.h-100
          .p-4
            h4.text-center Dirección
            p.mb-0 Directos o indirectos.

      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___tarjeta_rob.h-100
          .p-4
            h4.text-center Duración
            p.mb-0 Temporales o permanentes.

      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___tarjeta_rob.h-100
          .p-4
            h4.text-center Reversibilidad
            p.mb-0 Reversibles o irreversibles.

    .row.justify-content-center
      .col-xl-9
        .row.align-items-center.m-0.style___box_6.mb-5(data-aos="zoom-in")
          .col-xl
            p.mb-3 Para una evaluación integral, se deben revisar las actividades del proyecto en <strong>todas sus fases</strong> (construcción, operación y cierre), identificando las posibles <strong>fuentes de impacto</strong>, entre ellas:
            <ul class="fa-ul estilo___ul_3 mb-0">
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Movimientos de tierra.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Uso de maquinaria.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Vertimientos.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Emisiones.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Generación de residuos.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Ocupación del territorio.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img42.jpg", alt="").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img39.svg" style="max-width: 60px").m-auto
      .col
        h3 Línea base ambiental

    p.mb-5 La <strong>línea base ambiental</strong> consiste en el análisis del <strong>estado actual</strong> del área de influencia del proyecto, antes de cualquier intervención. Proporciona el punto de referencia para detectar cambios e impactos. Se evalúan los siguientes componentes:

    .row.justify-content-center
      .col-xl-10
        .row.justify-content-center.mb-5
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .estilo___tarjeta(data-aos="zoom-in")
              .estilo___tarjeta_img
                figure
                  img(src="@/assets/curso/temas/img43.svg", alt='' style="max-width: 110px").m-auto
              .estilo___tarjeta_body_1
                h4.text-center Medio físico
                p.mb-0 Aire, agua, suelo, ruido.
          
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .estilo___tarjeta(data-aos="zoom-in")
              .estilo___tarjeta_img
                figure
                  img(src="@/assets/curso/temas/img44.svg", alt='' style="max-width: 110px").m-auto
              .estilo___tarjeta_body_1
                h4.text-center Medio biótico
                p.mb-0 Flora, fauna, ecosistemas.
          
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .estilo___tarjeta(data-aos="zoom-in")
              .estilo___tarjeta_img
                figure
                  img(src="@/assets/curso/temas/img45.svg", alt='' style="max-width: 110px").m-auto
              .estilo___tarjeta_body_1
                h4.text-center Medio socioeconómico
                p.mb-0 Comunidades, economía local, aspectos culturales.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img39.svg" style="max-width: 60px").m-auto
      .col
        h3 Identificación de interacciones

    p.mb-5 Una vez definida la línea base, se procede a identificar las <strong>interacciones entre las actividades del proyecto y los componentes ambientales</strong>, utilizando herramientas metodológicas que permiten estructurar y visualizar los posibles impactos.

    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img47.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img48.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Listas de chequeo
                p.mb-0 Registro sistemático de aspectos e impactos potenciales.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img49.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Matrices de interacción 
                p.mb-0 Cruzan actividades del proyecto con componentes ambientales para identificar relaciones causa - efecto.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img50.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Diagramas causa - efecto
                p.mb-0 Representan gráficamente la relación entre una acción y sus consecuencias ambientales.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img51.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Redes y superposiciones cartográficas
                p.mb-0 Integran información espacial mediante mapas temáticos que muestran coincidencias entre zonas de intervención y áreas sensibles.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img39.svg" style="max-width: 60px").m-auto
          .col
            h3 Medidas correctivas, compensatorias y restauradoras 

        p.mb-5 En la gestión ambiental, y dentro de los Estudios de Impacto Ambiental (EIA), las medidas ambientales son esenciales para enfrentar los impactos negativos que puede generar un proyecto. Estas medidas se diseñan para evitar, mitigar, corregir, compensar o restaurar los daños ambientales, y constituyen herramientas clave para asegurar la sostenibilidad del entorno intervenido. Entre estas acciones, se destacan tres tipos fundamentales: medidas correctivas, compensatorias y restauradoras. A continuación, se describen sus características y ejemplos aplicados.
    
    <!-- TITULOS CUERTO NIVEL -->
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Medidas correctivas

    p.mb-5 Son acciones dirigidas a reducir o eliminar un impacto negativo que ya se ha generado o cuya ocurrencia es inevitable durante la ejecución del proyecto.

    .row.align-items-center.justify-content-center.m-0.mb-5(data-aos="zoom-in")
      .col-xl-6.col-md-9.style___box_7
        figure.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/img52.svg', alt='' style="max-width: 120px")
        h4 Características
        <ul class="fa-ul estilo___ul_1 mb-0">
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Actúan sobre impactos ya presentes o inevitables.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Se aplican después de identificar un impacto.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Disminuyen el efecto, aunque no siempre eliminan la causa. </li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Se implementan en las fases de construcción, operación o abandono.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Pueden incluir ajustes tecnológicos, rediseños o controles operativos.</li>
        </ul>
      .col-xl-6.col-md-9.style___box_7.ajuste___box_7.espacio___movil_3
        figure.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/img53.svg', alt='' style="max-width: 120px")
        h4 Ejemplos
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Buscan reducir el daño sin detener la actividad.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Estabilización de taludes para evitar deslizamientos.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Implementación de barreras acústicas para reducir ruido.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Control de emisiones mediante filtros o sistemas de captura.</li>
        </ul>

    <!-- TITULOS CUERTO NIVEL -->
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Medidas compensatorias
    
    p.mb-5 Son acciones que se implementan cuando un impacto no puede evitarse ni mitigarse completamente, por lo que se busca equilibrar o reemplazar la pérdida ambiental generada por el proyecto.

    .row.align-items-center.justify-content-center.m-0.mb-5(data-aos="zoom-in")
      .col-xl-6.col-md-9.style___box_8
        figure.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/img54.svg', alt='' style="max-width: 120px")
        h4 Características
        <ul class="fa-ul estilo___ul_1 mb-0">
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Compensan pérdidas que no se pueden revertir.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>No eliminan el impacto original.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Buscan un equilibrio ecológico o social dentro o fuera del área afectada.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Se aplican, por lo general, a impactos significativos sobre biodiversidad o comunidades.</li>
        </ul>
      .col-xl-6.col-md-9.style___box_8.ajuste___box_8.espacio___movil_3
        figure.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/img55.svg', alt='' style="max-width: 120px")
        h4 Ejemplos
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aportan beneficios equivalentes al daño causado.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Reforestación equivalente o superior al área intervenida.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Programas de conservación de fauna desplazada.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Inversiones Ambientales Obligatorias (IAO) en Colombia.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Restauración de cuerpos de agua en otro sector como compensación.</li>
        </ul>
    
    <!-- TITULOS CUERTO NIVEL -->
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Medidas restauradoras
    
    p.mb-5 Son acciones destinadas a retornar un área afectada a su estado original o a un estado ecológicamente funcional, después de haber sufrido degradación por actividades humanas.

    .row.align-items-center.justify-content-center.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-9.style___box_9
        figure.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/img56.svg', alt='' style="max-width: 120px")
        h4 Características
        <ul class="fa-ul estilo___ul_1 mb-0">
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Buscan restablecer el equilibrio ecológico.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Tienen como fin recuperar estructura, función y procesos ecológicos.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Pueden ser a corto, mediano o largo plazo.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Incluyen procesos biológicos, físicos y sociales.</li>
        </ul>
      .col-xl-6.col-md-9.style___box_9.ajuste___box_9.espacio___movil_3
        figure.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/img57.svg', alt='' style="max-width: 120px")
        h4 Ejemplos
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Restituyen condiciones similares a las originales.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Restauración ecológica de áreas degradadas.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Recuperación de suelos erosionados mediante enmiendas y revegetación.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Reconstrucción de cauces naturales alterados.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Eliminación de especies invasoras e introducción de nativas.</li>
        </ul>

</template>

<script>
export default {
  name: 'Tema4',
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
