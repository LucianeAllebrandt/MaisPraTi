const pessoas = [
    { 
        nome: "Luciane", 
        idade: 25, 
        cidade: "Novo Hamburgo" 
    },
    {
        nome: "Leandro", 
        idade: 32, 
        cidade: "São Leopoldo" 
    },
    {
        nome: "Leonardo", 
        idade: 16, 
        cidade: "São Paulo" 
    },
    { 
        nome: "João Pedro", 
        idade: 30, 
        cidade: "Porto Alegre" 
    },
    { 
        nome: "Mariana", 
        idade: 45, 
        cidade: "Curitiba" 
    },
  ];
  
  for (let pessoa of pessoas) {
    console.log(
      `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`
    );
  }