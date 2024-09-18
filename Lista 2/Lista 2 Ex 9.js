const clientes = [
    { 
        nome: "João Pedro", 
        idade: 25, 
        cidade: "Porto Alegre" 
    },
    { 
        nome: "Maria Clara", 
        idade: 35, 
        cidade: "Rio de Janeiro" 
    },
    { 
        nome: "Rafael", 
        idade: 40, 
        cidade: "São Paulo" 
    },
    { 
        nome: "Carla", 
        idade: 28, 
        cidade: "Curitiba" 
    },
    { 
        nome: "Alice", 
        idade: 32, 
        cidade: "Porto Alegre" 
    },
  ];
  
  let contador = 0;
  
  clientes.forEach((cliente) => {
    if (cliente.idade > 30) {
      contador++;
    }
  });
  
  console.log(`Número de clientes com mais de 30 anos: ${contador}`);