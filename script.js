"use strict";

// Variables for various elements
let navBar = document.querySelector(".navbar");
let hamburgerLine1 = document.querySelector(".line1");
let hamburgerLine2 = document.querySelector(".line2");
let hamburgerLine3 = document.querySelector(".line3");
let navbarOpen = false;

// The function below will either open or close the navbar, change the hamburger menu to an X or back to its original state, and also change the value of navbarOpen to true or false depending on whether the menu is opening or closing.

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    if (navbarOpen === true) {
      console.log("close");
      hamburgerLine1.classList.remove("line1--open");
      hamburgerLine2.classList.remove("line2--hidden");
      hamburgerLine3.classList.remove("line3--open");
      navBar.classList.remove("navbar--visible");
      navBar.classList.add("navbar--hidden");
      navbarOpen = false;
    } else {
      console.log("open");
      hamburgerLine1.classList.add("line1--open");
      hamburgerLine2.classList.add("line2--hidden");
      hamburgerLine3.classList.add("line3--open");
      navBar.classList.remove("navbar--hidden");
      navBar.classList.add("navbar--visible");
      navbarOpen = true;
    }
  });

// Code below is for old navbar open and links to close them

// document.querySelector(".nav-button").addEventListener("click", function () {
//   console.log("Open");
//   navBar.classList.remove("navbar--hidden");
//   navBar.classList.add("navbar--visible");
// });

// document.querySelectorAll(".navbar--close").forEach((a) => {
//   a.addEventListener("click", function () {
//     console.log("Close");
//     navBar.classList.remove("navbar--visible");
//     navBar.classList.add("navbar--hidden");
//   });
// });
