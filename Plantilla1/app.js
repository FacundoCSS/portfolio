'use strict';

let viewportWidth = window.innerWidth;

if(viewportWidth > 900){
    let home = document.querySelector('.home-h2');

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


let ourCafeteria = document.querySelector('.our-cafeteria');
let ourProducts = document.querySelector('.our-products');

function aparecerAboutWe() {
    let scrollTop = document.documentElement.scrollTop;
    if(500 < scrollTop) {
        ourCafeteria.style.opacity = 1;
        ourProducts.style.opacity = 1;
    }
}

function desaparecerAboutWe(){
    let scrollTop = document.documentElement.scrollTop;
    if(280 > scrollTop)  {
        ourCafeteria.style.opacity = 0;
        ourProducts.style.opacity = 0;
    }
}

function sacarAboutWe(){
    let scrollTop = document.documentElement.scrollTop;
    if(800 < scrollTop)  {
        ourCafeteria.style.opacity = 0;
        ourProducts.style.opacity = 0;
    }
}
 
window.addEventListener('scroll',aparecerAboutWe);
window.addEventListener('scroll',desaparecerAboutWe);
window.addEventListener('scroll',sacarAboutWe);

let contact = document.querySelector('.contact-div');

function aparecerContact() {
    let scrollTop = document.documentElement.scrollTop;
    if(700 < scrollTop) {
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
}
