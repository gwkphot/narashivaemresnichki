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

    filter:"blur(12px)",

    duration:1.2,

    delay:.3,

    ease:"power4.out",



    scrollTrigger:{


        trigger:".manifest-block",

        start:"top 60%",


        once:true


    }


});








/* =========================
MANIFEST SLOGAN
========================= */


const sloganWords = document.querySelectorAll(
    ".manifest-slogan .word"
);



if(sloganWords.length){



    gsap.timeline({

        scrollTrigger:{


            trigger:".manifest-block",

            start:"top 35%",


            once:true


        }


    })


    .to(sloganWords,{


        opacity:1,

        filter:"blur(0)",

        y:0,

        duration:.5,

        stagger:.18,

        ease:"power3.out"


    });



}









/* =========================
DESCRIPTION
========================= */


gsap.from(".description-block p",{


    y:70,

    opacity:0,

    filter:"blur(10px)",

    duration:1.1,


    ease:"power4.out",



    scrollTrigger:{


        trigger:".description-block",

        start:"top 65%",


        once:true


    }


});









/* =========================
IMAGE REVEAL
========================= */


gsap.from(".image-first img, .image-second img, .image-third img",{


    scale:1.08,

    opacity:0,

    duration:1.4,

    ease:"power3.out",



    scrollTrigger:{


        trigger:".image-block",

        start:"top 70%",


        once:true


    }


});









/* =========================
STICKY STACK REFRESH
========================= */


window.addEventListener("load",()=>{


    ScrollTrigger.refresh();


});





window.addEventListener("resize",()=>{


    ScrollTrigger.refresh();


});
