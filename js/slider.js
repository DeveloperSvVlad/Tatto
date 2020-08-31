// !Slick Slider

1
$(window).on("load resize", function(){
    var width = $(document).width();
    if (width > 868) {
      $('.work__slider').slick('unslick');
    } else {
      $('.work__slider').not('.slick-initialized').slick({  
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        easing: 'linear', 
        responsive: [
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              easing: 'linear', 
            }
          }
        ]
      });
    }
  });
  $(window).on("load resize", function(){
    var width = $(document).width();
    if (width > 769) {
      $('.gallery__slider').slick('unslick');
    } else {
      $('.gallery__slider').not('.slick-initialized').slick({  
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        easing: 'linear', 
        responsive: [
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
              autoplay: true,
              autoplaySpeed: 3000,
              easing: 'linear', 
              breakpoin: 600,
              settings : {
                slidesToShow: 3,
                autoplay: true,
              }
            }
          }
        ]
      });
    }
  });
  
