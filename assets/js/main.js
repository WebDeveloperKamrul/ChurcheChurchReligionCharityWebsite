/***************************************************
==================== JS INDEX ======================
****************************************************

01. Mobile Nav Menu Dropdown Js
02. Scroll Back to Top Js
03. add active class to navbar menu current page Js
04. Settings Panel Js
05. Cursor Js
06. Direction Rtl Js
07. Toast Notification Js
08. Delete Js
09. Form Submit Js
10. Password Show Hide Js
11. AOS Js
12. magnific Popup 
13. Add Attribute For Bg Image Js
14. Odometer Counter Js
15. Search Js
16. Preloader Js
17. Sticky Js
18. Offcanvas Sidebar Js
19. Floating Progress Js
20. knob progress Js
21. nice Select Js
22. Mouse active Js
23. amount active Js
24. Donate active Js
25. Countdown Js
26. Ecommerce Cart  Js
27. video play  Js
28. button hover animation Js



****************************************************/



(function ($) {
    "use strict";

    // ==========================================
    //      Start Document Ready function
    // ==========================================
    $(document).ready(function () {


        ////////////////////////////////////////////////////
        // 01. Mobile Nav Menu Dropdown Js
        function toggleSubMenu() {
            if ($(window).width() <= 1199) {
                $(".has-submenu")
                    .off("click")
                    .on("click", function () {
                        $(this)
                            .toggleClass("active")
                            .siblings(".has-submenu")
                            .removeClass("active")
                            .find(".nav-submenu")
                            .slideUp(300);
                        $(this).find(".nav-submenu").stop(true, true).slideToggle(300);
                    });
            } else {
                $(".has-submenu").off("click");
            }
        }
        toggleSubMenu();
        $(window).resize(toggleSubMenu);




            ////////////////////////////////////////////////////
            // 02. Scroll Back to Top Js
            function back_to_top() {
                var btn = $('#back_to_top');
                var btn_wrapper = $('.back-to-top-wrapper');
                $(window).on('scroll', function () {
                    if ($(this).scrollTop() > 300) {
                        btn_wrapper.addClass('back-to-top-btn-show');
                    } else {
                        btn_wrapper.removeClass('back-to-top-btn-show');
                    }
                });
                btn.on('click', function (e) {
                    e.preventDefault();
                    $('html, body').animate({ scrollTop: 0 }, 300);
                });
            }
            back_to_top();




        ////////////////////////////////////////////////////
        // 03. add active class to navbar menu current page Js
        function dynamicActiveMenuClass(selector) {
            let FileName = window.location.pathname.split("/").reverse()[0];
            if (FileName === "" || FileName === "index.html") {
                selector
                    .find("li.nav-menu__item.has-submenu")
                    .eq(0)
                    .addClass("activePage");
            } else {
                selector.find("li").removeClass("activePage");
                selector.find("li").each(function () {
                    let anchor = $(this).find("a");
                    if ($(anchor).attr("href") == FileName) {
                        $(this).addClass("activePage");
                    }
                });
                selector.children("li").each(function () {
                    if ($(this).find(".activePage").length) {
                        $(this).addClass("activePage");
                    }
                });
            }
        }
        if ($("ul").length) {
            dynamicActiveMenuClass($("ul"));
        }



        ////////////////////////////////////////////////////
        // 04. Settings Panel Js
        $(".settings-button").on("click", function () {
            $(".settings-panel").toggleClass("active");
            $(this).toggleClass("active");
        });
        $(document).on(
            "click",
            ".settings-panel__buttons .settings-panel__button",
            function () {
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
            }
        );



        ////////////////////////////////////////////////////
        // 05. Cursor Js
        $(".cursor-animate").on("click", function () {
            $("body").removeClass("remove-animate-cursor");
        });
        $(".cursor-default").on("click", function () {
            $("body").addClass("remove-animate-cursor");
        });


        ////////////////////////////////////////////////////
        // 06. Direction Rtl Js
        $(".direction-ltr").on("click", function () {
            $("html").attr("dir", "ltr");
        });
        $(".direction-rtl").on("click", function () {
            $("html").attr("dir", "rtl");
        });


        ////////////////////////////////////////////////////
        // 07. Toast Notification Js
        function toastMessage(messageType, messageTitle, messageText, messageIcon) {
            let $toastContainer = $("#toast-container");
            let $toast = $("<div>", {
                class: `toast-message ${messageType}`,
                html: `
                    <div class="toast-message__content">
                        <span class="toast-message__icon">
                        <i class="${messageIcon}"></i>
                        </span>
                        <div class="flex-grow-1">
                        <div class="d-flex align-items-start justify-content-between mb-1">
                            <h6 class="toast-message__title">${messageTitle}</h6>
                            <button type="button" class="toast-message__close">
                            <i class="ph-bold ph-x"></i>
                            </button>
                        </div>
                        <span class="toast-message__text">${messageText}</span>
                        </div>
                    </div>
                    <div class="progress__bar"></div>
                    `,
            });
            $toastContainer.append($toast);
            setTimeout(() => {
                $toast.addClass("active");
            }, 50);
            let totalDuration = 3500;
            let startTime = Date.now();
            let remainingTime = totalDuration;
            let toastTimeout = setTimeout(hideToast, remainingTime);
            function hideToast() {
                $toast.removeClass("active");
                setTimeout(() => {
                    $toast.remove();
                }, 500);
            }
            $toast.find(".toast-message__close").on("click", function () {
                $toast.removeClass("active");
                setTimeout(() => {
                    $toast.remove();
                }, 500);
            });
            $toast.on("mouseenter", function () {
                remainingTime -= Date.now() - startTime;
                clearTimeout(toastTimeout);
            });
            $toast.on("mouseleave", function () {
                startTime = Date.now();
                toastTimeout = setTimeout(hideToast, remainingTime);
            });
        }



        ////////////////////////////////////////////////////
        // 08. Delete Js
        $(document).on("click", ".delete-button", function () {
            $(this).closest(".delete-item").addClass("d-none");
            toastMessage(
                "danger",
                "Deleted",
                "You deleted successfully!",
                "ph-bold ph-trash"
            );
        });


        ////////////////////////////////////////////////////
        // 09. Form Submit Js
        $(document).on("submit", ".form-submit", function (e) {
            e.preventDefault();
            $("input").val("");
            $("textarea").val("");
            toastMessage(
                "success",
                "Success",
                "Form submitted successfully!",
                "ph-fill ph-check-circle"
            );
        });


        


        ////////////////////////////////////////////////////
        // 10. Password Show Hide Js
        $(".toggle-password").on("click", function () {
            $(this).toggleClass("active");
            var input = $($(this).attr("id"));
            if (input.attr("type") == "password") {
                input.attr("type", "text");
                $(this).removeClass("ph-bold ph-eye-closed");
                $(this).addClass("ph-bold ph-eye");
            } else {
                input.attr("type", "password");
                $(this).addClass("ph-bold ph-eye-closed");
            }
        });



        ////////////////////////////////////////////////////
        // 11. AOS Js
        AOS.init({
            once: false,
            offset: 0,
            anchorPlacement: "top-bottom",
        });

    });
    // ==========================================
    //      End Document Ready function
    // ==========================================





    ////////////////////////////////////////////////////
    // 12. magnific Popup Js
    $('.open-popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });


    ////////////////////////////////////////////////////
    // 13. Add Attribute For Bg Image Js
    $(".bg-img").each(function () {
        var img = $(this).data("background-image");
        if (img) {
            $(this).css("background-image", "url('" + img + "')");
        }
    });




    ////////////////////////////////////////////////////
    // 14. Odometer Counter Js
    if ($(".odometer").length > 0) {
        $(".odometer").each(function () {
            var $this = $(this);
            $this.waypoint(
            function () {
                var countNumber = $this.attr("data-count");
                $this.html(countNumber);
            },
            {
                offset: "100%",
                triggerOnce: true
            }
            );
        });
    }



    ////////////////////////////////////////////////////
    // 15. Search Js
    $(".open-search").on("click", function () {
        $(".search_popup").addClass("search-opened");
        $(".search-po5up-overlay").addClass("search-popup-overlay-open");
    });
    $(".search_close_btn").on("click", function () {
        $(".search_popup").removeClass("search-opened");
        $(".search-popup-overlay").removeClass("search-popup-overlay-open");
    });
    $(".search-popup-overlay").on("click", function () {
        $(".search_popup").removeClass("search-opened");
        $(this).removeClass("search-popup-overlay-open");
    });



    ////////////////////////////////////////////////////
    // 16. Preloader Js
    var percentage = 0;
      var LoadingCounter = setInterval(function () {
        if (percentage <= 100) {
          $("#loading-screen .loading-counter").text(percentage + "%");
          $("#loading-screen .bar").css("width", (100 - percentage) / 2 + "%");
          $("#loading-screen .progress-line").css("transform", "scale(" + percentage / 100 + ")");
          percentage++;
        } else {
          $("#loading-screen").fadeOut(500);
          setTimeout(() => {
            $("#loading-screen").remove();
          }, 500);
          clearInterval(LoadingCounter);
        }
      }, 10);


      


    ////////////////////////////////////////////////////
    // 17. Sticky Js
    $(window).on('scroll', function() {
      if ($(window).scrollTop() >= 260) {
        $('.header').addClass('fixed-header');
      }
      else {
          $('.header').removeClass('fixed-header');
      }
    });



    ////////////////////////////////////////////////////
    // 18. Offcanvas Sidebar Js
    $(".tw-menu-bar").on("click", function () {
        $(".twoffcanvas").addClass("opened");
        $(".body-overlay").addClass("apply");
    });
    $(".close-btn").on("click", function () {
        $(".twoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });
    $(".body-overlay").on("click", function () {
        $(".twoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });


    ////////////////////////////////////////////////////
    // 19. Floating Progress Js
    const progressContainers = document.querySelectorAll('.progress-container');
    function setPercentage(progressContainer) {
        const percentage = progressContainer.getAttribute('data-percentage') + '%';
        const progressEl = progressContainer.querySelector('.progress');
        const percentageEl = progressContainer.querySelector('.percentage');
        progressEl.style.width = percentage;
        percentageEl.innerText = percentage;
        percentageEl.style.insetInlineStart = percentage;
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressContainer = entry.target;
                setPercentage(progressContainer);
                progressContainer.querySelector('.progress').classList.remove('active');
                progressContainer.querySelector('.percentage').classList.remove('active');
                observer.unobserve(progressContainer);
            }
        });
    }, {
        threshold: 0.5
    });
    progressContainers.forEach(progressContainer => {
        observer.observe(progressContainer);
    });



    ////////////////////////////////////////////////////
    // 20. knob progress Js
    if (typeof ($.fn.knob) !== 'undefined') {
        $('.knob').each(function () {
            var $this = $(this);
            var knobVal = $this.attr('data-rel');
            $this.knob({
                'draw': function () {
                    $(this.i).val(this.cv + '%');
                }
            });
            gsap.fromTo($({
                val: 0
            }), {
                val: 0
            }, {
                val: knobVal,
                duration: 2,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: $this,
                    start: "top 80%", // when element top is 80% from top of viewport
                    once: true, // trigger only once
                },
                onUpdate: function () {
                    $this.val(Math.ceil(this.targets()[0].val)).trigger('change');
                }
            });
        });
    }



    ////////////////////////////////////////////////////
    // 21. nice Select Js
    $(document).ready(function() {
        $('select').niceSelect();
    });




    ////////////////////////////////////////////////////
    // 22. Mouse active Js
	$(document).ready(function () {
		$(
		".team-wrapper, .contact-donation-list ul li, .team-two-wrapper, .blog-two-wrapper, .compassion-three-wrapper, .team-three-wrapper, .blog-three-wrapper, .map-four-item"
		).on("mouseenter", function () {
		$(this).addClass("active").siblings().removeClass("active");
		});
		$(
		".team-wrapper, .contact-donation-list ul li, .team-two-wrapper, .blog-two-wrapper, .compassion-three-wrapper, .team-three-wrapper, .blog-three-wrapper, .map-four-item"
		).on("mouseenter", function () {
		$(this).addClass("active");
		$(this)
			.parent()
			.siblings()
			.find(
			".team-wrapper, .contact-donation-list ul li, .team-two-wrapper, .blog-two-wrapper, .compassion-three-wrapper, .team-three-wrapper, .blog-three-wrapper, .map-four-item"
			)
			.removeClass("active");
		});
	});



    ////////////////////////////////////////////////////
    // 23. amount active Js
    var selector = '.single_amount_wrapper .single_amount';
    $(selector).on('click', function(){
        $(selector).removeClass('active');
        $(this).addClass('active');
    });


    ////////////////////////////////////////////////////
    // 24. Donate active Js
    $('.donation_wrapper > .single_amount_wrapper > .single_amount').on('click', function() {
        $('.donation_wrapper > .amount_wrapper > input')
            .val(parseFloat($(this).data('value')).toFixed(2))
            .trigger('change');
    });



    ////////////////////////////////////////////////////
    // 25. Countdown Js
    (function () {
    const second = 1000,
            minute = second * 60,
            hour   = minute * 60,
            day    = hour * 24;

    // prepare elements once
    const $ = id => document.getElementById(id);
    const elDays = $('days'), elHours = $('hours'), elMinutes = $('minutes'), elSeconds = $('seconds');
    const elHeadline = $('headline'), elCountdown = $('countdown'), elContent = $('content');

    // Example target date (change as needed)
    const target = new Date('12/12/' + new Date().getFullYear());
    if (new Date() > target) target.setFullYear(target.getFullYear() + 1);
    const countDown = target.getTime();

    const tick = () => {
        const now = Date.now();
        const distance = countDown - now;

        // Defensive: make sure distance is a finite number
        if (!Number.isFinite(distance)) {
        console.error('Countdown distance is not a finite number:', distance);
        // Optionally stop the interval if date parsing failed
        clearInterval(timer);
        return;
        }

        // If negative or zero, show finished state (but clamp to zero for display)
        const clamped = Math.max(0, distance);

        const days    = Math.floor(clamped / day);
        const hours   = Math.floor((clamped % day) / hour);
        const minutes = Math.floor((clamped % hour) / minute);
        const seconds = Math.floor((clamped % minute) / second);

        // Only update elements that actually exist (avoid null.innerText errors)
        if (elDays)    elDays.innerText    = days;
        if (elHours)   elHours.innerText   = hours;
        if (elMinutes) elMinutes.innerText = minutes;
        if (elSeconds) elSeconds.innerText = seconds;
        if (distance <= 0) {
        if (elHeadline)  elHeadline.innerText = 'Today is the Day!';
        if (elCountdown) elCountdown.style.display = 'none';
        if (elContent)   elContent.style.display = 'block';
        clearInterval(timer);
        }
    };
    tick();
    const timer = setInterval(tick, 1000);
    }());




    ////////////////////////////////////////////////////
    // 26. Ecommerce Cart  Js
	function tw_ecommerce() {
        $('.tw-cart-minus').on('click', function () {
			var $input = $(this).parent().find('input');
			var count = Number($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$('.tw-cart-plus').on('click', function () {
			var $input = $(this).parent().find('input');
			$input.val(Number($input.val()) + 1);
			$input.change();
			return false;
		});
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));

        
		$('.checkout-payment-item label').on('click', function () {
			$(this).siblings('.checkout-payment-desc').slideToggle(400);
			
		});

		// Show Login Toggle Js
		$('.checkout-login-form-reveal-btn').on('click', function () {
			$('#ReturnCustomerLoginForm').slideToggle(400);
		});


		// 18. Show Coupon Toggle Js
		$('.checkout-coupon-form-reveal-btn').on('click', function () {
			$('#CheckoutCouponForm').slideToggle(400);
		});
	}
	tw_ecommerce();
    const box = document.querySelector('.cart-ip-wrapper');
    if (box) { 
        box.style.overflowX = 'auto';
        box.style.whiteSpace = 'nowrap';
    }




    ////////////////////////////////////////////////////
    // 27. video play  Js
    $('#video-poster').click(function(){
        $(this).css({"display": "none", "opacity": "0"});
        $('#video').get(0).play(); 
    });
    $('#video').on('ended',function(){
        $("#video-poster").css({"display": "block", "opacity": "1"});
    });



    ////////////////////////////////////////////////////
    // 28. button hover animation Js
	$(".tw-hover-btn").on("mouseenter", function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;
		$(this).find(".tw-hover-btn-circle-dot").css({
			top: y,
			left: x,
		});
	});
	$(".tw-hover-btn").on("mouseout", function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;
		$(this).find(".tw-hover-btn-circle-dot").css({
			top: y,
			left: x,
		});
	});


})(jQuery);