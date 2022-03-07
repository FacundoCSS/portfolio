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
    
    let skills = document.querySelector('.habilidades-js');
    let aboutMe = document.querySelector('.about-me-js')
    
    function aparecerSkills() {
        let scrollTop = document.documentElement.scrollTop;
        if(780 < scrollTop) {
            skills.style.opacity = 1;
            aboutMe.classList.add('animation');
            aboutMe.style.opacity = 1;
        }
    }
    
    function desaparecerSkills(){
        let scrollTop = document.documentElement.scrollTop;
        if(508 > scrollTop)  {
            skills.classList.remove('animation');
            skills.style.opacity = 0;
            aboutMe.classList.remove('animation');
            aboutMe.style.opacity = 0;
    
        }
    }
    
    function sacarSkills(){
        let scrollTop = document.documentElement.scrollTop;
        if(1340 < scrollTop)  {
            skills.classList.remove('animation');
            skills.style.opacity = 0;
            aboutMe.classList.remove('animation');
            aboutMe.style.opacity = 0;
        }
    }
    
    window.addEventListener('scroll',aparecerSkills);
    window.addEventListener('scroll',sacarSkills);
    window.addEventListener('scroll',desaparecerSkills);
    let projects = document.querySelector('.div-projects-js')
    
    function aparecerProjects() {
        let scrollTop = document.documentElement.scrollTop;
        if(1344 < scrollTop) {
            projects.classList.add('animation');
            projects.style.opacity = 1;
        }
    }
    
    function desaparecerProjects(){
        let scrollTop = document.documentElement.scrollTop;
        if(1010 > scrollTop)  {
            projects.classList.remove('animation');
            projects.style.opacity = 0;
    
        }
    }
    
    function sacarProjects(){
        let scrollTop = document.documentElement.scrollTop;
        if(1771 < scrollTop)  {
            projects.classList.remove('animation');
            projects.style.opacity = 0;
        }
    }
    
    window.addEventListener('scroll',aparecerProjects);
    window.addEventListener('scroll',sacarProjects);
    window.addEventListener('scroll',desaparecerProjects);
    
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
