$(document).ready(function(){

   var mixer=mixitup(".projects_house");

	$(".carousel_reviews").owlCarousel({
		items: 3,
		loop: true,
		nav: true,
		navText: ["",""],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			992:{
				items:2,
			},
			1200:{
				items:3,
			}
		}
	});
  });

  $(function() {

	$(".inputs").click(function(){
        $(this).toggleClass("active")
    })

    $(".hamburger").click(function(){
        $(this).toggleClass("is-active")
    })
    

    $(".hamburger").click(function(){
        $(".mobile_menu").toggleClass("active")
	})
	$(".hamburger").click(function(){
        $(".top-menu").toggleClass("active")
    })

    $(".close").click(function(){
        $(".mobile_menu").removeClass("active")
        $(".hamburger").toggleClass("is-active")
    })
});

(function($) {
	$(function() {
	 
	  $('.tabs__caption').on('click', '.col-4:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active').closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	  });
	 
	});
	})(jQuery);


	$(function(){
		$("dt").click(function(){
		  $(this).toggleClass("open");
		  if($(this).hasClass("open"))
			$("dt").not(this).removeClass("open");
		})
	  })		 

	