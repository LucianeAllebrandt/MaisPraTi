const filmes = [
    {
      titulo: "O Senhor dos Anéis - A Sociedade do Anel",
      diretor: "Peter Jackson",
      anoLancamento: 2001
    },
    { 
        titulo: "O Procurado", 
        diretor: "Timur Bekmambetov", 
        anoLancamento: 2008
    },
    { 
        titulo: "O preço do amanhã", 
        diretor: "Andrew Niccol", 
        anoLancamento: 2011
    },
    { 
        titulo: "Matrix", 
        diretor: "Lana e Lilly Wachowski", 
        anoLancamento: 1999
    },
  ];
  
  const titulos = [];
  
  filmes.forEach((filme) => {
    titulos.push(filme.titulo);
  });
  
  console.log(titulos);

  