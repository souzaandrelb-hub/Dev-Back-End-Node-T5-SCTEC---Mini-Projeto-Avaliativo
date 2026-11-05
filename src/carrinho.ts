import { produtos } from "./produtos";
import type { Produto, Carrinho, ItemCarrinho } from "./types";

export const itensCarrinho: ItemCarrinho[] = [];



export function adicionarItemCarrinho(lista: Produto[], produtoId: number, quantidade: number) {
    const produtoSelecionado = lista.find(p => p.id === produtoId);

    // Verificar o Id 
    if (!produtoSelecionado) {
        console.log("Digite um código válido")
        return
    }

    
    // Verificar a quantidade
    if (quantidade <= 0) {
    console.log("Quantidade inválida");
    return;
    }

     // Verificar se há estoque suficiente
    if(produtoSelecionado.estoque < quantidade) {
        console.log("Estoque insuficiente");
        return
    }   



    // Verificar se o produto já consta no carrinho
    const itemJaNoCarrinho = itensCarrinho.find(item => item.produtoId === produtoId);
        if(itemJaNoCarrinho) { 

            (itemJaNoCarrinho.quantidade + quantidade <= produtoSelecionado.estoque)
                ? itemJaNoCarrinho.quantidade += quantidade
                : console.log("Estoque insuficiente");
            return
            

                
        } else {

            itensCarrinho.push(
                {
                    produtoId: produtoId, 
                    quantidade: quantidade,
                    precoUnitario: produtoSelecionado.preco
                }
            );              
        };
    }   


    // Remover item do carrinho
export function removerItemCarrinho(itensCarrinho: ItemCarrinho[], produtoId: number) {
    const indice = itensCarrinho.findIndex(i => i.produtoId === produtoId);

    if(indice === -1) {
        console.log("Produto não encontrado no carrinho");
        return;
    }    
    itensCarrinho.splice(indice, 1);
    console.log("Item removido do carrinho com sucesso");
    

}


    // Alterar quantidade de itens do carrinho

    export function alterarQuantidade(itensCarrinho: ItemCarrinho[], produtoId: number, quantidade: number) {
        const indice = itensCarrinho.findIndex(i => i.produtoId === produtoId)
        const produtoAlterar = produtos.find(i => i.id === produtoId)
        
        if(!produtoAlterar) {
            console.log("Produto não encontrado");
            return;
        }

        if(indice === -1) {
            console.log("Produto não encontrado no carrinho");
            return;
        } 
        

        if(quantidade <= 0 ) {
            console.log("Quantidade inválida");
            return;
        }
        if(quantidade > produtoAlterar.estoque) {
            console.log("Estoque insuficiente");
            return;
        }
        
        itensCarrinho[indice]!.quantidade = quantidade;
        
    }

    export function listarCarrinho(itensCarrinho: ItemCarrinho[]) {
        console.table(itensCarrinho)
    }






 

  

   

         



// export function calcularSubtotal()

// export function calcularTotal()

// 
