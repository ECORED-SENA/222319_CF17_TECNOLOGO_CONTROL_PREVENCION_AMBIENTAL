<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos Generales

    p.mb-3 <b>El agua es vital en muchos sentidos, ya que forma parte de todos los seres vivos y todos interactúan de alguna manera con ella,</b> por ejemplo, desde la cadena trófica se puede evidenciar que las plantas la necesitan como alimento en su crecimiento y, de ahí en adelante, cada ser vivo independientemente de su lugar en la cadena alimenticia, se beneficia de ella para su supervivencia. El 65% del cuerpo humano es agua y se necesita para cada uno de los órganos, también para digerir los alimentos o defenderse de las enfermedades.

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12
        .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 Este recurso es necesario para las actividades del diario vivir del ser humano, pues no solo se usa para satisfacer la sed, sino también en la agricultura, las fábricas y por supuesto en las viviendas. Con el paso de los siglos, los seres humanos se han dado cuenta de la importancia del agua y han diseñado estructuras para su aprovechamiento como canales, sistemas de riego, acueductos, represas y embalses, todo esto con el fin de generar el desarrollo en las industrias y la calidad de vida en los hogares. El verdadero problema radica en el mal uso del recurso, como la sobreexplotación, el desperdicio y la contaminación de esta en cualquier tipo de cuerpo de agua. Como se sabe, el agua cuenta con un ciclo natural y esto provoca efectos irreparables en los ecosistemas y en cada ser vivo que habita el planeta.

    .bloque-texto-a.color-custom-2.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p.mb-0 Este recurso es necesario para las actividades del diario vivir del ser humano, pues no solo se usa para satisfacer la sed, sino también en la agricultura, las fábricas y por supuesto en las viviendas. Con el paso de los siglos, los seres humanos se han dado cuenta de la importancia del agua y han diseñado estructuras para su aprovechamiento como canales, sistemas de riego, acueductos, represas y embalses, todo esto con el fin de generar el desarrollo en las industrias y la calidad de vida en los hogares. El verdadero problema radica en el mal uso del recurso, como la sobreexplotación, el desperdicio y la contaminación de esta en cualquier tipo de cuerpo de agua. Como se sabe, el agua cuenta con un ciclo natural y esto provoca efectos irreparables en los ecosistemas y en cada ser vivo que habita el planeta.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/images/tema1/img_1.png' alt='', style="width:400px; display:block; margin:-2rem -0rem ;").mb-3

    p.mb-3 A continuación, se presenta algunos términos y conceptos importantes, los cuales vale tener presentes y comprendidos durante el estudio de este componente formativo, para una mejor asimilación de los temas y contenidos:

    .row.justify-content-evenly.align-items-star
      .col-12.col-lg-6.mb-4.md-5(data-aos="fade-left")
        LineaTiempoD.color-secundario.especial
          .row(titulo='Aguas residuales o vertimientos' numero='1')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Residuos líquidos descargados por viviendas, instituciones, fábricas y fincas. Se clasifican generalmente en aguas residuales domésticas e industriales. La primera se caracteriza por ser un vertimiento proveniente de actividades residenciales o institucionales. Por otro lado, el vertimiento industrial es la descarga que se realiza de un proceso productivo. ya sea en la elaboración de un producto o la prestación de un servicio.

          .row(titulo='Contaminación del agua' numero='2')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  De acuerdo con la guía PRAES del jardín Botánico y la universidad Libre, Se entiende por contaminación del medio hídrico la acción y el efecto de introducir materias o formas de energía, o inducir condiciones en el agua que, de modo directo o indirecto, impliquen una alteración perjudicial de su calidad en relación con su función ecológica o usos posteriores. Es muy fácil contaminar el agua cuando se encuentra en forma líquida y de vapor, pero no en estado sólido (hielo). Con frecuencia el sabor, el olor y el aspecto del agua indican que está contaminada, pero la presencia de contaminantes peligrosos sólo se puede detectar mediante pruebas químicas y biológicas específicas y precisas. Existen contaminantes físicos (líquidos y sólidos), químicos y biológicos. (pág. 50, 2013)

          
          .row(titulo='Contaminantes físicos del agua' numero='3')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-10.mb-4.mb-lg-0
                p.mb-0  Pueden ser líquidos insolubles o sólidos, tanto de origen natural, como diversos productos sintéticos, que son arrojados al agua como resultado de las actividades del hombre. Los principales contaminantes físicos del agua registrados actualmente son espumas, residuos oleaginosos y el calor (contaminación térmica) entre muchos otros. Su principal impacto consiste en que afectan el aspecto del agua y cuando flotan o se sedimentan interfieren con la flora y fauna acuáticas. 

          .row(titulo='Contaminantes líquidos del agua' numero='4')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Los contaminantes en forma líquida provienen de las descargas de desechos domésticos, agrícolas e industriales en las vías acuáticas, de terrenos de alimentación de animales, de terrenos de relleno sanitario, de drenajes de minas y de fugas de fosas sépticas, entre otros. Estos líquidos contienen minerales disueltos, desechos humanos y de animales, compuestos químicos sintéticos, y materia coloidal y en suspensión. 

          .row(titulo='Contaminantes sólidos del agua' numero='5')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Entre los contaminantes sólidos se encuentran la arena, arcilla, tierra, ceniza, materia vegetal agrícola, grasas, brea, papel, hule, plásticos, madera y metales, entre muchos otros tipos de residuos comúnmente arrojados a las fuentes y rondas. 
          
          .row(titulo='Contaminantes químicos del agua' numero='6')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Incluyen compuestos inorgánicos y orgánicos disueltos o dispersos en el agua, originados generalmente por los procesos productivos de las industrias, el consumo de sus productos y desechos, del metabolismo animal, y en menor frecuencia, por los volcanes. 

      .col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema1/img_2.png').mb-3
      
    .row.justify-content-evenly.align-items-star
      .col-lg-6(data-aos="fade-left")
        img(src='@/assets/curso/images/tema1/img_3.png').mb-3
      .col-12.col-lg-6.mb-4.md-5(data-aos="fade-right")
        LineaTiempoD.color-secundario.especial
          .row(titulo='Contaminantes inorgánicos' numero='7')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Provienen de descargas domésticas, agrícolas e industriales o de la erosión del suelo. Los más frecuentes son cloruros, sulfatos, nitratos y carbonatos. También desechos ácidos, alcalinos y gases tóxicos disueltos en el agua como los óxidos de azufre, de nitrógeno, amoníaco, cloro y sulfuro de hidrógeno (ácido sulfhídrico). Gran parte de estos contaminantes son liberados directamente a la atmósfera y bajan arrastrados por la lluvia. Esta lluvia ácida, tiene efectos nocivos que pueden observarse tanto en la vegetación como en edificios y monumentos de las ciudades industrializadas. 

          .row(titulo='Contaminantes orgánicos del agua' numero='8')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Provienen de los desechos humanos y animales, del producto de la descomposición de estos, de los restos de los mataderos, del procesamiento de los alimentos; de productos químicos industriales de origen natural como aceites, grasas, breas y tinturas; y de diversos productos químicos sintéticos como pinturas, herbicidas, insecticidas, entre otros. Los contaminantes orgánicos consumen el oxígeno disuelto en el agua y afectan la vida acuática (eutrofización). 

          
          .row(titulo='Contaminantes biológicos del agua' numero='9')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-10.mb-4.mb-lg-0
                p.mb-3 Incluyen hongos, bacterias y virus que provocan enfermedades; algas y otras plantas acuáticas. Algunas bacterias son inofensivas y otras participan en la degradación de la materia orgánica contenida en el agua. 
                p.mb-0 Jardín Botánico de Bogotá y Universidad Libre (2013) Guía metodológica para la formulación de proyectos ambientales escolares. Pág. 52. 

          .row(titulo='Alcantarillado' numero='10')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Conjunto de estructuras para la evacuación de las aguas residuales bien sean industriales, domésticas o de aguas lluvias. También existe el alcantarillado de aguas combinadas que se encarga del transporte de todo tipo de agua sin importar su proveniencia. El sistema más adecuado para el transporte de agua a nivel municipal es el alcantarillado separado, pues divide las aguas residuales y las aguas lluvias de manera independiente lo que evita aumentar caudales de aguas contaminadas.

          .row(titulo='Caja de inspección' numero='11')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Cámara ubicada en sitios estratégicos de la red de alcantarillado, en puntos de evacuación de agua residual o lluvia de empresas, fincas o algunas viviendas. 

          .row(titulo='Caracterización de aguas residuales' numero='12')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0 Análisis de la cantidad de agua o caudal que se vierte en uno o más puntos en donde se establecen las características físicas, químicas y biológicas de las aguas residuales, tal y como lo establecen los lineamientos técnico-legales en el país. 
      

































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
