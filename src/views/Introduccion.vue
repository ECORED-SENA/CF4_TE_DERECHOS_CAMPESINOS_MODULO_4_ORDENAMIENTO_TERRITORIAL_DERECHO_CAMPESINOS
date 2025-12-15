<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 La sostenibilidad ambiental se ha consolidado como un pilar esencial para garantizar la permanencia y el equilibrio de los ecosistemas frente a las actividades humanas. Este enfoque integra la responsabilidad en el uso de los recursos naturales, la protección de la biodiversidad y la proyección del bienestar para las generaciones presentes y futuras. Desde esta perspectiva, se promueve un modelo de desarrollo que combina crecimiento económico, bienestar social y conservación del ambiente bajo criterios que reconocen los límites ecológicos del planeta.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este marco, la sostenibilidad ambiental articula prácticas orientadas a prevenir y mitigar los impactos derivados de proyectos y actividades productivas, al tiempo que impulsa acciones de conservación y restauración ecológica. Los principios que la sustentan, como la prevención, la precaución, la responsabilidad, el uso racional de los recursos y la equidad intergeneracional, orientan la toma de decisiones y fortalecen políticas públicas, estrategias institucionales y procesos comunitarios comprometidos con la integridad de los territorios.
    
    .row.align-items-center.m-0.mb-0.style___box_1(data-aos="zoom-in")
      .col-xl
        p.mb-0 Además, este enfoque se nutre de teorías, marcos normativos y lineamientos de política que estructuran la gestión ambiental contemporánea. Aportes de la economía ecológica, el concepto de desarrollo sostenible y diversas directrices internacionales han permitido consolidar un conjunto de herramientas jurídicas, técnicas y participativas. Gracias a ello, la sostenibilidad ambiental se asume no solo como un ideal, sino como una orientación práctica que guía proyectos, regula actividades y fomenta transiciones hacia modelos productivos responsables y resilientes.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/intro/img2.svg", alt="").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
