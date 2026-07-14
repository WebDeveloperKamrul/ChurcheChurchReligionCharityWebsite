/***************************************************
==================== JS INDEX ======================
****************************************************

01. banner Js
02. Community Js
03. service two Js
04. testimonial two Js
05. compassion three Js
06. testimonial three Js
07. compassion four Js
****************************************************/



(function ($) {
    "use strict";

    ////////////////////////////////////////////////////
	// 01. banner Js
	const bannerSlide = new Swiper('banner-active', {
		speed:1500,
		loop: true,
		slidesPerView: 1,
		autoplay: true,
		effect:'fade',
		breakpoints: {
			'1600': {
				slidesPerView:1,
			},
			'1400': {
				slidesPerView:1,
			},
			'1200': {
				slidesPerView:1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
			a11y: false,
		},
		pagination: {
			el: ".banner-dots",
			clickable:true,
		},

	});



    ////////////////////////////////////////////////////
	// 02. Community Js
	var slider = new Swiper('.community-active', {
		slidesPerView: "auto",
		spaceBetween: 30,
		loop: true,
		autoplay:true,
		centeredSlides: true,
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1.6,
			},
			'425': {
				slidesPerView: 1,
			},
			'375': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});





    ////////////////////////////////////////////////////
	// 03. service two Js
	var slider = new Swiper('.service-two-active', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2.3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
		// pagination
		pagination: {
			el: ".service-two-dot",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
			},
		},
	});



    ////////////////////////////////////////////////////
	// 04. testimonial two Js
    var slider = new Swiper('.testimonial-two-active', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 2000,
        autoplay: true,
        // Navigation arrows
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
    });


    ////////////////////////////////////////////////////
	// 05. compassion three Js
    var slider = new Swiper('.compassion-three-active', {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        speed: 2500,
        autoplay: true,
        centeredSlides: true,
        breakpoints: {
            '1600': {
                slidesPerView: 4.3,
            },
            '1400': {
                slidesPerView: 3.3,
            },
            '1200': {
                slidesPerView: 2.8,
            },
            '992': {
                slidesPerView: 2.4,
            },
            '768': {
                slidesPerView: 1.8,
            },
            '576': {
                slidesPerView: 1.5,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });


    ////////////////////////////////////////////////////
	// 06. testimonial three Js
    var slider = new Swiper('.testimonial-three-active', {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        speed: 2500,
        autoplay: true,
        breakpoints: {
            '1600': {
                slidesPerView: 4,
            },
            '1400': {
                slidesPerView: 2.8,
            },
            '1200': {
                slidesPerView: 2.4,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });




	////////////////////////////////////////////////////
	// 07. compassion four Js
    var slider = new Swiper('.compassion-four-active', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 7500,
        autoplay: false,
        // Navigation arrows
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
    });



})(jQuery);