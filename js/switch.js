let switchMenu = document.getElementById("swicthMenu");
let menuMobile = document.getElementById("menuMobile");

switchMenu.addEventListener("click", function () {
  switchMenu.classList.toggle("active");
  menuMobile.classList.toggle("visible");
});
