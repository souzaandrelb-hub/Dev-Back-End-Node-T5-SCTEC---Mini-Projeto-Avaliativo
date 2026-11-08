import { produtos } from "./produtos";
import type { Produto, Carrinho, ItemCarrinho } from "./types";

export const itensCarrinho: ItemCarrinho[] = [];

export function adicionarItemCarrinho(produtoId: number, quantidade: number) {
  const produtoSelecionado = produtos.find((p) => p.id === produtoId);

  // Verificar o Id
  if (!produtoSelecionado) {
    console.log("Digite um código válido");
    return;
  }

  // Verificar a quantidade
  if (quantidade <= 0) {
    console.log("Quantidade inválida");
    return;
  }

  // Verificar se há estoque suficiente
  if (produtoSelecionado.estoque < quantidade) {
    console.log("Estoque insuficiente");
    return;
  }

  // Verificar se o produto já consta no carrinho
  const itemJaNoCarrinho = itensCarrinho.find(
    (item) => item.produtoId === produtoId,
  );
  if (itemJaNoCarrinho) {
    itemJaNoCarrinho.quantidade + quantidade <= produtoSelecionado.estoque
      ? (itemJaNoCarrinho.quantidade += quantidade)
      : console.log("Estoque insuficiente");
    return;
  } else {
    itensCarrinho.push({
      produtoId: produtoId,
      quantidade: quantidade,
      precoUnitario: produtoSelecionado.preco,
    });
  }
}

// Remover item do carrinho
export function removerItemCarrinho(produtoId: number) {
  const indice = itensCarrinho.findIndex((i) => i.produtoId === produtoId);

  if (indice === -1) {
    console.log("Produto não encontrado no carrinho");
    return;
  }
  itensCarrinho.splice(indice, 1);
  console.log("Item removido do carrinho com sucesso");
}

// Alterar quantidade de itens do carrinho

export function alterarQuantidade(produtoId: number, quantidade: number) {
  const indice = itensCarrinho.findIndex((i) => i.produtoId === produtoId);
  const produtoAlterar = produtos.find((i) => i.id === produtoId);

  if (!produtoAlterar) {
    console.log("Produto não encontrado");
    return;
  }

  if (indice === -1) {
    console.log("Produto não encontrado no carrinho");
    return;
  }

  if (quantidade <= 0) {
    console.log("Quantidade inválida");
    return;
  }
  if (quantidade > produtoAlterar.estoque) {
    console.log("Estoque insuficiente");
    return;
  }

  itensCarrinho[indice]!.quantidade = quantidade;
}

// Listar itens presentes no carrinho

export function listarCarrinho() {
  if (itensCarrinho.length === 0) {
    console.log("Carrinho vazio");
    return;
  }

  for (const item of itensCarrinho) {
    const produto = produtos.find((p) => p.id === item.produtoId);
    const subtotal = item.precoUnitario * item.quantidade;

    if (!produto) {
      console.log(`Produto ${item.produtoId} não encontrado.`);
      continue;
    }

    console.log(`${produto.nome} - Subtotal: R$ ${subtotal}`);
  }
}


// Calcular Total

export function calcularTotal() {
  const total = itensCarrinho.reduce(
    (acumulador: number, item: ItemCarrinho) =>
      acumulador + item.quantidade * item.precoUnitario,
    0,
  );

  console.log(total);
}



