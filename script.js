gsap.registerPlugin(ScrollTrigger);


const cards = document.querySelectorAll(".card-block");


cards.forEach((card, index) => {


    if(index !== cards.length - 1){

        gsap.to(card, {

            scale:0.92,

            opacity:0.5,

            scrollTrigger:{

                trigger:card,

                start:"top top",

                end:"bottom top",

                scrub:true,

            }

        });

    }


});



/*
    STACK EFFECT
    следующий блок заезжает сверху
*/


cards.forEach((card)=>{


    ScrollTrigger.create({

        trigger:card,

        start:"top top",

        end:"bottom top",

        pin:true,

        pinSpacing:false,

    });


});



/*
    MOBILE:
    всегда картинка сверху
*/


function mobileOrder(){


    if(window.innerWidth <= 768){


        cards.forEach(card=>{


            const symbol = card.querySelector(".symbol");

            const text = card.querySelector(".text");


            if(symbol && text){

                symbol.style.order="1";

                text.style.order="2";

            }


        });


    }


}


mobileOrder();


window.addEventListener("resize", mobileOrder);
