
$(document).ready(function() {
    // Magnific Popup Active
    $('.project-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        }
    });
    
    // Counter-up Active
    $('.counterup').counterUp();

    // Slick Active
    $('.testimonials').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        loop: true
    });
});


$(window).load(function(){

    // Sticky Menu
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 20) {
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
    })
})