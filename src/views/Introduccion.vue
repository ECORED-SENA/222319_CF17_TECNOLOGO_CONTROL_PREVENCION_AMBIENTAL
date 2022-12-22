<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.cs
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    
  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-1.mb-0.cs.mg-top-1
    .row.align-items-center.justify-content-center
      .col-lg-10(data-aos="fade-right")  
        p.mb-3 Se da la bienvenida a este componente formativo en el cual podrá conocer, comprender y asimilar todas las bases necesarias para el control de los vertimientos industriales, ver figura 1 y visite el recurso que aquí se presenta para que inicie el camino propuesto en esta experiencia formativa:

    .row.justify-content-center.align-items-star
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Visita técnica PTAR salitre
    .row.align-items-center.justify-content-center
      .col-10.col-lg-6(data-aos="fade-left")
          img(src='@/assets/curso/images/tema1/img_intro.png'  alt='') 

    .row.align-items-center.justify-content-center
      .col-lg-6.mt-3
        .jumbotron-3.p-2.mb-3
          p.mb-0 Nota. Visita técnica PTAR Salitre -Bogotá D.C. Tomado de Pedraza, (2018) (Anexos / Figura1)
    
    figure.mb-5(data-aos="fade-right")
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wiFkJebegwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-0 


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
