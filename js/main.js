$(function(){
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow:'<button class="banner-section__slider-btn banner-section__slider-btnPrev" ><img src="img/row-toLeft.svg" alt=""></button>',
        nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btnNext"><img  src="img/row-toRight.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 971,
              settings: {
                arrows: false,
              }
            }
        ]
            
    }); 
    $('.tab').on('click', function(e){
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.product-slider').slick('setPosition');
    });
    $('.product-item__favorite').on('click', function(){
        $(this).toggleClass('product-item__favorite--active')
    });
    $('.product-item__basket').on('click', function(){
        $(this).toggleClass('product-item__basket--active');

    
    
    
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'<button class="product-slider__slider-btn product-slider__slider-btnPrev" ><img src="img/toLeft-row-black.svg" alt=""></button>',
        nextArrow:'<button class="product-slider__slider-btn product-slider__slider-btnNext"><img  src="img/toRight-row-black.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 1301,
              settings: {
                dots: true,
                arrows: false,
              }
            },
            {
            breakpoint: 1201,
            settings: {
                slidesToShow: 3,
                dots: true,
                arrows: false,
              }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                  }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                  }
            },
        ]
    }); 

    

    $('.filter-item__drop, .filter-extra').on('click', function(e){
        $(this).toggleClass('filter-item__drop--active')
        $(this).next().slideToggle('200');
        
    });
    $('.filter-styler').styler();

    $('.js-range-slider').ionRangeSlider();


    $('.catalog__filter-btngrid').on('click', function(){
        $(this).addClass('catalog__filter-button--active')
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active')
        $('.product-item__wrapper').removeClass('product-item__wrapper--line')
    });
    $('.catalog__filter-btnline').on('click', function(){
        $(this).addClass('catalog__filter-button--active')
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active')
        $('.product-item__wrapper').addClass('product-item__wrapper--line')
    });

    $('.rateYo').rateYo({
    })
    $('.menu__btn').on('click', function(){
        $('.menu-mobile__list').toggleClass('menu-mobile--active')
    });

    $('.footer__top-item h6').on('click', function(){
        $(this).next().slideToggle();
        $(this).toggleClass('footer-item--active')
    });

    $('.aside__btn').on('click', function(){
        $(this).next().slideToggle();
    });
});