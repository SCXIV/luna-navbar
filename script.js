document.querySelector(".nav-button").addEventListener("click", function () {
  console.log("Open");
  document.querySelector(".navbar").classList.remove("navbar--hidden");
});

document.querySelectorAll(".navbar--close").forEach((a) => {
  a.addEventListener("click", function () {
    console.log("Close");
    document.querySelector(".navbar").classList.add("navbar--hidden");
  });
});
