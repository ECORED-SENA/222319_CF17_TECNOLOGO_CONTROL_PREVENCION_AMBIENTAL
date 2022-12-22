<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Procesos y protocolos de mantenimiento

    p.mb-3 El mantenimiento de los sistemas de tratamiento de agua residual son procesos indispensables para mantener el buen funcionamiento, la eficiencia, óptimas condiciones operativas y alargar la vida útil de una PTAR. En este orden de ideas toda instalación que cuente con un tren de tratamiento de una o varias unidades de tratamiento de agua residual debería contar con uno o varios protocolos, procedimientos e instructivos para el mantenimiento preventivo y correctivo de cada una de las unidades de tratamiento.

    .row.justify-content-evenly.align-items-star.mb-5
      .col-12.col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema4/img_1.png').mb-3
      .col-lg-6(data-aos="fade-left") 
        .jumbotron.p-5.h-100 
          p.mb-0 De acuerdo con el manual de operación y mantenimiento del sistema de tratamiento de aguas residuales, el mantenimiento preventivo es aquel que se realiza para conservar en buen estado las instalaciones y equipo de la planta, asegurando su buen funcionamiento y alargando su vida útil. Consiste en la ejecución de rutinas de trabajo que se realizan con mayor o menor frecuencia para prevenir desperfectos. Por otro lado, el manual  menciona que el mantenimiento correctivo consiste en la reparación inmediata de cualquier daño que sufran los equipos o componentes del sistema de tratamiento de aguas residuales, lo cual ocasiona situaciones de emergencia. (ENDUPAR, 2012)
    
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
                      p.mb-1.text-white EMDUPAR. (2012). Manual de operación y mantenimiento del sistema de tratamiento de aguas residuales. 38 a 45.
                    .col-lg-2
                      a.boton.color-custom-3(:href="('https://www.emdupar.gov.co/index.php/la-entidad/sistema-integrado-de-gestion/Planeacion/Manuales/MA-GM-01%20MANUAL%20DE%20OPERACION%20Y%20MANTENIMIENTO%20PTAR.pdf/download')" target="_blank").float-end
                        span(style="color:#000;") Descargar
                        .row
                          .col-auto
                            img.mx-2(src="@/assets/curso/images/tema2/ico_pdf.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")
                .jumbotron-1.p-4
                  .row.align-items-center.justify-content-center
                    .col-lg-10
                      p.mb-1.text-white Diaz, N. (2016). Manual de operación, mantenimiento y limpieza PTAR1 a 13. 
                    .col-lg-2
                      a.boton.color-custom-3(:href="('https://repositorio.uisek.edu.ec/bitstream/123456789/2889/1/Anexo%209%20Tesis%20Nidia%20D%C3%ADaz.pdf')" target="_blank").float-end
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
