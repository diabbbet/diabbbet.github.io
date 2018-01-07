$(document).ready(()=>{
   $('.block_10__slider').slick({
       slidesToShow: 4,
       slidesToScroll: 4,
       infinite: false,
       dots: true,
       arrows: false,
       dotsClass: 'block_10_dots',
       responsive: [
           {
               breakpoint: 769,
               settings: {
                   slidesToShow: 2,
                   slidesToScroll: 2,
                   infinite: false,
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
                   infinite: false,
                   dots: true,
                   arrows: false,
                   dotsClass: 'block_10_dots'
               }
           }
       ]
   });
   if (window.innerWidth <= 540) {
       $('.block_5__content__item__charts').slick({
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: false,
           dots: true,
           arrows: false,
           dotsClass: 'block_10_dots'
       });
   }
   if (window.innerWidth <= 768){
       $('.block_7__roadmap').slick({
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: false,
           dots: false,
           arrows: false,
           dotsClass: 'block_10_dots'
       })
   }
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
});
