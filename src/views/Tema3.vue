<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Variables a considerar en una planta de tratamiento de agua residual

    .row.justify-content-center.align-items-center
      .col-12.col-lg-12
        img(src="@/assets/curso/images/tema3/img_1.png").mb-3

    p.mb-3 Para realizar el diseño de una planta de tratamiento de agua residual es importante considerar el tipo de contaminantes presentes en el agua; si son de origen orgánico o inorgánico. Para esto es indispensable realizar una caracterización de vertimientos para identificar las concentraciones de los contaminantes en el agua residual de la organización y compararlos con las concentraciones permitidas según la normativa vigente y, si esta no cumple, es indispensable realizar el tratamiento respectivo.

    .row.justify-content-evenly.align-items-star
      .col-lg-6(data-aos="fade-left") 
        .jumbotron.p-5.h-100 
          p.mb-3 Posterior a esto, definir el tipo de equipos de tratamiento a utilizar y calcular la carga contaminante que se genera y si el equipo estaría en la capacidad de realizar un porcentaje de remoción significativo que ayude a cumplir la normativa. También se debe definir el equipo de acuerdo con el espacio de la organización, presupuesto, si se requiere aerobio o anaerobio, los equipos, entre otras características de funcionabilidad y de rendimiento de cada equipo; según ficha técnica, qué tipos de equipos se podrían utilizar en los tratamientos primarios, secundarios y terciarios y si se puede prescindir de alguno porque no se requiere, ya sea porque no es necesario o porque cumple los parámetros de la normativa y no es requerido.
      .col-12.col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema3/img_2.png').mb-3
      
    Separador 

    #t_3_1.titulo-segundo
      .h2 3.1 Concentración

    p.mb-5 Es el peso de un elemento, sustancia o compuesto, por unidad de volumen del líquido que lo contiene. 

    .row.justify-content-center.align-items-star
      .col-12.col-lg-4(data-aos="fade-right")
          img(src='@/assets/curso/images/tema3/img_3.png').mb-3
      .col-lg-6(data-aos="fade-left") 
        .jumbotron.p-5.h-100 
          p.mb-3 La concentración se expresará en miligramos por litro (mg/l), excepto cuando se indiquen otras unidades (Decreto 3100 de 2003 Art. 4).
      
    
    Separador 

    #t_3_2.titulo-segundo
      .h2 3.2 Carga contaminante

    p.mb-3 Es el resultado de multiplicar el caudal promedio por la concentración de la sustancia contaminante, por el factor de conversión de unidades y por el tiempo diario de vertimiento del usuario medido en horas. es decir:

    .row.justify-content-center.align-items-star
      .col-12.col-lg-6(data-aos="fade-right")
          img(src='@/assets/curso/images/tema3/img_4.png').mb-3
      .col-lg-6(data-aos="fade-left") 
        .jumbotron.p-5.h-100 
          p.mb-3 En el cálculo de la carga contaminante de cada sustancia, objeto del cobro de la tasa retributiva por vertimientos, se deberá descontar a la carga presente en el efluente las mediciones de la carga existente en el punto de captación del recurso siempre y cuando se capte en el mismo cuerpo de agua.

    Separador 

    #t_3_3.titulo-segundo
      .h2 3.3 Eficiencia del PTAR

    p.mb-3 Para realizar los cálculos de la eficiencia de la PTAR se puede identificar teniendo en cuenta el caudal de entrada en los equipos, las concentraciones de los contaminantes en el equipo y la carga contaminante del mismo contaminante en el equipo para calcular el % de remoción o eficiencia del equipo sea del tratamiento primario, secundario y terciario y, al calcular cada equipo del sistema y sus % de eficiencia en cada contaminante removido se puede hallar el total de la PTAR. 


    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom-4.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema2/pdf.svg",  alt='', style="width:80px; display:block; margin:auto 0;").mb-3
                .col.mb-3.mb-sm-0
                  h4.mb-3.text-white ¡Estimado Aprendiz!
                  p.mb-1.text-white Visite el Anexo_2_EficienciaDelPTAR para que profundice en el diseño del mismo. Tenga presente que ha de analizar cuidadosamente toda la información que allí se presenta y llevar registro de los aspectos más importantes, en su libreta personal de apuntes.
                .col-md-auto
                  a.boton.color-custom-3(:href="obtenerLink('downloads/OKEst_Anexo_2_EficienciaDelPTAR.pdf')" target="_blank")
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
