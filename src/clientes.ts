import type { Cliente } from "./types";

export const clientes: Cliente[] = [
  {
    id: 1,
    nome: "Antônio João Vieira",
    email: "antonio@gmail.com",
  },

  {
    id: 2,
    nome: "Diego Martins",
    email: "diego@gmail.com",
  },

  {
    id: 3,
    nome: "Marcelo Magalhães",
    email: "marcelo@gmail.com",
  },

  {
    id: 4,
    nome: "Pedro Junqueira",
    email: "pedro@gmail.com",
  },

  {
    id: 5,
    nome: "Yago Noronha",
    email: "yago@gmail.com",
  },
];

// Cadastrar novo cliente

export function cadastrarClientes(
  lista: Cliente[], 
  novoCliente: {
    nome: string; 
    email: string;
  }
) {
  let novoId: number;
 
  // Verificar o nome
  if (novoCliente.nome.trim().length === 0) {
    console.log("Digite um nome");
    return;
  }


  // Verificar e-mail
  if(novoCliente.email.length === 0) {
    console.log("Digite um e-mail");
    return;
  }

  if(!novoCliente.email.includes("@") && !novoCliente.email.includes(".")) {
    console.log("Digite e-mail válido");
    return;
  } 


  // Verificar duplicidade
  const emailJaCadastrado = lista.find(c => c.email === novoCliente.email);
  if(emailJaCadastrado) {
    console.log("E-mail já utilizado para cadastro")
    return
  }


  // Gerar id

  const ultimoCliente = lista[lista.length - 1]
  
  if (ultimoCliente) { 
    novoId = ultimoCliente.id + 1;
  } else {
    novoId = 1;
  }

  const novoClienteComId = {
    id: novoId,
    nome: novoCliente.nome,
    email:  novoCliente.email
  }

  // Inserir no array

  lista.push(novoClienteComId);

  console.log("Cliente castrado com sucesso")
}

export function listarClientes(lista: Cliente[]) {
  console.table(lista);
}

export function buscarClientePorId(lista: Cliente[], idCliente: number) {
  const clienteSelecionado = lista.find(c => c.id === idCliente);
  console.log(clienteSelecionado);
}
