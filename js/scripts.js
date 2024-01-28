// POPUP CONTATO
const popupContato = document.querySelector(".popup-contato");

const contatoBtn = document.querySelector(".btnContato-popup");
contatoBtn.addEventListener("click", () => {
  popupContato.classList.add("active");
});

const iconClose = document.querySelector(".icon-close");
iconClose.addEventListener("click", () => {
  popupContato.classList.remove("active");
});