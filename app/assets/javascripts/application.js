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

	$("#navlogo img").animate({width:"80px"}, 700);
	$("a").hover(function(){
		$(this).animate({opacity: 0.7}, 150).animate({opacity: 1.0},150)
	});
	$(".introduction").hide().fadeIn();
	$(".introduction p").hide().fadeIn(3000)
	$(".banner").hide().fadeIn(3000)
	$(".nav-item, #socmed").hide().fadeIn(3000).animate({opacity:.4},2500).animate({opacity:1.0},1000)


	for (i=0;i<100;i++){
		$("#navlogo img").animate({opacity:0.3},4000).animate({opacity:1.0},2000);
	}

	$("window").scroll(function(){
		$(".aboutme").css("display").fadeIn();
	});

	for (i=0;i<100;i++){
		$("#scrolldown").animate({width: '-=30'},1500).animate({width: '+=30'},1500).animate({width:'+=0'},2000);
	}

	var $aboutme = $('.aboutme');
	$('.aboutme h1, .aboutme li').hide();

	$aboutme.waypoint(function() {
		$('.aboutme').animate({backgroundColor: '#fff'}, 600);
		$('.navbar').animate({backgroundColor: '#FFBC42'}, 600);
		$(".navbar a").css('color', 'black');


		$('.aboutme h1, .aboutme li').fadeIn(1000);
	}, { offset: '50%'});

	/*=====================================*/


	$('.portfolio').waypoint(function(){
		$('.portfolio').animate({backgroundColor: '#71EEB8'}, 1000);
		$('.navbar').animate({backgroundColor: '#EE7785'}, 1000);
		$(".navbar a").css('color', 'white');
	}, { offset: '50%'});

	/* =================PROGRESS BAR=============== */
	$( function() {
    	$( "#progressbar" ).progressbar({
      		value: 37
    	});
  	});
});


