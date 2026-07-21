gsap.registerPlugin(ScrollTrigger);


const cards = document.querySelectorAll(".card-block");



cards.forEach((card, index) => {


    /*
    каждый следующий блок
    появляется поверх предыдущего
    */

    gsap.set(card, {
        zIndex: index + 1
    });



    if(index !== cards.length - 1){


        gsap.to(card, {

            scale:0.94,


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
MOBILE
всегда:

картинка
↓
текст

*/

function mobileLayout(){


    if(window.innerWidth <= 768){


        cards.forEach(card=>{


            const image = card.querySelector(".symbol");

            const text = card.querySelector(".text");


            if(image && text){


                image.style.order = "1";

                text.style.order = "2";


            }


        });


    }


}



mobileLayout();


window.addEventListener(
    "resize",
    mobileLayout
);
