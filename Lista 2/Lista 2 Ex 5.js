const alunos = [
    { 
        nome: "Maria Clara", 
        nota1: 10, 
        nota2: 7 
    },
    { 
        nome: "Carlos Eduardo", 
        nota1: 7, 
        nota2: 6 
    },
    { 
        nome: "Lucia", 
        nota1: 9, 
        nota2: 9 
    },
    { 
        nome: "Daniel", 
        nota1: 6, 
        nota2: 6 
    },
  ];
  
  for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Aluno: ${aluno.nome} - Média: ${media}`);
  }