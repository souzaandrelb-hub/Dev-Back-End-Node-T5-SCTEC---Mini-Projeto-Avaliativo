import { produtos } from "./produtos";
import type { Produto, Carrinho, ItemCarrinho } from "./types";

export const itensCarrinho: ItemCarrinho[] = []

console.log("Selecione o produto desejado na tabela abaixo pelo seu código:")

console.table(produtos);

export function adicionarItemCarrinho(lista: Produto[], produtoId: number, quantidade: number) {
    const produtoSelecionado = lista.find(p => p.id === produtoId);

    if (quantidade <= 0) {
    console.log("Quantidade inválida");
    return;
}


    if(!produtoSelecionado) {
        console.log("Digite um código válido");
        return
    }
    
           
    
    if(produtoSelecionado.estoque < quantidade) {
        console.log("Estoque insuficiente.");
        return
    }   
    
    const itemExistente = itensCarrinho.find(item => item.produtoId === produtoId);


    if(!itemExistente) { 
        itensCarrinho.push(
            {
                produtoId: produtoId, 
                quantidade: quantidade,
                precoUnitario: produtoSelecionado.preco
            });
                
                console.log(itensCarrinho);
                console.log(itemExistente);
            } else {

                itemExistente.quantidade += quantidade;
                

            };

            produtoSelecionado.estoque -= quantidade;
}




export function removerItemCarrinho(lista: Produto[], produtoId: number, quantidade: number ) {
    const itemRemover = itensCarrinho.find(item => item.produtoId === produtoId);

    if (!itemRemover) {
        console.log("Produto não encontrado no carrinho");
        return;
    }

    if(quantidade <= 0) {
        console.log("Quantidade inválida");
        return;
    }

    if (quantidade > itemRemover.quantidade) {
        console.log("Quantidade inválida");
        return;
    }

    itemRemover.quantidade -= quantidade;
    console.log(itensCarrinho);

    if (itemRemover.quantidade === 0) {
        const indice = itensCarrinho.findIndex(item => item.produtoId === produtoId);

        itensCarrinho.splice(indice, 1);        
    }
}

// export function alterarQuantidade()

// export function calcularSubtotal()

// export function calcularTotal()

// export function listarCarrinho()
