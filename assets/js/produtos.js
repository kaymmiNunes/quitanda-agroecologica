const produtos = [
  {
    id: 1,
    nome: "Banana",
    categoria: "frutas",
    imagem: "assets/img/produtos/frutas/banana.jpg",
    descricao:
      "Fruta popular, energética e versátil, muito consumida in natura, em vitaminas, bolos e preparações caseiras.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "89 kcal",
      "Carboidratos": "22,8 g",
      "Proteínas": "1,1 g",
      "Gorduras totais": "0,3 g",
      "Fibras": "2,6 g",
      "Destaques": "Fonte de potássio e carboidratos naturais"
    },
    usoTradicional: ""
  },
  {
    id: 3,
    nome: "Romã",
    categoria: "frutas",
    imagem: "assets/img/produtos/frutas/roma.jpg",
    descricao:
      "Fruta de polpa suculenta e sabor levemente ácido, usada em sucos, saladas e consumo natural.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "83 kcal",
      "Carboidratos": "18,7 g",
      "Proteínas": "1,7 g",
      "Gorduras totais": "1,2 g",
      "Fibras": "4,0 g",
      "Destaques": "Contém fibras e compostos antioxidantes naturais"
    },
    usoTradicional: ""
  },
  {
    id: 4,
    nome: "Abacate",
    categoria: "frutas",
    imagem: "assets/img/produtos/frutas/abacate.jpg",
    descricao:
      "Fruta cremosa e nutritiva, muito usada em vitaminas, saladas, pastas e preparações saudáveis.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "160 kcal",
      "Carboidratos": "8,5 g",
      "Proteínas": "2,0 g",
      "Gorduras totais": "14,7 g",
      "Fibras": "6,7 g",
      "Destaques": "Fonte de gorduras boas, fibras e potássio"
    },
    usoTradicional: ""
  },
  {
    id: 5,
    nome: "Limão",
    categoria: "frutas",
    imagem: "assets/img/produtos/frutas/limao.jpg",
    descricao:
      "Fruta cítrica usada em sucos, temperos, saladas, marinadas e preparações naturais.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "30 kcal",
      "Carboidratos": "10,5 g",
      "Proteínas": "0,7 g",
      "Gorduras totais": "0,2 g",
      "Fibras": "2,8 g",
      "Destaques": "Fonte de vitamina C e acidez natural"
    },
    usoTradicional: ""
  },
  {
    id: 6,
    nome: "Laranja comum",
    categoria: "frutas",
    imagem: "assets/img/produtos/frutas/laranja-comum.jpg",
    descricao:
      "Fruta cítrica de sabor doce e levemente ácido, muito consumida in natura ou em sucos. É uma opção refrescante para o dia a dia e bastante presente na alimentação brasileira.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "47 kcal",
      "Carboidratos": "11,8 g",
      "Proteínas": "0,9 g",
      "Gorduras totais": "0,1 g",
      "Fibras": "2,4 g",
      "Destaques": "Fonte de vitamina C, fibras e compostos naturais antioxidantes"
    },
    usoTradicional:
      "Tradicionalmente consumida in natura, em sucos, saladas de frutas, sobremesas e preparações caseiras. Seu consumo deve estar associado a uma alimentação equilibrada."
  },
  {
    id: 7,
    nome: "Alface",
    categoria: "hortalicas",
    imagem: "assets/img/produtos/hortalicas/alface-crespa.jpg",
    descricao:
      "Hortaliça folhosa leve e refrescante, muito utilizada em saladas e acompanhamentos.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "15 kcal",
      "Carboidratos": "2,9 g",
      "Proteínas": "1,4 g",
      "Gorduras totais": "0,2 g",
      "Fibras": "1,3 g",
      "Destaques": "Baixo valor calórico e boa presença de água"
    },
    usoTradicional: ""
  },
  {
    id: 8,
    nome: "Cebolinha",
    categoria: "hortalicas",
    imagem: "assets/img/produtos/hortalicas/cebolinha.jpg",
    descricao:
      "Tempero verde aromático, usado para finalizar pratos, sopas, saladas e preparações caseiras.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "32 kcal",
      "Carboidratos": "7,3 g",
      "Proteínas": "1,8 g",
      "Gorduras totais": "0,2 g",
      "Fibras": "2,6 g",
      "Destaques": "Contém fibras, minerais e compostos aromáticos"
    },
    usoTradicional: ""
  },
  {
    id: 9,
    nome: "Coentro fresco",
    categoria: "hortalicas",
    imagem: "assets/img/produtos/hortalicas/coentro.jpg",
    descricao:
      "Erva aromática muito utilizada na culinária nordestina, especialmente em feijões, molhos, saladas, peixes e preparações regionais.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "23 kcal",
      "Carboidratos": "3,7 g",
      "Proteínas": "2,1 g",
      "Gorduras totais": "0,5 g",
      "Fibras": "2,8 g",
      "Destaques": "Erva aromática com baixo valor calórico"
    },
    usoTradicional:
      "Utilizado tradicionalmente como tempero natural. Seu consumo deve estar associado a uma alimentação equilibrada, sem promessa de tratamento de doenças."
  },
  {
    id: 10,
    nome: "Hortelã",
    categoria: "hortalicas",
    imagem: "assets/img/produtos/hortalicas/hortela.jpg",
    descricao:
      "Erva aromática de sabor refrescante, utilizada em chás, sucos, saladas, molhos e preparações culinárias.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "44 kcal",
      "Carboidratos": "8,4 g",
      "Proteínas": "3,3 g",
      "Gorduras totais": "0,7 g",
      "Fibras": "6,8 g",
      "Destaques": "Erva aromática com compostos naturais e aroma refrescante"
    },
    usoTradicional:
      "Usada tradicionalmente em infusões e preparações culinárias. Pessoas com refluxo, problemas biliares, gestantes, lactantes e crianças pequenas devem consumir com orientação profissional."
  },
  {
    id: 11,
    nome: "Erva-doce",
    categoria: "ervas",
    imagem: "assets/img/produtos/produtos-do-rocado/erva-doce.jpg",
    descricao:
      "Semente aromática utilizada em chás, bolos, pães e preparações caseiras.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "345 kcal",
      "Carboidratos": "52,3 g",
      "Proteínas": "15,8 g",
      "Gorduras totais": "14,9 g",
      "Fibras": "39,8 g",
      "Destaques": "Semente aromática rica em fibras"
    },
    usoTradicional:
      "Conhecida tradicionalmente pelo uso em infusões. O uso deve ser cuidadoso e não substitui orientação médica ou nutricional."
  },
  {
    id: 12,
    nome: "Endro",
    categoria: "ervas",
    imagem: "assets/img/produtos/produtos-do-rocado/erva-endro.jpg",
    descricao:
      "Erva aromática de sabor suave e levemente adocicado, muito utilizada como tempero natural em saladas, molhos, peixes, legumes, conservas e preparações caseiras.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "43 kcal",
      "Carboidratos": "7,0 g",
      "Proteínas": "3,5 g",
      "Gorduras totais": "1,1 g",
      "Fibras": "2,1 g",
      "Destaques": "Erva aromática com baixo valor calórico e presença de compostos naturais de aroma"
    },
    usoTradicional:
      "Tradicionalmente utilizado na culinária e em infusões caseiras. Seu uso deve ser associado a uma alimentação equilibrada e não substitui orientação de nutricionista, médico ou outro profissional de saúde."
  },
  {
    id: 13,
    nome: "Flocão da Paixão",
    categoria: "produtos-rocado",
    imagem:
      "assets/img/produtos/produtos-do-rocado/flocao-da-paixao-embalagem-expositora.jpg",
    descricao:
      "Produto agroecológico à base de milho, utilizado principalmente no preparo de cuscuz e receitas regionais. Valoriza a produção local e a cultura alimentar nordestina.",
    nutricional: {
      "Porção de referência": "Consultar rótulo",
      "Valor energético": "Consultar rótulo",
      "Carboidratos": "Consultar rótulo",
      "Proteínas": "Consultar rótulo",
      "Gorduras totais": "Consultar rótulo",
      "Fibras": "Consultar rótulo",
      "Destaques": "Produto regional derivado do milho"
    },
    usoTradicional:
      "Usado tradicionalmente no preparo de cuscuz, bolos, farofas e receitas de milho.",
    receita: "#receitas"
  },
  {
    id: 14,
    nome: "Fubá da Paixão",
    categoria: "produtos-rocado",
    imagem: "assets/img/produtos/produtos-do-rocado/fuba-da-paixao.jpg",
    descricao:
      "Produto derivado do milho, utilizado no preparo de bolos, broas, mingaus e receitas tradicionais. Representa o beneficiamento da produção agroecológica local.",
    nutricional: {
      "Porção de referência": "Consultar rótulo",
      "Valor energético": "Consultar rótulo",
      "Carboidratos": "Consultar rótulo",
      "Proteínas": "Consultar rótulo",
      "Gorduras totais": "Consultar rótulo",
      "Fibras": "Consultar rótulo",
      "Destaques": "Ingrediente tradicional para receitas com milho"
    },
    usoTradicional:
      "Muito usado em broas, bolos, mingaus e preparações regionais.",
    receita: "#receitas"
  },
  {
    id: 15,
    nome: "Xerém da Paixão",
    categoria: "produtos-rocado",
    imagem:
      "assets/img/produtos/produtos-do-rocado/xerem-da-paixao-detalhe-da-embalagem.jpg",
    descricao:
      "Derivado do milho em grãos quebrados, usado em preparações doces e salgadas. Ajuda a preservar saberes culinários tradicionais.",
    nutricional: {
      "Porção de referência": "Consultar rótulo",
      "Valor energético": "Consultar rótulo",
      "Carboidratos": "Consultar rótulo",
      "Proteínas": "Consultar rótulo",
      "Gorduras totais": "Consultar rótulo",
      "Fibras": "Consultar rótulo",
      "Destaques": "Produto regional usado em preparações doces e salgadas"
    },
    usoTradicional:
      "Utilizado em receitas como xerém cozido, mungunzá, acompanhamentos e pratos regionais.",
    receita: "#receitas"
  },
  {
    id: 16,
    nome: "Arroz da Terra",
    categoria: "produtos-rocado",
    imagem: "assets/img/produtos/produtos-do-rocado/arroz-da-terra-detalhado.jpg",
    descricao:
      "Arroz produzido a partir da agricultura familiar, valorizando a produção local, os saberes do campo e a diversidade alimentar da região. É indicado para o preparo de refeições do dia a dia, acompanhamentos, pratos regionais e receitas caseiras.",
    nutricional: {
      "Porção de referência": "50 g",
      "Valor energético": "Consultar rótulo",
      "Carboidratos": "Consultar rótulo",
      "Proteínas": "Consultar rótulo",
      "Gorduras totais": "Consultar rótulo",
      "Fibras": "Consultar rótulo",
      "Destaques": "Produto regional da agricultura familiar, fonte de energia para a alimentação diária"
    },
    usoTradicional:
      "Tradicionalmente utilizado em refeições caseiras, acompanhando feijão, carnes, legumes, saladas e preparações regionais. Valoriza a produção local e contribui para o fortalecimento da agricultura familiar."
  },
  {
    id: 17,
    nome: "Conserva de pimenta",
    categoria: "produtos-rocado",
    imagem: "assets/img/produtos/produtos-do-rocado/conserva-pimenta.jpg",
    descricao:
      "Produto artesanal preparado com pimentas e temperos em conserva, utilizado para acompanhar refeições.",
    nutricional: {
      "Porção de referência": "A confirmar com o produtor",
      "Valor energético": "Consultar produtor ou rótulo",
      "Carboidratos": "Consultar produtor ou rótulo",
      "Proteínas": "Consultar produtor ou rótulo",
      "Gorduras totais": "Consultar produtor ou rótulo",
      "Fibras": "Consultar produtor ou rótulo",
      "Destaques": "Produto artesanal de uso culinário"
    },
    usoTradicional:
      "Produto de uso culinário. Pessoas com sensibilidade gástrica devem consumir com moderação."
  },
  {
    id: 18,
    nome: "Conserva de Mel",
    categoria: "artesanais",
    imagem: "assets/img/produtos/artesanais/mel-e-derivados.jpg",
    descricao:
      "Produto artesanal em conserva preparado com mel, indicado para consumo alimentar em acompanhamentos, receitas caseiras, cafés da manhã, lanches e preparações regionais. Valoriza ingredientes naturais e a produção local.",
    nutricional: {
      "Porção de referência": "20 g",
      "Valor energético": "Consultar rótulo",
      "Carboidratos": "Consultar rótulo",
      "Proteínas": "Consultar rótulo",
      "Gorduras totais": "Consultar rótulo",
      "Fibras": "Consultar rótulo",
      "Destaques": "Produto artesanal à base de mel, utilizado como acompanhamento e ingrediente culinário"
    },
    usoTradicional:
      "Tradicionalmente utilizado como acompanhamento em pães, bolos, frutas, tapiocas, cuscuz e outras preparações caseiras. Deve ser consumido com moderação por ser um produto naturalmente rico em açúcares. Crianças menores de 1 ano não devem consumir mel."
  },
  {
    id: 19,
    nome: "Doces artesanais",
    categoria: "produtos-rocado",
    imagem: "assets/img/produtos/artesanais/doces-sortidos-alinhados.jpg",
    descricao:
      "Produtos artesanais preparados a partir de receitas tradicionais, valorizando sabores regionais e a produção familiar.",
    nutricional: {
      "Porção de referência": "A confirmar com o produtor",
      "Valor energético": "Consultar produtor ou rótulo",
      "Carboidratos": "Consultar produtor ou rótulo",
      "Proteínas": "Consultar produtor ou rótulo",
      "Gorduras totais": "Consultar produtor ou rótulo",
      "Fibras": "Consultar produtor ou rótulo",
      "Destaques": "Produto artesanal de consumo moderado"
    },
    usoTradicional:
      "Consumido como sobremesa ou acompanhamento, preservando receitas tradicionais da região."
  },
  {
    id: 20,
    nome: "Ovos de capoeira",
    categoria: "produtos-rocado",
    imagem: "assets/img/produtos/artesanais/ovos.jpg",
    descricao:
      "Produto da agricultura familiar, geralmente associado à criação em pequena escala e ao abastecimento local.",
    nutricional: {
      "Porção de referência": "1 unidade média",
      "Valor energético": "Cerca de 70 kcal",
      "Carboidratos": "0,4 g",
      "Proteínas": "6 g",
      "Gorduras totais": "5 g",
      "Fibras": "0 g",
      "Destaques": "Fonte de proteínas, vitaminas e minerais"
    },
    usoTradicional:
      "Usado em preparações caseiras, bolos, massas, refeições e receitas regionais."
  },
  {
  id: 21,
  nome: "Laranja tangerina",
  categoria: "frutas",
  imagem: "assets/img/produtos/frutas/laranja-cravo.jpg",
  descricao:
    "Fruta cítrica de sabor adocicado, aroma marcante e fácil consumo, muito apreciada in natura. Também pode ser utilizada em sucos, sobremesas, saladas e preparações caseiras.",
  nutricional: {
    "Porção de referência": "100 g",
    "Valor energético": "53 kcal",
    "Carboidratos": "13,3 g",
    "Proteínas": "0,8 g",
    "Gorduras totais": "0,3 g",
    "Fibras": "1,8 g",
    "Destaques": "Fonte de vitamina C, água, fibras e aroma cítrico natural"
  },
  usoTradicional:
    "Tradicionalmente consumida in natura, especialmente por ser fácil de descascar e ter sabor adocicado. Também pode ser usada em sucos, doces, geleias, bolos e receitas caseiras."
  },
  {
  id: 26,
  nome: "Rúcula",
  categoria: "hortalicas",
  imagem: "assets/img/produtos/hortalicas/rucula.jpg",
  descricao:
    "Hortaliça folhosa de sabor levemente picante e marcante, muito utilizada em saladas, sanduíches, pizzas, massas e acompanhamentos. É uma opção leve, fresca e nutritiva para o consumo diário.",
  nutricional: {
    "Porção de referência": "100 g",
    "Valor energético": "25 kcal",
    "Carboidratos": "3,7 g",
    "Proteínas": "2,6 g",
    "Gorduras totais": "0,7 g",
    "Fibras": "1,6 g",
    "Destaques": "Hortaliça folhosa com baixo valor calórico, fonte de fibras, vitaminas e minerais"
  },
  usoTradicional:
    "Tradicionalmente consumida crua em saladas e acompanhamentos, podendo também ser usada em preparações quentes como pizzas, massas e refogados rápidos. Seu consumo deve estar associado a uma alimentação equilibrada."
  },
  {
  id: 27,
  nome: "Coloral Natural",
  categoria: "ervas",
  imagem: "assets/img/produtos/artesanais/coloral-natural.jpg",
  descricao:
    "Tempero natural de cor avermelhada, utilizado para dar cor, aroma e sabor suave a preparações caseiras. É muito usado em arroz, feijão, carnes, frango, peixes, caldos, molhos, ensopados e comidas regionais.",
  nutricional: {
    "Porção de referência": "A confirmar no rótulo",
    "Valor energético": "Consultar rótulo",
    "Carboidratos": "Consultar rótulo",
    "Proteínas": "Consultar rótulo",
    "Gorduras totais": "Consultar rótulo",
    "Fibras": "Consultar rótulo",
    "Destaques": "Tempero natural utilizado para realçar a cor e o sabor dos alimentos"
  },
  usoTradicional:
    "Tradicionalmente utilizado na culinária brasileira e nordestina para colorir e temperar alimentos de forma natural. Deve ser usado em pequenas quantidades como parte de uma alimentação equilibrada. Por ser produto embalado, as informações nutricionais devem seguir preferencialmente os dados do rótulo."
  }
  ];