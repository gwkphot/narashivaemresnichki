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


gsap.fromTo(".manifest-content h1",

{

    y:70,

    opacity:0,

    filter:"blur(12px)"

},

{

    y:0,

    opacity:1,

    filter:"blur(0px)",

    duration:1.2,

    delay:.3,

    ease:"power4.out",


    scrollTrigger:{

        trigger:".manifest-block",

        start:"top 70%",

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


    gsap.fromTo(

        sloganWords,


        {

            opacity:0,

            y:40,

            filter:"blur(10px)"

        },


        {

            opacity:1,

            y:0,

            filter:"blur(0px)",

            duration:.6,

            stagger:.18,

            ease:"power3.out",


            scrollTrigger:{

                trigger:".manifest-slogan",

                start:"top 85%",

                once:true

            }


        }

    );


}








/* =========================
DESCRIPTION
========================= */


gsap.from(".description-block p",{


    y:60,

    opacity:0,

    filter:"blur(10px)",

    duration:1,


    ease:"power4.out",


    scrollTrigger:{


        trigger:".description-block",

        start:"top 70%",


        once:true


    }


});









/* =========================
IMAGE REVEAL
========================= */


document.querySelectorAll(".image-block img").forEach(img=>{


    gsap.from(img,{

        opacity:0,

        scale:1.05,

        duration:1.2,

        ease:"power3.out",


        scrollTrigger:{


            trigger:img,

            start:"top 80%",


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
