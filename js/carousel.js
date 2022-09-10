
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ["Prev","Next"],
    
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

//  use this code if upper code encounter with some issues

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin: 30,
    
//     nav:true,
//     navText: ["Prev","Next"],

//     dots:false,

//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
// })
