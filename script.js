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
LETTER REVEAL
========================= */


window.addEventListener("load", ()=>{


const title = document.querySelector(".manifest-content h1");


if(!title) return;



const nodes = [...title.childNodes];


nodes.forEach(node=>{


    if(node.nodeType === 3){


        const fragment = document.createDocumentFragment();


        [...node.textContent].forEach(char=>{


            if(char === " "){


                fragment.appendChild(
                    document.createTextNode(" ")
                );


            } else {


                const span = document.createElement("span");

                span.className = "manifest-letter";

                span.textContent = char;


                fragment.appendChild(span);

            }


        });


        node.replaceWith(fragment);


    }


});





gsap.set(".manifest-letter",{

    y:120,

    opacity:0,

    rotateX:-60,

    transformOrigin:"center bottom"

});





gsap.to(".manifest-letter",{


    y:0,

    opacity:1,

    rotateX:0,


    duration:1.1,


    stagger:.035,


    ease:"back.out(1.7)",



    scrollTrigger:{


        trigger:".manifest-block",

        start:"top 65%",


        once:true


    }


});


});


/* =========================
NEW SLOGAN
ПРИШЕЛ. УСЛЫШАЛ. ЗАПИЛИЛ.
========================= */


gsap.from(".slogan-line .word", {


    y:70,

    opacity:0,

    duration:.9,

    stagger:.25,

    ease:"power4.out",


    scrollTrigger:{


        trigger:".slogan-block",

        start:"top 70%",

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
HERO LETTER ANIMATION
(оставляем твою старую механику)
========================= */


window.addEventListener("load",()=>{


const hero = document.querySelector(".hero-title");


if(!hero) return;



const walker = document.createTreeWalker(

    hero,

    NodeFilter.SHOW_TEXT

);



const textNodes=[];



while(walker.nextNode()){

    textNodes.push(walker.currentNode);

}



textNodes.forEach(node=>{


    const fragment=document.createDocumentFragment();



    [...node.textContent].forEach(char=>{


        if(char===" "){


            fragment.appendChild(

                document.createTextNode(" ")

            );


        }

        else{


            const wrap=document.createElement("span");


            wrap.className="hero-letter-wrap";



            const span=document.createElement("span");


            span.className="hero-letter";


            span.textContent=char;



            wrap.appendChild(span);


            fragment.appendChild(wrap);


        }


    });



    node.replaceWith(fragment);


});





gsap.set(".hero-letter",{


    yPercent:110


});





gsap.to(".hero-letter",{


    yPercent:0,


    duration:.9,


    stagger:.045,


    ease:"power4.out"


});



});
