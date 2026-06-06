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
    "produtos-rocado": "Produtos do Roçado",
    sementes: "Sementes da Paixão",
    artesanais: "Produtos artesanais"
  };

  return categorias[categoria] || categoria;
}

function renderizarProdutos(categoria = "todos") {
  if (!catalogoProdutos) return;

  catalogoProdutos.innerHTML = "";

  const produtosFiltrados =
    categoria === "todos"
      ? produtos
      : produtos.filter((produto) => produto.categoria === categoria);

  produtosFiltrados.forEach((produto) => {
    const card = document.createElement("article");
    card.classList.add("catalogo-card");

    const botaoReceita = produto.receita
      ? `<a href="${produto.receita}" class="link-card catalogo-link-receita">Ver receita relacionada</a>`
      : "";

    card.innerHTML = `
      <img 
        src="${produto.imagem}" 
        alt="${produto.nome}"
        onerror="this.src='assets/img/hero/banner-home-produtos-do-rocado.jpg'"
      >

      <div class="catalogo-card-conteudo">
        <span>${formatarCategoria(produto.categoria)}</span>
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>

        ${botaoReceita}

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

  modalImagem.onerror = () => {
    modalImagem.src = "assets/img/hero/banner-home-produtos-do-rocado.jpg";
  };

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

  const linkReceitaAntigo = document.getElementById("modalLinkReceita");

  if (linkReceitaAntigo) {
    linkReceitaAntigo.remove();
  }

  if (produto.receita) {
    const linkReceita = document.createElement("a");
    linkReceita.href = produto.receita;
    linkReceita.id = "modalLinkReceita";
    linkReceita.className = "btn btn-principal";
    linkReceita.textContent = "Ver receita relacionada";

    linkReceita.addEventListener("click", () => {
      modalProduto.classList.remove("ativo");
    });

    modalUsoTradicionalBox.insertAdjacentElement("afterend", linkReceita);
  }

  modalProduto.classList.add("ativo");
}

if (fecharModal && modalProduto) {
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

const listaReceitas = document.getElementById("listaReceitas");

const modalReceita = document.getElementById("modalReceita");
const fecharModalReceita = document.getElementById("fecharModalReceita");

const modalReceitaImagem = document.getElementById("modalReceitaImagem");
const modalReceitaCategoria = document.getElementById("modalReceitaCategoria");
const modalReceitaNome = document.getElementById("modalReceitaNome");
const modalReceitaAutoria = document.getElementById("modalReceitaAutoria");
const modalReceitaDescricao = document.getElementById("modalReceitaDescricao");
const modalReceitaIngredientes = document.getElementById("modalReceitaIngredientes");
const modalReceitaPreparo = document.getElementById("modalReceitaPreparo");

function renderizarReceitas() {
  if (!listaReceitas || typeof receitas === "undefined") return;

  listaReceitas.innerHTML = "";

  receitas.forEach((receita) => {
    const card = document.createElement("article");
    card.classList.add("receita-card");

    card.innerHTML = `
      <img 
        src="${receita.imagem}" 
        alt="${receita.nome}"
        onerror="this.src='assets/img/receitas/geral/prato-agroecologico-servido.jpg'"
      >

      <div>
        <span>${receita.categoria}</span>
        <h3>${receita.nome}</h3>

        <p class="receita-autoria">
          Receita de ${receita.autoria}
        </p>

        <p>
          ${receita.descricao}
        </p>

        <div class="receita-acoes">
          <button 
            type="button" 
            class="btn btn-principal btn-ver-receita" 
            data-receita-id="${receita.id}"
          >
            Ver receita completa
          </button>
        </div>
      </div>
    `;

    listaReceitas.appendChild(card);
  });
}

function abrirReceita(id) {
  const receita = receitas.find((item) => item.id === id);

  if (!receita || !modalReceita) return;

  if (modalReceitaImagem) {
    modalReceitaImagem.src = receita.imagem;
    modalReceitaImagem.alt = receita.nome;

    modalReceitaImagem.onerror = () => {
      modalReceitaImagem.src = "assets/img/receitas/geral/prato-agroecologico-servido.jpg";
    };
  }

  if (modalReceitaCategoria) {
    modalReceitaCategoria.textContent = receita.categoria;
  }

  if (modalReceitaNome) {
    modalReceitaNome.textContent = receita.nome;
  }

  if (modalReceitaAutoria) {
    modalReceitaAutoria.textContent = receita.origem
      ? `Receita de ${receita.autoria} — ${receita.origem}`
      : `Receita de ${receita.autoria}`;
  }

  if (modalReceitaDescricao) {
    modalReceitaDescricao.textContent = receita.descricao;
  }

  if (modalReceitaIngredientes) {
    modalReceitaIngredientes.innerHTML = "";

    receita.ingredientes.forEach((ingrediente) => {
      const item = document.createElement("li");
      item.textContent = ingrediente;
      modalReceitaIngredientes.appendChild(item);
    });
  }

  if (modalReceitaPreparo) {
    modalReceitaPreparo.innerHTML = "";

    receita.preparo.forEach((passo) => {
      const item = document.createElement("li");
      item.textContent = passo;
      modalReceitaPreparo.appendChild(item);
    });
  }

  modalReceita.classList.add("ativo");
}

if (listaReceitas) {
  listaReceitas.addEventListener("click", (event) => {
    const botao = event.target.closest(".btn-ver-receita");

    if (!botao) return;

    const idReceita = botao.dataset.receitaId;
    abrirReceita(idReceita);
  });
}

if (fecharModalReceita && modalReceita) {
  fecharModalReceita.addEventListener("click", () => {
    modalReceita.classList.remove("ativo");
  });
}

if (modalReceita) {
  modalReceita.addEventListener("click", (event) => {
    if (event.target === modalReceita) {
      modalReceita.classList.remove("ativo");
    }
  });
}

renderizarReceitas();