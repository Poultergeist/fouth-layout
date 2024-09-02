$(document).ready(function() {
    $('.site-dev-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1, 
        infinite: false,
        centerMode: true,
        autoplay: false,
        centerPadding: 30,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    infinite: true,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    infinite: true
                }
            }
        ]
    })
})