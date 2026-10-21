export type Categoria = "Eletrônicos" | "Livros" | "Papelaria" |"Eletrodomésticos" | "Roupas" | "Calçados" | "Brinquedos";

export type Produto = {
    id: number;
    nome: string;
    categoria: Categoria;
    preco: number;
    estoque: number;
}

export type Cliente = {
    id: number;
    nome: string;
    cpf: string;
    email: string;
}

export type ItemCarrinho = {
    produto: string;
    quantidade: number;
    
}

export type Carrinho = {
    id: number;
    cliente: string;
    itens: ItemCarrinho[];
    valorTotal: number;
}

    export type Pedido = {
        id: number;
        cliente: string;
        itens: ItemCarrinho[];
        valorTotal: number;
        dataPedido: Date;
    }