$(document).ready(()=>{
 $('.block_10__slider').slick({
   slidesToShow: 4,
   slidesToScroll: 4,
   infinite: true,
   dots: true,
   arrows: false,
   dotsClass: 'block_10_dots',
   responsive: [
   {
     breakpoint: 1350,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 3,
       dots: true,
       arrows: false,
       dotsClass: 'block_10_dots'
     }
   },
   {
     breakpoint: 1200,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2,
       dots: true,
       arrows: false,
       dotsClass: 'block_10_dots'
     }
   },
   {
     breakpoint: 540,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       dots: true,
       arrows: false,
       dotsClass: 'block_10_dots'
     }
   }
   ]
 });
 if (window.innerWidth <= 767) {
   $('.block_5__content__item__charts').slick({
     slidesToShow: 2,
     slidesToScroll: 2,
     infinite: false,
     dots: true,
     arrows: false,
     dotsClass: 'block_10_dots'
   });
 }
   // if (window.innerWidth <= 768){
   //     $('.block_7__roadmap').slick({
   //         slidesToShow: 1,
   //         slidesToScroll: 1,
   //         infinite: false,
   //         dots: false,
   //         arrows: false,
   //         dotsClass: 'block_10_dots'
   //     })
   // }
   $('.block_8__expandable__item__caption').click((e)=>{
     let target = e.target;
     let parent = $(target.parentNode);
     if (parent.hasClass('active')){
       parent.removeClass('active');
     }
     else {
      parent.addClass('active');
    }
  })
   $('.header_item--lang-item').click(function() {
     $(this).next().toggleClass('active');
     $(this).toggleClass('active');
   });
   $('.burger').click(function() {
     $(this).toggleClass('active');
     $('.header_menu').toggleClass('active');
     $('body').toggleClass('fix');
   })
   $('.header_item').click(function() {
     $(this).addClass('active');
     var attr = $(this).attr('data-index');
     var scroll = $('section.block[data-index="'+attr+'"]').offset().top;
     $('html,body').animate ({scrollTop: scroll},500)
     return false;
   })
   if ($(window).width() > 1200) {
     $(window).scroll(function() {
      var windowScrollTop = $(window).scrollTop();
      var block2 = $('.block_2').offset().top - 80;
      var block3 = $('.block_3').offset().top - 80;
      var block4 = $('.block_4').offset().top - 80;
      var block5 = $('.block_5').offset().top - 80;
      var block6 = $('.block_6').offset().top - 80;
      var block7 = $('.block_7').offset().top - 80;
      var block8 = $('.block_8').offset().top - 80;
      var block_now = $('.block_5__content__item--now').offset().top - 80;
      var block_next = $('.block_5__content__item--next').offset().top - 80;
      console.log(windowScrollTop);
      console.log(block2);
      if (windowScrollTop > block2) {
        $('.block_2__header').addClass('anim');
        $('.block_2__content').addClass('anim');
      }
      if (windowScrollTop > block3) {
        $('.block_3__header').addClass('anim');
        $('.block_3__content__items').addClass('anim');
      }
      if (windowScrollTop > block4) {
        $('.block_4__header').addClass('anim');
        $('.block_4__content').addClass('anim');
      }
      if (windowScrollTop > block5) {
        $('.block_5__header').addClass('anim');
        $('.block_5__content').addClass('anim');
      }
      if (windowScrollTop > block_now) {
        $('.block_5__content__item--now .pre-ico--img').addClass('anim');
      }
      if (windowScrollTop > block_next) {
        $('.block_5__content__item--next .ico-duration--img').addClass('anim');
      }
      if (windowScrollTop > block6) {
        $('.block_6__header').addClass('anim');
        $('.block_6__subheader').addClass('anim');
        $('.block_6__content').addClass('anim');
      }
      if (windowScrollTop > block7) {
        $('.block_7__header').addClass('anim');
        $('.block_7__content').addClass('anim');
      }
      if (windowScrollTop > block8) {
        $('.block_8__header').addClass('anim');
        $('.block_8__content').addClass('anim');
      }
    })
   }
 });



