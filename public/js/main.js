"use strict";

/* eslint-disable no-unused-vars */
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";

// Menu items
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navLinks = document.querySelectorAll(".menu-nav__link");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

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

// Education/Job card content - Collapsible solution based on above and some influence from https://www.w3schools.com/howto/howto_js_collapsible.asp
const educationButtons = document.querySelectorAll(".education__item__tab");
const jobItems = document.querySelectorAll(".jobs__item__tab");

educationButtons.forEach(item => {
    item.addEventListener("click", toggle);
});

jobItems.forEach(item => {
    item.addEventListener("click", toggle);
});

function toggle(event){
    let tab = event.currentTarget;
    let content = event.currentTarget.nextElementSibling;

    if(!content.classList.contains("open")){
        tab.classList.add("open");
        content.classList.add("open");
    } else {
        tab.classList.remove("open");
        content.classList.remove("open");
    }
}

const skillPills = document.querySelectorAll(".pill");
skillPills.forEach(item => {setPillColor(item);});

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