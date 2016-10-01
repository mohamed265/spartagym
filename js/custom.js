$(document).ready(function(){
	"use strict";

	/*
	==============================================================
			STICKY HEADER  Script Start
	==============================================================
	*/
	if($('.navigation-wrap').length){
		$(window).scroll(function() {
		  if ($(this).scrollTop() > 187){  
			  $('.navigation-wrap').addClass("sticky");
		  }
		  else{
			  $('.navigation-wrap').removeClass("sticky");
		  }
		});
	}
	if($('#kode-responsive-navigation').length){
		$(window).scroll(function() {
		  if ($(this).scrollTop() > 100){  
			  $('#kode-responsive-navigation').addClass("sticky");
		  }
		  else{
			  $('#kode-responsive-navigation').removeClass("sticky");
		  }
		});
	}

	/*
	==============================================================
			STICKY HEADER  Script Start
	==============================================================
	*/

	if($('.slider8').length){
		$('.slider8').bxSlider({
			mode: 'vertical',
			minSlides: 2,
			maxSlides: 2,
			slideMargin: 10
		});
	}	

	/*
	==============================================================
			Owl Slider Script Start
	==============================================================
	*/

	if($('#owl-demo-4').length){
		var owl = $("#owl-demo-4");
		owl.owlCarousel({ 
		 autoPlay: 5000, //Set AutoPlay to 3 seconds
		  itemsCustom : [
		  [450, 2],
		  [320, 2],
		  [600, 4],
		  [700, 6],
		  [1000, 6],
		  [1200, 6]
		  ],
		  navigation : false

		});
	} 

	/*
	==============================================================
			Owl Slider Script Start
	==============================================================
	*/

	if($('#owl-demo-5').length){
		var owl = $("#owl-demo-5");
		owl.owlCarousel({ 
		 autoPlay: 5000, //Set AutoPlay to 3 seconds
		  itemsCustom : [
		  [320, 1],
		  [485, 1],
		  [600, 2],
		  [767, 3],
		  [1000, 4],
		  [1199, 4],
		  [1200, 4]
		  ],
		  navigation : false

		});
	}

	/*
    ==============================================================
       CountDown Script Start
    ============================================================== 
    */

    if($('.countdown').length){
		$('.countdown').downCount({ date: '08/08/2016 12:00:00', offset: +1 });
    }

	/*
    ==============================================================
       Counter Script Start
    ============================================================== 
    */

    if($('.counter').length){
        $('.counter').counterUp({
          delay: 10,
          time: 1000
        });
    }
	
	/*
    ==============================================================
      Product BXSLider Script Start
    ============================================================== 
    */

	$('.bxslider').bxSlider({
	  mode: 'fade',
	  captions: true
	});

	/*
    ============================================================== 
 				DL Responsive Menu
    ============================================================== 
    */
	if(typeof($.fn.dlmenu) == 'function'){
		$('#kode-responsive-navigation').each(function(){
		  $(this).find('.dl-submenu').each(function(){
			if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
			  var parent_nav = $('<li class="menu-item kode-parent-menu"></li>');
			  parent_nav.append($(this).siblings('a').clone());
			  
			  $(this).prepend(parent_nav);
			}
		  });
		  $(this).dlmenu();
		});
	}
	/* 
    ============================================================== 
	 			FILTERABLE SCRIPT
    ============================================================== 
    */
jQuery(window).load(function($) {
		var filter_container = jQuery('#filterable-item-holder-1');

		filter_container.children().css('position','relative');	
		filter_container.masonry({
			singleMode: true,
			itemSelector: '.filterable-item:not(.hide)',
			animate: true,
			animationOptions:{ duration: 800, queue: false }
		});	
		jQuery(window).resize(function(){
			var temp_width =  filter_container.children().filter(':first')();
			filter_container.masonry({
				columnWidth: temp_width,
				singleMode: true,
				itemSelector: '.filterable-item:not(.hide)',
				animate: true,
				animationOptions:{ duration: 800, queue: false }
			});		
		});	
		jQuery('ul#filterable-item-filter-1 a').click(function(e){	

			jQuery(this).addClass("active");
			jQuery(this).parents("li").siblings().children("a").removeClass("active");
			e.preventDefault();
			
			var select_filter = jQuery(this).attr('data-value');
			
			if( select_filter == "All" || jQuery(this).parent().index() == 0 ){		
				filter_container.children().each(function(){
					if( jQuery(this).hasClass('hide') ){
						jQuery(this).removeClass('hide');
						jQuery(this).fadeIn();
					}
				});
			}else{
				filter_container.children().not('.' + select_filter).each(function(){
					if( !jQuery(this).hasClass('hide') ){
						jQuery(this).addClass('hide');
						jQuery(this).fadeOut();
					}
				});
				filter_container.children('.' + select_filter).each(function(){
					if( jQuery(this).hasClass('hide') ){
						jQuery(this).removeClass('hide');
						jQuery(this).fadeIn();
					}
				});
			}
			
			filter_container.masonry();	
      cornerStampSelector: '.corner-stamp'  
			
		});
	});

	/*
    ==============================================================
       PrettyPhoto Script Start
    ============================================================== 
    */

	if($("a[data-rel^='prettyPhoto']").length){
		$("a[data-rel^='prettyPhoto']").prettyPhoto();
	}
	
	/*
	==============================================================
				Accordian Script Start
	============================================================== 
	*/  
	  
	if($('.accordion').length){
	//custom animation for open/close
		$.fn.slideFadeToggle = function(speed, easing, callback) {
		  return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
		};

		$('.accordion').accordion({
		  defaultOpen: 'section1',
		  cookieName: 'nav',
		  speed: 'slow',
		  animateOpen: function (elem, opts) { //replace the standard slideUp with custom function
			elem.next().stop(true, true).slideFadeToggle(opts.speed);
		  },
		  animateClose: function (elem, opts) { //replace the standard slideDown with custom function
			elem.next().stop(true, true).slideFadeToggle(opts.speed);
		  }
		});
	}

	
	/*
    ==============================================================
       SlideToggle Script Start
    ============================================================== 
    */

	$( ".show" ).on('click',function() {
		$( ".cartform" ).slideToggle( "slow", function() {
		// Animation complete.
		});
	});
	
	/*
    ==============================================================
       Map Script Start
    ============================================================== */
	if($('#map-canvas').length){
		google.maps.event.addDomListener(window, 'load', initialize);
	}
	
	function initialize() {
		var MY_MAPTYPE_ID = 'custom_style';
		var map; 
		var brooklyn = new google.maps.LatLng(29.97563, 30.935);
		var featureOpts = [
		    {
	        "featureType": "road",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "lightness": 100
	            },
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "color": "#C6E2FF"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#C5E3BF"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#D1D1B8"
	            }
	        ]
	    }
		];	

		var mapOptions = {
			zoom: 15,
			scrollwheel: false,
			center: brooklyn,
			mapTypeControlOptions: {
			  mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
			},
			mapTypeId: MY_MAPTYPE_ID
		};


		map = new google.maps.Map(document.getElementById('map-canvas'),
			  mapOptions);

		var styledMapOptions = {
			name: 'Custom Style'
		};

		var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

		map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
		var marker=new google.maps.Marker({
		  position:brooklyn,
		  icon:'extra-images/map.png'
		  });

		marker.setMap(map);
	}

	/*
    ==============================================================
       Tooltip Script Start
    ==============================================================
    */	

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	$('.blog-bxslider').bxSlider({
	  pagerCustom: '#bx-pager'
	});

	/*
	  ==============================================================
		   Progress Bar Script Start
	  ============================================================== 
	*/
	$(".progressbars").jprogress();
		$(".progressbarsone").jprogress({
			background: "#0297dc"
		});

		var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-36251023-1']);
			_gaq.push(['_setDomainName', 'jqueryscript.net']);
			_gaq.push(['_trackPageview']);

		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();

	/*
    ==============================================================
       Bx Slider 2 Script Start
    ==============================================================
    */	
	$('.bxslider2').bxSlider({
	  minSlides: 1,
	  maxSlides: 1,
	  options:  false
	});


/*
  ==============================================================
	   Progress Bar Script Start
  ============================================================== 
*/  


});




