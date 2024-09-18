const funcionarios = [
    { 
        nome: "João Pedro", 
        cargo: "Desenvolvedor de software", 
        salario: 5000 
    },
    { 
        nome: "Maria Alice", 
        cargo: "Analista de sistemas", 
        salario: 4000 
    },
    { 
        nome: "Pedro Guilherme", 
        cargo: "Gerente comercial", 
        salario: 4600 
    },
    { 
        nome: "Ana Clara", 
        cargo: "Designer", 
        salario: 3500 
    },
  ];
  
  const salarioMinimo = 4500;
  
  for (const funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
      console.log(
        `Nome: ${funcionario.nome} - Cargo: ${funcionario.cargo} - Salário: R$ ${funcionario.salario}`
      );
    }
  }