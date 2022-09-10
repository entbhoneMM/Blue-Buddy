$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 30,
    
    nav:true,
    navText: ["Prev","Next"],

    
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

//  use this code if upper code encounter with some issues
// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel();
// });

// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 5
//         }
//     }
// })