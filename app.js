const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId),
    nav= document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav-link')


function linkAction() {
    navLink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')


    const navMenu = document.getElementById('nav-menu')
     navMenu.classList.remove('show')
}

navLink.forEach(n=>n.addEventListener('click',linkAction))
const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:'2000',
    reset:'true'
})

sr.reveal('.home-title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home-img',{delay:400})
sr.reveal('.home-social-icon',{interval:200})


sr.reveal('.skill-sub',{})
sr.reveal('.skill-text',{delay:200})
sr.reveal('.skill-data',{interval:200})
sr.reveal('.skill-img',{delay:400})



sr.reveal('.about-img',{})
sr.reveal('.about-sub',{delay:200})
sr.reveal('.about-text',{delay:400})

sr.reveal('.row',{interval:200})

sr.reveal('.cntact-input',{interval:200})


$(document).ready(function () {
    $(window).scroll(function () {
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    })
})

$('.scroll-up-btn').click(function() {
    $('html').animate({scrollTop:0})
})