const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const anoAtual = document.getElementById("anoAtual");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativo");
  });
});

anoAtual.textContent = new Date().getFullYear();