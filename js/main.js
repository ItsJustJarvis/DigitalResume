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
const educationButtons = document.querySelectorAll('.education__item__tab');
const jobItems = document.querySelectorAll('.jobs__item__tab');

educationButtons.forEach(item => {
    item.addEventListener('click', toggle)
});

jobItems.forEach(item => {
    item.addEventListener('click', toggle)
});

function toggle(event){
    let tab = event.currentTarget;
    let content = event.currentTarget.nextElementSibling;

    if(!content.classList.contains('open')){
        tab.classList.add('open');
        content.classList.add('open');
    } else {
        tab.classList.remove('open');
        content.classList.remove('open');
    }
}

const skillPills = document.querySelectorAll('.pill');

skillPills.forEach(item => {setPillColor(item)});

function setPillColor(item) {
        switch (item.textContent) {
            case "0/5":
                item.style.backgroundColor = "#ff0000";
                break;
            case "1/5":
                item.style.backgroundColor = "#ff5e00";
                break;
            case "2/5":
                item.style.backgroundColor = "#ffc100";
                break;
            case "3/5":
                item.style.backgroundColor = "#ffff00";
                break;
            case "4/5":
                item.style.backgroundColor = "#9dff00";
                break;
            case "5/5":
                item.style.backgroundColor = "#63ff00";
                break;
        }
}