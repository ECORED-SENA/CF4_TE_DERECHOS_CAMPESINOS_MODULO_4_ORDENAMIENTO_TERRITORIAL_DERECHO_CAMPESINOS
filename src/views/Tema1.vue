<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Sostenibilidad ambiental

    .fondo___img_1
      .px-5

        .row.align-items-center.m-0.mb-5
          .col-xl.style___box_2(data-aos="fade-right")
            p.mb-0 La <strong>sostenibilidad ambiental</strong> es un principio fundamental que busca garantizar que las actividades humanas se desarrollen sin comprometer la capacidad de los ecosistemas para mantenerse y regenerarse a largo plazo. Esto implica un uso responsable de los recursos naturales, la reducción de impactos negativos sobre el ambiente, la conservación de la biodiversidad y la promoción de prácticas que aseguren el bienestar de las generaciones presentes y futuras. Su propósito es propiciar simultáneamente el crecimiento económico, el bienestar social y la protección ambiental, a través de tres pilares fundamentales:
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img2.png", alt="").m-auto

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La <strong>sostenibilidad ambiental</strong> es un principio fundamental que busca garantizar que las actividades humanas se desarrollen sin comprometer la capacidad de los ecosistemas para mantenerse y regenerarse a largo plazo. Esto implica un uso responsable de los recursos naturales, la reducción de impactos negativos sobre el ambiente, la conservación de la biodiversidad y la promoción de prácticas que aseguren el bienestar de las generaciones presentes y futuras.

        p.mb-5 Su propósito es propiciar simultáneamente el crecimiento económico, el bienestar social y la protección ambiental, a través de tres pilares fundamentales.

        <!-- SLYDER IMAGENES -->
        .fondo___slider.mb-0
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Uso racional de los recursos naturales
                    p.mb-3 Consiste en implementar prácticas eficientes, sostenibles y responsables para aprovechar los recursos del ambiente (agua, suelo, aire, flora, fauna y minerales) sin comprometer su disponibilidad futura ni degradar los ecosistemas (MADS, 2012). 
                    h5 Incluye acciones como:
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Usar solo lo necesario.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Reducir el desperdicio.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Proteger, conservar y restaurar los ecosistemas.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Promover tecnologías limpias y producción sostenible.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Mantener el equilibrio entre desarrollo económico y conservación ambiental.</li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img5.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Prevención y mitigación de impactos ambientales
                    p.mb-3 Involucra acciones, políticas y medidas orientadas a evitar que un proyecto, actividad o proceso genere efectos negativos sobre el ambiente, anticipándose a los daños desde la etapa de planificación (Conesa, 2010). 
                    h5 Se basa en:
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Evaluación de Impacto Ambiental (EIA).</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Selección adecuada del sitio del proyecto.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Diseño de tecnologías limpias y procesos sostenibles.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cumplimiento de normas ambientales.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Capacitación y educación ambiental.</li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Conservación y restauración de los ecosistemas
                    p.mb-3 Comprende estrategias destinadas a proteger, mantener y utilizar de forma sostenible la biodiversidad, los recursos naturales y las funciones ecológicas esenciales. Su meta es preservar los ecosistemas en su estado natural, evitar su degradación y asegurar los servicios ecosistémicos para el presente y el futuro. 
                    h5 Incluye:
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Creación de áreas protegidas.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Uso sostenible de flora y fauna.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Planificación ambiental y ordenamiento territorial.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Monitoreo de especies y hábitats.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Educación ambiental y participación comunitaria.</li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 1 -->
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Principios de la sostenibilidad ambiental
    
    p.mb-5 La <strong>sostenibilidad ambiental</strong> se fundamenta en un conjunto de principios que orientan la gestión responsable de los recursos naturales y promueven el equilibrio entre el desarrollo económico, el bienestar social y la conservación del ambiente. Estos principios guían políticas públicas, proyectos y prácticas de producción sostenible (MADS, 2012).

        <!-- SLYDER IMAGENES -->
        .fondo___slider.mb-0
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    <ul class="fa-ul estilo___ul mb-5">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>
                        h5 Prevención
                        p.mb-0 Plantea que es mejor evitar los daños ambientales antes de que ocurran, actuando desde la planificación, el diseño y la evaluación de impactos.
                      </li>
                    </ul>
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>
                        h5 Precaución
                        p.mb-0 Cuando exista riesgo de daño grave o irreversible, la falta de certeza científica no debe utilizarse como razón para posponer medidas de protección ambiental.
                      </li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    <ul class="fa-ul estilo___ul mb-5">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>
                        h5 Sostenibilidad o desarrollo sostenible
                        p.mb-0 Promueve que las actividades humanas satisfagan las necesidades actuales sin comprometer la capacidad de las generaciones futuras, equilibrando lo ambiental, lo social y lo económico.
                      </li>
                    </ul>
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>
                        h5 Responsabilidad
                        p.mb-0 Establece que quien cause daño ambiental tiene la obligación de prevenirlo, repararlo o compensarlo.
                      </li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img9.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    <ul class="fa-ul estilo___ul mb-5">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>
                        h5 Uso racional de los recursos naturales
                        p.mb-0 Los recursos deben usarse de manera eficiente, equilibrada y respetuosa con la capacidad de regeneración de los ecosistemas.
                      </li>
                    </ul>
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>
                        h5 Participación
                        p.mb-0 Las comunidades deben participar en la toma de decisiones, gestión y seguimiento de asuntos ambientales que afecten su territorio.
                      </li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img10.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    <ul class="fa-ul estilo___ul mb-5">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>
                        h5 Equidad intergeneracional
                        p.mb-0 Busca garantizar condiciones ambientales saludables y la disponibilidad de recursos tanto para las generaciones presentes como futuras.
                      </li>
                    </ul>
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>
                        h5 Quien contamina paga
                        p.mb-0 Obliga a que quien produce impactos ambientales cubra los costos de prevención, mitigación y compensación.
                      </li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img11.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    <ul class="fa-ul estilo___ul mb-5">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>
                        h5 Integralidad
                        p.mb-0 Reconoce que los ecosistemas y los problemas ambientales están interconectados; por tanto, la gestión debe ser holística y sistémica, considerando componentes físicos, biológicos, sociales y económicos.
                      </li>
                    </ul>
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>
                        h5 Restauración
                        p.mb-0 Cuando un ecosistema ha sido degradado, se deben implementar acciones para recuperar su estructura, función y diversidad.
                      </li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img67.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 2 -->
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Teorías sobre sostenibilidad ambiental

    p.mb-5 Existen diversas teorías y enfoques que han contribuido al desarrollo del concepto de sostenibilidad ambiental. Estas teorías han sido promovidas tanto por pensadores individuales como por organismos internacionales, y han servido de base para políticas públicas, normas jurídicas y estrategias de gestión ambiental a nivel global.
    
    <!-- ACORDION A -->
    .bg--img_03
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img12.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Herman Daly - Economía ecológica").ajuste-cajaAcordion
              p.mb-3 Plantea que el desarrollo debe mantenerse dentro de los límites ecológicos, mediante principios como la regla de renovación de recursos y la regla de residuos admisibles. Según Daly, si se daña la naturaleza, también se afecta la economía. La economía ecológica busca mantener el equilibrio entre sociedad y ambiente, enfatizando que lo importante no es tener más cosas, sino vivir bien con lo que se tiene. (PNUMA, 2019).
            .row(titulo="Informe <em>Brundtland</em> (1987) - Desarrollo sostenible").ajuste-cajaAcordion
              p.mb-3 Integra por primera vez sostenibilidad, justicia social y límites ambientales en un solo concepto global. Su propósito es satisfacer las necesidades del presente sin comprometer la capacidad de las generaciones futuras para satisfacer las suyas, promoviendo el crecimiento económico, el bienestar social y la protección ambiental. (Comisión de Medio Ambiente, 1987). 
            .row(titulo="PNUMA y políticas ambientales nacionales").ajuste-cajaAcordion
              p.mb-3 El Programa de las Naciones Unidas para el Medio Ambiente (PNUMA) y diversos gobiernos han adoptado principios jurídicos vinculados a la sostenibilidad ambiental, tales como: quien contamina paga, restauración ecológica y gobernanza participativa. Las políticas ambientales nacionales son el conjunto de principios, normas, estrategias y acciones diseñadas por el Estado para proteger el ambiente, conservar los recursos naturales y garantizar un desarrollo sostenible. (PNUMA, 2019).

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
