const blocks = document.querySelectorAll('.block');


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('active');

        }else{

            entry.target.classList.remove('active');

        }

    });

},{

    threshold:0.6

});



blocks.forEach(block=>{

    observer.observe(block);

});
