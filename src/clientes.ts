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

export function cadastrarClientes(lista: Cliente[], novoCliente: Cliente) {
  let nomeEmailValido: boolean = true;

  const novoId = lista.length > 0 ? lista[lista.length - 1]!.id + 1 : 1;
  novoCliente.id = novoId;

  const nomeExistente = lista.find(
    (cliente) => cliente.nome === novoCliente.nome.trim(),
  );
  if (novoCliente.nome.trim().length === 0) {
    console.log("Nome é obrigatório");
    nomeEmailValido = false;
  } else if (nomeExistente) {
    console.log("Nome já cadastrado");
    nomeEmailValido = false;
  }

  const emailExistente = lista.find(
    (cliente) => cliente.email === novoCliente.email.trim(),
  );

  if (novoCliente.email.trim().length === 0) {
    console.log("E-mail é obrigatório");
    nomeEmailValido = false;
  } else if (emailExistente) {
    console.log("E-mail já cadastrado");
    nomeEmailValido = false;
  }

  if (nomeEmailValido) {
    const novoId = lista.length > 0 ? lista[lista.length - 1]!.id + 1 : 1;
    novoCliente.id = novoId;

    lista.push(novoCliente);
    console.log("Cliente cadastrado com sucesso");
  }
}

export function listarClientes(lista: Cliente[]) {
  console.table(lista);
}

export function buscarClientePorId(lista: Cliente[], idCliente: number) {
  const clienteSelecionado = lista.find((c) => c.id === idCliente);
  console.log(clienteSelecionado);
}
