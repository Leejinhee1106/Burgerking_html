//헤더 햄버거
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menuWrapper = document.querySelector(".sidemenu");

  hamburger.addEventListener("click", function () {
    menuWrapper.classList.toggle("active");
  });
});

