// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require tether
//= require jquery.waypoints
//= require jquery-ui
//= require infinite
//= require inview
//= require sticky
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks

$(document).ready(function (){

	var scrollTimer = 0;

	$("#navlogo img").animate({width:"80px"}, 700);
	$(".nav-bar a").hover(function(){
		$(this).animate({opacity: 0.7}, 150).animate({opacity: 1.0},150)
	});
	$(".introduction").hide().fadeIn();
	$(".introduction p").hide().fadeIn(3000)
	$(".banner").hide().fadeIn(3000)
	$(".nav-item, #socmed").hide().fadeIn(3000).animate({opacity:.4},2500).animate({opacity:1.0},1000)


	for (i=0;i<100;i++){
		$("#navlogo img").animate({opacity:0.3},4000).animate({opacity:1.0},2000);
	}
	for (i=0;i<200;i++){
		$("#scrolldown")
		.animate({marginTop: '+=30'},1500)
		.animate({marginTop: '-=30'},1500);
		if (scrollTimer <= 1) {
			break;
		} 

	};

	var $aboutme = $('.aboutme');
	$('.aboutme h1, .aboutme img').hide();

	$aboutme.waypoint(function() {

		$('.aboutme').animate({backgroundColor: '#f9f9f9'}, 600);
		$('.nav-bar').animate({backgroundColor: '#5874c9'}, 600);
		// $(".nav-bar a").css('color', 'black');
		scrollTimer += 100;


		$('.aboutme h1,.aboutme img').fadeIn(1000)
		}, { offset: '50%'});



	$('.mywork img').animate({marginLeft: '-2400'},1);
	$('.mywork h1').hide();

	$('.mywork').waypoint(function(){

		$('.mywork').animate({backgroundColor: '#d8d8d8'}, 1000);
		$('.mywork h1').fadeIn(), 1200;
		// $('.nav-bar').animate({backgroundColor: '#EE7785'}, 1000);
		$('.mywork img').animate({marginLeft: '0'},500);
		// $(".nav-bar a").css('color', 'white');
	}, { offset: '50%'});

	// ========== SMOOTH SCROLLING ===========

	$('a[href^="#"]').click(function(e){
		var target = $(this).attr('href');
		var strip = target.slice(1);
		var anchor = $("a[name='" + strip +"'");

		e.preventDefault();

		$('html, body').animate({

			scrollTop: anchor.offset( ).top

		}, 'slow')


	});


});


