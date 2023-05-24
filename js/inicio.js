$(document).ready(function() {
    $('.carousel-container').slick({
      dots: false, // Para mostrar los puntos de navegación si se desea
      arrows: true, // Para mostrar las flechas de navegación
      prevArrow: '<a class="carousel-prev" href="#">&#8249;</a>', // Personalización de la flecha anterior
      nextArrow: '<a class="carousel-next" href="#">&#8250;</a>', // Personalización de la flecha siguiente
      infinite: true, // Para que el carrusel se desplace de forma continua
      slidesToShow: 4, // Número de imágenes visibles a la vez
      slidesToScroll: 1, // Número de imágenes que se desplazan por vez
      autoplay: true, // Activar el desplazamiento automático
      adaptiveHeight: true,
      autoplaySpeed: 1000 // Intervalo de tiempo en milisegundos entre cada movimiento
    });
  });
  