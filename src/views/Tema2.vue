<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas para el tratamiento físico, químico y biológico del agua residual


    p.mb-3 <b>El control de las aguas residuales se basa mayormente en tratamientos físicos, químicos y biológicos que depuran las concentraciones contaminantes presentes en un vertimiento originado de manera antrópica.</b> Es por ello por lo que existen las plantas de tratamiento de aguas residuales PTAR, las cuales cuentan con un tren de tratamiento dividido por unidades primarias, secundarias y terciarias. En cada una de estas unidades de tratamiento se eliminan las concentraciones contaminantes de acuerdo con su diseño y funcionamiento. Estos a su vez cuentan con una eficiencia de tratamiento, que es la que permite entregar en el efluente el agua en buenas condiciones. 

    .row.justify-content-evenly.align-items-star
      .col-12.col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema2/img_1.png').mb-3
      .col-lg-6(data-aos="fade-left") 
        .jumbotron.p-5.h-100 
          p.mb-3 Es así como los tratamientos físicos se concentran en remover principalmente sólidos, partiendo del diseño de su estructura. Por otro lado, el tratamiento químico se da a través de la dosificación de un agente o reactivo que de acuerdo con las necesidades de tratamiento del agua puede coadyuvar a sedimentar sólidos, desinfectar o hasta precipitar metales pesados. Por último, el tratamiento biológico es el encargado de remover la carga orgánica que contiene el agua residual, que por lo general por acción de ciertos microorganismos depuran el agua residual en su proceso metabólico y de digestión.

    Separador 
    #t_2_1.titulo-segundo
      .h2 2.1 Tipos
    
    p.mb-3 En la siguiente tabla se muestra la clasificación de algunos de los tratamientos más usuales de agua residual, de acuerdo con su tipo. Haga un estudio juicioso de esta tabla y tome nota atenta de los aspectos más importantes en este punto “Tipos de tratamiento”:


    .row.justify-content-center.align-items-star
      .col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span Tipos de tratamiento

    .row.justify-content-center.align-items-center.mb-0
      .col-10(data-aos="fade-left")
        .tabla-a.color-primario.mb-5 
          table
            thead
              tr.th-2
                th.text-center.text-white Tipo de tratamiento
                th.text-center.text-white Fisico
                th.text-center.text-white Químico
                th.text-center.text-white Biologíco
            tbody
              tr.th-1
                td Pretratamientos y tratamientos primarios
                td.th-1 
                  p.mb-0 -Desbaste:
                  p.mb-0  Tamizado
                  p.mb-0  Cribado
                  p.mb-0  -Desarenadores
                  p.mb-0  - Sedimentador
                  p.mb-0  -Flotación
                  p.mb-0  -Homogenización
                  p.mb-0  -Torres y bandejas de enfriamiento o aireación
                  p.mb-0  -Filtración
                td.th-1 
                  p.mb-0 -Neutralización
                  p.mb-0 - Coagulación
                  p.mb-0 -Floculación horizontal y vertical
                td.th-1 

              tr.th-1
                td  Tratamientos secundarios
                td 
                td 
                td 
                  p.mb-0 -Aireación extendida
                  p.mb-0  -Lagunas de oxidación
                  p.mb-0  - Digestores: Aerobios - Anaerobios
                  p.mb-0  -Biodiscos
                  p.mb-0  -Filtro percolador
                  p.mb-0  -Reactor UASB y RAP
                  p.mb-0  -Fitorremediación
                  p.mb-0  -Humedales artificiales
                  p.mb-0  -Filtro FAFA
                  p.mb-0  -Trampa de grasas
                  p.mb-0 -Tanque séptico

              tr.th-1
                td Tratamientos terciarios
                td 
                  p.mb-0 -Micro filtración
                  p.mb-0 -Ultrafiltración
                  p.mb-0 -Osmosis inversa
                  p.mb-0 -Electrodiálisis
                  p.mb-0 -Eliminación de nutrientes
                td 
                  p.mb-0 -Cloración
                  p.mb-0 -Cerámico
                  p.mb-0 -Ozono
                  p.mb-0 -Procesos avanzados de oxidación
                  p.mb-0 -Desinfección UV
                  p.mb-0 -Resinas de intercambio iónico
                td
             
    .row.align-items-center.mb-3
      .col-lg-2(data-aos="fade-left") 
        .jumbotron-1.p-2
          p.text-white.text-center.mb-0 <b>Pretratamientos.</b>


    p.mb-3 Los pretratamientos y los que se presentarán enseguida son los más representativos, de acuerdo con su clasificación.

    .row.justify-content-evenly.align-items-star.mb-3
      .col-lg-6(data-aos="fade-left") 
        .jumbotron.p-5.h-100 
          p.mb-3 Los pretratamientos engloban a aquellos procesos que se sitúan a la entrada de la planta depuradora para eliminar residuos sólidos, arenas y grasas, que de no ser separados dañarían mecánicamente los equipos de las siguientes fases del tratamiento y sedimentarían en las tuberías y conductos de la instalación, obstruyéndolos o bien producirían pérdida de eficacia (p.e. grasas en el reactor biológico). En todos los procesos se eliminan los contaminantes del agua residual por medios físicos. 
      .col-12.col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema2/img_2.png').mb-3

    .row.align-items-center.mb-3
      .col-lg-2(data-aos="fade-left") 
        .jumbotron-1.p-2
          p.text-white.text-center.mb-0 <b>Desbaste.</b>

    p.mb-5 Es una operación en la que se eliminan los sólidos de mayor tamaño del agua residual. El agua se hace pasar por rejas o tamices y tiene como objetivo separar todos aquellos materiales de tamaño excesivamente grueso que, además de representar por sí una forma de contaminación (sólidos en suspensión), pueden dañar u obstaculizar las fases sucesivas del tratamiento, ver figura 2.

    .row.justify-content-center.align-items-star
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span Rejas de desbaste
    .row.align-items-center.justify-content-center
      .col-10.col-lg-6(data-aos="fade-left")
          img(src='@/assets/curso/images/tema2/img_3.png'  alt='')

    .row.align-items-center.justify-content-center
      .col-lg-8.mt-3
        .jumbotron-3.p-2.mb-3
          p.mb-0 Nota. Tomado de Deagua (2020). http://blogdeagua.es/reja-de-desbaste/ 

    h3.mb-3 Tipos de rejas de desbaste según separación entre barrotes

    p.mb-3 Las rejas de desbaste pueden clasificarse según el espacio libre que hay entre los barrotes. Esta distancia libre marcará qué tipo de sólidos quedarán atrapados y qué tipo podrán pasar al sistema de tratamiento de agua (Deagua, 2020). 

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-5(data-aos="fade-right").mb-3
        .jumbotron-2.p-5.h-100 
          h3.mb-3 Rejas de desbaste de gruesos
          p.mb-3 Son rejas de desbaste para filtrar sólidos grandes; están compuestas por un recipiente y una reja con una separación entre barrotes de 12mm a 25mm, retienen la mayoría de los sólidos grandes y dejan pasar los sólidos más finos para que puedan ser tratados (Deagua, 2020), ver figura 3. 
      .col-12.col-lg-5(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 3
            span Rejas de desbaste 
          img(src='@/assets/curso/images/tema2/img_4.png').mb-3
      
          .col-lg-12.mt-3
            .jumbotron-3.p-2.mb-3
              p.mb-0 Nota. Tomado de Deagua (2020). http://blogdeagua.es/reja-de-desbaste/ 

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-5(data-aos="fade-right").mb-3 
        .jumbotron.p-5.h-100 
          h3.mb-3 Rejas de desbaste de finos
          p.mb-3 Son rejas de desbaste para filtrar sólidos finos, están compuestas por un recipiente y una reja con una separación entre barrotes de 6mm a 12mm, retienen los sólidos grandes y la mayoría de los sólidos finos, y solo dejan pasar los fangos más finos para que puedan ser tratados (Deagua, 2020), ver figura 4.
      .col-12.col-lg-5(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 4
            span Rejas de desbaste finos
          img(src='@/assets/curso/images/tema2/img_5.png').mb-3
      
          .col-lg-12.mt-3
            .jumbotron-3.p-2.mb-3
              p.mb-0 Nota. Tomado de Deagua (2020). http://blogdeagua.es/reja-de-desbaste/ 

    h4.mb-3 Las rejillas también operan de manera manual

    p.mb-3 Las rejas de desbaste de limpieza manual son las más utilizadas por su economía, ya que el usuario deberá limpiar periódicamente la reja manualmente con un rastrillo y eliminar los sólidos atrapados. Las rejas de desbaste de limpieza automática se caracterizan por su funcionamiento mecánico. Atrapan los sólidos más gruesos y a través de un cepillo o brazo hidráulico las envían a un contenedor para su reciclado (Deagua, 2020).

    h4.mb-3 Cada tipo de reja de desbaste está compuesta de

    p.mb-3 Reja de desbaste de gruesos, recipiente, tapa de registro, tubería de entrada y de salida, reja con separación entre barrotes de 12-25mm, reja de desbaste de finos, recipiente, tapa de registro, tubería de entrada y de salida y reja con separación entre barrotes de 6-12mm (Deagua, 2020, ver figura 5.

    .row.justify-content-evenly.align-items-star.mb-3
      .col-12.col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 5
          span Desbaste
        img(src='@/assets/curso/images/tema2/fig_1.svg').mb-3
      .col-lg-10.mt-3
        .jumbotron-3.p-2.mb-3
          p.mb-0 Nota. Tomado de Educarex (2007). http://contenidos.educarex.es/mci/2007/11/activid/edar/edar.htm 
        
    .row.align-items-center.mb-5
      .col-lg-2(data-aos="fade-left") 
        .jumbotron-1.p-2
          p.text-white.text-center.mb-0 <b>Desarenado.</b>

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-7(data-aos="fade-right").mb-3
        .jumbotron.p-5.h-100 
          h3.mb-3 El proceso de desarenado se utiliza para separar la arena, la grava, etc., arrastrada en suspensión por el efluente.
          p.mb-3 Esta arena origina depósitos en canales y tuberías, abrasión y desgaste sobre los elementos mecánicos en movimiento y dificulta la eliminación y digestión de los lodos separados en los tanques de sedimentación, al aumentar su densidad (Cyclusid depuración industrial, s.f.), ver figura 6.
      .col-12.col-lg-3(data-aos="fade-left") 
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 6
            span Desarenador
          img(src='@/assets/curso/images/tema2/img_6.png').mb-3
    
    p.mb-3 De acuerdo con la empresa mexicana Domos agua (2018), los tipos de desarenadores se dividen en:

    .row.align-items-center.align-items-center.my-5
      .col-lg-12
        TabsA.color-acento-contenido(data-aos="fade")
          .tarjeta.back-tab.px-5.py-4(titulo="Desarenadores de flujo horizontal")
            .row.px-2.py-2.justify-content-center
              .col-4.col-lg-2
                img(src='@/assets/curso/images/tema2/img_7.svg').mb-3
              .col-lg-10
                h4 Desarenadores de flujo horizontal
                p.mb-0 Consiste en reducir la velocidad de flujo del agua, con el fin de que las partículas sólidas que se encuentran suspendidas se decanten y se depositen en el fondo. Esto se logra ensanchando el canal en un tramo, en donde existirán canales paralelos que ayuden en la limpieza de las partículas depositadas. Se debe medir el caudal y la velocidad mediante un canal parshall para mantener controlado el flujo de agua.
          .tarjeta.back-tab.px-5.py-4(titulo="Desarenadores de flujo vertical")
            .row.px-2.py-2.justify-content-center
              .col-4.col-lg-2
                img(src='@/assets/curso/images/tema2/img_7.svg').mb-3
              .col-lg-10
                h4 Desarenadores de flujo vertical
                p.mb-0 Son sistemas que recogen las aguas residuales de un conjunto de viviendas que normalmente están ubicadas en un área inferior a 1 ha. mediante tramos simplificados, para ser conducidas a la red de alcantarillado municipal o eventualmente a una planta de tratamiento. 
          .tarjeta.back-tab.px-5.py-4(titulo="Desarenadores de flujo inducido")
            .row.px-2.py-2.justify-content-center
              .col-4.col-lg-2
                img(src='@/assets/curso/images/tema2/img_7.svg').mb-3
              .col-lg-10
                h4 Desarenadores de flujo inducido
                p.mb-0 Estos desarenadores tienen forma rectangular y en ellos se inyecta aire mediante aireadores tipo turbina para producir el movimiento del agua en forma de espiral, lo cual produce la decantación de los sólidos suspendidos. Este proceso también favorece la deposición de la materia orgánica. Posteriormente, se lleva a cabo la separación de las arenas de forma manual o mecanizada, de acuerdo con el tamaño de la planta, ver figura 7.
         
    .row.justify-content-center.align-items-star.mb-3
      .col-12.col-lg-10(data-aos="fade-left") 
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 6
            span Desarenador
          img(src='@/assets/curso/images/tema2/fig_2.svg').mb-3


    .row.align-items-center.mb-5
      .col-lg-2(data-aos="fade-left") 
        .jumbotron-1.p-2
          p.text-white.text-center.mb-0 <b>Desengrasado</b>


    p.mb-3 Después de cualquiera de los tres procesos de desarenado se tiene que efectuar un desengrasado para separar las grasas y aceites de los canales, previniendo que los siguientes procesos se vean afectados. Aunque existen desarenadores que llevan el proceso de desengrasado de manera conjunta con el desarenado mediante aire comprimido (Domos agua, 2018), ver figura 8.

    .row.justify-content-center.align-items-star.mb-3
      .col-12.col-lg-10(data-aos="fade-left") 
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 8
            span Desarenado, desengrasado y elevación
          img(src='@/assets/curso/images/tema2/fig_3.svg').mb-3

    p.mb-3 De acuerdo con la empresa Cyclusid el desengrasado consiste en la separación de las grasas y aceites arrastrados por el agua residual. Las grasas en las aguas residuales crean numerosos problemas en el proceso de depuración, entre los que se destacan:

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10(data-aos="fade-left") 
        .jumbotron.p-4
          .row.justify-content-between
            .col-4.col-lg-2.ps-0.pe-0
              img.left(src='@/assets/curso/images/tema2/img_8.png').mb-3
            .col-lg-9(data-aos="fade-right") 
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span(style='color:black') 1
                  p.mb-0 Adhesión a aparatos, conductos o depósitos, dificultando la depuración.
                li 
                  .lista-ol--cuadro__vineta
                    span(style='color:black') 2
                  p.mb-0  Obstrucción de las rejillas finas.
                li 
                  .lista-ol--cuadro__vineta
                    span(style='color:black') 3
                  p.mb-0  Formación de una capa en la superficie de los decantadores, que dificulta la sedimentación al atraer hacia arriba pequeñas partículas de materia orgánic
                li 
                  .lista-ol--cuadro__vineta
                    span(style='color:black') 4
                  p.mb-0  Dificulta la correcta aireación en la depuración de fangos activos.
          
    .row.align-items-center.mb-5
      .col-lg-2(data-aos="fade-left") 
        .jumbotron-1.p-2
          p.text-white.text-center.mb-0 <b>Homogenización</b>

    p.mb-3 La situación más habitual es que la entrada de agua residual a la planta depuradora sea variable en el tiempo, tanto en lo que respecta al caudal como a la carga contaminante. Estas variaciones, especialmente las descargas, dificultan el correcto desarrollo de los tratamientos, ya sean de tipo fisicoquímico o biológico. Para solventar tales problemas se puede recurrir a la igualación de caudales y/o a la homogeneización de la concentración de contaminantes, es decir, optimizar las condiciones operativas de las fases siguientes (Cyclusid depuración industrial, s.f.), ver figura 9. 

    .row.justify-content-center.align-items-star.mb-3
      .col-12.col-lg-8(data-aos="fade-left") 
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 9
            span Tanque de homogenización
          img(src='@/assets/curso/images/tema2/fig_4.svg').mb-3

    p.mb-3 En determinadas plantas industriales la composición del agua residual de alimentación a la planta de tratamiento varía de forma notable a lo largo del día, o bien se producen descargas puntuales con altas concentraciones de sus contaminantes. Si estas variaciones son importantes es preciso llevar a cabo una homogeneización del mismo, con el fin de que la planta trabaje en las mejores condiciones posibles (Inditex, 2014). 

    Separador 

    #t_2_2.titulo-segundo
      .h2 2.2 Tratamientos primarios del agua residual

    p.mb-3 Son aquellos que eliminan los sólidos en suspensión presentes en el agua. Los principales procesos fisicoquímicos que pueden ser incluidos en el tratamiento primario son:


    .row.justify-content-center.align-items-star.mb-3
      .col-12.col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/images/tema2/img_9.png').mb-3
      .col-lg-5(data-aos="fade-right") 
        .jumbotron.p-5.h-100 
          ol.lista-ul
            li 
              i.fas.fa-check.c-check
              p.mb-0 Sedimentación
            li 
              i.fas.fa-check.c-check
              p.mb-0  Flotación.
            li 
              i.fas.fa-check.c-check
              p.mb-0  Coagulación – floculación. 
            li 
              i.fas.fa-check.c-check
              p.mb-0  Filtración (Acuatecnia S.A.S., 2018).

    .row.align-items-center.mb-5
      .col-lg-2(data-aos="fade-left") 
        .jumbotron-1.p-2
          p.text-white.text-center.mb-0 <b>Sedimentación</b>

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-5(data-aos="fade-right").mb-3 
        .jumbotron.p-5.h-100 
          p.mb-3 <b>Es un proceso de separación por gravedad que hace que una partícula más densa que el agua tenga una trayectoria descendente, depositándose en el fondo del sedimentador. </b> Está en función de la densidad del líquido, del tamaño, del peso específico y de la morfología de las partículas (Acuatecnia S.A.S, 2018), ver figuras 10 y 11.
      .col-12.col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 10
          span Sedimentador circular
        img(src='@/assets/curso/images/tema2/img_10.png').mb-3

    .row.justify-content-center.align-items-star.mb-5
      .col-12.col-lg-10(data-aos="fade-left") 
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 11
            span Decantación primaria
          img(src='@/assets/curso/images/tema2/fig_5.svg').mb-3

    p.mb-3 De acuerdo con Maldonado (s.f.), los tipos de sedimentación se pueden clasificar como:

    .row.align-items-center.align-items-center.my-5
      .col-lg-12
        TabsA.color-acento-contenido(data-aos="fade")
          .tarjeta.back-tab.px-5.py-4(titulo="Sedimentación de partículas discretas")
            .row.px-2.py-2.justify-content-center
              .col-4.col-lg-2
                img(src='@/assets/curso/images/tema2/img_7.svg').mb-3
              .col-lg-10
                h4 Sedimentación de partículas discretas
                p.mb-0 Son aquellas partículas que no cambian de características (forma, tamaño, densidad) durante la caída. Se denomina sedimentación o sedimentación simple al proceso de depósito de partículas discretas. Este tipo de partículas y esta forma de sedimentación se presentan en los desarenadores, en los sedimentadores y en los presedimentadores como paso previo a la coagulación en las plantas de filtración rápida y también en sedimentadores como paso previo a la filtración lenta. 
          .tarjeta.back-tab.px-5.py-4(titulo="Sedimentación de partículas floculentas")
            .row.px-2.py-2.justify-content-center
              .col-4.col-lg-2
                img(src='@/assets/curso/images/tema2/img_7.svg').mb-3
              .col-lg-10
                h4 Sedimentación de partículas floculentas
                p.mb-0 Partículas floculentas son aquellas producidas por la aglomeración de partículas coloides desestabilizadas a consecuencia de la aplicación de agentes químicos. A diferencia de las partículas discretas, las características de este tipo de partículas —forma, tamaño, densidad— sí cambian durante la caída; se denomina sedimentación floculenta o decantación al proceso de depósito de partículas floculentas. Este tipo de sedimentación se presenta en la clarificación de aguas como proceso intermedio entre la coagulación-floculación y la filtración rápida. 
          .tarjeta.back-tab.px-5.py-4(titulo="Sedimentación por caída libre e interferida")
            .row.px-2.py-2.justify-content-center
              .col-4.col-lg-2
                img(src='@/assets/curso/images/tema2/img_7.svg').mb-3
              .col-lg-10
                h4 Sedimentación por caída libre e interferida
                p.mb-0 Cuando existe una baja concentración de partículas en el agua, estas se depositan sin interferir y se denomina a este fenómeno caída libre. En cambio, cuando hay altas concentraciones de partículas se producen colisiones que las mantienen en una posición fija y ocurre un depósito masivo en lugar de individual. A este proceso de sedimentación se le denomina depósito o caída interferida o sedimentación zonal. Cuando las partículas ya en contacto forman una masa compacta que inhibe una mayor consolidación se produce una compresión o zona de compresión. Este tipo de sedimentación se presenta en los concentradores de lodos de las unidades de decantación con manto de lodos.
    
    .row.justify-content-center.align-items-star.mb-5
      .col-12.col-lg-10(data-aos="fade-left") 
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 12
            span Decantación
          img(src='@/assets/curso/images/tema2/fig_6.svg').mb-3

    h3.mb-3 Los tipos de sedimentadores se clasifican por

    .row.justify-content-center.align-items-star.mb-5
      .col-12.col-lg-10(data-aos="fade-left") 
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 13
            span Tipos de sedimentadores
          img(src='@/assets/curso/images/tema2/fig_7.svg').mb-3
      .col-lg-10.mt-2
        .jumbotron-3.p-2.mb-3
          p.mb-0 Nota. Tomado de Pedraza (2020). 

    h3.mb-3 Los sedimentadores y su clasificación 

    p.mb-3 Los sedimentadores pueden ser tratamientos primarios o secundarios dependiendo de su ubicación dentro del tren de tratamiento, esto depende de las necesidades de tratamiento de acuerdo con las características del agua residual inicial. 

    p.mb-3 El siguiente esquema ilustra las diferencias entre ambos sedimentadores:

    .row.justify-content-center.align-items-star.mb-5
      .col-12.col-lg-10(data-aos="fade-left") 
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 14
            span Sedimentadores
          img(src='@/assets/curso/images/tema2/fig_8.svg').mb-3
      
    .row.align-items-center.mb-5
      .col-lg-2(data-aos="fade-left") 
        .jumbotron-1.p-2
          p.text-white.text-center.mb-0 <b>Flotación.</b>


    .row.justify-content-center.align-items-star.mb-5
      .col-lg-5(data-aos="fade-right").mb-3
        .jumbotron-4.p-5.h-100 
          p.mb-3 <b>Es un proceso físico fundamentado en la diferencia de densidades.</b> La flotación permite separar la materia sólida o líquida de menor densidad que la del fluido, por ascenso de esta hasta la superficie del fluido, ya que en este caso las fuerzas que tiran hacia arriba (rozamiento y empuje del líquido) superan a la fuerza de la gravedad. Se generan pequeñas burbujas de gas (aire), que se asociarán a las partículas presentes en el agua y serán elevadas hasta la superficie, donde son arrastradas y sacadas del sistema (Acuatecnia S.A.S., 2018), ver figura 15.
      .col-12.col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 15
            span Sistema de flotación
        img(src='@/assets/curso/images/tema2/img_11.png').mb-3

    .row.align-items-star.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-12
        TabsC.color-acento-contenido
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="¿En qué consiste la flotación?")
            .row
              .col-md-4
                  figure
                    img(src='@/assets/curso/images/tema2/img_12.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                h4 ¿En qué consiste la flotación?     
                p En unir las burbujas de aire al material suspendido, causando una reducción neta del peso específico. Las burbujas de tamaño micrométrico se producen por disolución del aire en el agua residual a presiones elevadas, seguida por su posterior liberación a la presión atmosférica. Cuando la presión se reduce a las condiciones atmosféricas el aire disuelto presente en exceso hasta la saturación es liberado en forma de burbujas extremadamente finas que se adhieren a las materias en suspensión. 
            
              
        
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="¿Qué sistema se usa para la flotación?")
            .row
              .col-md-4
                  figure
                    img(src='@/assets/curso/images/tema2/img_13.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                h4 ¿Qué sistema se usa para la flotación?     
                p.mb-3 En unir las burbujas de aire al material suspendido, causando una reducción neta del peso específico. Las burbujas de tamaño micrométrico se producen por disolución del aire en el agua residual a presiones elevadas, seguida por su posterior liberación a la presión atmosférica. Cuando la presión se reduce a las condiciones atmosféricas el aire disuelto presente en exceso hasta la saturación es liberado en forma de burbujas extremadamente finas que se adhieren a las materias en suspensión. 
              
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="¿Qué permiten solucionar los sistemas de flotación?")
            .row
              .col-md-4
                  figure
                    img(src='@/assets/curso/images/tema2/img_14.svg', alt='Texto que describa la imagen').mb-3
              .col-md-8.mb-4.mb-md-0
                h4 Permiten dar solución a gran cantidad de necesidades como:    
                ol.lista-ul
                  li 
                    i.fas.fa-circle.c-check-1
                    p.mb-0 Pretratamiento de aguas residuales: separación de grasas y sólidos en suspensión.
                  li 
                    i.fas.fa-circle.c-check-1
                    p.mb-0  Tratamientos físico-químicos.
                  li 
                    i.fas.fa-circle.c-check-1
                    p.mb-0  Espesadores de lodos.
                  li 
                    i.fas.fa-circle.c-check-1
                    p.mb-0  Pretratamiento de aguas potables - separación de sólidos en suspensión.
                  li 
                    i.fas.fa-circle.c-check-1
                    p.mb-0  Pretratamiento en plantas de osmosis inversa - separación de algas.
                  li 
                    i.fas.fa-circle.c-check-1
                    p.mb-0  Pretratamiento en aguas de proceso.
                  li 
                    i.fas.fa-circle.c-check-1
                    p.mb-0  Recuperación de fibra en plantas papeleras.

    p.mb-3 Ver figura que explica el proceso de flotación

    .row.justify-content-center.align-items-star.mb-5
      .col-12.col-lg-9(data-aos="fade-left") 
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 16
            span Flotación
          img(src='@/assets/curso/images/tema2/fig_9.svg').mb-3

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-10(data-aos="fade-left") 
        p.mb-3 ¿Qué es el sistema de flotación por aire inducido?     

        p.mb-3 Cuando el objetivo no es disponer de una gran eficiencia y calidad del agua y, la necesidad es disponer de un equipo robusto, fácil de utilizar, de bajo mantenimiento y económico, existe el sistema de flotación por aire inducido. En este el corazón del sistema es el inductor especial: el aireador impulsor gira creando un remolino y una depresión dentro de la celda que produce una aspiración del aire a través del eje hueco. El aire penetra en el líquido al llegar a la celda de aireación, mediante grandes cantidades de micro burbujas. La mezcla rica en aire es liberada en la celda de flotación facilitando la separación de fases (Aguas Sigma, 2016).

    .row.align-items-center.mb-5
      .col-lg-3(data-aos="fade-left") 
        .jumbotron-1.p-2
          p.text-white.text-center.mb-0 <b>Coagulación-floculación.</b>

    
    .row.justify-content-center.align-items-star.mb-5
      .col-lg-5(data-aos="fade-right").mb-3 
        .jumbotron.p-5.h-100 
          p.mb-3 En muchos casos parte de la materia en suspensión está formada por partículas de muy pequeño tamaño, lo que conforma una suspensión coloidal. Estas suspensiones coloidales suelen ser muy estables, en muchas ocasiones debido a interacciones eléctricas entre las partículas. Por tanto, tienen una velocidad de sedimentación extremadamente lenta, por lo que haría inviable un tratamiento mecánico clásico. Una forma de mejorar la eficacia de todos los sistemas de eliminación de materia en suspensión es la adición de ciertos reactivos químicos que, en primer lugar, desestabilicen la suspensión coloidal (coagulación) y a continuación favorezcan la floculación de estas para obtener partículas fácilmente sedimentables (Acuatecnia S.A.S., 2018), ver figura 17.
      .col-12.col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 17
            span Floculadores
        img(src='@/assets/curso/images/tema2/fig_10.svg').mb-3      


    .row.justify-content-center.align-items-center.my-5.p-3
      .tarjeta.bg_grad-02.p-4.mb-5(data-aos="zoom-in-up")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Objetivo principal
              p.mb-3 De acuerdo con FRC systems, el objetivo principal de un floculador es mezclar los coagulantes y los floculantes con el agua residual y formar sólidos que puedan flotar. Los componentes principales incluyen una estructura metálica, una entrada, válvulas de muestreo, válvulas de inyección, tuberías y una salida. Las tuberías están configuradas de manera ascendente y serpenteante para reducir la cantidad de espacio necesario para brindar un tiempo de reacción química suficiente (FRC systems, 2015). 
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema2/img_15.png").mb-3

          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Mecanismo – funcionamiento     
              p.mb-3 Lo que ocurre dentro de un floculador es un concepto bastante simple, se bombea agua hacia del floculador, inmediatamente después de la entrada se da inicio a la dosificación química, generalmente coagulantes, mediante válvulas de inyección. Más adelante se inyecta un polímero floculante y se mezcla en las secciones subsiguientes del floculador. Algunas unidades incluyen un medidor de pH en línea y puntos de inyección para agentes neutralizantes (FRC systems, 2015), ver figura 18.
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema2/img_16.png").mb-3

          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Dosificación química
              p.mb-3 Se puede variar de acuerdo con el tipo de floculante, pues permite que las partículas coloidales desestabilizadas o las partículas formadas durante la etapa de coagulación se ensamblen en agregados y luego se puedan separar del medio acuoso; entre ellos se encuentran los floculantes catiónicos y los aniónicos (FRC systems, 2015).
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema2/img_17.png").mb-3


          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Preparación de los floculantes aniónicos     
              p.mb-3 Los floculantes aniónicos son preparados a base de copolímeros de acrilamida y ácido acrílico, con carga iónica negativa. Se unen con cargas catiónicas residuales sobre coagulantes adsorbidos a coloides coagulados. Su poder floculante intrínseco aumenta con el peso molecular. Las poliacrilamidas tienen el peso molecular más alto en el intervalo de 10-20 millones. Otros polímeros presentan propiedades específicas para condiciones específicas (Ingeniería Liquid technologies, s.f.). 
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema2/img_18.png").mb-3

          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Floculantes catiónicos         
              p.mb-3 Se basan en copolímeros de poliacrilamida que proporcionan una amplia gama de ionicidades además de los pesos moleculares necesarios para lograr el máximo rendimiento en cada aplicación. De acuerdo con Acoua tecnología (2020), puede haber varias cargas en un floculante. Hay polímeros catiónicos, basados en el nitrógeno, polímeros aniónicos, basados en los iones del carboxilato y los polianfolitos, que llevan cargas positivas y negativas.
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema2/img_19.png").mb-3

          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Desestabilización de partículas             
              p.mb-3 Los principales coagulantes y floculantes utilizados para desestabilizar las partículas y producir floculantes en agua son:
              .mx-3.ol.lista-ul
                li 
                  i.fas.fa-circle.c-check-1
                  p.mb-0 Sulfato de aluminio.
                li 
                  i.fas.fa-circle.c-check-1
                  p.mb-0  Aluminato de sodio.
                li 
                  i.fas.fa-circle.c-check-1
                  p.mb-0  Cloruro de aluminio.
                li 
                  i.fas.fa-circle.c-check-1
                  p.mb-0  Cloruro férrico.
                li 
                  i.fas.fa-circle.c-check-1
                  p.mb-0  Sulfato férrico.
                li 
                  i.fas.fa-circle.c-check-1
                  p.mb-0  Sulfato ferroso.
                li 
                  i.fas.fa-circle.c-check-1
                  p.mb-0  Polielectrolitos (Acoua tecnología, 2020).
              
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema2/img_20.png").mb-3

    .row.align-items-center.mb-5
      .col-lg-3(data-aos="fade-left") 
        .jumbotron-1.p-2
          p.text-white.text-center.mb-0 <b>Coagulación-floculación.</b>

    p.mb-3 Es una operación en la que se hace pasar el agua a través de un medio poroso, con el objetivo de retener la mayor cantidad posible de materia en suspensión. El medio poroso tradicionalmente utilizado es un lecho de arena, de altura variable (Acuatecnia S.A.S., 2018), ver figura 19.


    .row.justify-content-center.align-items-star.mb-5
      .col-12.col-lg-5(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 18
              span Filtración
          img(src='@/assets/curso/images/tema2/img_new.png').mb-3 
      .col-lg-5(data-aos="fade-right") 
        .jumbotron-5.ps-4.py-1
          p.mb-3 Operación unitaria
        p.my-3 La filtración como operación unitaria para los procesos de tratamiento de aguas residuales es una práctica relativamente reciente. Actualmente la filtración se emplea de modo generalizado para conseguir una mayor eliminación de sólidos en suspensión, de los efluentes de los procesos de tratamiento biológicos y químicos, también se utiliza para la eliminación del fósforo precipitado por vía química, y como etapa previa de un proceso de electrodiálisis (Otero, 2006). 

      .row.mb-3
        .col-lg-8(data-aos="fade-right") 
          .jumbotron-6.ps-4.p-1
            p.mt-3 Formas de aplicación de la filtración

      p.mb-3 La filtración puede efectuarse de muchas formas, con baja carga superficial (filtros lentos) o con alta carga superficial (filtros rápidos), en medios porosos (pastas arcillosas, papel de filtro) o en medios granulares (arena, antracita, granate o combinados), con flujo ascendente, descendente y mixto (parte ascendente y parte descendente). Por otro lado, el filtro puede trabajar a presión o por gravedad, según sea la magnitud de la carga hidráulica que exista sobre el lecho filtrante (Otero, 2006).

      .row.mb-3
        .col-lg-8(data-aos="fade-right") 
          .jumbotron-6.ps-4.p-1
            p.mb-3 Clasificación de los filtros     

      p.mb-3 Los filtros pueden clasificarse de la siguiente manera, ver tabla 2.     

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mt-5
          h5 Tabla 2
          span Velocidad de filtración
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-a.mb-5(data-aos="zoom-in-up") 
          table
            Caption(style="font-weight:500;background-color:#E8E8E8;") Nota. Tomdo de Otero (2006). 
            thead(style="border:2")
              tr(style="background-color:#E8E8E8;")
                th.text-center(style="font-size:18px;border:2;") Tipo de tratamiento
                th.text-center(style="font-size:18px;border:2;") Fisico
                th.text-center(style="font-size:18px;border:2;") Químico
                th.text-center(style="font-size:18px;border:2;") Biologíco
            tbody
              tr(style="background-color:#fff;")
                td.p-4.h5.text-center(style="border-left:2;" rowspan="5") Rápidos: 120-360 m3/(m2 día)
              tr(style="background-color:#fff;")
                td.p-4.text-center(style="border-left:2;" colspan="2") Arena
                td.p-4.text-center(style="border-left:2;" rowspan="1") Por gravedad
              tr(style="background-color:#fff;")
                td.p-4.text-center(style="border-left:2;" colspan="2") Antracita
                td.p-4
              tr(style="background-color:#fff;")
                td.p-4.text-center(style="border-left:2;" colspan="2") Mixtos: #[br] Antracita (35 - 50 cm) #[br] Arena (20-35 cm)
                td.p-4.text-center(rowspan="1") Por gravedad 
              tr(style="background-color:#fff;")
                td.p-4.text-center(style="border-left:2;" colspan="2") Mixtos: aArena, #[br] aAntracita, gGranate
                td.p-4
              tr(style="background-color:#fff;")
                td.p-4.h5.text-center(style="border-left:2;" rowspan="4") Lentos: 7-14 m3/(m2 día)
              tr(style="background-color:#fff;")
                td.p-4.text-center(style="border-left:2;" colspan="2") Arena #[br](h= 60-100 cm)
                td.p-4.text-center(style="border-left:2;" rowspan="1") Por gravedad 
    
    h3.mb-3 Otras clasificaciones 

    p.mb-3 De igual forma, los filtros también se clasifican por medio filtrante, es decir, el material de relleno en cantidad, capas y características según las necesidades del agua a tratar, ver figura 20.

    .row.justify-content-center.align-items-star
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Figura 20
          span Medio filtrante para aguas residuales
    .row.align-items-center.justify-content-center
      .col-10.col-lg-7(data-aos="fade-left")
          img(src='@/assets/curso/images/tema2/img_new_1.png'  alt='')

    .row.align-items-center.justify-content-center
      .col-lg-7.mt-3
        .jumbotron-3.p-2.mb-3
          p.mb-0 Nota. Tomado de Pedraza (2019).  Medio filtrante para aguas residuales. (Anexos / Figura 25)
   

    Separador 

    #t_2_3.titulo-segundo
      .h2 2.3 Tratamientos secundarios del agua residual

    p.mb-3 El tratamiento secundario de depuración constituye una serie de importantes procesos de naturaleza biológica de tratamiento de las aguas residuales que tienen en común la utilización de microorganismos (entre las que destacan las bacterias) para llevar a cabo la eliminación de materia orgánica biodegradable, tanto coloidal como disuelta, así como la eliminación de compuestos que contienen elementos nutrientes (N y P) (Cyclusid depuración industrial, s.f.).

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12
        .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_21.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 <b>En la mayor parte de los casos la materia orgánica constituye la fuente de energía y de carbono que necesitan los microorganismos para su crecimiento. Además, también es necesaria la presencia de nutrientes que contengan los elementos esenciales para el crecimiento,</b> especialmente los compuestos que contengan N y P, y por último, en el caso de sistema aerobio, la presencia de oxígeno disuelto en el agua. Este último aspecto será clave a la hora de elegir el proceso biológico más conveniente (Cyclusid depuración industrial, s.f.).

    .bloque-texto-a.color-custom-2.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p.mb-0 <b>En la mayor parte de los casos la materia orgánica constituye la fuente de energía y de carbono que necesitan los microorganismos para su crecimiento.</b> Además, también es necesaria la presencia de nutrientes que contengan los elementos esenciales para el crecimiento, especialmente los compuestos que contengan N y P, y por último, en el caso de sistema aerobio, la presencia de oxígeno disuelto en el agua. Este último aspecto será clave a la hora de elegir el proceso biológico más conveniente (Cyclusid depuración industrial, s.f.).
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/images/tema2/img_21.png' alt='', style="width:400px; display:block; margin:-2rem -0rem ;").mb-3

    .row.align-items-center.mb-5
      .col-lg-2(data-aos="fade-left") 
        .jumbotron-1.p-2
          p.text-white.text-center.mb-0 <b>Digestor aeróbico.</b>

    p.mb-3 Es una operación en la que se hace pasar el agua a través de un medio poroso, con el objetivo de retener la mayor cantidad posible de materia en suspensión. El medio poroso tradicionalmente utilizado es un lecho de arena, de altura variable (Acuatecnia S.A.S., 2018), ver figura 19.4


    .row.justify-content-center.align-items-star.mb-5
      .col-lg-6(data-aos="fade-right").mb-3 
        .jumbotron.p-5.h-100 
          p.mb-3 Es un método alternativo de tratar los lodos orgánicos producidos en el curso de las diversas operaciones de tratamiento. Los digestores aeróbicos se pueden emplear para el tratamiento de: (1) únicamente lodos activados o de filtros percoladores; (2) mezclas de lodos activados o de filtros percoladores con lodos primarios, o (3) lodo biológico en exceso de plantas de tratamiento de lodos activados sin sedimentación primaria. Actualmente, suelen emplearse dos variantes del proceso de digestión aerobia: el sistema convencional y el sistema con oxígeno puro, aunque también se ha empleado la digestión aerobia termófila (Aguamarket, 2017), ver figura 21.
      .col-12.col-lg-6(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 21
            span Tratamiento aerobio
        img(src='@/assets/curso/images/tema2/img_new_2.svg').mb-3    


    .row.align-items-center.align-items-center.my-5
      .col-lg-12
        TabsA.color-acento-contenido(data-aos="fade")
          .tarjeta.back-tab.px-5.py-4(titulo="Digestión con oxígeno y digestión aeróbica termófila")
              .row.px-2.py-2.justify-content-center
                .col-lg-8.mb-3
                  h4 Digestión con oxígeno y digestión aeróbica termófila     
                  p.mb-0 En los sistemas continuos, la decantación y concentración del lodo se realiza en un estanque independiente. La digestión con oxígeno puro es una modificación del proceso de digestión aerobia en el que se sustituye el aire por oxígeno puro. El lodo que resulta es parecido al lodo que se obtiene en los procesos de digestión aerobia convencionales. La digestión aerobia termófila representa un refinamiento adicional del proceso de digestión aerobia. Este proceso puede permitir conseguir altos rendimientos de eliminación de la fracción biodegradable (superiores al 80%) en tiempos de detención cortos (3 a 4 días), mediante la acción de bacterias termófilas a temperaturas entre 25º y 50º C superiores a la temperatura ambiente (Aguamarket, 2017).
                .col-12.col-lg-4
                  img(src='@/assets/curso/images/tema2/img_23.png').mb-3
          
          .tarjeta.back-tab.px-5.py-4(titulo="Digestión aeróbica convencional")
            .row.px-2.py-2.justify-content-center
              .col-lg-8
                h4 Digestión aeróbica convencional         
                p.mb-0 En esta el lodo se airea durante un largo período de tiempo en un estanque abierto, sin calefacción, empleando difusores convencionales o aireadores superficiales. El proceso se puede llevar a cabo de manera continua o discontinua. En plantas de pequeño tamaño se emplea el sistema discontinuo, en el que el lodo se airea y se mezcla completamente durante un largo período de tiempo, dejándose sedimentar a continuación en el interior del mismo estanque (Aguamarket, 2017), ver figura 22.
              .col-12.col-lg-4
                img(src='@/assets/curso/images/tema2/img_22.svg').mb-3
          
    .row.align-items-center.mb-5
      .col-lg-2(data-aos="fade-left") 
        .jumbotron-1.p-2
          p.text-white.text-center.mb-0 <b>Digestor anaerobio.</b>


    .row.justify-content-center.align-items-star.mb-5
      .col-lg-6(data-aos="fade-right").mb-3 
        .jumbotron.p-5.h-100 
          p.mb-3 En este proceso se produce la descomposición de la materia orgánica e inorgánica en ausencia de oxígeno molecular. Sus principales aplicaciones han sido y siguen siendo hoy en día, la estabilización de lodos concentrados producidos en el tratamiento del agua residual y de determinados residuos industriales; sin embargo, recientemente se ha demostrado que los residuos orgánicos diluidos también se pueden tratar anaeróbicamente. En el proceso de digestión anaerobia, la materia orgánica contenida en la mezcla de lodos primarios y biológicos se convierte biológicamente, bajo condiciones anaerobias, en metano (CH4) y dióxido de carbono (C02) (Aguamarket, 2017), ver figura 23
      .col-12.col-lg-6(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 23
            span Digestión anaerobia
        img(src='@/assets/curso/images/tema2/img_new_3.png').mb-3 

    .row.align-items-star.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-12
        TabsC.color-acento-contenido
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="¿Dónde sucede el proceso?")
            .row
              .col-md-4
                  figure
                    img(src='@/assets/curso/images/tema2/img_25.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                h4 ¿Dónde sucede el proceso?          
                p La conversión biológica de la materia orgánica de los lodos parece que se produce en tres etapas. <b>El primer paso del proceso comporta la transformación por vía enzimática (hidrólisis) de los compuestos de alto peso molecular en compuestos que puedan servir como fuentes de energía y de carbono celular.</b> El segundo paso (acidogénesis) implica la conversión bacteriana de los compuestos producidos en la primera etapa en compuestos intermedios identificables de menor peso molecular. El tercer paso (metanogénesis) supone la conversión bacteriana de los compuestos intermedios en productos finales más simples, principalmente metano y dióxido de carbono. En un digestor, la conversión de los lodos orgánicos y de los residuos se lleva a cabo mediante la acción conjunta de diferentes organismos anaerobios (Aguamarket, 2017).
            
              
        
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Etapas de la conversión biológica")
            .row
              .col-md-4
                  figure
                    img(src='@/assets/curso/images/tema2/img_26.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                h4 Etapas de la conversión biológica        
                p.mb-3 <b>La conversión biológica de la materia orgánica de los lodos parece que se produce en tres etapas.</b> El primer paso del proceso comporta la transformación por vía enzimática (hidrólisis) de los compuestos de alto peso molecular en compuestos que puedan servir como fuentes de energía y de carbono celular. El segundo paso (acidogénesis) implica la conversión bacteriana de los compuestos producidos en la primera etapa en compuestos intermedios identificables de menor peso molecular. El tercer paso (metanogénesis) supone la conversión bacteriana de los compuestos intermedios en productos finales más simples, principalmente metano y dióxido de carbono. En un digestor, la conversión de los lodos orgánicos y de los residuos se lleva a cabo mediante la acción conjunta de diferentes organismos anaerobios (Aguamarket, 2017).

          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Hidrolización")
            .row
              .col-md-4
                  figure
                    img(src='@/assets/curso/images/tema2/img_27.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                h4 Hidrolización            
                p.mb-3 <b>Un grupo de microorganismos se ocupa de la hidrolización de los polímeros orgánicos y de los lípidos para formar elementos estructurales básicos como los monosacáridos, los aminoácidos y los compuestos relacionados con estos.</b> Un segundo grupo de bacterias anaerobias fermenta los productos de la descomposición para producir ácidos orgánicos simples, de los que el que se presenta con mayor frecuencia en los digestores orgánicos es el ácido acético. Este grupo de microorganismos, que reciben el nombre de no metanogénicos, está formado por bacterias facultativas y anaerobias estrictas, aunque de forma colectiva se conocen como bacterias "formadoras de ácidos (Aguamarket, 2017).

    
    .row.align-items-center.mb-5
      .col-lg-4(data-aos="fade-left") 
        .jumbotron-1.p-2
          p.text-white.text-center.mb-0 <b>Lechos bacterianos o filtros percoladores.</b>


    .row.justify-content-center.align-items-star.mb-5
      .col-lg-5(data-aos="fade-right").mb-3 
        .jumbotron.p-5.h-100 
          p.mb-3 Se trata de un sistema de depuración biológico aerobio cuyo funcionamiento se basa en hacer circular a través de un medio poroso, aire y agua residual. Están configurados en forma de cultivo fijo no sumergido y compuestos por un lecho, normalmente de gran diámetro, que puede estar formado por materiales naturales –cantos rodados, coque metalúrgico, escoria o antracita- o plásticos, y en cuya superficie se aplican de forma uniforme los líquidos residuales por medio de pulverizadores, y en forma de lluvia (SMA, 2015), ver figuras 25 y 26.
      .col-12.col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 25
            span Filtro percolador
        img(src='@/assets/curso/images/tema2/img_28.png').mb-3 

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 26
          span Filtro percolador 
    .row.align-items-center.justify-content-center.mb-3
      .col-10.col-lg-10(data-aos="fade-left")
          img(src='@/assets/curso/images/tema2/fig_13.svg'  alt='')

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 27
          span Partes de un filtro percolador 
    .row.align-items-center.justify-content-center.mb-3
      .col-10.col-lg-10(data-aos="fade-left")
          img(src='@/assets/curso/images/tema2/fig_14.svg'  alt='')


    .row.align-items-center.mb-5
      .col-lg-6(data-aos="fade-left") 
        .jumbotron-1.p-2.pe-5
          p.text-white.text-center.mb-0 <b>Contactores biológicos rotativos: biodiscos y biocilindros.</b>

    p.mb-3 Los contactores biológicos rotativos están basados en los procesos biológicos aerobios. Estos requieren un contacto íntimo entre el agua residual, la biomasa activa y el oxígeno. Consisten en una serie de placas o discos colocados en un eje horizontal que giran lentamente dentro del tanque que contiene el agua residual, con un 49% de la superficie sumergida. Sobre la superficie de los discos se fija la biomasa que se encuentra alternativamente en contacto con el agua residual y el aire. Esto posibilita la ingestión de la materia orgánica por parte de los microorganismos y su posterior degradación en presencia del oxígeno del aire (Cyclusid, 2020), ver figura 28. 

    .row.align-items-center.justify-content-center.mb-3
      .col-10.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 28
            span Unidad de tratamiento por biodiscos
    .row.justify-content-center.align-items-star.mb-0
      .col-12.col-lg-5(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema2/img_29.png').mb-3 
      .col-12.col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/images/tema2/img_30.png').mb-3 

    .row.align-items-center.justify-content-center
      .col-lg-10.mt-3
        .jumbotron-3.p-2.mb-3
          p.mb-0 Nota. Tomado de Pedraza (2018). Unidad de tratamiento por biodiscos - feria FIMA. (Anexos / Figura 33a – Figura33b)


    .row.justify-content-evenly.align-items-star.p-2
      .col-lg-12(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="zoom-in-down")
          .row.justify-content-center.align-items-center(titulo="Los biocilindros")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema2/img_new_4.svg')
            .col-md-10.mb-4.mb-md-0
              p.mb-0  Son una variante de los biodiscos, su principal diferencia es la sustitución de los discos por biocilindros, están formados por una malla metálica, cuyo interior se rellena de piezas de plástico que sirven de soporte a la biomasa. En estos sistemas se produce un exceso de biomasa que se desprende del contactor, esta se mantiene en suspensión en el tanque gracias al movimiento del material soporte. Para regular la cantidad de microorganismos presentes en el sistema se dispone de un clarificador o decantador secundario, en él se produce la sedimentación del exceso de biomasa (Cyclusid, 2020), ver figura 29.
          .row.justify-content-center.align-items-center(titulo="Características notables del proceso con biodiscos")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema2/img_new_5.svg')
            .col-md-10.mb-4.mb-md-0
              p.mb-3  Notable elasticidad, es decir, es capaz de absorber elevadas puntas de carga orgánica e hidráulica, manteniendo muy estables los niveles de salida. No requiere recirculación de fangos; el fango activo del proceso es el que permanece adherido a los discos. Si la carga aumenta, la película bacteriana crece espontáneamente y los sólidos en suspensión a la salida del biodisco disminuyen. Si la carga disminuye, la biomasa se desprende y aumentan los sólidos en el efluente al decantador secundario. No es necesario controlar la concentración del licor de mezcla, ya que el fango extraído es un desecho del proceso y ha de eliminarse como mejor convenga.
          .row.justify-content-center.align-items-center(titulo="Ruidos y otras variables")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema2/img_new_6.svg')
            .col-md-10.mb-4.mb-md-0
              p.mb-3  El nivel de ruidos es muy bajo, factor que es muy importante tanto ambientalmente como por higiene y salud del personal. Las dimensiones de los depósitos de oxidación son menores que los utilizados por otros procesos. El rendimiento del proceso es más estable en épocas frías, debido al hecho de permanecer cubiertos los tanques. El consumo energético es muy reducido y a igualdad de resultados, comparándolo con un sistema de fangos activos, el consumo resulta ser la tercera parte Hidrometalica (s.f.).
          .row.justify-content-center.align-items-center(titulo="El funcionamiento de los biodiscos")
            .col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/images/tema2/img_new_7.svg')
            .col-md-10.mb-4.mb-md-0
              p.mb-3  Se divide en cuatro etapas, ver figura 30.
          .row.justify-content-center.align-items-center(titulo="El agua bruta")
            .col-md-12.mb-4.mb-md-0
              p.mb-3  El agua bruta de llegada entra a este tanque a través de la tubuladura de entrada, donde se produce una primera sedimentación de materia sólida. Los sólidos sedimentados se extraerán periódicamente por parte del usuario en la primera etapa donde se realiza la primera toma de contacto entre el agua bruta de entrada y los discos. La superficie de los discos se coloniza de forma natural, formando un recubrimiento visible. En la segunda etapa de contacto, gracias a la concepción del sistema de vertedero entre ambas etapas, se consigue un nivel de agua con menos fluctuaciones, favoreciendo el proceso y su salida hacia el “tanque de sedimentación secundaria”. Con el proceso de dos etapas se consigue aumentar el crecimiento de la biomasa de forma equilibrada y constante. En el tanque de sedimentación secundaria se produce la sedimentación de la materia sólida restante del proceso, a la cual se le realizan dos operaciones, la recirculación y extracción de sedimentos (Hidrometálica, s.f.). 
          
    .row.align-items-center
      .col-lg-5.mt-3
        .jumbotron-1.p-2.mx-2.mb-3
          p.mb-0.text-white Reactores biológicos secuenciales (SBR).

    p.mb-5 Son reactores discontinuos en los que el agua residual se mezcla con un lodo biológico en un medio aireado. Se trata de un proceso que se combina en un mismo tanque: aeración/reacción y clarificación. La tecnología de los reactores biológicos secuenciales es una variante optimizada de la tecnología convencional de lodos activados. Se basa en el uso de un solo reactor que opera en forma discontinua secuencial. El sistema de los reactores biológicos secuenciales SBR consta de al menos cuatro procesos cíclicos: llenado, aireación, anoxia, decantación y vaciado, tanto de efluente como de los lodos. Esta tecnología es capaz de tolerar variaciones de carga y caudal y genera como producto lodos estabilizados, siendo en ocasiones, la tecnología más apropiada para la industria, ver figura 31 y 32. 


    .row.align-items-center.justify-content-center.mb-3
      .col-12.col-lg-5(data-aos="fade-right") 
        .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 31
              span Instalación con tecnología SBR
        img(src='@/assets/curso/images/tema2/img_32.svg').mb-3 
      .col-12.col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 32
              span Planta de tratamiento de aguas residuales reactor biológico secuencial (SBR) 
        img(src='@/assets/curso/images/tema2/img_33.svg').mb-3 

    p.mb-3 Se debe considerar que el tratamiento de aguas residuales mediante SBR se lleva a cabo en secuencia en 4 etapas:

    .row.justify-content-center.align-items-center.my-3
      .col-12.col-lg-12
        SlyderF.slyder-color.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-down")
            .tarjeta.tarjeta_grey-1.p-4.h-100
              .row.justify-content-center.align-items-center
                img.mt-3(src='@/assets/curso/images/tema2/ico_new.svg',  alt='', style="width:200px; display:block; margin:auto 0 ;")
                .p-4
                  p.text-center.mt-0 Etapa de llenado: es cuando se añade el sustrato al reactor. Según los objetivos previstos esta etapa puede ser estática, mezclada o aireada.
            .tarjeta.tarjeta_grey-1.p-4.h-100
              .row.justify-content-center.align-items-center
                img.mt-3(src='@/assets/curso/images/tema2/ico_new.svg',  alt='', style="width:200px; display:block; margin:auto 0 ;")
                .p-4 
                  p.text-center.mt-0  Etapa de reacción: las necesidades del tratamiento dictarán si el reactor se somete o no a aireación. Aquí se proveen condiciones de mezcla en las que se permite el consumo de sustrato en condiciones ambientales controladas.
            .tarjeta.tarjeta_grey-1.p-4.h-100
              .row.justify-content-center.align-items-center
                img.mt-3(src='@/assets/curso/images/tema2/ico_new.svg',  alt='', style="width:200px; display:block; margin:auto 0 ;")
                .p-4 
                  p.text-center.mt-0 Sedimentación: permite la separación de sólidos en condiciones de quietud. El resultado es un sobrenadante clarificado que se puede descargar como efluente. Generalmente, el tiempo de asentamiento varía entre media hora y una hora y media. Este proceso previene que el manto de sólidos flote, debido a la acumulación de gas.
            .tarjeta.tarjeta_grey-1.p-4.h-100
              .row.justify-content-center.align-items-center
                img.mt-3(src='@/assets/curso/images/tema2/ico_new.svg',  alt='', style="width:200px; display:block; margin:auto 0 ;")
                .p-4
                  p.text-center.mt-0 Vaciado: extracción del agua clarificada del reactor. El exceso de lodo activado residual es removido; este proceso toma tiempo, puede tardar entre un 5% y un 30% del tiempo total (Domos agua, 2019).

    .row.align-items-center.mb-5
      .col-lg-4(data-aos="fade-left") 
        .jumbotron-1.p-2.pe-2
          p.text-white.text-center.mb-0 <b>Filtros verdes y humedales artificiales</b>


    .row.justify-content-center.align-items-star.mb-5
      .col-lg-7(data-aos="fade-right").mb-3 
        .jumbotron.p-5.h-100 
          p.mb-3 Un filtro verde consiste en una superficie de terreno donde se establece una plantación forestal o agrícola, a la que se suministra, de forma recurrente y programada, aguas residuales urbanas. Una parte de estas aguas se evapora a la atmósfera y el resto es absorbido por las raíces de las plantas o es filtrada a través del suelo (TECPA, 2018), ver figura 33.
      .col-12.col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 33
            span Filtros verdes en depuración de aguas residuales.
        img(src='@/assets/curso/images/tema2/img_28.png').mb-3 

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-7(data-aos="fade-right").mb-3 
        .jumbotron.p-5.h-100 
          h3.mb-3 Filtros verdes     
          p.mb-3 Un filtro verde provoca procesos físicos, químicos y biológicos naturales en el ecosistema suelo-agua. Estos procesos naturales reducen de forma considerable gran parte de los contaminantes del agua residual como: demanda biológica de oxígeno (DBO5), demanda química de oxígeno (DQO), sólidos suspendidos, nitrógeno, fósforo, y microorganismos patógenos (TECPA, 2018), ver figura 34.
      .col-12.col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 34
            span Tratamiento de aguas residuales mediante humedales artificiales
        img(src='@/assets/curso/images/tema2/img_28.png').mb-3 

    h3.mb-3 Depuración de los filtros verdes     

    p.mb-3 De acuerdo con la Universidad Veracruzana los mecanismos de depuración de los filtros verdes son, en primera instancia, los procesos físicos: granulometría y textura. Luego, procesos químicos: pH, capacidad de intercambio iónico, condiciones de aireación y encharcamiento. En tercer lugar, procesos biológicos: raíces, microorganismos (Universidad Veracruzana, s.f.), ver figura 35.

    .row.justify-content-center.align-items-star
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 35
          span Bioingeniería
    .row.align-items-center.justify-content-center
      .col-10.col-lg-8(data-aos="fade-left")
          img(src='@/assets/curso/images/tema2/fig_15.svg'  alt='')

    .row.align-items-center.mb-5
      .col-lg-4(data-aos="fade-left") 
        .jumbotron-1.p-2.pe-2
          p.text-white.text-center.mb-0 <b>Reactor biológico de membrana (MBR).</b>

    p.mb-3 (Reactor biológico + ultrafiltración) se incluyen en las denominadas tecnologías de membrana, las cuales han experimentado un gran desarrollo en la última década. La aplicación de estas tecnologías a los MBR permite la separación del fango y el líquido mediante membranas, obteniendo ventajas importantes frente a la separación en los tradicionales decantadores secundarios. El aumento de la demanda de agua ha impulsado la implantación de estos sistemas a escala real, especialmente en aquellos casos en que se plantea la posibilidad de reutilización de agua (Universidad de Alcalá, 2007), ver figura 36.     


    .row.justify-content-center.align-items-star
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 36
          span Biorreactor de membrana


    .row.align-items-center.justify-content-center
      .col-10.col-lg-8(data-aos="fade-left")
          img(src='@/assets/curso/images/tema2/fig_16.svg'  alt='')

    .row.align-items-center.align-items-center.my-5
      .col-lg-12
        TabsA.color-acento-contenido(data-aos="fade")
          .tarjeta.back-tab.px-5.py-4(titulo="Agua filtrada por membrana")
              .row.px-2.py-2.justify-content-center
                .col-12.col-lg-4
                .col-lg-8
                  h4 Agua filtrada por membrana    
                  p.mb-0 Su funcionamiento se basa en que el agua del reactor biológico es filtrada pasando a través de las paredes de una membrana, debido a una pequeña depresión producida por una bomba centrífuga. El agua filtrada es extraída del sistema mientras el fango y los compuestos de tamaño superior al poro de la membrana quedan retenidos y permanecen o retornan al reactor biológico (Universidad de Alcalá, 2007).
                
          
          .tarjeta.back-tab.px-5.py-4(titulo="Contralavado")
            .row.px-2.py-2.justify-content-center
              .col-12.col-lg-4
              .col-lg-8
                h4 Contralavado             
                p.mb-0 Este ciclo se alterna con un corto contralavado, en el que se invierte el sentido del flujo para forzar el paso del agua filtrada desde el interior al exterior de la membrana para limpiarla. Periódicamente, en función del grado de ensuciamiento se realizan limpiezas químicas en profundidad de las membranas mediante su inmersión en una solución de limpieza (Universidad de Alcalá, 2007).
              

          .tarjeta.back-tab.px-5.py-4(titulo="MBR y sus partes ")
            .row.px-2.py-2.justify-content-center
              .col-12.col-lg-4
              .col-lg-8
                h4 MBR y sus partes              
                p.mb-0 De acuerdo con Remtamavares, los MBR están compuestos por dos partes principales:
                p.mb-3 - Reactor biológico: responsable de la degradación de los compuestos presentes en el agua residual.
                p.mb-3 - Módulo de membranas: encargado de llevar a cabo la separación física del licor de mezcla (Universidad de Alcalá, 2007).
              
    h3.mb-3 Configuraciones básicas     

    p.mb-3 Membranas o sistemas sumergidos: las membranas se sitúan dentro del propio reactor biológico, eliminando las necesidades de bombeo y aprovechando la agitación mecánica de la aireación (Universidad de Alcalá, 2007), ver figura 37.

    .row.justify-content-center.align-items-star
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 37
          span Membranas sumergidas


    .row.align-items-center.justify-content-center
      .col-10.col-lg-8(data-aos="fade-left")
          img(src='@/assets/curso/images/tema2/fig_17.svg'  alt='')
      
    .row.align-items-center.justify-content-center
      .col-lg-8.mt-3
        .jumbotron-3.p-2.mb-3
          p.mb-0 Nota. Tomado de la Universidad de Alcalá (2007). 


    h3.mb-3 Membranas externas o sistema de bucle externo     

    p.mb-3 El contenido del reactor biológico se bombea al módulo de membranas. Las ventajas de este modelo residen en que el propio módulo de membranas sirve de contenedor de limpieza para las mismas y se evita su manipulación (Universidad de Alcalá, 2007), ver figura 38.

    .row.justify-content-center.align-items-star
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 38
          span Membranas externas


    .row.align-items-center.justify-content-center
      .col-10.col-lg-8(data-aos="fade-left")
          img(src='@/assets/curso/images/tema2/fig_18.svg'  alt='')


    .row.align-items-center.mb-5
      .col-lg-4(data-aos="fade-left") 
        .jumbotron-1.p-2.pe-2
          p.text-white.text-center.mb-0 <b>Electrocoagulación.</b>

    p.mb-3 El tratamiento por electrocoagulación en su esencia es similar a un proceso fisicoquímico de coagulación-floculación en el que es necesario añadir una serie de productos químicos, basados normalmente en sales metálicas para conseguir el proceso de coagulación, es decir, de desestabilización de los coloides responsables de la materia en suspensión (Hidritec, s.f.), ver figura 39.

    .row.justify-content-center.align-items-star
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 39
          span Electrocoagulación


    .row.align-items-center.justify-content-center
      .col-10.col-lg-6(data-aos="fade-left")
          img(src='@/assets/curso/images/tema2/fig_19.svg'  alt='')

    .row.align-items-center.justify-content-center.mb-3
      .col-lg-6.mt-3
        .jumbotron-3.p-2.mb-3
          p.mb-0 Nota. Tomado de Hidritec (s.f.).  

    .tarjeta.color-acento-contenido.py-4.px-5.mb-3(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #FDF8E4" data-aos="fade")
      h4.mb-3 Desestabilización de los coloides
      p.mb-0 Mediante el procedimiento de electrocoagulación se aplica una diferencia de potencial a unos electrodos metálicos (normalmente aluminio y/o hierro). De esta forma, se produce una rápida desestabilización de los coloides por aplicación eléctrica y disolución de iones metálicos de los electrodos empleados. 

    .tarjeta.color-acento-contenido.py-4.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #ECF7F4" data-aos="fade")
      h4.mb-3 Desinfección de bacterias, virus y parásitos     
      p.mb-0 La consecuencia es una importante reducción en el contenido en sólidos en suspensión y eliminación de la DQO y DBO5, debido fundamentalmente a la desestabilización de los coloides, la decantación y separación de materia orgánica, aceites, grasas y metales pesados, así como iones, calcio y magnesio. Por otra parte, también se produce la desinfección de bacterias, virus o parásitos (Hidritec, s.f.), ver figura 40 un ejemplo gráfico de electrocoagulación. 

    .row.justify-content-center.align-items-star
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 39
          span Electrocoagulación


    .row.align-items-center.justify-content-center
      .col-10.col-lg-8(data-aos="fade-left")
          img(src='@/assets/curso/images/tema2/fig_20.svg'  alt='')

    .row.align-items-center.justify-content-center.mb-3
      .col-lg-8.mt-3
        .jumbotron-3.p-2.mb-3
          p.mb-0 Nota. Tomado de Hidritec (s.f). Electrocoagulación (Anexos / Figura 46)

     
    .row.justify-content-center.align-items-center.my-5.p-3
      .tarjeta.bg_grad-02.p-4.mb-5(data-aos="zoom-in-up")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Eliminación de sólidos, aceites y grasas     
              p.mb-3 El sistema se suministra en una planta premontada con la parrilla de electrodos en forma de placas y dimensionada para el caso concreto, incluyendo el cuadro de control y potencia del equipo. De forma habitual, se suministra con un sistema de decantación lamelar o separador por flotación DAF para lograr un mayor rendimiento en la eliminación de los sólidos, aceites y grasas desestabilizados.  
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema2/img_new_10.png").mb-3

          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Biodegradabilidad
              p.mb-3 El sistema es apropiado para aguas residuales de tipo industrial con altas cargas de DQO, sólidos en suspensión, grasas, aceites y color como tratamiento único o bien como pretratamiento biológico, mejorando la biodegradabilidad del agua residual (Hidritec, s.f.).
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema2/img_new_11.png").mb-3

    Separador 

    #t_2_4.titulo-segundo
      .h2 2.4 Tratamientos terciarios del agua residual

    p.mb-3 La finalidad de los tratamientos terciarios es eliminar la carga orgánica residual y aquellas otras sustancias contaminantes no eliminadas en los tratamientos secundarios, como por ejemplo, los nutrientes, fósforo y nitrógeno. Estos procesos son de naturaleza biológica o fisicoquímica, siendo el proceso unitario más empleado el tratamiento fisicoquímico. Este consta de una coagulación – floculación y una decantación (Cyclusid depuración industrial, s.f.).

    p.mb-3 Otros procesos empleados como tratamientos terciarios son las resinas de intercambios de iones, la adsorción en carbón activo, la ultrafiltración, la ósmosis inversa, la electrodesinfección, las membranas cerámicas, etc. 

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
                  p.mb-1.text-white Para realizar un estudio profundo y pertinente sobre los tratamientos terciarios del agua residual, diríjase al Anexo_1_TratamientosTerciariosAguaResidual y analice cabalmente el documento. Recuerde llevar registro de los aspectos más relevantes.
                .col-md-auto
                  a.boton.color-custom-3(:href="obtenerLink('downloads/OKEst_Anexo_1_TratamientosTerciariosAguaResidual.pdf')" target="_blank")
                    span(style="color:#000;") Descargar
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema2/ico_pdf.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")















































      
</template>

<script>
export default {
  name: 'Tema2',
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
