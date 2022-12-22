<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Tratamiento de lodos

    p.mb-3 El lodo proveniente de las plantas de tratamiento de aguas residuales se genera en ciertas unidades del tren de tratamiento por lo general de pretratamientos, unidades primarias y secundarias que por su diseño y condiciones de operación acumulan sólidos gruesos como residuos sólidos y finos como arena, grasa, aceite, espumas y otras partículas dependiendo del tipo de vertimiento, ya sea industrial o doméstico. Es por esto que los trenes de tratamiento se pueden dividir en dos: la línea de aguas y la línea de lodos.

    .row.justify-content-evenly.align-items-star.mb-5
      .col-12.col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema7/img_1.png').mb-3
      .col-lg-6(data-aos="fade-left") 
        .jumbotron.p-5.h-100 
          p.mb-0 ¿Sabías que al lodo orgánico en Colombia se le denomina biosólido y dependiendo de sus características fisicoquímicas y biológicas se clasifica como tipo A o tipo B para su aprovechamiento en usos como recuperación de suelos o agricultura?

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
                      p.mb-1.text-white Anexo_3_TratamientoDeLodos
                    .col-lg-2
                      a.boton.color-custom-3(:href="obtenerLink('downloads/OKEst_Anexo_3_TratamientoDeLodos.pdf')" target="_blank")
                        span(style="color:#000;").text-small Enlace web
                        .row
                          .col-auto
                            img(src="@/assets/curso/images/tema2/ico_pdf.svg",  alt='', style="width: 20px; display:block; margin:auto 0 ;")
              











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
