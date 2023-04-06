let navBar = document.querySelector(".navbar");

document.querySelector(".nav-button").addEventListener("click", function () {
  console.log("Open");
  navBar.classList.remove("navbar--hidden");
  navBar.classList.add("navbar--visible");
});

document.querySelectorAll(".navbar--close").forEach((a) => {
  a.addEventListener("click", function () {
    console.log("Close");
    navBar.classList.remove("navbar--visible");
    navBar.classList.add("navbar--hidden");
  });
});

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".line1").classList.add("line1--open");
    document.querySelector(".line2").classList.add("line2--hidden");
    document.querySelector(".line3").classList.add("line3--open");
  });
