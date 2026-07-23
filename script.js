 gsap.registerPlugin(ScrollTrigger);


/* =========================
HERO
========================= */


gsap.from(".hero-title", {

    y:80,

    opacity:0,

    scale:.95,

    duration:1.2,

    ease:"power3.out"

});

/* =========================
MANIFEST REVEAL
========================= */


gsap.from(".manifest-content h1", {


    y:120,

    opacity:0,

    filter:"blur(10px)",

    duration:1.2,

    ease:"power4.out",


    scrollTrigger:{


        trigger:".manifest-block",

        start:"top 75%",


    }


});



gsap.from(".manifest-content p", {


    y:80,

    opacity:0,

    filter:"blur(8px)",

    duration:1,

    delay:.25,

    ease:"power4.out",


    scrollTrigger:{


        trigger:".manifest-block",

        start:"top 65%",


    }


});



/* =========================
IMAGE TEXT
WORD REVEAL
========================= */


const words = document.querySelectorAll(".type-text .word");


if(words.length){


    gsap.timeline({

        scrollTrigger:{

            trigger:".image-block",

            start:"top top",

            once:true

        }


    })

    .to(words[0],{

        opacity:1,

        filter:"blur(0px)",

        duration:.35,

        ease:"power3.out"

    })


    .to(words[1],{

        opacity:1,

        filter:"blur(0px)",

        duration:.35,

        ease:"power3.out"

    }, "+=0.12")


    .to(words[2],{

        opacity:1,

        filter:"blur(0px)",

        duration:.35,

        ease:"power3.out"

    }, "+=0.12");


}





/* =========================
CARD STACK
========================= */


const cards=document.querySelectorAll(".card-block");


cards.forEach((card,index)=>{


    gsap.set(card,{

        zIndex:index+1

    });



    if(index !== cards.length-1){


        gsap.to(card,{


            scale:.965,


            scrollTrigger:{


                trigger:card,


                start:"top top",


                end:"bottom top",


                scrub:true


            }


        });


    }


});







/* =========================
SYMBOL PARALLAX
========================= */


document.querySelectorAll(".symbol img").forEach(img=>{


    gsap.to(img,{


        y:-30,


        ease:"none",


        scrollTrigger:{


            trigger:img.closest(".card-block"),


            start:"top bottom",


            end:"bottom top",


            scrub:true


        }


    });


});







/* =========================
TEXT REVEAL
========================= */


document.querySelectorAll(".text").forEach(block=>{


    gsap.from(block.children,{


        opacity:0,


        y:35,


        duration:.8,


        stagger:.15,



        scrollTrigger:{


            trigger:block,


            start:"top 70%",


            once:true


        }


    });


});








/* =========================
MOBILE ORDER
========================= */


function mobileOrder(){


    if(window.innerWidth<=768){


        document.querySelectorAll(".card-block").forEach(card=>{


            const symbol=card.querySelector(".symbol");

            const text=card.querySelector(".text");



            if(symbol && text){


                symbol.style.order="1";


                text.style.order="2";


            }


        });


    }


}



mobileOrder();



window.addEventListener(

    "resize",

    mobileOrder

);
