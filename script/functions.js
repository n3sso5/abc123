
	jQuery(document).ready(function($) {
    	'use strict';
 
        //***************************
        // FlexSlider Function
        //***************************
        jQuery('.flexslider').flexslider({
            animation: "slide",
            prevText: "<em class='fa fa-angle-left'></em>",
            nextText: "<em class='fa fa-angle-right'></em>",
            start: function(slider) {
                jQuery('body').removeClass('loading');
            }
        });

        //***************************
        // Sticky Header Function
        //***************************
      jQuery(window).scroll(function() {
        'use strict';
          if (jQuery(this).scrollTop() > 170){  
              jQuery('body').addClass("ec-sticky");
          }
          else{
              jQuery('body').removeClass("ec-sticky");
          }
      });

        //***************************
        // Click to Top Button
        //***************************
        jQuery('.backtop-btn').on("click", function() {
            jQuery('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        //***************************
        // Countdown Function
        //***************************
        jQuery(function() {
            var austDay = new Date();
            austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
            jQuery('#ec-Countdown').countdown({
                until: austDay
            });
            jQuery('#year').text(austDay.getFullYear());
        });

        //***************************
        // PrettyPhoto Function
        //***************************
        jQuery("area[data-rel^='prettyPhoto']").prettyPhoto();

        jQuery(".gallery:first a[data-rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'normal',
            theme: 'pp_default',
            social_tools: '',
            slideshow: 3000,
            autoplay_slideshow: true
        });
        jQuery(".gallery:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'fast',
            slideshow: 10000,
            hideflash: true
        });

        jQuery("#custom_content a[data-rel^='prettyPhoto']:first").prettyPhoto({
            custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
            changepicturecallback: function() {
                initialize();
            }
        });

        jQuery("#custom_content a[data-rel^='prettyPhoto']:last").prettyPhoto({
            custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
            changepicturecallback: function() {
                _bsap.exec();
            }
        });

        //***************************
        // Owl Carousel
        //***************************
        var owl = $(".owl-carousel");
        owl.owlCarousel({
            items: 4,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true
                },
                1000: {
                    items: 4,
                    nav: true
                }
            },
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            nav: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
        });

        //***************************
        // Responsive Video Function
        //***************************
        jQuery(".ec-main-content").fitVids();

        //***************************
        // Responsive Menu Function
        //***************************
        jQuery(function() {
            jQuery('#as-menu').asmenu();
        });

        //***************************
        // WordCounter Function
        //***************************
        jQuery(".word-count").counterUp({
            delay: 10,
            time: 1000
        });

      //***************************
      // Search Toggle Function
      //***************************
      jQuery('.ec-search').hide();
        jQuery("a.ec-search-button").on("click", function(){
            jQuery('.ec-search').hide();
            jQuery(".ec-search").fadeToggle();
       });
       jQuery('html').on("click", function() {
        jQuery(".ec-search").fadeOut();
       });
      jQuery('.ec-listbar li').on("click", function(event){
           event.stopPropagation();
       });

      jQuery('.ec-booking-form').hide();
        jQuery(".ec-booking-button").on("click", function(){
            jQuery('.ec-booking-form').hide();
            jQuery(".ec-booking-form").fadeToggle();
       });
       jQuery('html').on("click", function() {
        jQuery(".ec-booking-form").fadeOut();
       });
      jQuery('.ec-button-section').on("click", function(event){
           event.stopPropagation();
       });

      //***************************
		// Skills Function
		//***************************
		jQuery('.skillbar').each(function() {
		    jQuery(this).appear(function() {
		        jQuery(this).find('.count-bar').animate({
		            width:jQuery(this).attr('data-percent')
		        },3000);
		        var percent = jQuery(this).attr('data-percent');
		        jQuery(this).find('.count').html('<span>' + percent + '</span>');
		    });
		});

		//***************************
		// ContactForm Function
		//***************************
		$('.myform').on('submit',function(){
		    // Add text 'loading...' right after clicking on the submit button. 
		    $('.output_message').text('Loading...'); 
		     
		    var form = $(this);
		    $.ajax({
		        url: form.attr('action'),
		        method: form.attr('method'),
		        data: form.serialize(),
		        success: function(result){
		            if (result == 'success'){
		                $('.output_message').html('<span class="success-msg"><i class="fa fa-check-circle"></i> Message Sent successfully!</span>');
		            } else if (result == 'validate'){
		                $('.output_message').html('<span class="spam-error-msg"><i class="fa fa-warning"></i> You have already sent message. Try again after one hour.</span>');
		            } else {
		                $('.output_message').html('<span class="error-msg"><i class="fa fa-times-circle"></i> Error Sending email!</span>');
		            }
		        }
		    });
		     
		    // Prevents default submission of the form after clicking on the submit button. 
		    return false;   
		});

	});


//***************************
// Parallax Function
//***************************
function fullscreenFix(){var a=$("body").height();$(".content-b").each(function(){$(this).innerHeight()<=a&&$(this).closest(".fullscreen").addClass("not-overflow")})}function backgroundResize(){var a=$(window).height();$(".background").each(function(){var i=$(this),t=i.width(),e=i.height(),s=i.attr("data-img-width"),o=i.attr("data-img-height"),n=s/o,r=parseFloat(i.attr("data-diff"));r=r?r:0;var c=0;if(i.hasClass("parallax")&&!$("html").hasClass("touch")){c=a-e}o=e+c+r,s=o*n,t>s&&(s=t,o=s/n),i.data("resized-imgW",s),i.data("resized-imgH",o),i.css("background-size",s+"px "+o+"px")})}function parallaxPosition(){var a=$(window).height(),i=$(window).scrollTop(),t=i+a,e=(i+t)/2;$(".parallax").each(function(){var s=$(this),o=s.height(),n=s.offset().top,r=n+o;if(t>n&&r>i){var c=(s.data("resized-imgW"),s.data("resized-imgH")),l=0,d=-c+a,h=a>o?c-o:c-a;n-=h,r+=h;var u=l+(d-l)*(e-n)/(r-n),g=s.attr("data-oriz-pos");g=g?g:"50%",$(this).css("background-position",g+" "+u+"px")}})}"ontouchstart"in window&&(document.documentElement.className=document.documentElement.className+" touch"),$("html").hasClass("touch")||$(".parallax").css("background-attachment","fixed"),$(window).resize(fullscreenFix),fullscreenFix(),$(window).resize(backgroundResize),$(window).focus(backgroundResize),backgroundResize(),$("html").hasClass("touch")||($(window).resize(parallaxPosition),$(window).scroll(parallaxPosition),parallaxPosition());