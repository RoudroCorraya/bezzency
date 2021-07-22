//============barfiller js=========================
$(document).ready(function(){

	$('#bar1').barfiller();
	$('#bar2').barfiller();
	$('#bar3').barfiller({ barColor: '#fc6' });
	$('#bar4').barfiller({ barColor: '#900', duration: 3000 });
	
});
//==============service-part slick slider==============
$('.ser-box').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
    arrows:false,
    autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//==================port-part slick slider==================

$('.portfollio').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
    arrows:true,
    autoplay: false,
         prevArrow: '<i class="fa fa-chevron-left pre" aria-hidden="true"></i>',
     nextArrow: '<i class="fa fa-chevron-right nex" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//=================teati-part slick slider=====================

$('.testimonial').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
    arrows:true,
    autoplay: false,
         prevArrow: '<i class="fa fa-chevron-left pre" aria-hidden="true"></i>',
     nextArrow: '<i class="fa fa-chevron-right nex" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//==============blog-part slick slider=========================

$('.our-blog').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
    arrows:true,
    autoplay: false,
         prevArrow: '<i class="fa fa-chevron-left pre" aria-hidden="true"></i>',
     nextArrow: '<i class="fa fa-chevron-right nex" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//===============banner vanue-box initialise===================
$(document).ready(function(){
    $('.venobox').venobox(); 
});

//===========menu-bar fade in fade out========================
$(".arival").click(function(){
    $(".vanis").slideToggle();
});



























