const estoque = [
    { 
      produto: "Camiseta", 
      quantidade: 20, 
      minimo: 20
    },
    { 
      produto: "Calça", 
      quantidade: 20, 
      minimo: 10 
    },
    { 
      produto: "Tênis", 
      quantidade: 3, 
      minimo: 6 
    },
    { 
      produto: "Boné", 
      quantidade: 8, 
      minimo: 10 
    },
  ];
  
  estoque.forEach((item) => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2;
      console.log(
        `Quantidade de ${item.produto} atualizada para ${item.quantidade}`
      );
    }
  });
  
  console.log(estoque);