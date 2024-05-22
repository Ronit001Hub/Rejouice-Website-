// SCROLL TRIGGER CODEPEN JS FILE ....

function locomotiveCodepen() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotiveCodepen();

// YOUR JS CODE WRITE BELOW :-- BE REMEMBER =>  DO NOT TOUCH ABOVE CODE OR ANY CHANGES...

function cursorAnim() {
  var cursor = document.querySelector(".playReel");
  var frontPage = document.querySelector("#front-page");

  frontPage.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      left: dets.x + "px",
      top: dets.y + "px",
    });
  });

  frontPage.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      transform: "translate(-50%,-50%) scale(1)",
      opacity: 1,
    });
  });

  frontPage.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      transform: "translate(-50%,-50%) scale(0)",
      opacity: 0,
    });
  });
}
cursorAnim();

function page1_Animation() {
  var page1H2 = document.querySelector("#page1>h2");
  var frontPage = document.querySelector("#front-page");
  var text = document.querySelector("nav > p");
  var text2 = document.querySelector(".n-left > h1");
  var text3 = document.querySelectorAll("#front-page > h1 ");

  gsap.from(page1H2, {
    x: 100,
    duration: 1,
    ease: Power3,
    delay: 1,
    opacity: 0,
  });

  setTimeout(() => {
    gsap.to(page1H2, {
      x: -150,
      duration: 1,
      ease: Power3,
      opacity: 0,
      display: "none",
    });

    setTimeout(() => {
      gsap.to(frontPage, {
        backgroundColor: "transparent",
        duration: 2,
      });

      gsap.to(text, {
        display: "block",
        x: -20,
        duration: 1,
        ease: Power2,
      });

      gsap.to(text2, {
        display: "block",
        x: -20,
        duration: 1,
        ease: Power2,
      });

      gsap.to(text3, {
        display: "block",
        y: -8,
        duration: 1,
        stagger: 0.2,
        ease: Power2,
      });
    }, 900);
  }, 2700);
}
page1_Animation();

gsap.from(".head>p , #page2>p", {
  y: 120,
  opacity: 0,
  duration: 2.2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 47%",
    end: "top 46%",
    scrub: 2,
  },
});

gsap.from("#page2>h1", {
  y: 120,
  opacity: 0,
  duration: 2.2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: " #page2>h4",
    scroller: "#main",
    start: "77% 92%",
    end: "78% 91%",
    scrub: 2,
  },
});

gsap.from("#page4>.header>p", {
  y: 120,
  opacity: 0,
  duration: 2.2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top 47%",
    end: "top 46%",
    scrub: 2,
  },
});

gsap.from("#page4>p", {
  y: 120,
  opacity: 0,
  duration: 2.2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top 47%",
    end: "top 46%",
    scrub: 2,
  },
});

function cursorAnimPage5() {
  var cursor = document.querySelector(".takeOne");
  var frontPage = document.querySelector("#page5");

  frontPage.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      left: dets.x + "px",
      top: dets.y + "px",
    });
  });

  frontPage.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      transform: "translate(-50%,-50%) scale(1)",
      opacity: 1,
    });
  });

  frontPage.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      transform: "translate(-50%,-50%) scale(0)",
      opacity: 0,
    });
  });
}
cursorAnimPage5();

// Iniatializer swiperJS
function swiperJS() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
}
swiperJS();

gsap.from(".touch>h1 ,.touch>h3", {
  y: 120,
  opacity: 0,
  duration: 2.2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    start: "top 47%",
    end: "top 46%",
    scrub: 2,
  },
});


gsap.from("#page7 > h3 ,#page7 > h1", {
  y: 120,
  opacity: 0,
  duration: 2.2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#page7",
    scroller: "#main",
    start: "top 47%",
    end: "top 46%",
    scrub: 2,
  },
});