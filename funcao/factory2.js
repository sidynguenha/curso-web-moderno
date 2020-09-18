function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: preco * 0.1
    }
}

console.log(criarProduto("Laranja", 5))
console.log(criarProduto("Notebook", 20910.99))
console.log(criarProduto("Ipad", 15000))