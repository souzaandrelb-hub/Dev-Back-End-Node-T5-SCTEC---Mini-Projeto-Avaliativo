import { adicionarItemCarrinho, removerItemCarrinho } from "./carrinho";
import { clientes, cadastrarClientes, listarClientes, buscarClientePorId } from "./clientes";
import { produtos, listarProdutos, buscarProdutoPorId, buscarProdutoPorNome, filtrarPorCategoria, adicionarProduto, atualizarProduto, removerProduto } from "./produtos";


import type { Produto } from "./types";
import type { Cliente } from "./types";


// listarProdutos(produtos);

// buscarProdutoPorId(produtos, 9);

// buscarProdutoPorNome(produtos, "Chinelo");

// filtrarPorCategoria(produtos, "Livros")

// const novoProduto: Produto = {
//   id: 0, 
//   nome: "O Cortiço",
//   categoria: "Livros",
//   preco: 25,
//   estoque: 30
// };

// adicionarProduto(produtos, novoProduto);

// atualizarProduto(produtos, 4, 350);

// removerProduto(produtos, 11);

// const novoCliente: Cliente = {
//     id: 0,
//     nome: "Antônio João Vieira",
//     email: "antonio@gmail.com"
// };

// cadastrarClientes(clientes, novoCliente);

// listarClientes(clientes);

// // buscarClientePorId(clientes, 4);

adicionarItemCarrinho(produtos, 5, 2);
adicionarItemCarrinho(produtos, 6, 3);
adicionarItemCarrinho(produtos, 5, 5);

// removerItemCarrinho(5, 2);

