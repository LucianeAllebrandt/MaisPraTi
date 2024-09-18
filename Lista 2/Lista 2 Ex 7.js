const produtos = [
    { 
        nome: "Camiseta", 
        preco: 60.0, 
        desconto: 0 
    },
    { 
        nome: "Calça", 
        preco: 100.0, 
        desconto: 0 
    },
    { 
        nome: "Tênis", 
        preco: 250.0, 
        desconto: 0 
    },
    { 
        nome: "Boné", 
        preco: 35.0, 
        desconto: 0 
    },
  ];
  
  produtos.forEach((produto) => {
    const desconto = produto.preco * 0.1;
    produto.preco -= desconto;
    console.log(`Produto: ${produto.nome} - Novo Preço: R$ ${produto.preco.toFixed(2)}`);
  });
