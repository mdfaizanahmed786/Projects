const menu = document.querySelector(".hamBurger");
const sideBar = document.querySelector(".side-section");
const info = document.querySelectorAll(".info");
const heading=document.querySelectorAll(".heading");


menu.onclick = function () {
  sideBar.classList.toggle("show");
  if (sideBar.classList.contains("show"))
    document.body.style.overflowY = "hidden";
  else document.body.style.overflowY = "scroll";
};


