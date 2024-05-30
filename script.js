var width = window.innerWidth;
console.log(width)

var timeline = gsap.timeline();

timeline.from(".links li ", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.3
})


timeline.from(".intro h1", {
    y: 40,
    opacity: 0,
    duration: 1.2,
})

timeline.from(".intro h2", {
    scale: 0,
    opacity: 0,
    duration: 0.3,
    // stagger: 0.3
})

timeline.from(".intro span", {
    opacity: 0,
    scale: 0,
    duration: 0.2,
    // stagger: 0.1
})

timeline.from(".intro .btn",{
    opacity: 0,
    y: 15,
    duration: 0.2
})

timeline.from(".img-content img", {
    x: 20,
    opacity: 0,
    duration: 0.5,
})

timeline.from(".nav_btn", {
    opacity: 0,
    duration: 0.5,
});

// timeline.from(".sun",{
//     opacity:0, 
//     x: -10,
//     duration: 0.2
// })

var timeline2 = gsap.timeline();

timeline2.from(".box1", {
    opacity: 0,
    scale: 0.88,
    duration: 0.2,
    scrollTrigger: {
        trigger: ".aboutme",
        scroll: "body",
        start: "top 80%",
        end: "top 20%",
        scrub: 0.1
    }
});

timeline2.from(".about-title", {
    opacity: 0, 
    x: 30,
    duration: 0.3,
    scrollTrigger: {
        trigger: ".aboutme",
        scroll: "body",
        start: "top 60%",
        end: "top 20%",
        scrub: 0.1
    }
})

timeline2.from(".aboutme p", {
    opacity: 0, 
    y: 20,
    duration: 0.3,
    stagger: 1,
    scrollTrigger: {
        trigger: ".aboutme",
        scroll: "body",
        start: "top 40%",
        end: "top 20%",
        scrub: 0.1
    }
})

var tl = gsap.timeline();

tl.from(".skills .title",{
    opacity:0.4,
    scale:0.8,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".logos .logo_box",
        scroll: "body",
        start: "top 100%",
        scrub: 0.01
    }
})


tl.from(".logos .logo_box, .logos .logo_box2", {
    opacity: 0,
    y: 80,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".logos .logo_box",
        scroll: "body",
        start: "top 85%",
        scrub: 0.28
    }
});


var trig = gsap.timeline({
    scrollTrigger:{
        trigger: ".projects",
        scroll: "body",
        start: "top 70%",
        end: "top 10%",
        scrub: 0.3
    }
});

trig.from(".left", {
    opacity: 0,
    x: -40,
    duration: 0.4,
}, "anim")

trig.from(".right", {
    opacity: 0,
    x: 40,
    duration: 0.4,
}, "anim")

var trig2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".row2",
        scroll: "body",
        start: "top 70%",
        end: "top 10%",
        scrub: 0.3
    }
});

trig2.from(".left1", {
    opacity: 0,
    x: -40,
    duration: 0.4,
}, "anim1")

trig2.from(".right1", {
    opacity: 0,
    x: 40,
    duration: 0.4,
}, "anim1");

var timeline3 = gsap.timeline({
    scrollTrigger: {
        scroll:"body",
        // markers: true,
        trigger: ".achivements .container",
        start: "top 100%",
        end: "top 20%",
        scrub: 0.1
    }
});

timeline3.from(".achivements .container", {
    opacity: 0, 
    x: 90,
    duration: 1.3,
    stagger: 0.8,
}, "anim2")

timeline3.from(".achivements .achieve-img img", {
    opacity:0,
    x: -100,
    duration: 1,
}, "anim2");


var timeline4 = gsap.timeline();

timeline4.from(".contact", {
    opacity: 0.2,
    y: 150,
    duration: 1,
    scrollTrigger: {
        scroll:"body",
        // markers: true,
        trigger: ".contactme .contact",
        start: "top 90%",
        end: "top 20%",
        scrub: 0.1
    }
})