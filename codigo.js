"use strict";

let viewportWidth = window.innerWidth;

if(viewportWidth > 900){
    let home = document.querySelector('.home-js');

    function aparecerHome() {
        let scrollTop = document.documentElement.scrollTop;
        if(150 > scrollTop) {
            home.style.opacity = 1;
        }
    }
    
    function sacarHome(){
        let scrollTop = document.documentElement.scrollTop;
        if(250 < scrollTop)  {
            home.style.opacity = 0;
        }
    }
    
    window.addEventListener('scroll',aparecerHome);
    window.addEventListener('scroll',sacarHome);
    
    let contactMe = document.querySelector('.contact-me-js')
    
    function aparecercontactMe() {
        let scrollTop = document.documentElement.scrollTop;
        if(1800 < scrollTop) {
            contactMe.classList.add('animation');
            contactMe.style.opacity = 1;
        }
    }
    
    function desaparecercontactMe(){
        let scrollTop = document.documentElement.scrollTop;
        if(1500  > scrollTop)  {
            contactMe.classList.remove('animation');
            contactMe.style.opacity = 0;
    
        }
    }
    
    window.addEventListener('scroll',aparecercontactMe);
    window.addEventListener('scroll',desaparecercontactMe);
    
}
