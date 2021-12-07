// Menu items
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navLinks = document.querySelectorAll('.menu-nav__link');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navLinks.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navLinks.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}

// Education card content - Collapsible solution based on above and some influence from https://www.w3schools.com/howto/howto_js_collapsible.asp
const educationButtons = document.querySelectorAll('.education__item__toggle');

educationButtons.forEach(item => {
    item.addEventListener('click', toggle)
})

function toggle(event){
    let content = event.target.nextElementSibling;
   
    if(!content.classList.contains('open')){
        content.classList.add('open');
        
        showItem = true;
    } else {
        content.classList.remove('open');

        showItem = false;
    }
}