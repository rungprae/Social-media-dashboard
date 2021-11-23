let body = document.querySelector("body");
let toggle = document.querySelector(".check");

toggle.addEventListener("change", function (event) {
  if (event.target.checked) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }
});
