*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{
scroll-behavior:smooth;
}

body{
background:#999;
font-family:'Inter',sans-serif;
overflow-x:hidden;
color:#111;
}

.wrap{
position:relative;
width:100%;
}


/* ================= HERO ================= */


.hero-block{

height:100vh;

display:flex;

align-items:center;

justify-content:center;

background:#d9d9d9;

position:relative;

overflow:hidden;

}


.hero-title{

font-family:'Montserrat',sans-serif;

font-weight:900;

font-size:clamp(90px,15vw,240px);

line-height:.82;

letter-spacing:-.07em;

color:#000;

text-align:center;

user-select:none;

}



/* ================= IMAGE ================= */


.image-block{

height:200vh;

position:relative;

}


.image-wrapper{

position:sticky;

top:0;

width:100%;

height:100vh;

overflow:hidden;

}



.image-wrapper img{

width:100%;

height:100%;

object-fit:cover;

display:block;

}



/* ---------- Caption ---------- */


.image-caption{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,20px);
}


.type-text{

display:flex;

justify-content:center;

align-items:center;

gap:.35em;

width:100%;


font-family:'Inter',sans-serif;

font-weight:500;


font-size:clamp(26px,2.8vw,52px);

line-height:1;

letter-spacing:-.05em;


color:#d9d9d9;


white-space:nowrap;

}



.type-text .word{

display:inline-block;

opacity:0;

filter:blur(6px);

}



/* ================= CARDS ================= */


.card-block{

position:sticky;

top:0;

height:100vh;

display:grid;

grid-template-columns:1fr 1fr;

overflow:hidden;

}


.half{

display:flex;

align-items:center;

justify-content:center;

overflow:hidden;

}


.orange{

background:#ff4d1a;

}


.green{

background:#7CFF2E;

}


.purple{

background:#6A4CFF;

}



.symbol img{

width:min(72vh,680px);

height:min(72vh,680px);

object-fit:contain;

}



.text{

background:#d9d9d9;

padding:70px 80px;

display:flex;

flex-direction:column;

justify-content:center;

align-items:flex-start;

color:#111;

}

.text p{
    font-family:'Inter',sans-serif;
    font-size:clamp(22px,1.6vw,30px);
    font-weight:500;
    line-height:0.9;
    letter-spacing:-0.035em;
    color:#111;
    opacity:.95;
    max-width:700px;
}

.text h2{
font-family:'Inter',sans-serif;
font-weight:600;
font-size:clamp(52px,4vw,72px);
line-height:.9;
letter-spacing:-.05em;
margin-bottom:18px;
color:#111;
}


.text p{

font-size:clamp(22px,1.6vw,30px);

line-height:1.5;

color:#111;

opacity:.92;

max-width:700px;

}



/* ================= IMAGE OVERLAY ================= */


.image-wrapper::after{

content:"";

position:absolute;

inset:0;

pointer-events:none;


background:linear-gradient(

180deg,

rgba(255,255,255,.03) 0%,

rgba(0,0,0,0) 30%,

rgba(0,0,0,.05) 100%

);

}



/* ================= CARD EFFECT ================= */


.card-block{

will-change:transform;

}


.symbol,
.text{

position:relative;

}


.symbol{

z-index:2;

}


.text{

z-index:3;

}



.symbol img{

transition:transform .6s cubic-bezier(.22,1,.36,1);

}



.card-block:hover .symbol img{

transform:scale(1.03);

}



/* ================= TYPOGRAPHY ================= */


h2{

text-wrap:balance;

}


p{

text-wrap:pretty;

}



/* ================= TABLET ================= */


@media (max-width:1024px){


.hero-title{

font-size:clamp(72px,14vw,170px);

}


.text{

padding:50px;

}


.text h2{

font-size:48px;

}


.text p{

font-size:22px;

}


.symbol img{

width:75%;

height:75%;

}


}



/* ================= MOBILE ================= */


@media (max-width:768px){


.hero-title{

font-size:72px;

}



.image-caption{

top:50%;

left:50%;

transform:translate(-50%,-50%);

padding:0 24px;

width:100%;

}



.type-text{

font-size:clamp(18px,6vw,30px);

letter-spacing:-.04em;

gap:.25em;

white-space:nowrap;

}



.card-block{

display:flex;

flex-direction:column;

height:100vh;

}



.symbol{

order:1;

height:55%;

}



.text{

order:2;

height:45%;

padding:28px 24px;

justify-content:flex-start;

}



.symbol img{

width:58%;

height:58%;

}



.text h2{

font-size:30px;

margin-bottom:16px;

}



.text p{

font-size:16px;

line-height:1.45;

max-width:none;

}



}



/* ================= SMALL MOBILE ================= */


@media (max-width:480px){


.hero-title{

font-size:56px;

}



.type-text{

font-size:20px;

gap:.2em;

}



.symbol{

height:50%;

}



.text{

height:50%;

padding:22px;

}



.text h2{

font-size:26px;

}



.text p{

font-size:15px;

}



}
