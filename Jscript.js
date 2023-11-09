
// toggle menu
$('.menu-bar').click(function(){
    $('.side-bar').toggleClass('show')
});

$('.close-btn').click(function(){
    $('.side-bar').toggleClass('show')
});

// carousel

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// second carousel 

function scrollr(){
  var left = document.querySelector(".slider-2");
  left.scrollBy(410, 0)
}

function scrolll(){
  var right = document.querySelector(".slider-2");
  right.scrollBy(-410, 0)
}