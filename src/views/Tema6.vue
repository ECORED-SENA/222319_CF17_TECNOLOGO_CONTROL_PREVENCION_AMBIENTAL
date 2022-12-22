<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Seguridad y salud en el trabajo

    p.mb-3 Dentro de la gestión y operación de una PTAR se ejecutan actividades de alto riesgo como el trabajo en alturas, manipulación de equipos con riesgo eléctrico, soldadura de tanques y accesorios, trabajo continuo en espacios confinados, en zanjas, excavaciones y conizaje de cargas. Debido a ello, debe existir una rigurosa prevención y control de los trabajadores, maquinaria, herramientas y equipos a través de inducciones, capacitaciones constantes, supervisión de actividades de acuerdo con el riesgo, revisión periódica del inventario general y de seguridad. Todo ello se debe garantizar por medio de profesionales con experticia técnica en seguridad y salud en el trabajo (SST).


    .row.justify-content-evenly.align-items-star.mb-5
      .col-12.col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema6/img_1.png').mb-3
      .col-lg-6(data-aos="fade-left") 
        .jumbotron.p-5.h-100 
          p.mb-0 En cada actividad el trabajador debe tener plena conciencia de la actividad que realiza de acuerdo con el riesgo que esto implica. El personal encargado de supervisar la SST debe tomar las medidas necesarias para garantizar un ambiente laboral seguro, como los elementos de protección individual, suscripción permanente a las ARL por cada empleado, asegurar las condiciones de seguridad en cada área de la planta y advertir de los posibles actos inseguros que pueden llegar a presentarse.
    
    p.mb-3 En el siguiente recurso afiance su conocimiento de los elementos de protección individual en la operación de una PTAR:

    .row.justify-content-evenly.align-items-star.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-up")
        .jumbotron-2.p-5
          h3.text-center.mb-3 Elementos de protección individual en operación de PTAR  
          p.mb-5 Interactúe con la gráfica que aparece en pantalla, haciendo clic sobre los puntos que se le indican. Descubra en ellos información valiosa y oportuna para el uso, tenencia, cuidado y gestión de los elementos de protección individual en la operación de PTAR.
          .row.align-items-center.justify-content-center
            .col-12.col-lg-8
              ImagenInfografica.color-acento-contenido.mb-3
                template(v-slot:imagen)
                  figure
                  img(src="@/assets/curso/images/tema6/fig_1.svg").mb-3
                    
                .tarjeta-blanca.p-3(x="65%" y="15%" numero="1")
                  .row.justify-content-center.align-items-center
                    .col-lg-12.col-sm-8.mb-lg-0
                      p.mb-0 Cabeza: el casco desvía y absorbe golpes de la cabeza.

                .tarjeta-blanca.p-3(x="89%" y="35%" numero="2")
                  .row.justify-content-center.align-items-center
                    .col-lg-12.mb-4.col-sm-8.mb-lg-0
                      p.mb-3 Ojos: los lentes protegen de salpicaduras de químicos,  como ácidos, caústicos, baterías de celdas húmedas u otros.

                .tarjeta-blanca.p-3(x="93%" y="65%" numero="3")
                  .row.justify-content-center.align-items-center
                    .col-lg-12.mb-4.col-sm-8.mb-lg-0      
                      p.mb-3 Cuerpo: usar overol y/o camisa y pantalón, 100% algodón retardante al fuego. 

                .tarjeta-blanca.p-3(x="93.5%" y="93%" numero="4")
                  .row.justify-content-center.align-items-center
                    .col-lg-12.mb-4.col-sm-8.mb-lg-0
                      p.mb-3 Los zapatos y botas de seguridad son hechos con casquillos para protección de los pies por perforación o aplastamiento, objetos pesados cayendo, objetos afilados, objetos rodando y suelo resbaladizo.

                .tarjeta-blanca.p-3(x="37.5%" y="95%" numero="5")
                  .row.justify-content-center.align-items-center
                    .col-lg-12.mb-4.col-sm-8.mb-lg-0
                      p.mb-3 Manos: los guantes de cuero son apropiados para el manejo de la mayoría de los materiales abrasivos. Cuando trabajamos con químicos, los guantes deberán ser sellados en la parte alta o tener un doblez para prevenir la entrada de líquidos.

                .tarjeta-blanca.p-3(x="36.5%" y="64%" numero="6")
                  .row.justify-content-center.align-items-center
                    .col-lg-12.mb-4.col-sm-8.mb-lg-0
                      p.mt-2 Vías respiratorias (atmósferas peligrosas): el detector de gases múltiples tiene la capacidad para lectura de gases como: sulfato de hidrógeno (H2S), oxígeno (O2), monóxido de carbono (CO), límite inferior de explosividad (LEL). 
                
                .tarjeta-blanca.p-3(x="40.5%" y="35%" numero="7")
                  .row.justify-content-center.align-items-center
                    .col-lg-12.mb-4.col-sm-8.mb-lg-0
                      p.mb-3 Oídos: expuestos a niveles de ruido por encima de 85 decibeles (dBA).

                .tarjeta-blanca.p-3(x="9.5%" y="96%" numero="8")
                  .row.justify-content-center.align-items-center
                    .col-lg-12.mb-4.col-sm-8.mb-lg-0
                      p.mb-3 Cara: las caretas o protectores faciales protegen de salpicaduras de químicos, partículas volantes, de esmerilado, corte y presión de aire.

            

            








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
