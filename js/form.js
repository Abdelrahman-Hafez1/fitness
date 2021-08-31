$(document).ready(function(){
    var form_div=$('.form-D');

    $('.forms').animate({
        top:'50%',
        left:'50%',
    },500,);
    $('.forms').animate({
        width:'50%'
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
        },500)
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
        
    })
})