;(function($) {
    "use strict";
    
    /*Blog Page Sidebar Section Height Fix*/
    function sidebarHeight(){
        if( $('.sidebar_section').length ){
            var $sidebarHeight = $('.blog_section').innerHeight();
            $('.sidebar_section').css("min-height", $sidebarHeight + 45)
        }
    }
    /*Footer Widget Height*/
    function footerWidgetHeight(){
        if( $('.footer_sidebar > .widget').length ){
            $('.footer_sidebar .widget').css( "min-height", function(){
                return Math.max( $('.footer_sidebar .widget1').height(), $('.footer_sidebar .widget2').height(), $('.footer_sidebar .widget3').height(), $('.footer_sidebar .widget4').height() )
            })
        }
    }
    function selectMenu () {
        if ($('.select-menu').length) {
            $('.select-menu').selectmenu();
        };
    }
    /*Project Filter*/
    function projectsIsotopeFilter(){
        if( $('#projects').length ){
            $('#projects').imagesLoaded(function(){
                $('#projects').isotope({
                    itemSelector: '.project',
                    layoutMode: 'masonry',
                    filter: '',
                    masonry: {
                        columnWidth: '.project-sizer',
                        gutter: 0
                    }
                })
            });

            $('#project_filter li').on( 'click', function() {
                $('#project_filter').find('.active').removeClass('active');
                $(this).addClass('active');
                var $filterValue = $(this).data('filter');
                $('#projects').isotope({ filter: $filterValue })
            })
        }
    }
    
    /*Project Filter 2*/
    function projectsIsotopeFilter_2(){
        if( $('#projects2').length ){
            $('#projects2').imagesLoaded(function(){
                $('#projects2').isotope({
                    itemSelector: '.project',
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: 1,
                        gutter: 0
                    }
                })
            });

            $('#project_filter2 li').on( 'click', function() {
                $('#project_filter2').find('.active').removeClass('active');
                $(this).addClass('active');
                var $filterValue = $(this).data('filter');
                $('#projects2').isotope({ filter: $filterValue })
            })
        }
    }
    
    function services_carousel(){
        if( $('.services_carousel').length ){
            $('.services_carousel').owlCarousel({
                loop:true,
                margin:0,
                autoplay: true,
                nav: false,
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                navContainer: '.services_carousel',
                center: true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        nav: true,                        
                        dots: false
                    },
                    992:{
                        items:3
                    }
                }
            })
        }
    }
    
    /*Team Member Carousel*/    
    function team_members_carousel(){
        if( $('.team_members_carousel').length ){
            $('.team_members_carousel').owlCarousel({
                loop:true,
                margin:0,
                autoplay: true,
                nav: true,
                navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
                navContainer: '.team_carousel_nav',
                responsive:{
                    0:{
                        items:1
                    },
                    992:{
                        items:4
                    }
                }
            })
        }
    }
    /*client logo Carousel*/    
    function client_logo_carousel(){
        if( $('.owl-carousel.clients-logos').length ){
            $('.owl-carousel.clients-logos').owlCarousel({
                loop:true,
                margin:30,
                autoplay: true,
                nav: false,
                dots: true,
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:2
                    },
                    600:{
                        items:4
                    },
                    1000:{
                        items:6
                    }
                }
            })
        }
    }
    
    /*Recent Project Carousel*/
    function recentProjectsCarousel(){
        if( $('.recent-projects').length ){
            $('.recent-projects').owlCarousel({
                loop:false,
                margin:0,
                autoplay: true,
                nav: false,
                items: 1
            })
        }
    }    
    
    /*Counter*/
    function counting_data(){
        if ( $('.counter').length ){
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            })
        }
    }    
    
    /*Project Image Popup*/
    function imagePopup(){
        if ($('.test-popup-link').length) {            
            $('.test-popup-link').magnificPopup({
                type: 'image'
            })
        }
    }
    
    /*RS*/
    function revolutionSliderActiver () {
        if ($('.bannercontainer #rev_slider').length ) {
            $("#rev_slider").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                navigation: {
                    arrows:{enable:true} 
                }, 
                gridwidth:1170,
                gridheight:740 
            })
        }
    }
    
    /*Smooth Scroll*/
    function smoothScrollActivator () {
        if ($('#main_nav.smooth_scroll').length ) {
            $('#main_nav ul li a[href*="#"]').on('click', function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    var offset_top4scroll = $('#main_nav').height();
                    if ( $(window).width() < 768 ){
                        offset_top4scroll = 34
                    }
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - offset_top4scroll
                        }, 1000);
                        return false
                    }
                }
                return false
            })
        }
    }
    
    /*Affix*/
    function affix_header () {
        if ($('#main_nav').length ) {
            $('#main_navbar').affix({
                offset: {
                    top: 118
                }
            })
        }
    }
    
    /*Scroll Spy*/
    function scrollSpyActivator () {
        if ($('#main_nav.smooth_scroll').length ) {
            $('body').scrollspy({ 
                target: '#main_nav', 
                offset: 55
            })
        }
    }
    function countDownTimer () {
        if ($('.countdown-box').length) {

            $('.countdown-box').each(function () {
                var Self = $(this);
                var countDate = Self.data('countdown-time'); // getting date

                Self.countdown(countDate, function(event) {                    

                    $(this).html('<li> <div class="box"> <h4>'+ event.strftime('%D') +'</h4> <span>Days</span> </div> </li> <li> <div class="box"> <h4>'+ event.strftime('%H') +'</h4> <span>Hours</span> </div> </li> <li> <div class="box"> <h4>'+ event.strftime('%M') +'</h4> <span>Minutes</span> </div> </li> <li> <div class="box"> <h4>'+ event.strftime('%S') +'</h4> <span>Seconds</span> </div> </li> ');


                });
            });

            

        };
    }

    function thmOwlCarousel () {
        if ($('.client-carousel').length) {
            $('.client-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ],            
                dots: false,
                autoWidth: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 3
                    },
                    600: {
                        items: 4
                    },
                    1000: {
                        items: 6
                    }
                }
            });
        };
        if ($('.testimonials-style-two-carousel').length) {
            $('.testimonials-style-two-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ],            
                dots: true,
                autoWidth: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 2
                    }
                }
            });
        };
        if ($('.project-style-two-carousel').length) {
            $('.project-style-two-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ],            
                dots: false,
                autoWidth: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    991: {
                        items: 4
                    },
                    1000: {
                        items: 5
                    }
                }
            });
        };
        if ($('.testimonials-style-three-carousel').length) {
            $('.testimonials-style-three-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ],            
                dots: false,
                autoWidth: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    991: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
        };
        if ($('.service-style-two-carousel').length) {
            $('.service-style-two-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ],            
                dots: false,
                autoWidth: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    991: {
                        items: 2
                    },
                    1000: {
                        items: 4
                    }
                }
            });
        };
    }
    function mobileNavToggle () {
        if ($('#main-nav-bar .navbar-nav .sub-menu').length) {
            var subMenu = $('#main-nav-bar .navbar-nav .sub-menu');
            subMenu.parent('li').children('a').append(function () {
                return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
            });
            var subNavToggler = $('#main-nav-bar .navbar-nav .sub-nav-toggler');
            subNavToggler.on('click', function () {
                var Self = $(this);
                Self.parent().parent().children('.sub-menu').slideToggle();
                return false;
            });

        };
    }

    function thmLightBox() {
        if ($('.img-popup').length) {
            var groups = {};
            $('.img-popup').each(function() {
                var id = parseInt($(this).attr('data-group'), 10);

                if (!groups[id]) {
                    groups[id] = [];
                }

                groups[id].push(this);
            });


            $.each(groups, function() {

                $(this).magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    closeBtnInside: false,
                    gallery: { enabled: true }
                });

            });

        };
    }





    function thmCounter() {
        if ($('.counter-up').length) {
            $('.counter-up').counterUp({
                delay: 10,
                time: 3000
            });
        };
    }

    function bootstrapAnimatedLayer() {

        /* Demo Scripts for Bootstrap Carousel and Animate.css article
         * on SitePoint by Maria Antonietta Perna
         */

        //Function to animate slider captions 
        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';

            elems.each(function() {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function() {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load 
        var $myCarousel = $('#minimal-bootstrap-carousel'),
            $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

        //Initialize carousel 
        $myCarousel.carousel({
            interval: 7000
        });

        //Animate captions in first slide on page load 
        doAnimations($firstAnimatingElems);

        //Pause carousel  
        $myCarousel.carousel('pause');


        //Other slides to be animated on carousel slide event 
        $myCarousel.on('slide.bs.carousel', function(e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });
    }

    function sideNavToggler () {
        if ($('.hidden-search').length) {
            $('.search-opener').on('click', function () {
                $('.hidden-search').addClass('open');
                return false;
            });
            $('.search-close-btn').on('click', function () {
                $('.hidden-search').removeClass('open');
                return false;
            });
        };
    }
    function thmLightBox() {
        if ($('.img-popup').length) {
            var groups = {};
            var imgPop = $('.img-popup');
            imgPop.each(function() {
                var id = parseInt($(this).attr('data-group'), 10);

                if (!groups[id]) {
                    groups[id] = [];
                }

                groups[id].push(this);
            });


            $.each(groups, function() {

                $(this).magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    closeBtnInside: false,
                    gallery: { enabled: true }
                });

            });

        };
    }
    
    /*----------------------------------------------------*/
    /*Function Calling*/
    /*----------------------------------------------------*/
    services_carousel();
    sidebarHeight();
    footerWidgetHeight()
    projectsIsotopeFilter();
    projectsIsotopeFilter_2();
    recentProjectsCarousel();
    counting_data();
    imagePopup();
    revolutionSliderActiver();
    selectMenu();
    team_members_carousel();
    smoothScrollActivator();
    affix_header();
    client_logo_carousel();
    countDownTimer();
    thmOwlCarousel();
    mobileNavToggle();
    thmLightBox();
    scrollSpyActivator();
    bootstrapAnimatedLayer();
    sideNavToggler();
    thmLightBox();
    thmCounter();

    


    
})(jQuery);

function galleryMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }

    if ($('.post-filter').length) {
        $('.post-filter li').children('span').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;

            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };
}

function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').removeClass('slideIn animated');
            $('.stricky').addClass('stricky-fixed slideInDown animated');
            $('.scroll-to-top').fadeIn(500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed slideInDown animated');
            $('.stricky').addClass('slideIn animated');
            $('.scroll-to-top').fadeOut(500);
        }
    };
}

jQuery(window).on('load', function() {
    (function($) {
        galleryMasonaryLayout();
    })(jQuery);
});
jQuery(window).on('scroll', function() {
    (function($) {
        stickyHeader();
    })(jQuery);
});