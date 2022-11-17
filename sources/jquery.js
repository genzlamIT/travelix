$(document).ready(function() {
    //package slider
    $('.package__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });


    //feedback slider 
    $('.feedback__list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow:"<button type='button' class='slick-btn slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-btn slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
})