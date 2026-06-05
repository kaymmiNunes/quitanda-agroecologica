const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const anoAtual = document.getElementById("anoAtual");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("ativo");
  });

  const linksMenu = document.querySelectorAll(".menu a");

  linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("ativo");
    });
  });
}

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

const catalogoProdutos = document.getElementById("catalogoProdutos");
const botoesFiltro = document.querySelectorAll(".filtro-btn");

const modalProduto = document.getElementById("modalProduto");
const fecharModal = document.getElementById("fecharModal");

const modalImagem = document.getElementById("modalImagem");
const modalCategoria = document.getElementById("modalCategoria");
const modalNome = document.getElementById("modalNome");
const modalDescricao = document.getElementById("modalDescricao");
const modalNutricional = document.getElementById("modalNutricional");
const modalUsoTradicional = document.getElementById("modalUsoTradicional");
const modalUsoTradicionalBox = document.getElementById("modalUsoTradicionalBox");

function formatarCategoria(categoria) {
  const categorias = {
    frutas: "Frutas",
    hortalicas: "Hortaliças",
    ervas: "Ervas e temperos",
    naturais: "Produtos naturais"
  };

  return categorias[categoria] || categoria;
}

function renderizarProdutos(categoria = "todos") {
  if (!catalogoProdutos) return;

  catalogoProdutos.innerHTML = "";

  const produtosFiltrados = categoria === "todos"
    ? produtos
    : produtos.filter((produto) => produto.categoria === categoria);

  produtosFiltrados.forEach((produto) => {
    const card = document.createElement("article");
    card.classList.add("catalogo-card");

    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <div class="catalogo-card-conteudo">
        <span>${formatarCategoria(produto.categoria)}</span>
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <button class="btn btn-principal" onclick="abrirDetalhesProduto(${produto.id})">
          Ver detalhes
        </button>
      </div>
    `;

    catalogoProdutos.appendChild(card);
  });
}

function abrirDetalhesProduto(id) {
  const produto = produtos.find((item) => item.id === id);

  if (!produto || !modalProduto) return;

  modalImagem.src = produto.imagem;
  modalImagem.alt = produto.nome;
  modalCategoria.textContent = formatarCategoria(produto.categoria);
  modalNome.textContent = produto.nome;
  modalDescricao.textContent = produto.descricao;

  modalNutricional.innerHTML = "";

  Object.entries(produto.nutricional).forEach(([chave, valor]) => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <th>${chave}</th>
      <td>${valor}</td>
    `;

    modalNutricional.appendChild(linha);
  });

  if (produto.usoTradicional && produto.usoTradicional.trim() !== "") {
    modalUsoTradicionalBox.style.display = "block";
    modalUsoTradicional.textContent = produto.usoTradicional;
  } else {
    modalUsoTradicionalBox.style.display = "none";
    modalUsoTradicional.textContent = "";
  }

  modalProduto.classList.add("ativo");
}

if (fecharModal) {
  fecharModal.addEventListener("click", () => {
    modalProduto.classList.remove("ativo");
  });
}

if (modalProduto) {
  modalProduto.addEventListener("click", (event) => {
    if (event.target === modalProduto) {
      modalProduto.classList.remove("ativo");
    }
  });
}

botoesFiltro.forEach((botao) => {
  botao.addEventListener("click", () => {
    botoesFiltro.forEach((item) => item.classList.remove("ativo"));
    botao.classList.add("ativo");

    const categoria = botao.getAttribute("data-categoria");
    renderizarProdutos(categoria);
  });
});

renderizarProdutos();