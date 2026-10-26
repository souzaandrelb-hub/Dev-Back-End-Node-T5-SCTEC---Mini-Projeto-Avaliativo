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
    email: string;
}

export type ItemCarrinho = {
    produtoId: number;
    quantidade: number;
    precoUnitario: number;
}

export type Carrinho = {
    id: number;
    clienteId: number;
    itens: ItemCarrinho[];
}


export type Pedido = {
    id: number;
    clienteId: number;
    itens: ItemCarrinho[];
    valorTotal: number;
    dataPedido: Date;
}

