const toggleOn = document.querySelector(".toggle-on-cont");
const active = document.querySelector(".menu-container");
const toggleOff = document.querySelector(".toggle-off-cont");

toggleOn.addEventListener("click", function () {
  active.classList.toggle("press");
  toggleOn.classList.toggle("press2");
  toggleOff.classList.toggle("press3");
});

toggleOff.addEventListener("click", function () {
  active.classList.toggle("press");
  toggleOn.classList.toggle("press2");
  toggleOff.classList.toggle("press3");
});
