function abc() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

abc();

var tl = gsap.timeline();
tl.to("#first1",
  {
    width: "100%",
    duration: 2,
    delay: 2,


  }
)
  .to("#first2",
    {
      width: "100%",
      duration: 2.2,
      delay: -2,

    }
  )
  .to("#first3",
    {
      width: "100%",
      duration: 3.2,
      delay: -2.1,


    }
  )
  .to("#first4",
    {
      width: "100%",
      duration: 3.3,
      delay: -3,


    }
  )
  .to("#first5",
    {
      width: "100%",
      duration: 3.4,
      delay: -3,


    }
  )
  .to("#first6",
    {
      width: "100%",
      duration: 3.4,
      delay: -3
    }
  )
tl.to("#first7",
  {
    width: "100%",
    duration: 3.5,
    delay: -3,


  }
)
tl.to("#first7",
  {
    height: "64px",
    // duration:3.5,
    delay: 3,


  }
)

gsap.from(".main_div1", {
  scrollTrigger: {
    trigger: ".main_div",
    scroller: "#section6_lower",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none",

});

gsap.to("#first7 h2",{
  duration:2,
  delay:10,
  ease:Expo.easeInOut,
  opacity:1,
  y:-5
})
gsap.to("#section1 h1",{
  duration:2,
  delay:10,
  ease:Expo.easeInOut,
  opacity:1,
  y:-10
})






