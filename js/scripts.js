// POPUP CONTATO
const popupContato = document.querySelector(".background-popup");

const contatoBtn = document.querySelector(".btnContato-popup");
contatoBtn.addEventListener("click", () => {
  popupContato.classList.add("active");
});

const iconClose = document.querySelector(".icon-close");
iconClose.addEventListener("click", () => {
  popupContato.classList.remove("active");
});


// ALERT NAO FUNCIONA AINDA

const btnCv = document.querySelector(".btn-CV-download").addEventListener('click', () =>{
  alert('Ainda não está funcionado o Download')
})