
$(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src=../icons/left.png></button>',
        nextArrow: '<button type="button" class="slick-next"><img src=../icons/right.png></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
              }}]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__face').eq(i).toggleClass('catalog-item__face_active');
                $('.catalog-item__back').eq(i).toggleClass('catalog-item__back_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__return');

      //modals

      $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn()
      });

      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut()
      });

      $('.button_catalog').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text()) 
            $('.overlay, #order').fadeIn()
        });
      });

      function validateForms(form){
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 3
          },
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "Пожалуйста, введите имя",
            minlength: jQuery.validator.format("Необходимо как минимум {0} символа!")
          },
          phone: "Пожалуйста, введите номер",
          email: {
            required: "Пожалуйста, введите e-mail",
            email: "Ваш e-mail должен быть формата name@mail.com"
          }
        }
        })
      };

      validateForms('#feed-form');
      validateForms('#consultation form');
      validateForms('#order form');

      $('input[name=phone]').mask("+7 (999) 999-99-99")

      // SCROLL!!!!

      $(window).scroll(function() {

        if ($(this).scrollTop() > 1250) {
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
        
      });
      $("a[href^='#']").click(function(){
        const _href = $(this).attr('href');
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });
  });

    