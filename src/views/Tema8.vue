<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Equipos hidráulicos, mecánicos, eléctricos y de control

    p.mb-3 Los equipos para el control de lodos suelen ser muy variados, pero pueden clasificarse según su principio básico de funcionamiento. Los tipos de equipos o sus características específicas guardan relación directa con el tamaño o proporción de las plantas de tratamiento, su localización, el espesor de los lodos y las cantidades de lodo que se manejan. 

    .row.justify-content-center.align-items-center
      .col-12.col-lg-10
        img(src="@/assets/curso/images/tema8/img_1.png").mb-3
  
        p.mb-3  Asimismo la maquinaria hidráulica, mecánica, eléctrica o manual, debe contar con procesos de mantenimiento y actualización que favorezca el proceso para el cual han sido diseñadas y creadas: el control de los lodos.

      p.mb-3 En el siguiente recurso conozca los diferentes tipos de equipos que son usados para el control de lodos y la forma en que se determina su clasificación, según el esquema que se muestra:

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-5(data-aos="fade-left")
        LineaTiempoD.color-secundario.especial
          .row.justify-content-between.align-items-center.p-4(titulo= 'Concentración' numero='1')
              .col-lg-3
                p.mb-0 Aire disuelto #[br] Flotación #[br] Desarenado y sedimentación 
              .hr
              .col-lg-3
                p.mb-0.text-center  Espesadores mecánicos por gravedad #[br] Espesadores mecánicos por flotación centrifugación
          .row.justify-content-between.align-items-center.p-4(titulo='Disposición final' numero='2')
              .col-lg-3
                p.mb-0.text-center  Proceso Aerobio #[br] Proceso Anaerobio
              .hr
              .col-lg-3
                p.mb-0.text-center Oxidación húmeda #[br] Estabilización química #[br] Irradiación 

          .row.justify-content-between.align-items-center.p-4(titulo='Acondicionamiento - desinfección' numero='3')
              .col-lg-3
                p.mb-0.text-center  Fijación quimica #[br] Elutriación #[br] Calor  #[br] Congelamiento
              .hr
              .col-lg-3
                p.mb-0.text-center Fijación quimica #[br] Elutriación #[br] Calor  #[br] Congelamiento


      .col-lg-5(data-aos="fade-right")
        img.mt-3(src='@/assets/curso/images/tema8/img_2.png').mb-3

    .row.justify-content-center.align-items-star.mb-5
      .col-12.col-lg-6.mb-4.md-5(data-aos="fade-left")
        img.mt-3(src='@/assets/curso/images/tema8/img_3.png').mb-3
      .col-lg-5(data-aos="fade-right")
        LineaTiempoD.color-secundario.especial
          .row.justify-content-between.align-items-center.p-4(titulo='Desecación y secado' numero='4')
              .col-lg-3
                p.mb-0 Filtro prensa #[br] Filtro de vacío #[br] Filtro de bandas
              .hr
              .col-lg-3
                p.mb-0.text-center  Ultrasonido #[br] Rejillas vibratorias #[br] Lecho de secado
          .row.justify-content-between.align-items-center.p-4(titulo='Disposición final' numero='5')
              .col-lg-3
                p.mb-0.text-center  Incinerador de horno múltiple #[br] Incinerador de lecho fluidizado
              .hr
              .col-lg-3
                p.mb-0.text-center Secado instantaneo #[br] pirólisis

          .row.justify-content-between.align-items-center.p-4(titulo='Acondicionamiento - desinfección' numero='6')
              .col-lg-3
                p.mb-0.text-center  Aplicación en suelo tipo A o B #[br] Relleno Sanitario #[br] Generación de energía (biomasa)
              .hr
              .col-lg-3
                p.mb-0.text-center Laguna aerobia, anaerobia, facultativa #[br] En el mar #[br] Inyección en pozo
           
    p.mb-3 Para finalizar con el estudio de este componente diríjase al Anexo_4_EquiposParaControlDeLodos y realice una lectura responsable de los elementos que allí se presentan, recuerde registrar su propia síntesis del contenido en su libreta personal de apuntes.

    .row.justify-content-evenly.align-items-star.mb-5
      .col-12.col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema8/img_4.png').mb-3
      .col-lg-6(data-aos="fade-left") 
        .jumbotron.p-5.h-100 
          p.mb-3 <b>¡Estimado Aprendiz!</b>
          p.mb-3 Para finalizar con el estudio de este componente diríjase al <b>Anexo_4_EquiposParaControlDeLodos </b> y realice una lectura responsable de los elementos que allí se presentan, recuerde registrar su propia síntesis del contenido en su libreta personal de apuntes.
          .row.align-items-center.justify-content-center
            .jumbotron-1.p-4.mb-3
              .row.align-items-center.justify-content-center
                .col-lg-8
                  p.mb-1.text-white  Anexo_4_EquiposParaControlDeLodos 
                .col-lg-3
                  a.boton.color-custom-3(:href="obtenerLink('downloads/OKEst_Anexo_4_EquiposParaControlDeLodos.pdf')" target="_blank")
                    span(style="color:#000;").text-small Enlace web
                    .row
                      .col-auto
                        img(src="@/assets/curso/images/tema8/ico_pdf.svg",  alt='', style="width: 20px; display:block; margin:auto 0 ;")










































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
