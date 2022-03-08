'use strict';


let home = document.querySelector('.home-div');

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


let aboutWe = document.querySelector('.about-we-div');
function aparecerAboutWe() {
    let scrollTop = document.documentElement.scrollTop;
    if(440 < scrollTop) {
        aboutWe.style.opacity = 1;
    }
}

function desaparecerAboutWe(){
    let scrollTop = document.documentElement.scrollTop;
    if(280 > scrollTop)  {
        aboutWe.style.opacity = 0;
    }
}

function sacarAboutWe(){
    let scrollTop = document.documentElement.scrollTop;
    if(800 < scrollTop)  {
        aboutWe.style.opacity = 0;
    }
}
 
window.addEventListener('scroll',aparecerAboutWe);
window.addEventListener('scroll',desaparecerAboutWe);
window.addEventListener('scroll',sacarAboutWe);

let contact = document.querySelector('.contact-div');

function aparecerContact() {
    let scrollTop = document.documentElement.scrollTop;
    if(730 < scrollTop) {
        contact.style.opacity = 1;
    }
}

function desaparecerContact(){
    let scrollTop = document.documentElement.scrollTop;
    if(650 > scrollTop)  {
        contact.style.opacity = 0;

    }
}

 
window.addEventListener('scroll',aparecerContact);
window.addEventListener('scroll',desaparecerContact);