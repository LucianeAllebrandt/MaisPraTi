const produto = {
    nome: "Celular",
    preco: 1500,
    estoque: 50,
    desconto: 100,
    garantia: 12, // meses
  };
  produto.estoque = 40

const produto2 = {
    nome: "Televisão",
    preco: 2500,
    estoque: 100,
    desconto: 300,
    garantia: 12, // meses
  };
  produto2.estoque = 80

function filtrarProdutos(produto, valorMinimo) {
    const novoObjeto = {};
  
    for (let propriedade in produto) {
      if (
        typeof produto[propriedade] === "number" &&
        produto[propriedade] > valorMinimo
      ) {
        novoObjeto[propriedade] = produto[propriedade];
      }
    }
console.log(novoObjeto)

return novoObjeto;
}
  
filtrarProdutos(produto, 50.1);
filtrarProdutos(produto2, 15);
