const menuBtn = document.querySelector('.header__btn');
const dropList = document.querySelector(".nav__list");

menuBtn.addEventListener('click', function(evt) {
evt.preventDefault();
dropList.classList.toggle('nav__list--mob')
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (dropList.classList.contains("nav__list--mob")) {
            dropList.classList.remove("nav__list--mob");
        }
      }
  });