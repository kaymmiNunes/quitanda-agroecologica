const produtos = [
  {
    id: 1,
    nome: "Banana",
    categoria: "frutas",
    imagem: "assets/img/produtos/banana.jpg",
    descricao: "Fruta popular, energética e versátil, muito consumida in natura, em vitaminas, bolos e preparações caseiras.",
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
    id: 2,
    nome: "Banana-da-terra",
    categoria: "frutas",
    imagem: "assets/img/produtos/banana-da-terra.jpg",
    descricao: "Banana de sabor marcante, muito utilizada cozida, assada ou frita em preparações regionais.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "122 kcal",
      "Carboidratos": "31,9 g",
      "Proteínas": "1,3 g",
      "Gorduras totais": "0,4 g",
      "Fibras": "2,3 g",
      "Destaques": "Alimento energético e rico em carboidratos"
    },
    usoTradicional: ""
  },
  {
    id: 3,
    nome: "Romã",
    categoria: "frutas",
    imagem: "assets/img/produtos/roma.jpg",
    descricao: "Fruta de polpa suculenta e sabor levemente ácido, conhecida por sua cor intensa e uso em sucos, saladas e consumo natural.",
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
    imagem: "assets/img/produtos/abacate.jpg",
    descricao: "Fruta cremosa, nutritiva e muito utilizada em vitaminas, saladas, pastas e preparações saudáveis.",
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
    nome: "Alface",
    categoria: "hortalicas",
    imagem: "assets/img/produtos/alface.jpg",
    descricao: "Hortaliça folhosa leve e refrescante, muito utilizada em saladas e acompanhamentos.",
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
    id: 6,
    nome: "Cebolinha",
    categoria: "hortalicas",
    imagem: "assets/img/produtos/cebolinha.jpg",
    descricao: "Tempero verde aromático, usado para finalizar pratos, sopas, saladas e preparações caseiras.",
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
    id: 7,
    nome: "Coentro fresco",
    categoria: "ervas",
    imagem: "assets/img/produtos/coentro.jpg",
    descricao: "Erva aromática muito utilizada na culinária nordestina, especialmente em feijões, molhos, saladas, peixes e preparações regionais.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "23 kcal",
      "Carboidratos": "3,7 g",
      "Proteínas": "2,1 g",
      "Gorduras totais": "0,5 g",
      "Fibras": "2,8 g",
      "Destaques": "Erva aromática com baixo valor calórico"
    },
    usoTradicional: "Utilizado tradicionalmente como tempero natural. Seu consumo deve ser associado à alimentação equilibrada, sem promessa de tratamento de doenças."
  },
  {
    id: 8,
    nome: "Hortelã",
    categoria: "ervas",
    imagem: "assets/img/produtos/hortela.jpg",
    descricao: "Erva aromática de sabor refrescante, utilizada em chás, sucos, saladas, molhos e preparações culinárias.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "44 kcal",
      "Carboidratos": "8,4 g",
      "Proteínas": "3,3 g",
      "Gorduras totais": "0,7 g",
      "Fibras": "6,8 g",
      "Destaques": "Erva aromática com compostos naturais e aroma refrescante"
    },
    usoTradicional: "Usada tradicionalmente em infusões e preparações culinárias. A hortelã-pimenta aparece em materiais fitoterápicos como auxiliar em sintomas digestivos, mas seu uso exige cuidado em pessoas com refluxo, problemas biliares, gestantes, lactantes e crianças pequenas."
  },
  {
    id: 9,
    nome: "Limão",
    categoria: "frutas",
    imagem: "assets/img/produtos/limao.jpg",
    descricao: "Fruta cítrica usada em sucos, temperos, saladas, marinadas e preparações naturais.",
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
    id: 10,
    nome: "Laranja ou tangerina",
    categoria: "frutas",
    imagem: "assets/img/produtos/laranja.jpg",
    descricao: "Fruta cítrica consumida in natura ou em sucos, conhecida pelo sabor doce e refrescante.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "47 a 53 kcal",
      "Carboidratos": "11,8 a 13,3 g",
      "Proteínas": "0,8 a 0,9 g",
      "Gorduras totais": "0,1 a 0,3 g",
      "Fibras": "1,8 a 2,4 g",
      "Destaques": "Fonte de vitamina C"
    },
    usoTradicional: ""
  },
  {
    id: 11,
    nome: "Erva-doce",
    categoria: "ervas",
    imagem: "assets/img/produtos/erva-doce.jpg",
    descricao: "Semente aromática utilizada em chás, bolos, pães e preparações caseiras.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "345 kcal",
      "Carboidratos": "52,3 g",
      "Proteínas": "15,8 g",
      "Gorduras totais": "14,9 g",
      "Fibras": "39,8 g",
      "Destaques": "Semente aromática rica em fibras"
    },
    usoTradicional: "Conhecida tradicionalmente pelo uso em infusões. O funcho/erva-doce aparece em formulações fitoterápicas oficiais, porém o uso deve ser cuidadoso e não substitui orientação profissional."
  },
  {
    id: 12,
    nome: "Coentro em sementes",
    categoria: "ervas",
    imagem: "assets/img/produtos/coentro-semente.jpg",
    descricao: "Tempero seco utilizado em carnes, caldos, molhos, conservas e preparações culinárias.",
    nutricional: {
      "Porção de referência": "100 g",
      "Valor energético": "298 kcal",
      "Carboidratos": "55,0 g",
      "Proteínas": "12,4 g",
      "Gorduras totais": "17,8 g",
      "Fibras": "41,9 g",
      "Destaques": "Semente aromática rica em fibras e compostos de aroma"
    },
    usoTradicional: "Utilizado tradicionalmente como tempero e ingrediente culinário. Não deve ser apresentado como tratamento para doenças."
  },
  {
    id: 13,
    nome: "Flocão da Paixão",
    categoria: "naturais",
    imagem: "assets/img/produtos/flocao.jpg",
    descricao: "Produto agroecológico à base de milho, utilizado no preparo de cuscuz e outras receitas regionais.",
    nutricional: {
      "Porção de referência": "50 g",
      "Valor energético": "Consultar rótulo",
      "Carboidratos": "Consultar rótulo",
      "Proteínas": "Consultar rótulo",
      "Gorduras totais": "Consultar rótulo",
      "Fibras": "Consultar rótulo",
      "Destaques": "Produto embalado: usar a tabela nutricional oficial do rótulo"
    },
    usoTradicional: ""
  },
  {
    id: 14,
    nome: "Sementes da Paixão",
    categoria: "naturais",
    imagem: "assets/img/produtos/sementes-da-paixao.jpg",
    descricao: "Produto da agricultura familiar, associado à valorização de sementes, cultura alimentar local e produção regional.",
    nutricional: {
      "Porção de referência": "A confirmar",
      "Valor energético": "Consultar rótulo",
      "Carboidratos": "Consultar rótulo",
      "Proteínas": "Consultar rótulo",
      "Gorduras totais": "Consultar rótulo",
      "Fibras": "Consultar rótulo",
      "Destaques": "Produto embalado: usar dados do rótulo ou do produtor"
    },
    usoTradicional: ""
  },
  {
    id: 15,
    nome: "Conserva de pimenta",
    categoria: "naturais",
    imagem: "assets/img/produtos/conserva-pimenta.jpg",
    descricao: "Produto artesanal preparado com pimentas e temperos em conserva, utilizado para acompanhar refeições.",
    nutricional: {
      "Porção de referência": "A confirmar",
      "Valor energético": "Consultar rótulo ou produtor",
      "Carboidratos": "Consultar rótulo ou produtor",
      "Proteínas": "Consultar rótulo ou produtor",
      "Gorduras totais": "Consultar rótulo ou produtor",
      "Fibras": "Consultar rótulo ou produtor",
      "Destaques": "Produto artesanal: confirmar ingredientes e tabela com o produtor"
    },
    usoTradicional: "Produto de uso culinário. Pessoas com sensibilidade gástrica devem consumir com moderação."
  }
];