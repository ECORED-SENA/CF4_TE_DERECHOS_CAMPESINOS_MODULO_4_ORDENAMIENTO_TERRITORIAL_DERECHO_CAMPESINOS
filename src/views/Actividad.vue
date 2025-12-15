<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sostenibilidad ambiental',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con la sostenibilidad ambiental, sus principios, normativas, tipos de impactos y medidas de manejo ambiental según el contexto colombiano e internacional.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de los siguientes pilares NO forma parte de la sostenibilidad ambiental?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crecimiento económico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Consumo ilimitado de recursos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Bienestar social.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Protección ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'El principio de "quien contamina paga" implica que:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El Estado debe asumir los costos de restauración ambiental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La comunidad debe mitigar los impactos de la actividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El generador del daño debe cubrir los costos de prevención y compensación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No se deben aplicar sanciones económicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué establece la Ley 99 de 1993 en Colombia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El uso exclusivo del agua para actividades agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La creación del Sistema Nacional Ambiental (SINA).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La desaparición de la licencia ambiental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La privatización de los recursos naturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es una característica de las medidas compensatorias?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'No eliminan el impacto original pero buscan un equilibrio ecológico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Son siempre reversibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo se aplican durante la fase de diseño del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminan por completo los daños.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'Según Herman Daly, la economía ecológica busca:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vivir bien dentro de los límites ecológicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Maximizar la productividad sin restricciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar toda actividad industrial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Priorizar el crecimiento económico sobre lo ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué se incluye en un Estudio de Impacto Ambiental (EIA)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo aspectos financieros del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Línea base ambiental, valoración de impactos y plan de manejo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Normas tributarias del país.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lista de precios de materiales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes es un tipo de impacto según su duración?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Temporal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Legal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Natural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Productivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de normativa se aplica a sectores como minería y agricultura?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Normas sociales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Normas técnicas y sectoriales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Normas educativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Convenios bilaterales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'Una amenaza ambiental es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un recurso natural disponible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un evento con potencial de causar daño al ambiente o a las personas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un tipo de desarrollo sostenible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una licencia otorgada por el Estado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes opciones NO es una función de la política ambiental?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Orientar la conservación de la biodiversidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Establecer impuestos a las exportaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Guiar la gestión de recursos naturales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impulsar la restauración ecológica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El objetivo de la sostenibilidad ambiental es garantizar el bienestar de las generaciones presentes y futuras.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Los impactos ambientales solo se presentan durante la fase de construcción de un proyecto.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Las medidas correctivas se implementan cuando el impacto ambiental ya ocurrió o es inevitable.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La participación social no es considerada en la política ambiental.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La licencia ambiental es obligatoria para actividades que puedan generar deterioro significativo del ambiente.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
