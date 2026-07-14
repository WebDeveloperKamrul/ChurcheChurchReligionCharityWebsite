/***************************************************
==================== JS INDEX ======================
****************************************************

01. Section Title Js
02. split invert color Js
03. Mobile Menu Js
04. project scroll Js
05. hover reveal Js
06. card scrollTrigger Js
07. button hover Js
08. Feature 6 Hover Js
****************************************************/





gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
////////////////////////////////////////////////////
// 01. Section Title Js
if ($(window).width() > 768 && $(".tw-char-animation").length > 0) {
    let char_come = gsap.utils.toArray(".tw-char-animation");
    char_come.forEach(splitTextLine => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: "top 90%",
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
            },
        });
        const itemSplitted = new SplitText(splitTextLine, {
            type: "chars, words",
        });
        gsap.set(splitTextLine, {
            perspective: 300
        });
        itemSplitted.split({
            type: "chars, words"
        });
        tl.from(itemSplitted.chars, {
            duration: 1,
            delay: 0.5,
            x: 100,
            autoAlpha: 0,
            stagger: 0.05,
        });
    });
}




////////////////////////////////////////////////////
// 02. split invert color Js
const split = new SplitText(".text-invert", {
    type: "lines"
});
split.lines.forEach(target => {
    gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
            trigger: target,
            scrub: 1,
            start: "top 85%",
            end: "bottom center",
        },
    });
});



////////////////////////////////////////////////////
// 03. Mobile Menu Js
var mmm = gsap.matchMedia();
var mtl = gsap.timeline({
    paused: true
});
const toggleMobileMenu = document.querySelector(".toggle-mobileMenu");
const closeButton = document.querySelector(".close-button");
const mobileSideOverlay = document.querySelector(".side-overlay");
mmm.add("(max-width: 1199px)", () => {
    mtl.to(".side-overlay", {
        opacity: 1,
        visibility: "visible",
        duration: 0.15,
    });

    mtl.to(".mobile-menu", {
        x: 0,
        delay: 0.2,
        duration: 0.2,
    });

    mtl.from(".nav-menu__item", {
        opacity: 0,
        duration: 0.2,
        y: -60,
        stagger: 0.08,
    });

    toggleMobileMenu.addEventListener("click", function () {
        mtl.play();
        document.body.style.overflow = "hidden";
    });

    closeButton.addEventListener("click", function () {
        mtl.reverse();
        document.body.style.overflow = "";
    });

    mobileSideOverlay.addEventListener("click", function () {
        mtl.reverse();
        document.body.style.overflow = "";
    });
});



////////////////////////////////////////////////////
// 04. project scroll Js
let pr = gsap.matchMedia();
pr.add("(min-width: 991px)", () => {
    let tl = gsap.timeline();
    let projectpanels = document.querySelectorAll('.project-panel')
    projectpanels.forEach((section, index) => {
        tl.to(section, {
            scrollTrigger: {
                trigger: section,
                pin: section,
                scrub: 1,
                start: 'center center',
                end: "bottom 60%",
                endTrigger: '.project-panel-area',
                pinSpacing: false,
                markers: false,
            },
        })
    })
});





////////////////////////////////////////////////////
// 05. hover reveal Js
const hoverItem = document.querySelectorAll(".hover__reveal-item");
function moveImage(e, hoverItem, index) {
	const item = hoverItem.getBoundingClientRect();
	const x = e.clientX - item.x;
	const y = e.clientY - item.y;
	if (hoverItem.children[index]) {
		hoverItem.children[index].style.transform = `translate(${x}px, ${y}px)`;
	}
}
hoverItem.forEach((item, i) => {
	item.addEventListener("mousemove", (e) => {
		setInterval(moveImage(e, item, 1), 50);
	});
});


////////////////////////////////////////////////////
// 06. card scrollTrigger Js
gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 1200) {
    const items = document.querySelectorAll(".choose-us-wrap .choose-us-item");
    if (items.length < 4) return; // skip if items are missing
    const about = gsap.timeline({
      scrollTrigger: {
        trigger: ".choose-us-wrap",
        start: "top 60%",
        toggleActions: "play none none reverse",
        markers: false,
      },
      defaults: {
        ease: "ease1",
        duration: 1,
      },
    });
    about
      .from(items[0], {
        xPercent: 100,
        rotate: -8
      })
      .from(items[1], {
        xPercent: 30,
        rotate: 4.13
      }, "<")
      .from(items[2], {
        xPercent: -30,
        rotate: -6.42
      }, "<")
      .from(items[3], {
        xPercent: -60,
        rotate: -12.15
      }, "<")
      .from(items[4], {
        xPercent: -120,
        rotate: 12.15
      }, "<");
  }
});




////////////////////////////////////////////////////
// 07. button hover Js
$('.tw-hover-btn').on('mouseenter', function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    $(this).find('.tw-btn-circle-dot').css({
        top: y,
        left: x
    });
});
$('.tw-hover-btn').on('mouseout', function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    $(this).find('.tw-btn-circle-dot').css({
        top: y,
        left: x
    });
});
var hoverBtns = gsap.utils.toArray(".tw-hover-btn-wrapper");
const hoverBtnItem = gsap.utils.toArray(".tw-hover-btn-item");
hoverBtns.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
        callParallax(e);
    });
    function callParallax(e) {
        parallaxIt(e, hoverBtnItem[i], 60);
    }
    function parallaxIt(e, target, movement) {
        var $this = $(btn);
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;
        gsap.to(target, 1, {
            x: ((relX - $this.width() / 2) / $this.width()) * movement,
            y: ((relY - $this.height() / 2) / $this.height()) * movement,
            ease: Power2.easeOut,
        });
    }
    $(btn).mouseleave(function (e) {
        gsap.to(hoverBtnItem[i], 1, {
            x: 0,
            y: 0,
            ease: Power2.easeOut,
        });
    });
});




////////////////////////////////////////////////////
// 08. Feature 6 Hover Js
// =========================   Animation Js Start ==============
$('.service-four-list-wrap .service-four-list-item').on("mouseenter", function () {
  $('#service-four-thumb').removeClass().addClass($(this).attr('rel'));
  $(this).addClass('active').siblings().removeClass('active');
});



/* **************************************************************************** 
                          Custom GSAP js start 
****************************************************************************  */