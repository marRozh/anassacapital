$(document).ready(() => {
    console.log('index.js is connected');


    var $trigger = $('.modal-open');
    var $close = $('.modal-close');
    var $modal = $('.modal-box');

    /*$(window).on('resize', function() {
        var top = $trigger.offset().top + $trigger.outerHeight();
        var left = $trigger.offset().left;
        var width = $trigger.outerWidth();
        $trigger.attr({
            'data-top': top,
            'data-left': left,
            'data-width': width
        });
        $modal.css({
            top: top,
            left: left
        });
    }).trigger('resize');*/

    $trigger.on('click', function() {
        let clickedId = this.id;
        console.log(clickedId);
        $(`#${clickedId}-box`).css({
            top: '10vh',
            left: 0,
            width: '100vw',
            height: '90vh'
        }).addClass('is-open');
    });

    $close.on('click', function() {
        let clickedId = this.id;
        console.log(clickedId);

        var top = $(`#modal-${clickedId}`).offset().bottom + $(`#modal-${clickedId}`).outerHeight();
        var left = $(`#modal-${clickedId}`).offset().left;

        $(`#modal-${clickedId}-box`).css({
            bottom: top,
            left: 0,
            width: 0,
            height: '2px'
        }).removeClass('is-open');
    });

    //NAVBAR
    $('.nav-link.dropdown').on('click', function() {
        $('.dropdown-container').toggleClass('active');
    });
    
    $('.burger-menu').on('click', function() {
        console.log('clicked');
        $('.mobile-nav-menu').toggleClass('checked');
        $('.burger-menu').toggleClass('checked');

        if ($('.burger-menu').hasClass('checked')) {
            $('.mobile-nav-logo').attr('src', './images/main_logo_wt.png');
            $('body').addClass('body-lock');
        } else {
            $('.mobile-nav-logo').attr('src', './images/main_logo.png');
            $('body').removeClass('body-lock');
        }
        
    });

 

    let currentLink = window.location.pathname;
    console.log(`current link: ${currentLink}`);

    //navbar mobile selected link

    $('.menu-nav-link').each(function() {
        if($(this).attr('href') == currentLink) {
            $(this).css('color', '#fff');
            $(this).css('border-bottom', '2px solid #fff');
            $(this).css('font-weight', '700');
        }
    });

    //main navbar selection

    $('.nav-link').each(function() {
        if($(this).attr('href') == currentLink) {
            $(this).addClass('nav-link-selected');
        }
    });





    //PAGE ANIMATION
    $(window).on('load', function () {
        let layerClass = ".left-layer";
        let layers = document.querySelectorAll(layerClass);
        for (const layer of layers) {
          layer.classList.toggle("active");
        };
    });



    

    $('.accordion-item').on('click', function() {
        console.log('clicked on accordion item');

        if( $(this).find('.submenu').hasClass('open') ) {
            console.log('here');
            $(this).find('.submenu').slideUp().removeClass('open');

            $(this).find('.close-member-mobile').addClass('invisible');
        } else {
            console.log('here 2');
            $('.close-member-mobile').addClass('invisible');
            $('.open').slideUp().removeClass('open');



            $(this).find('.submenu').slideDown().addClass('open');

            $(this).find('.close-member-mobile').removeClass('invisible');

            let topOffset = $(this).offset().top;
            console.log(`offset top: ${topOffset}`);
            $('html, body').animate({scrollTop: topOffset - 150});
        }
        

    });



    //open larger profile windows

    
    if($(window).width() >= 575) {
        console.log(`window width: ${$(window).width()}`);

        $('.team-member').on('click', function() {
            //$('.team-member-expand').removeClass('expanded');
            //$('.team-member-expand').removeClass('reduce');
             let clickedId = $(this).attr('id');
             console.log(`clicked id: ${clickedId}`);
     
             $(`#${clickedId}-expand`).addClass('expanded');
     
         });
     
         $('.close-member-expand').on('click', function() {
             let clickedId = $(this).attr('id');
             console.log(`clicked id: ${clickedId}`);
             $(`#team-member-${clickedId}-expand`).addClass('reduce');
     
             setTimeout(function(){
                 $(`#team-member-${clickedId}-expand`).fadeOut("slow");
             },1000);

             setTimeout(function(){
                $('.team-member-expand').removeClass('expanded');
                $('.team-member-expand').removeClass('reduce');
            },1500);
     
         });
    } else {
        $('.team-member').on('click', function() {

            //$('.mobile-team-description').removeClass('mobile-expanded');

            /*$(`.mobile-team-description`).removeClass('mobile-expanded');
            $(`.mobile-team-description`).removeClass('mobile-hide');
            
             let clickedId = $(this).attr('id');
             console.log(`clicked id: ${clickedId}`);
            
             $(`#${clickedId}-mobile-info`).addClass('mobile-expanded');
             $('.close-member-mobile').css('opacity', '1');

             let topOffset = $(`#${clickedId}-mobile-info`).parent().offset().top;

             $(window).animate({scrollTop: topOffset});

             console.log('ofset top')
             console.log(topOffset);*/

     
         });
     
         /*$('.close-member-mobile').on('click', function() {
             let clickedId = $(this).attr('id');

            
            $(`#team-member-${clickedId}-mobile-info`).addClass('mobile-hide');
            $('.close-member-mobile').css('opacity', '0');

             setTimeout(function(){
                $(`.team-member`).removeClass('mobile-expanded');
                $(`.team-member`).removeClass('mobile-hide');
            },600);
     
         });*/
    };

    $(window).on('resize', function() {

        let width = $(this).width();

        if($(window).width() >= 575) {
            console.log(`window width: ${$(window).width()}`);
    
            $('.team-member').on('click', function() {
                //$('.team-member-expand').removeClass('expanded');
                //$('.team-member-expand').removeClass('reduce');
                 let clickedId = $(this).attr('id');
                 console.log(`clicked id: ${clickedId}`);
         
                 $(`#${clickedId}-expand`).addClass('expanded');
         
             });
         
             $('.close-member-expand').on('click', function() {
                 let clickedId = $(this).attr('id');
                 console.log(`clicked id: ${clickedId}`);
                 $(`#team-member-${clickedId}-expand`).addClass('reduce');
         
                 setTimeout(function(){
                     $(`#team-member-${clickedId}-expand`).fadeOut("slow");
                 },1000);
    
                 setTimeout(function(){
                    $('.team-member-expand').removeClass('expanded');
                    $('.team-member-expand').removeClass('reduce');
                },1500);
         
             });
        } else {
            /*$('.team-member').on('click', function() {
    
                //$('.mobile-team-description').removeClass('mobile-expanded');
    
                 let clickedId = $(this).attr('id');
                 console.log(`clicked id: ${clickedId}`);

                 $(`#${clickedId}-mobile-info`).addClass('mobile-expanded');
         
             });
         
             $('.close-member-mobile').on('click', function() {
                 let clickedId = $(this).attr('id');
    
                 $(`#team-member-${clickedId}-mobile-info`).slideUp('slow');
    
                 setTimeout(function(){
                    $(`.team-member`).removeClass('mobile-expanded');
                },2000);
         
             });*/
        };
    });



    //PORTFOLIO

    /*$('.portfolio-close').on('click', function() {
        if($('.portfolio-case').hasClass('col-expand')) {
            $('.portfolio-case').css('animation', 'fade-out-and-in 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both');
            setTimeout(()=> {
                $('.portfolio-case').removeClass('col-expand');
            }, 500);
        }
    });

    $('.portfolio-case').on('click', function() {
        $(this).addClass('col-expand');
    });*/



    $('.modal-open').on('click', function() {
        $('body').addClass('body-lock');
    });

    $('.modal-close').on('click', function() {
        $('body').removeClass('body-lock');
    });



    /*$('.close-member-expand').on('click', function() {
        $('body').removeClass('body-lock');
    });*/

    //ON SCROLL ANIMATIONS
    /*let isElementInViewport = (element) => {*/

        /*let winTop = $(window).scrollTop();
        let winBottom = winTop + $(window).height();
        let elPadding = element.innerWidth() - element.width();
        let elTop = element.scrollTop();
        let elBottom = elTop + element.height() + elPadding;

        console.log(`wintop: ${winTop}, winbottom: ${winBottom}, eltop: ${elTop}, elbottom: ${elBottom}`);

        return((elBottom <= winBottom) && (elTop >= winTop));*/

       /* let elementTop = element.offset().top;
        let elementBottom = elementTop + element.outerHeight();
    
        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + $(window).height();
    
        console.log(`wintop: ${viewportTop}, winbottom: ${viewportBottom}, eltop: ${elementTop}, elbottom: ${elementBottom}`);

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };*/

   /* $('.animation-on-scroll').each(function() {
        if(isElementInViewport($(this)) == true) {
            console.log(`is element ${$(this).text()} in view: ${isElementInViewport($(this))}`);
            $(this).removeClass('animation-on-scroll');
        }
    });*/

   /*$(window).on('resize scroll', function() {
        $('.animation-on-scroll').each(function() {
            if(isElementInViewport($(`#about-text-1`)) == true) {
                console.log(`is element ${$(`#about-text-1`).text()} in view: ${isElementInViewport($(`#about-text-1`))}`);
                $(`#about-text-1`).removeClass('animation-on-scroll');
            }
        });
    });*/


    //ABOUT US PAGE 

    $('.aboutus-switch').on('click', function() {

        if($(this).attr('id') == 'switch-1') {
            $(this).attr('id', 'switch-2');
            $(this).find('p').text('About Us');


            //$(this).find('img').attr('src', '../images/arrow_back.png');
            $(this).find('img').removeClass('arrow-back');
            $(this).find('img').addClass('arrow-forward');

            $('#about-us-heading').css('display', 'none');
            $('#history-heading').css('display', 'block');

            $('#aboutus-img').css('display', 'none');
            $('#history-img').css('display', 'block');

            $('#about-us-text-1').css('display', 'none');
            $('#history-text-1').css('display', 'block');

            $('#about-us-text-2').css('display', 'none');
            $('#history-text-2').css('display', 'block');

            


        } else {
            $(this).attr('id', 'switch-1');
            $(this).find('p').fadeOut().text('History').fadeIn();
            //$(this).find('img').attr('src', '../images/arrow.png');

            $(this).find('img').removeClass('arrow-forward');
            $(this).find('img').addClass('arrow-back');

            $('#about-us-heading').css('display', 'block');
            $('#history-heading').css('display', 'none');

            $('#history-img').css('display', 'none');
            $('#aboutus-img').css('display', 'block');


            $('#about-us-text-1').css('display', 'block');
            $('#history-text-1').css('display', 'none');

            $('#about-us-text-2').css('display', 'block');
            $('#history-text-2').css('display', 'none');
        };


    });



    //SCREEN SIZES

    if($(window).width() >= 1200) {
        console.log($(window).width());
        $('.main-nav').css('display', 'flex');
        $('.mobile-nav').css('display', 'none');
        
    } else if (($(window).width() >= 992) && ($(window).width() <= 1199)) {
        $('.main-nav').css('display', 'flex');
        $('.mobile-nav').css('display', 'none');
        
    } else if (($(window).width() >= 768) && ($(window).width() <= 991)) {
        $('.main-nav').css('display', 'none');
        $('.mobile-nav').css('display', 'flex');
    } else if (($(window).width() >= 576) && ($(window).width() <= 767)) {
        $('.main-nav').css('display', 'none');
        $('.mobile-nav').css('display', 'flex');
    } else if (($(window).width() >= 0) && ($(window).width() <= 575)) {
        $('.main-nav').css('display', 'none');
        $('.mobile-nav').css('display', 'flex');
    };


    //screen size less than 767px (mobile) - on load

    if(($(window).width() >= 0) && ($(window).width() <= 767)) {
        console.log($(window).width());
    
    } else {
    
    };

    //screen size less than 767px (mobile) - on resize
    $(window).on('resize', function() {

        let width = $(this).width();

        if(width >= 1200) {
            console.log($(window).width());
            $('.main-nav').css('display', 'flex');
            $('.mobile-nav').css('display', 'none');
        } else if ((width >= 992) && (width <= 1199)) {
            $('.main-nav').css('display', 'flex');
            $('.mobile-nav').css('display', 'none');
        } else if ((width >= 768) && (width <= 991)) {
            $('.main-nav').css('display', 'none');
            $('.mobile-nav').css('display', 'flex');
        } else if ((width >= 576) && (width <= 767)) {
            $('.main-nav').css('display', 'none');
            $('.mobile-nav').css('display', 'flex');
        } else if ((width >= 0) && (width <= 575)) {
            $('.main-nav').css('display', 'none');
            $('.mobile-nav').css('display', 'flex');
        };
    });


    
});