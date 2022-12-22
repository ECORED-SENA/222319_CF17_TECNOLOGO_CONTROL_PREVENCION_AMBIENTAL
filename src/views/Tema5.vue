<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Emergencias y contingencias en el tratamiento de vertimientos

    p.mb-3 De acuerdo con los términos de referencia para el permiso de vertimientos para usuarios que vierten a alcantarillado o fuente hídrica, en el caso de que el proceso productivo utilice sustancias peligrosas o contaminantes como combustibles, sustancias químicas, sustancias de riesgo biológico, entre otras, se deberá presentar un plan de contingencias que establezca las medidas a seguir en caso de derrames. Esto aplica para cualquier sustancia que represente un peligro para las personas o el medio ambiente.

    .row.justify-content-center.align-items-star.mb-5
      .col-12.col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema5/img_1.png').mb-3
      .col-lg-6(data-aos="fade-left") 
        p.mb-3 Asimismo, el Ministerio a través de los términos de referencia establece que dichas medidas se deben desarrollar con el propósito de:
        ul.lista-ul
          li.mb-0 
              i.fas.fa-check.c-check-2
              p.mb-0 Evitar que se generen nuevos riesgos y/o reducir los riesgos existentes en el caso en el que se limite o impida el tratamiento del vertimiento.
          li.mb-0 
              i.fas.fa-check.c-check-2
              p.mb-0 Reducir la vulnerabilidad física y funcional del sistema de tratamiento.
          li.mb-0 
              i.fas.fa-check.c-check-2
              p.mb-0 Aumentar la capacidad de respuesta y recuperación en el caso de que se presente el vertimiento sin tratamiento (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2011, p. 8). 
    
    Separador 
    #t_5_1.titulo-segundo
      .h2 5.1 Tipos de emergencias

    .row.justify-content-evenly.align-items-star.mb-3
      .col-lg-6(data-aos="fade-left") 
        .jumbotron.p-5.h-100 
          p.mb-3 La promotoría ambiental se convierte en un aspecto básico y fundamental de participación de sociedad para interactuar con el medio ambiente, la sociedad y la cultura, así lo define la Dirección General de Educación, Ciudadanía e Información Ambiental.
          p.mb-3 Este análisis de riesgos se debe presentar en forma de escenarios de riesgo.
      .col-12.col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema5/img_2.png').mb-3

    .row.align-items-center.mb-3
      .col-lg-4(data-aos="fade-left") 
        .jumbotron-1.p-2
          p.text-white.text-center.mb-0 <b>Riesgos internos (tecnológicos).</b>

    p.mb-3 El escenario de riesgos por fallas físicas y funcionales del sistema de vertimientos debe incluir los siguientes análisis:

    .row.align-items-center.align-items-center.my-5
      .col-lg-12
        TabsA.color-acento-contenido(data-aos="fade")
          .tarjeta.back-tab.px-5.py-4(titulo="Identificación de los factores de riesgos")
            .row.px-2.py-2.justify-content-center
              .col-4.col-lg-2
                img(src='@/assets/curso/images/tema5/img_3.svg').mb-3
              .col-lg-10
                h4 Identificación de los factores de riesgos 
                p.mb-0 Identificación de los factores de riesgos y los eventos que pueden tener impacto en cada una de las fases del proceso de vertimiento. Se debe presentar una lista de las fuentes de riesgo y de los eventos que pueden tener impacto en el funcionamiento del sistema de tratamiento, estos eventos pueden evitar, degradar, retrasar o potenciar el logro del objetivo del sistema. A cada uno de los eventos que pueden suceder se deben asociar las posibles causas y escenario. 
          .tarjeta.back-tab.px-5.py-4(titulo="Valoración de la probabilidad de ocurrencia")
            .row.px-2.py-2.justify-content-center
              .col-4.col-lg-2
                img(src='@/assets/curso/images/tema5/img_3.svg').mb-3
              .col-lg-10
                h4 Valoración de la probabilidad de ocurrencia 
                p.mb-0 de los eventos que pueden suceder. Se debe realizar una valoración sobre la frecuencia de ocurrencia de los eventos esperados, a partir del registro histórico de eventos anteriores o de la experiencia de expertos en el comportamiento de las fuentes generadoras o de literatura pertinente publicada sobre este tema. 

          .tarjeta.back-tab.px-5.py-4(titulo="Calificación del impacto de cada riesgo del proceso. ")
            .row.px-2.py-2.justify-content-center
              .col-4.col-lg-2
                img(src='@/assets/curso/images/tema5/img_3.svg').mb-3
              .col-lg-10
                h4 Calificación del impacto de cada riesgo del proceso. 
                p.mb-0 Se debe realizar una calificación del riesgo en función de la intensidad y/o magnitud de los daños esperados y de los impactos en el logro de los objetivos del tratamiento. Esta calificación se debe presentar en forma comparativa, de manera que permita priorizar y tomar decisiones para la reducción del riesgo. Igualmente, se debe analizar la combinación de las consecuencias con la probabilidad de ocurrencia. La calificación del riesgo se debe presentar para dos momentos, sin tener en cuenta los controles y la ejecución de los controles. Aunque en muchos casos este análisis de riesgos está integrado al sistema de calidad o de seguridad industrial del generador, se debe ampliar el alcance del análisis para las fases de mantenimiento y situaciones que limiten o impidan el tratamiento del vertimiento (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2011, p. 9).

    .row.align-items-center.mb-3
      .col-lg-4(data-aos="fade-left") 
        .jumbotron-1.p-2
          p.text-white.text-center.mb-0 <b>Riesgos externos (socio-naturales).</b>

    p.mb-3 Se debe incluir el análisis de riesgos al sistema de vertimientos por los fenómenos socio-naturales identificados en el área de influencia del proyecto:


    .row.justify-content-evenly.align-items-star.p-2
      .col-lg-12(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="zoom-in-down")
          .row.justify-content-center.align-items-center(titulo="Identificación y valoración")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema5/img_4.svg')
            .col-md-10.mb-4.mb-md-0
              p.mb-0  De amenazas externas en términos de probabilidad, magnitud e intensidad de los fenómenos. Se debe presentar una caracterización y georreferenciación de los fenómenos amenazantes presentes en el área de influencia del proyecto, esta información puede ser tomada de estudios existentes y ajustada a los alcances y escalas del análisis de riesgos mediante trabajos de especialistas en estas temáticas. 
          .row.justify-content-center.align-items-center(titulo="Valoración de la vulnerabilidad")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema5/img_4.svg')
            .col-md-10.mb-4.mb-md-0
              p.mb-3  Del sistema de vertimiento frente a cada amenaza identificada (exposición, resistencia y resiliencia del sistema), se debe realizar una valoración del grado de vulnerabilidad física de la infraestructura del sistema de tratamiento en función del grado de exposición y resistencia frente a cada uno de las amenazas descritas anteriormente. Se debe presentar una valoración de la vulnerabilidad funcional del sistema en función de su resiliencia frente a los impactos o efectos generados por cada una de las amenazas presentes en el área de influencia. El análisis de la vulnerabilidad funcional debe partir del análisis de riesgos internos realizado con anterioridad, al cual se van agregando los agentes detonantes externos. 
          .row.justify-content-center.align-items-center(titulo="Calificación del riesgo especifico.")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema5/img_4.svg')
            .col-md-10.mb-4.mb-md-0
              p.mb-3  Se debe presentar una calificación de los riesgos específicos y una calificación del riesgo total, incluyendo la confluencia de las diferentes amenazas presentes en el área de influencia del proyecto. Se debe presentar la calificación del riesgo en términos de pérdidas físicas de la infraestructura o impactos técnicos en la operación del sistema de tratamiento que lleven a impedir limitar el sistema de tratamiento. Ministerio de Ambiente, Vivienda y Desarrollo Territorial (2011, p. 10).
          
    .row.align-items-center.mb-3
      .col-lg-4(data-aos="fade-left") 
        .jumbotron-1.p-2
          p.text-white.text-center.mb-0 <b>Riesgo sobre el medio natural.</b>

    p.mb-3 Se debe presentar un análisis de riesgo de pérdidas o afectación al medio natural cuando el vertimiento no pueda ser tratado satisfaciendo los requerimientos normativos. Los escenarios de riesgos deben incluir:

    .row.justify-content-evenly.align-items-star.mb-3
      .col-lg-6(data-aos="fade-left") 
        .jumbotron-2.p-5.h-100 
          p.mb-3 <b>La amenaza</b> que constituye el vertimiento de sustancias toxicas a un cuerpo de agua o al suelo, para lo cual se debe identificar el grado de toxicidad de las sustancias no tratadas y estimar el área de afectación directa e indirecta por concentración de las sustancias para los casos más extremos.
          p.mb-3 <b>El análisis</b> de vulnerabilidad debe realizarse para el medio natural expuesto a las sustancias tóxicas producto del vertimiento sin tratar, el cual debe incluir el análisis de sensibilidad de los recursos hidrobiológicos y la identificación de la cadena y el medio de transferencia que pueda afectar la salud humana.
          p.mb-3 <b>El análisis de riesgos</b> a la salud debe presentarse en función de la presencia de sustancias catalogadas como peligrosas o de precaución para la salud humana por el Ministerio de Salud y Protección Social en el área de influencia directa o indirecta del proyecto según el estudio de impacto ambiental (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2011, p. 11). 
      .col-12.col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema5/img_5.png').mb-3

    Separador 
    #t_5_2.titulo-segundo
      .h2 5.2. Protocolos de emergencias

    p.mb-3 De acuerdo con los términos de referencia para permiso de vertimientos para usuarios que vierten a alcantarillado o fuente hídrica se deben presentar los procedimientos y/o protocolos de emergencia y contingencia para responder oportuna y eficazmente en las situaciones de emergencias, con el fin de controlar y reducir el impacto sobre la población, el medio natural, el sistema de vertimiento y los procesos productivos anexos. Los protocolos deben ser diseñados para derrames de sustancia peligrosa por una falla del sistema, suspensión de las actividades de vertimiento, limitación o afectación del funcionamiento del sistema. Se debe tener en cuenta lo siguiente:

    .row.align-items-star.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-12
        TabsC.color-acento-contenido
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="¿Qué contienen los protocolos?")
            .row
              .col-md-4
                  figure
                    img(src='@/assets/curso/images/tema5/img_6.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                h4 ¿Qué contienen los protocolos?       
                p Sistema de seguridad, procedimientos e instrucciones (documentación, disponibilidad, control del proceso de modificaciones, introducción de nuevos procesos, instrucciones de operación, ficha de información de datos de seguridad), articulación con los planes de emergencia municipal y sector de servicios públicos. Y en cuanto a movilización de recursos y previsiones, ha de contemplarse una articulación con los planes de emergencia municipal y del sector de servicios públicos.
              
        
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Para acceder a los instrumentos de apoyo")
            .row
              .col-md-4
                  figure
                    img(src='@/assets/curso/images/tema5/img_7.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                h4 Para acceder a los instrumentos de apoyo   
                p.mb-3 Sistema de seguridad, procedimientos e instrucciones (documentación, disponibilidad, control del proceso de modificaciones, introducción de nuevos procesos, instrucciones de operación, ficha de información de datos de seguridad), articulación con los planes de emergencia municipal y sector de servicios públicos. Y en cuanto a movilización de recursos y previsiones, ha de contemplarse una articulación con los planes de emergencia municipal y del sector de servicios públicos. 
              
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Términos de referencia y evaluación de daños")
            .row
              .col-md-4
                  figure
                    img(src='@/assets/curso/images/tema5/img_8.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p.mb-3 Los términos de referencia establecen también que los protocolos de contingencia que se deben presentar tienen que proveer información específica para la atención de las emergencias derivadas de los escenarios de riesgos identificados e incluyen procedimientos para la evaluación de daños y la estimación de necesidades. En cuanto a la evaluación de daños y necesidades, esta incluye la identificación y registro de la extensión, gravedad y localización de los efectos y se divide según su alcance en general y específica y, según el momento en inicial, intermedia y final. La evaluación de necesidades busca identificar la capacidad para atender la emergencia y las necesidades de ayuda o apoyo externo que se requiere.
                

          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Procesos de respuesta")
            .row
              .col-md-4
                  figure
                    img(src='@/assets/curso/images/tema5/img_9.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p.mb-3 Los procedimientos deben estar acordes con las diferentes fases de evaluación (inicial, intermedia y final). Las tarjetas de funciones deben ser una lista de verificación o chequeo de prioridades de actuación para cada uno de los responsables de la respuesta. Deben estar definidos, además los protocolos de contingencia para casos en los cuales la reparación y reinicio de actividades del sistema de vertimiento requiere de un lapso superior a tres horas diarias. 

    .row.align-items-center.justify-content-center
      .col-lg-10(data-aos="fade-right")  
        .jumbotron-4.p-4
          .row.align-items-center.justify-content-center
            .col-10.col-lg-2
              img(src='@/assets/curso/images/tema4/ico_1.svg' alt='', style="width:100px; display:block; margin:auto 0;").mb-3
            .col-lg-10
              h3 ¡Estimado Aprendiz!
              p.mb-3 Visite los documentos que aquí se le proponen. Mediante su lectura consciente podrá apropiar elementos de desarrollo de protocolos de mantenimiento preventivo y correctivo.
              .row.align-items-center.justify-content-center
                .jumbotron-1.p-4.mb-3
                  .row.align-items-center.justify-content-center
                    .col-lg-10
                      p.mb-1.text-white Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2011). Plan de gestión del riesgo para el manejo de vertimientos. 8 a 14.
                    .col-lg-2
                      a.boton.color-custom-3a.boton(:href="('https://www.cornare.gov.co/Tramites-Ambientales/TR/TR-manejo_vertimientos.pdf')" target="_blank").float-end
                        span(style="color:#000;") Descargar
                        .row
                          .col-auto
                            img.mx-2(src="@/assets/curso/images/tema2/ico_pdf.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")
                .jumbotron-1.p-4
                  .row.align-items-center.justify-content-center
                    .col-lg-10
                      p.mb-1.text-white FOPAE. (2013). Guía para elaborar planes de emergencia y contingencias . 22 a 46.
                    .col-lg-2
                      a.boton.color-custom-3a.boton(:href="('https://www.sire.gov.co/documents/82884/85386/ANEXO+3-+GUIA+PLANES+EMERGENCIA+Y+CONTINGENCIAS.pdf/2010161a-6762-4699-82c2-38090fb38f92')" target="_blank").float-end
                        span(style="color:#000;") Descargar
                        .row
                          .col-auto
                            img.mx-2(src="@/assets/curso/images/tema2/ico_pdf.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")













    


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
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
