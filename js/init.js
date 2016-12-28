$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$(document).ready(function(){
    $('.video-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      centerMode: false,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true
    });
});