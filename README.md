# Dev-Back-End-Node-T5-SCTEC---Mini-Projeto-Avaliativo
Mini-projeto avaliativo de uma aplicação de gerenciamento de e-commerce utilizando TypeScript e Node.js.
Sistema de Gerenciamento de E-commerce
Aluno

André Luiz Bertoncini de Souza

Turma: T5
Sobre o Projeto

Este projeto foi desenvolvido como atividade avaliativa do curso Desenvolvedor Back-End Node.

O objetivo é criar um sistema simples de gerenciamento de e-commerce utilizando TypeScript, permitindo cadastrar e consultar produtos e clientes.
Tecnologias Utilizadas

    TypeScript
    Node.js

Arquivos do Projeto
types.ts

Arquivo responsável pela criação dos tipos utilizados no sistema.
produtos.ts

Arquivo responsável pelas operações relacionadas aos produtos.

Funcionalidades:

    Listar produtos
    Buscar produto por ID
    Buscar produto por nome
    Filtrar produtos por categoria
    Adicionar produto
    Atualizar produto
    Remover produto

clientes.ts

Arquivo responsável pelas operações relacionadas aos clientes.

Funcionalidades:

    Cadastrar clientes

main.ts

Arquivo utilizado para executar e testar as funcionalidades do sistema.
Estrutura dos Dados
Produto

Cada produto possui:

    id
    nome
    categoria
    preco
    estoque

Cliente

Cada cliente possui:

    id
    nome
    email

Carrinho

Cada carrinho possui:

    id
    clienteId
    itens

Pedido

Cada pedido possui:

    id
    clienteId
    itens
    valorTotal
    dataPedido

Como Executar

Compilar o projeto:

npx tsc

Executar o projeto:

node dist/main.js

Exemplos Utilizados

Listar produtos:

listarProdutos(produtos);

Buscar produto por ID:

buscarProdutoPorId(produtos, 9);

Buscar produto por nome:

buscarProdutoPorNome(produtos, "Chinelo");

Filtrar produtos por categoria:

filtrarPorCategoria(produtos, "Livros");

Adicionar produto:

adicionarProduto(produtos, novoProduto);

Cadastrar cliente:

cadastrarClientes(clientes, novoCliente);

Limitações

Atualmente o sistema:

    Armazena os dados apenas em memória.
    Não utiliza banco de dados.
    Não possui interface gráfica.
    Não possui sistema de login.
    Ainda está em desenvolvimento nas funcionalidades de carrinho e pedidos.

Considerações Finais
Este projeto foi desenvolvido para praticar os conceitos de TypeScript, funções, tipos, arrays, importação e exportação de módulos durante o Módulo 1 do curso.