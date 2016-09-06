var link = document.querySelector(".map-write-btn");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=write-name]");
var email = popup.querySelector("[name=e-mail]");
var storage = localStorage.getItem("login");



link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");

  if (storage) {
          login.value = storage;
          email.focus();
        } else {
          login.focus();
        }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (event) {

  if (!login.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});
