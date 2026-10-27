import { adicionarItemCarrinho } from "./carrinho";
import { clientes, cadastrarClientes, listarClientes, buscarClientePorId } from "./clientes";
import { produtos, listarProdutos, buscarProdutoPorId, buscarProdutoPorNome, filtrarPorCategoria, adicionarProduto, atualizarProduto, removerProduto } from "./produtos";


import type { Produto } from "./types";
import type { Cliente } from "./types";


console.log("========= Produtos ==========");
console.log("                             ")
console.log("***Mostrar lista de produtos:***");
listarProdutos(produtos);
console.log("                             ")
console.log("***Buscar produtos por id:***");
buscarProdutoPorId(produtos, 9);
console.log("                             ")
console.log("***Buscar produto pelo nome:***");
buscarProdutoPorNome(produtos, "Chinelo");
console.log("                             ")
console.log("***Filtrar produtos pela categoria:***");
filtrarPorCategoria(produtos, "Livros");
console.log("                             ")
console.log("***Adicionar produto à lista:***");
const novoProduto: Produto = {
  id: 0, 
  nome: "O Cortiço",
  categoria: "Livros",
  preco: 25,
  estoque: 30
};
adicionarProduto(produtos, novoProduto);
console.log("                             ")
console.log("***Atualizar preço do produto:***");
atualizarProduto(produtos, 4, 350);
console.log("                             ")
console.log("***Remover produto:***");
removerProduto(produtos, 11);
console.log("                             ")
console.log("                             ")
console.log("========= Clientes ==========");
console.log("                             ")
console.log("***Cadastrar novo cliente***");
let novoCliente: Cliente = {
    id: 0,
    nome: "Antônio João Vieira",
    email: "antonio@gmail.com"
};
console.log("                             ")
cadastrarClientes(clientes, novoCliente);

novoCliente = {
  id: 0,
  nome: "Pedro Pedreira",
  email: "pedro@gmail.com"
}
cadastrarClientes(clientes, novoCliente);
console.log("                             ")
console.log("***Listar todos os clientes***");
listarClientes(clientes);
console.log("                             ")
console.log("***Buscar clientes por ID:***");
buscarClientePorId(clientes, 4);
console.log("                             ")
console.log("                             ")
console.log("========= Carrinho ==========");
console.log("                             ")
console.log("***Adicionar item carrinho***");
adicionarItemCarrinho(produtos, 5, 2);


// removerItemCarrinho(5, 2);

