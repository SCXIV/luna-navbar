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
