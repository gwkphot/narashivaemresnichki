/* =========================
GSAP INIT
========================= */


gsap.registerPlugin(ScrollTrigger);








/* =========================
HERO
========================= */


gsap.from(".hero-title", {

    y:80,

    opacity:0,

    scale:.96,

    duration:1.2,

    ease:"power4.out"

});









/* =========================
MANIFEST TITLE
========================= */


gsap.from(".manifest-content h1", {


    y:70,

    opacity:0,

    filter:"blur(10px)",

    duration:1.1,

    ease:"power4.out",



    scrollTrigger:{


        trigger:".manifest-block",

        start:"top 70%",

        once:true


    }


});









/* =========================
MANIFEST SLOGAN
Пришел. Увидел. Запилил.
========================= */


gsap.from(".manifest-slogan .word", {


    y:40,

    opacity:0,

    duration:.7,

    stagger:.12,

    ease:"power3.out",



    scrollTrigger:{


        trigger:".manifest-block",

        start:"top 50%",


        once:true


    }


});









/* =========================
CARD TEXT
========================= */


document.querySelectorAll(".card-block .text").forEach((text)=>{


    gsap.from(text.children, {


        y:40,

        opacity:0,

        duration:.8,

        stagger:.15,

        ease:"power3.out",



        scrollTrigger:{


            trigger:text,

            start:"top 75%",


            once:true


        }


    });


});









/* =========================
REFRESH
========================= */


window.addEventListener("load",()=>{


    ScrollTrigger.refresh();


});



window.addEventListener("resize",()=>{


    ScrollTrigger.refresh();


});
