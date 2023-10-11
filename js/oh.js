var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 서브메뉴
$(function () {
  $("#header_btm .gnb > .left > .big:first-child").mouseover(function(){
    $("#header_btm .gnb > .left > .big > .subb > .sub").stop().fadeIn(100)
  });
  $("#header_btm .gnb > .left > .big").mouseout(function(){
    $("#header_btm .gnb > .left > .big > .subb > .sub").stop().fadeOut(100)
  });
});

// 키즈셰프 레시피
let i =0;

function kidSlide(){
  if(i<2){
    i++;
  }else{
    i=0;
  }
  $(".kidSlide ul").animate({left: i * 250 * (-1)},500)
}
setInterval(kidSlide, 3000)

// 반응형메뉴max-width:1022px

$(".media_menu").click(function(){
  $(".big > .subb > .sub").stop().toggle(10)
})



