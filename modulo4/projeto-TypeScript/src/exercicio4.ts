//Exercicio 4
type colaboradores = {
    nome: string,
    salário: number,
    setor: setores,
    presencial: boolean
}
enum setores {
    marketing = "marketing",
    financeiro = "financeiro",
    vendas = "vendas",
  }
  

const funcionarios: colaboradores[] = [
  { nome: "Marcos", salário: 2500, setor: setores.marketing, presencial: true },
  { nome: "Maria", salário: 1500, setor: setores.vendas, presencial: false },
  { nome: "Salete", salário: 2200, setor: setores.vendas, presencial: true },
  { nome: "João", salário: 2800, setor: setores.marketing, presencial: false },
  { nome: "Josué", salário: 5500, setor: setores.financeiro, presencial: true },
  { nome: "Natalia", salário: 4700, setor: setores.vendas, presencial: true },
  { nome: "Paola", salário: 3500, setor: setores.marketing, presencial: true },
];

const colab= funcionarios.filter((funcionario) =>{
    funcionario.setor === setores.marketing
    return funcionario
})

console.log(colab)
