$('.slider').owlCarousel({
    loop:true,
    autoplay: true,
    items:1,
    autoplayTimeout:4000,
    animateOut: 'slideOutLeft',
    animateIn: 'slideInRight',
    dots:false
});
var swiper = new Swiper('.works-carousel ', {
    slidesPerView: 3,
    spaceBetween: 18,
    autoplay: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
    },
    navigation: {
        nextEl: '.next-i',
        prevEl: '.prev-i',
    },
    breakpoints: {
        0: {
          slidesPerView: 1
          
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 36
          
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 18
        },
    }
});