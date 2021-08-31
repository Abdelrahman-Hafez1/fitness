    $(document).ready(function(){
    const burgerButton=$('.burger-button');
    const navLinks=$('.nav-links');
    const searchIcon=$('.nav-links .search-icon');
    
    $(burgerButton).click(function(){
        $(navLinks).slideToggle(500);
    });

    $(searchIcon).click(function(){
        $('.search-input').fadeToggle(300);
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>=100){
            if($(window).scrollTop()>$('nav').offset().top){
                $('nav').css({
                    transition:'top 0.4s',
                    padding:'10px 0',
                    borderBottom:'2px solid #dd3333'
                })
                $('nav').addClass('scroll-nav');
                $('nav').offset({
                    top:$(window).scrollTop()
                });
                $('.nav-links ul li a').addClass('nav-links-a-color')

            }else{
                $('nav').css('transition','none')
                $('nav').offset({
                    top:$(window).scrollTop()
                });
            }
            
        }
        else{
            $('nav').offset({
                top:'0'
            });
            $('nav').css({
                padding:'20px 0',
                border:'none'

            })
            $('nav').removeClass('scroll-nav');
            $('.nav-links ul li a').removeClass('nav-links-a-color')
        }
    });

    $('.watch-video').click(function(){
        $('.watch-overlay').fadeIn(1000);
        $('.video').delay(1000).fadeIn(200);
    });
    $('.watch-overlay').click(function(e){
        
            $('.video').fadeOut(500);
            $('.watch-overlay').delay(500).fadeOut(300);

        
    });
    const form_div=$('.form-D');
    
    $('.join-now').click(function(){
        $('.form-section').fadeIn(300);

        
        $('.forms').css('display','block')
        $('.forms').animate({
            top:'50%',
            left:'50%',
        },500,);
        $('.forms').animate({
            width:'80%'
        },500);
        $('.forms').animate({
            height:'300px'
        },500,function(){
            $('.forms h2').animate({
                opacity:'1'
            },500);
            $(form_div).animate({
                display:'block',
                left:'0',
            },500);
            $('.submit').delay(500).fadeTo(200,1);
            $('.create').delay(500).fadeTo(200,1);
        });
        
        
    });
    let valid=false;

    $('.create').click(function(){
        if(!valid){
            $('.forms').animate({
                height:'400px'
            },300);
            $('.forms .form-cont').animate({
                top:'-95%'
            },300);
            valid=true;
        }else{
            $('.forms').animate({
                height:'300px'
            },300);
            $('.forms .form-cont').animate({
                top:'0'
            },300);
            valid=false;
        }
        
    });
    $('.form-section').click(function(e){
        if($(e.target).attr("class")=='form-section'){
             $('.forms').fadeOut(300);
             $(this).delay(300).fadeOut(500,function(){
                $('.forms').css({
                    top:'-100%',
                    height:'30px',
                    width:'10%'
                });
                valid=false;
               $('.forms h2').css('opacity','0');
               $(form_div).css({
                   left:'-100%'
               });
               $('.forms .form-cont').css('top','0');
               $('.submit').css('opacity','0');
               $('.create').css('opacity','0');
             })
             
            
        }
    });
    const filters=$('.filter');
    const pictures=$('.gallery .imgs .col-md-6');
    $(filters).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(pictures).hide(300);
        $($(this).data('set')).show(10);

    });

    // aos animation
    AOS.init({
        duration: 1000,
      });

    // venobox
    $(window).on('load', function() {
        $('.venobox').venobox();
      });

    //   owl carousel
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
})

