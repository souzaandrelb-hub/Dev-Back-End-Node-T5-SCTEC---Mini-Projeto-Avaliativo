import { produtos, listarProdutos, buscarProdutoPorId, buscarProdutoPorNome, filtrarPorCategoria } from "./produtos";


listarProdutos(produtos);

// function gerarNumeroAleatorio(1, 30) {
//     return Math.floor(Math.random() * 30 ) + 1;
// }

buscarProdutoPorId(produtos, 9);

buscarProdutoPorNome(produtos, "Chinelo");

filtrarPorCategoria(produtos, "Livros")