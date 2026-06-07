"use strict";


/* =========================================================
   1. CONSTANTES E SELETORES
========================================================= */

const IMAGEM_FALLBACK_PRODUTO = "assets/img/hero/banner-home-produtos-do-rocado.jpg";
const IMAGEM_FALLBACK_RECEITA = "assets/img/receitas/geral/prato-agroecologico-servido.jpg";

const LIMITE_PRODUTOS_MOBILE = 6;
const CONSULTA_MOBILE_PRODUTOS = window.matchMedia("(max-width: 900px)");
const CONSULTA_REDUCAO_MOVIMENTO = window.matchMedia("(prefers-reduced-motion: reduce)");

let categoriaAtualProdutos = "todos";
let produtosExpandidosMobile = false;
let observadorAnimacoes = null;

const elementos = {
  menuToggle: document.getElementById("menuToggle"),
  menu: document.getElementById("menu"),
  linksMenu: document.querySelectorAll(".menu a"),
  anoAtual: document.getElementById("anoAtual"),

  musicaSite: document.getElementById("musicaSite"),
  botaoAudio: document.getElementById("botaoAudio"),

  catalogoProdutos: document.getElementById("catalogoProdutos"),
  botoesFiltro: document.querySelectorAll(".filtro-btn"),
  controleVerMaisProdutos: document.getElementById("controleVerMaisProdutos"),
  botaoVerMaisProdutos: document.getElementById("botaoVerMaisProdutos"),

  modalProduto: document.getElementById("modalProduto"),
  fecharModalProduto: document.getElementById("fecharModal"),

  modalImagem: document.getElementById("modalImagem"),
  modalCategoria: document.getElementById("modalCategoria"),
  modalNome: document.getElementById("modalNome"),
  modalDescricao: document.getElementById("modalDescricao"),
  modalNutricional: document.getElementById("modalNutricional"),
  modalUsoTradicional: document.getElementById("modalUsoTradicional"),
  modalUsoTradicionalBox: document.getElementById("modalUsoTradicionalBox"),

  listaReceitas: document.getElementById("listaReceitas"),

  modalReceita: document.getElementById("modalReceita"),
  fecharModalReceita: document.getElementById("fecharModalReceita"),

  modalReceitaImagem: document.getElementById("modalReceitaImagem"),
  modalReceitaCategoria: document.getElementById("modalReceitaCategoria"),
  modalReceitaNome: document.getElementById("modalReceitaNome"),
  modalReceitaAutoria: document.getElementById("modalReceitaAutoria"),
  modalReceitaDescricao: document.getElementById("modalReceitaDescricao"),
  modalReceitaIngredientes: document.getElementById("modalReceitaIngredientes"),
  modalReceitaPreparo: document.getElementById("modalReceitaPreparo")
};


/* =========================================================
   2. FUNÇÕES UTILITÁRIAS
========================================================= */

function obterProdutos() {
  if (typeof produtos !== "undefined" && Array.isArray(produtos)) {
    return produtos;
  }

  console.warn("Lista de produtos não encontrada. Verifique o arquivo produtos.js.");
  return [];
}

function obterReceitas() {
  if (typeof receitas !== "undefined" && Array.isArray(receitas)) {
    return receitas;
  }

  console.warn("Lista de receitas não encontrada. Verifique o arquivo receitas.js.");
  return [];
}

function formatarCategoria(categoria) {
  const categorias = {
    frutas: "Frutas",
    hortalicas: "Hortaliças",
    ervas: "Ervas e temperos",
    "produtos-rocado": "Produtos do Roçado",
    sementes: "Sementes da Paixão",
    artesanais: "Produtos artesanais",
    naturais: "Produtos naturais"
  };

  return categorias[categoria] || categoria;
}

function definirImagemComFallback(elementoImagem, caminhoImagem, textoAlternativo, imagemFallback) {
  if (!elementoImagem) return;

  elementoImagem.onerror = function () {
    if (!this.src.includes(imagemFallback)) {
      this.src = imagemFallback;
    }
  };

  elementoImagem.src = caminhoImagem || imagemFallback;
  elementoImagem.alt = textoAlternativo || "Imagem ilustrativa";
}

function limparElemento(elemento) {
  if (elemento) {
    elemento.innerHTML = "";
  }
}

function voltarParaInicio() {
  const inicio = document.getElementById("inicio");

  if (inicio) {
    inicio.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


/* =========================================================
   3. CONTROLE DE MENU
========================================================= */

function inicializarMenuMobile() {
  const { menuToggle, menu, linksMenu } = elementos;

  if (!menuToggle || !menu) return;

  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.addEventListener("click", () => {
    const menuAberto = menu.classList.toggle("ativo");
    menuToggle.setAttribute("aria-expanded", String(menuAberto));
  });

  linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("ativo");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function atualizarAnoRodape() {
  if (elementos.anoAtual) {
    elementos.anoAtual.textContent = new Date().getFullYear();
  }
}


/* =========================================================
   4. CONTROLE DE ROLAGEM E HISTÓRICO
========================================================= */

function bloquearRolagemPagina() {
  document.body.classList.add("modal-aberto");
}

function liberarRolagemPagina() {
  if (!existeDescricaoAberta()) {
    document.body.classList.remove("modal-aberto");
  }
}

function existeDescricaoAberta() {
  return (
    elementos.modalProduto?.classList.contains("ativo") ||
    elementos.modalReceita?.classList.contains("ativo")
  );
}

function fecharDescricoesAbertas() {
  fecharModalProduto();
  fecharModalReceita();
  document.body.classList.remove("modal-aberto");
}

function registrarEstadoModal(tipoModal) {
  if (!window.history || !window.history.pushState) return;

  history.pushState(
    { modalAberto: tipoModal },
    "",
    window.location.href
  );
}

function configurarHistoricoDoSite() {
  if (!window.history || !window.history.pushState) return;

  history.replaceState(
    { pagina: "quitanda-base" },
    "",
    window.location.href
  );

  history.pushState(
    { pagina: "quitanda-controle" },
    "",
    window.location.href
  );

  window.addEventListener("popstate", () => {
    if (existeDescricaoAberta()) {
      fecharDescricoesAbertas();

      history.pushState(
        { pagina: "quitanda-controle" },
        "",
        window.location.href
      );

      return;
    }

    voltarParaInicio();

    history.pushState(
      { pagina: "quitanda-controle" },
      "",
      "#inicio"
    );
  });
}


/* =========================================================
   5. ANIMAÇÕES DE ENTRADA
========================================================= */

function prepararAnimacaoElemento(elemento) {
  if (!elemento) return;

  elemento.classList.add("revelar");

  if (CONSULTA_REDUCAO_MOVIMENTO.matches) {
    elemento.classList.add("visivel");
    return;
  }

  if (observadorAnimacoes) {
    observadorAnimacoes.observe(elemento);
  }
}

function inicializarAnimacoesDeEntrada() {
  const seletores = [
    ".titulo-secao",
    ".sobre-grid > *",
    ".agro-grid > *",
    ".conteudo-duplo > *",
    ".info-card",
    ".missao-card",
    ".catalogo-card",
    ".receita-card",
    ".contato-container > *"
  ];

  const elementosAnimados = document.querySelectorAll(seletores.join(","));

  if (CONSULTA_REDUCAO_MOVIMENTO.matches) {
    elementosAnimados.forEach((elemento) => {
      elemento.classList.add("revelar", "visivel");
    });

    return;
  }

  observadorAnimacoes = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
          observadorAnimacoes.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px"
    }
  );

  elementosAnimados.forEach((elemento) => {
    prepararAnimacaoElemento(elemento);
  });
}


/* =========================================================
   6. CATÁLOGO DE PRODUTOS
========================================================= */

function estaEmTelaMobileProdutos() {
  return CONSULTA_MOBILE_PRODUTOS.matches;
}

function filtrarProdutosPorCategoria(categoria) {
  const listaProdutos = obterProdutos();

  if (categoria === "todos") {
    return listaProdutos;
  }

  return listaProdutos.filter((produto) => produto.categoria === categoria);
}

function atualizarBotaoVerMaisProdutos(totalProdutos) {
  const { controleVerMaisProdutos, botaoVerMaisProdutos } = elementos;

  if (!controleVerMaisProdutos || !botaoVerMaisProdutos) return;

  const deveMostrarBotao =
    estaEmTelaMobileProdutos() &&
    !produtosExpandidosMobile &&
    totalProdutos > LIMITE_PRODUTOS_MOBILE;

  controleVerMaisProdutos.classList.toggle("oculto", !deveMostrarBotao);
}

function renderizarProdutos(categoria = categoriaAtualProdutos) {
  const { catalogoProdutos } = elementos;

  if (!catalogoProdutos) return;

  categoriaAtualProdutos = categoria;

  const produtosFiltrados = filtrarProdutosPorCategoria(categoriaAtualProdutos);

  const deveLimitarProdutos =
    estaEmTelaMobileProdutos() && !produtosExpandidosMobile;

  const produtosParaExibir = deveLimitarProdutos
    ? produtosFiltrados.slice(0, LIMITE_PRODUTOS_MOBILE)
    : produtosFiltrados;

  limparElemento(catalogoProdutos);

  produtosParaExibir.forEach((produto) => {
    const card = document.createElement("article");
    card.classList.add("catalogo-card");

    const botaoReceita = produto.receita
      ? `<a href="${produto.receita}" class="link-card catalogo-link-receita">Ver receita relacionada</a>`
      : "";

    card.innerHTML = `
      <img 
        src="${produto.imagem}" 
        alt="${produto.nome}"
        onerror="this.src='${IMAGEM_FALLBACK_PRODUTO}'"
      >

      <div class="catalogo-card-conteudo">
        <span>${formatarCategoria(produto.categoria)}</span>
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>

        ${botaoReceita}

        <button 
          type="button" 
          class="btn btn-principal btn-ver-produto" 
          data-produto-id="${produto.id}"
        >
          Ver detalhes
        </button>
      </div>
    `;

    catalogoProdutos.appendChild(card);
    prepararAnimacaoElemento(card);
  });

  atualizarBotaoVerMaisProdutos(produtosFiltrados.length);
}

function inicializarFiltrosProdutos() {
  const { botoesFiltro } = elementos;

  botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
      botoesFiltro.forEach((item) => item.classList.remove("ativo"));
      botao.classList.add("ativo");

      produtosExpandidosMobile = false;

      const categoria = botao.getAttribute("data-categoria");
      renderizarProdutos(categoria);
    });
  });
}

function inicializarBotaoVerMaisProdutos() {
  const { botaoVerMaisProdutos } = elementos;

  if (!botaoVerMaisProdutos) return;

  botaoVerMaisProdutos.addEventListener("click", () => {
    produtosExpandidosMobile = true;
    renderizarProdutos(categoriaAtualProdutos);
  });

  if (CONSULTA_MOBILE_PRODUTOS.addEventListener) {
    CONSULTA_MOBILE_PRODUTOS.addEventListener("change", () => {
      produtosExpandidosMobile = false;
      renderizarProdutos(categoriaAtualProdutos);
    });
  } else if (CONSULTA_MOBILE_PRODUTOS.addListener) {
    CONSULTA_MOBILE_PRODUTOS.addListener(() => {
      produtosExpandidosMobile = false;
      renderizarProdutos(categoriaAtualProdutos);
    });
  }
}

function inicializarCliqueProdutos() {
  const { catalogoProdutos } = elementos;

  if (!catalogoProdutos) return;

  catalogoProdutos.addEventListener("click", (event) => {
    const botaoProduto = event.target.closest(".btn-ver-produto");

    if (!botaoProduto) return;

    const idProduto = Number(botaoProduto.dataset.produtoId);
    abrirDetalhesProduto(idProduto);
  });
}


/* =========================================================
   7. MODAL DE PRODUTOS
========================================================= */

function abrirDetalhesProduto(idProduto) {
  const listaProdutos = obterProdutos();
  const produto = listaProdutos.find((item) => item.id === idProduto);

  if (!produto || !elementos.modalProduto) return;

  preencherModalProduto(produto);

  elementos.modalProduto.classList.add("ativo");
  bloquearRolagemPagina();
  registrarEstadoModal("produto");
}

function preencherModalProduto(produto) {
  const {
    modalImagem,
    modalCategoria,
    modalNome,
    modalDescricao,
    modalUsoTradicionalBox
  } = elementos;

  definirImagemComFallback(
    modalImagem,
    produto.imagem,
    produto.nome,
    IMAGEM_FALLBACK_PRODUTO
  );

  if (modalCategoria) {
    modalCategoria.textContent = formatarCategoria(produto.categoria);
  }

  if (modalNome) {
    modalNome.textContent = produto.nome;
  }

  if (modalDescricao) {
    modalDescricao.textContent = produto.descricao;
  }

  preencherTabelaNutricional(produto.nutricional);
  preencherUsoTradicionalProduto(produto.usoTradicional);
  atualizarLinkReceitaProduto(produto.receita, modalUsoTradicionalBox);
}

function preencherTabelaNutricional(nutricional) {
  const { modalNutricional } = elementos;

  if (!modalNutricional) return;

  limparElemento(modalNutricional);

  if (!nutricional || typeof nutricional !== "object") return;

  Object.entries(nutricional).forEach(([chave, valor]) => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <th>${chave}</th>
      <td>${valor}</td>
    `;

    modalNutricional.appendChild(linha);
  });
}

function preencherUsoTradicionalProduto(usoTradicional) {
  const { modalUsoTradicional, modalUsoTradicionalBox } = elementos;

  if (!modalUsoTradicional || !modalUsoTradicionalBox) return;

  if (usoTradicional && usoTradicional.trim() !== "") {
    modalUsoTradicionalBox.style.display = "block";
    modalUsoTradicional.textContent = usoTradicional;
  } else {
    modalUsoTradicionalBox.style.display = "none";
    modalUsoTradicional.textContent = "";
  }
}

function atualizarLinkReceitaProduto(linkReceita, elementoReferencia) {
  const linkReceitaAntigo = document.getElementById("modalLinkReceita");

  if (linkReceitaAntigo) {
    linkReceitaAntigo.remove();
  }

  if (!linkReceita || !elementoReferencia) return;

  const link = document.createElement("a");
  link.href = linkReceita;
  link.id = "modalLinkReceita";
  link.className = "btn btn-principal";
  link.textContent = "Ver receita relacionada";

  link.addEventListener("click", () => {
    fecharModalProduto();
  });

  elementoReferencia.insertAdjacentElement("afterend", link);
}

function fecharModalProduto() {
  if (!elementos.modalProduto) return;

  elementos.modalProduto.classList.remove("ativo");
  liberarRolagemPagina();
}

function inicializarEventosModalProduto() {
  const { modalProduto, fecharModalProduto: botaoFechar } = elementos;

  if (botaoFechar) {
    botaoFechar.addEventListener("click", fecharModalProduto);
  }

  if (modalProduto) {
    modalProduto.addEventListener("click", (event) => {
      if (event.target === modalProduto) {
        fecharModalProduto();
      }
    });
  }
}


/* =========================================================
   8. RECEITAS
========================================================= */

function renderizarReceitas() {
  const { listaReceitas } = elementos;

  if (!listaReceitas) return;

  const lista = obterReceitas();

  limparElemento(listaReceitas);

  lista.forEach((receita) => {
    const card = document.createElement("article");
    card.classList.add("receita-card");

    card.innerHTML = `
      <img 
        src="${receita.imagem}" 
        alt="${receita.nome}"
        onerror="this.src='${IMAGEM_FALLBACK_RECEITA}'"
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
    prepararAnimacaoElemento(card);
  });
}

function inicializarCliqueReceitas() {
  const { listaReceitas } = elementos;

  if (!listaReceitas) return;

  listaReceitas.addEventListener("click", (event) => {
    const botaoReceita = event.target.closest(".btn-ver-receita");

    if (!botaoReceita) return;

    const idReceita = botaoReceita.dataset.receitaId;
    abrirReceita(idReceita);
  });
}


/* =========================================================
   9. MODAL DE RECEITAS
========================================================= */

function abrirReceita(idReceita) {
  const lista = obterReceitas();
  const receita = lista.find((item) => item.id === idReceita);

  if (!receita || !elementos.modalReceita) return;

  preencherModalReceita(receita);

  elementos.modalReceita.classList.add("ativo");
  bloquearRolagemPagina();
  registrarEstadoModal("receita");
}

function preencherModalReceita(receita) {
  const {
    modalReceitaImagem,
    modalReceitaCategoria,
    modalReceitaNome,
    modalReceitaAutoria,
    modalReceitaDescricao
  } = elementos;

  definirImagemComFallback(
    modalReceitaImagem,
    receita.imagem,
    receita.nome,
    IMAGEM_FALLBACK_RECEITA
  );

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

  preencherListaReceita(elementos.modalReceitaIngredientes, receita.ingredientes);
  preencherListaReceita(elementos.modalReceitaPreparo, receita.preparo);
}

function preencherListaReceita(elementoLista, itens) {
  if (!elementoLista) return;

  limparElemento(elementoLista);

  if (!Array.isArray(itens)) return;

  itens.forEach((texto) => {
    const item = document.createElement("li");
    item.textContent = texto;
    elementoLista.appendChild(item);
  });
}

function fecharModalReceita() {
  if (!elementos.modalReceita) return;

  elementos.modalReceita.classList.remove("ativo");
  liberarRolagemPagina();
}

function inicializarEventosModalReceita() {
  const { modalReceita, fecharModalReceita: botaoFechar } = elementos;

  if (botaoFechar) {
    botaoFechar.addEventListener("click", fecharModalReceita);
  }

  if (modalReceita) {
    modalReceita.addEventListener("click", (event) => {
      if (event.target === modalReceita) {
        fecharModalReceita();
      }
    });
  }
}


/* =========================================================
   10. EVENTOS GLOBAIS
========================================================= */

function inicializarControleAudio() {
  const { musicaSite, botaoAudio } = elementos;

  if (!musicaSite || !botaoAudio) return;

  musicaSite.volume = 0.25;

  function marcarAudioTocando() {
    botaoAudio.classList.add("ativo");
    botaoAudio.textContent = "❚❚";
    botaoAudio.setAttribute("aria-label", "Pausar música do site");
  }

  function marcarAudioPausado() {
    botaoAudio.classList.remove("ativo");
    botaoAudio.textContent = "♫";
    botaoAudio.setAttribute("aria-label", "Tocar música do site");
  }

  async function tocarAudio() {
    try {
      await musicaSite.play();
      marcarAudioTocando();
      return true;
    } catch (erro) {
      marcarAudioPausado();
      return false;
    }
  }

  function removerEventosDePrimeiraInteracao() {
    document.removeEventListener("pointerdown", iniciarAudioNaPrimeiraInteracao);
    document.removeEventListener("touchstart", iniciarAudioNaPrimeiraInteracao);
    document.removeEventListener("keydown", iniciarAudioNaPrimeiraInteracao);
  }

  async function iniciarAudioNaPrimeiraInteracao(event) {
    const clicouNoBotaoAudio = event.target.closest?.("#botaoAudio");

    if (clicouNoBotaoAudio) return;

    const conseguiuTocar = await tocarAudio();

    if (conseguiuTocar) {
      removerEventosDePrimeiraInteracao();
    }
  }

  async function tentarAutoplayInicial() {
    const conseguiuTocar = await tocarAudio();

    if (!conseguiuTocar) {
      document.addEventListener("pointerdown", iniciarAudioNaPrimeiraInteracao);
      document.addEventListener("touchstart", iniciarAudioNaPrimeiraInteracao, { passive: true });
      document.addEventListener("keydown", iniciarAudioNaPrimeiraInteracao);
    }
  }

  botaoAudio.addEventListener("click", async () => {
    if (musicaSite.paused) {
      const conseguiuTocar = await tocarAudio();

      if (conseguiuTocar) {
        removerEventosDePrimeiraInteracao();
      }
    } else {
      musicaSite.pause();
      marcarAudioPausado();
    }
  });

  tentarAutoplayInicial();
}


function inicializarEventosGlobais() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && existeDescricaoAberta()) {
      fecharDescricoesAbertas();
    }
  });
}


/* =========================================================
   11. INICIALIZAÇÃO
========================================================= */

function inicializarSite() {
  atualizarAnoRodape();

  inicializarMenuMobile();
  inicializarControleAudio();

  renderizarProdutos();
  inicializarFiltrosProdutos();
  inicializarBotaoVerMaisProdutos();
  inicializarCliqueProdutos();
  inicializarEventosModalProduto();

  renderizarReceitas();
  inicializarAnimacoesDeEntrada();
  inicializarCliqueReceitas();
  inicializarEventosModalReceita();

  inicializarEventosGlobais();
  configurarHistoricoDoSite();
}

inicializarSite();


/* =========================================================
   COMPATIBILIDADE COM POSSÍVEIS CHAMADAS INLINE ANTIGAS
========================================================= */

window.abrirDetalhesProduto = abrirDetalhesProduto;
window.abrirReceita = abrirReceita;