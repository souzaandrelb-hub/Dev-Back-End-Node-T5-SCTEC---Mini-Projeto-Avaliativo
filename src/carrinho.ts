import { produtos } from "./produtos";
import type { Produto, Carrinho, ItemCarrinho } from "./types";

export const itensCarrinho: ItemCarrinho[] = []


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
    
    console.log(`Estoque inicial de ${produtoSelecionado.nome}: ${produtoSelecionado.estoque}`);
    console.log("Itens carrinho inicial:")
    console.log(itensCarrinho);
    

    const itemExistente = itensCarrinho.find(item => item.produtoId === produtoId);


    if(!itemExistente) { 
        itensCarrinho.push({
                produtoId: produtoId, 
                quantidade: quantidade,
                precoUnitario: produtoSelecionado.preco
            });
                
                
                
            } else {

                itemExistente.quantidade += quantidade;
                
            };

            produtoSelecionado.estoque -= quantidade;

            console.log("Itens carrinho final:");
            console.log(itensCarrinho);
            console.log(`Saldo do estoque atualizado de ${produtoSelecionado.nome}: ${produtoSelecionado.estoque}`);
            
}




// export function removerItemCarrinho(lista: Produto[], produtoId: number) {
//     const itemRemover = itensCarrinho.find(item => item.produtoId === produtoId);

//     if (!itemRemover) {
//         console.log("Produto não encontrado no carrinho");
//         return;
//     }

//     produto.estoque += itemCarrinho.quantidade;

//     const indice = itensCarrinho.findIndex(
//         item => item.produtoId === produtoId
//     );

//     itensCarrinho.splice(indice, 1);

//     console.log("Item removido do carrinho com sucesso");
// }

 

  

   

         
//     }
// }

// export function alterarQuantidade()

// export function calcularSubtotal()

// export function calcularTotal()

// export function listarCarrinho()
