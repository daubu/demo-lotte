$(document).ready(function() {
	 
	$('#hidden-sub').animate({'opacity': 0});
	
	$('.has-sub').hover(function () {
		$('#hidden-sub').stop().animate({'opacity': 1});
		$('#hidden-sub').addClass('active');
	},function() {
		$('#hidden-sub').stop().animate({'opacity': 0});
		$('#hidden-sub').removeClass('active');
	});
	
	$('#hidden-sub').hover(function () {
		$(this).stop().animate({'opacity': 1});
		$(this).addClass('active');
		$('.has-sub').addClass('active');
	},function() {
		$(this).stop().animate({'opacity': 0});
		$(this).removeClass('active');
		$('.has-sub').removeClass('active');
	});
	
	

	var navpos = $('#top').offset();
	console.log(navpos.top);
	$(window).bind('scroll', function() {
	  if ($(window).scrollTop() > navpos.top) {
	    $('#top').addClass('fixed');
	   }
	   else {
	     $('#top').removeClass('fixed');
	   }
	});

	
	$(".button").on("click", function() {

	  var $button = $(this);
	  var oldValue = $button.parent().find("input").val();
	
	  if ($button.text() == "+") {
		  var newVal = parseFloat(oldValue) + 1;
		} else {
	   // Don't allow decrementing below zero
	    if (oldValue > 0) {
	      var newVal = parseFloat(oldValue) - 1;
	    } else {
	      newVal = 0;
	    }
	  }
	
	  $button.parent().find("input").val(newVal);
	
	});
	
	
	
	//Active state Calendar
	$(".pop-down").click(function() { 
		$("#wrap-pop").show('slide', { direction: 'up' }, 230);
		//$("#wrap-pop .pop-body").show();
		//$('.flyout').hide('slide', { direction: 'right' }, 200);
		//$(".toggle-flyout").addClass("isDown");
	});
	$(".close-pop").click(function() { 
		$("#wrap-pop").hide('slide', { direction: 'up' }, 330);
		//$("#wrap-pop .pop-body").show();
		//$('.flyout').hide('slide', { direction: 'right' }, 200);
		//$(".toggle-flyout").addClass("isDown");
	});
	
	
	//Detail Popup
	$(".pop-detail").click(function() { 
		$("#wrap-pop-detail").show('slide', { direction: 'up' }, 230); 
	});
	$(".close-pop-detail").click(function() { 
		$("#wrap-pop-detail").hide('slide', { direction: 'up' }, 330); 
	});
	
	//Search Popup
	$(".pop-search").click(function() { 
		$("#wrap-pop-search").show('slide', { direction: 'up' }, 230); 
		$("#wrap-pop-search .text").focus();
	});
	$(".close-pop-search").click(function() { 
		$("#wrap-pop-search").hide('slide', { direction: 'up' }, 330); 
	});
	
	

    $ ('ul.list-promotion li:even').addClass('even');
    $ ('ul.list-promotion li:odd').addClass('odd');
    
    //Custom scrollbar
	if($(".scroll-pane").length) {
		$('.scroll-pane').jScrollPane();
	}
	
	
	
	if($(".tabs-nav").length) {
		$(".tab-content").not(":first").hide();
	    // adding Active class to first selected tab and show
	    $("ul.tabs-nav li:first").addClass("active").show(); 
	 
	    // Click event on tab
	    $("ul.tabs-nav li").click(function() { 
	        // Removing class of Active tab
	        $("ul.tabs-nav li.active").removeClass("active");
	        // Adding Active class to Clicked tab
	        $(this).addClass("active");
	        // hiding all the tab contents
	        $(".tab-content").hide();       
	        // showing the clicked tab's content using fading effect
	        $($('a',this).attr("href")).fadeIn('slow');
	 
	        return false;
	    });
    }
	 
     /*
$('#bxslider').bxSlider({
     	auto: true,
     	controls: false,
     	pager: false,
		mode: 'horizontal',
		pager: ($("#bxslider > li").length > 1) ? true: false,
		controls: ($("#bxslider > li").length > 1) ? true: false
	});
*/
	
	/*
$('.feature-box .items').height($('.list-wrap').height());
	
	if($(".scroll03").length)
	{
		$(".scroll-article").jCarouselLite({
	        btnNext: ".nextscroll",
	        btnPrev: ".prevscroll",
	        visible: 3,
	        scroll: 3
	    });
	}
*/
	
	
	if($(".layer-01").length) {
		$('.layer-01').plaxify({"xRange":30,"yRange":30})
	}
	if($(".layer-02").length) {
		$('.layer-02').plaxify({"xRange":20,"yRange":20})
	}
	if($(".layer-03").length) {
		$('.layer-03').plaxify({"xRange":50,"yRange":50})
	}
	if($(".layer-04").length) {
		$('.layer-04').plaxify({"xRange":20,"yRange":20})
	}
	if($(".layer-05").length) {
		$('.layer-05').plaxify({"xRange":20,"yRange":20}) 
	}
	if($(".layer-plax").length) {
		$('.layer-plax').plaxify({"xRange":40,"yRange":0}) 
	}
    //$('#plax-sphere-3').plaxify({"xRange":40,"yRange":40,"invert":true})
    if($(".layer-flax").length) {
    	$.plax.enable()	
    }
	
});



$(function(){
	var playvid = function(slider) {
	    var vid = slider.$currentPage.find('video');
	    if (vid.length) {
	        // autoplay
	        vid[0].play();
	    }
	};
	
	$('#bxslider').anythingSlider({
    	autoPlay: true,     
	    // Autoplay video in initial panel, if one exists
	    onInitialized: function(e, slider) {
	        playvid(slider);
	    },
	    // pause video when out of view
	    onSlideInit: function(e, slider) {
	        var vid = slider.$lastPage.find('video');
	        if (vid.length && typeof(vid[0].pause) !== 'undefined') {
	            vid[0].pause();
	        }
	    },
	    // play video
	    onSlideComplete: function(slider) {
	        playvid(slider);
	    },
	    // pause slideshow if video is playing
	    isVideoPlaying: function(slider) {
	        var vid = slider.$currentPage.find('video');
	        return (vid.length && typeof(vid[0].pause) !== 'undefined' && !vid[0].paused && !vid[0].ended);
	    }
	
	});
});



