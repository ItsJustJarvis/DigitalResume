/* eslint-disable no-undef */
"use strict";

/* eslint-disable no-unused-vars */
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";

const bodyClassPlugin = new SwupBodyClassPlugin({
    prefix: "page-"
});

const scrollPlugin = new SwupScrollPlugin({
    doScrollingRightAway: true,
    animateScroll: true,
    scrollFriction: 0.3,
    scrollAcceleration: 0.04,
});

// Swup options object
const options = {
    containers: ["#swup"],
    cache: true,
    plugins: [bodyClassPlugin, scrollPlugin]
};

const swup = new Swup(options);

init();

swup.on("contentReplaced", init);

function init(){

    if(document.querySelector(".about")){
        initializeAboutItems();   
        initilizeSectionJumps();     
    }

    if(document.querySelector(".portfolio")){
        initializePortfolioItems();
    }
    initializeMenu();
}

function initilizeSectionJumps(){
    const sectionButtons = document.querySelectorAll(".sectionjump__button");
    sectionButtons.forEach(button => button.addEventListener("click", jumpTo));

    function jumpTo(event){
        let button = event.currentTarget;
        let location = button.innerText.toLowerCase().replace(/[^a-z0-9]/gi, "");
        let element = document.querySelector(`#${location}`);
        console.log(element);
        swup.scrollTo(element);
    }
}

function initializeMenu(){
    const menuBtn = document.querySelector(".menu-btn");
    const hamburger = document.querySelector(".menu-btn__burger");
    const nav = document.querySelector(".nav");
    const menuNav = document.querySelector(".menu-nav");
    const navLinks = document.querySelectorAll(".menu-nav__link");
    
    let showMenu = false;

    menuBtn.addEventListener("click", toggleMenu);
    navLinks.forEach( link => link.addEventListener("click", toggleMenu));

    function toggleMenu() {
        if(!showMenu) {
            hamburger.classList.add("open");
            nav.classList.add("open");
            menuNav.classList.add("open");
            navLinks.forEach(item => item.classList.add("open"));

            showMenu = true;
        } else {
            hamburger.classList.remove("open");
            nav.classList.remove("open");
            menuNav.classList.remove("open");
            navLinks.forEach(item => item.classList.remove("open"));

            showMenu = false;
        }
    }
}

function initializeAboutItems(){

    // About Page Items
    const educationItems = document.querySelectorAll(".education__item__tab");
    const jobItems = document.querySelectorAll(".jobs__item__tab");
    const skillPills = document.querySelectorAll(".pill");

    educationItems.forEach(item => {
        item.addEventListener("click", toggleEducation);
    });

    jobItems.forEach(item => {
        item.addEventListener("click", toggleJob);
    });

    skillPills.forEach(item => {setPillColor(item);});

    function toggleJob(event){
        let tab = event.currentTarget;
        let content = event.currentTarget.nextElementSibling;

        if(tab.classList.contains("open")){
            tab.classList.remove("open");
            content.classList.remove("open");
            return;
        }

        jobItems.forEach(item => {
            if(item.classList.contains("open")){
                item.classList.remove("open");
            }
            if(item.nextElementSibling.classList.contains("open")){
                item.nextElementSibling.classList.remove("open");
            }       
        });

        tab.classList.add("open");
        content.classList.add("open");
    }

    function toggleEducation(event){
        let tab = event.currentTarget;
        let content = event.currentTarget.nextElementSibling;

        if(tab.classList.contains("open")){
            tab.classList.remove("open");
            content.classList.remove("open");
            return;
        }

        educationItems.forEach(item => {
            if(item.classList.contains("open")){
                item.classList.remove("open");
            }
            if(item.nextElementSibling.classList.contains("open")){
                item.nextElementSibling.classList.remove("open");
            }       
        });

        tab.classList.add("open");
        content.classList.add("open");
    }

    function setPillColor(item) {
        switch (item.textContent) {
        case "0/5":
            item.style.backgroundColor = "#FF0D0D";
            break;
        case "1/5":
            item.style.backgroundColor = "#FF4E11";
            break;
        case "2/5":
            item.style.backgroundColor = "#FF8E15";
            break;
        case "3/5":
            item.style.backgroundColor = "#FAB733";
            break;
        case "4/5":
            item.style.backgroundColor = "#ACB334";
            break;
        case "5/5":
            item.style.backgroundColor = "#69B34C";
            break;
        }
    }
}

function initializePortfolioItems(){
    const buttonsWrapper = document.querySelector(".carousel__map");
    const slides = document.querySelector(".carousel__container__list");

    buttonsWrapper.addEventListener("click", e => {
        if (e.target.nodeName === "BUTTON") {
            Array.from(buttonsWrapper.children).forEach(item =>
                item.classList.remove("active")
            );
            if (e.target.classList.contains("first")) {
                slides.style.transform = "translateX(-0%)";
                e.target.classList.add("active");
            } else if (e.target.classList.contains("second")) {
                slides.style.transform = "translateX(-99%)";
                e.target.classList.add("active");
            } else if (e.target.classList.contains("third")){
                slides.style.transform = "translatex(-199%)";
                e.target.classList.add("active");
            } else if (e.target.classList.contains("fourth")){
                slides.style.transform = "translatex(-299%)";
                e.target.classList.add("active");
            }
        }
    });
}

const firebaseConfig = {
    apiKey: "AIzaSyDzCv1xdQ3k2DWyi_7E69fOhaCDe_z8WKk",
    authDomain: "reevejarvis-portfolio.firebaseapp.com",
    projectId: "reevejarvis-portfolio",
    storageBucket: "reevejarvis-portfolio.appspot.com",
    messagingSenderId: "78029059409",
    appId: "1:78029059409:web:b8c5575fd99730e36d0f70",
    measurementId: "G-0V0V8GLG5Y",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);