//Exercicio 4
type Colaborador = {
    nome: string,
    salário: number,
    setor: setores,
    presencial: boolean
}
enum setores {
    MARKETING = "marketing",
    FINANCEIRO = "financeiro",
    VENDAS = "vendas",
  }
  

const funcionarios: Colaborador[] = [
  { nome: "Marcos", salário: 2500, setor: setores.MARKETING, presencial: true },
  { nome: "Maria", salário: 1500, setor: setores.VENDAS, presencial: false },
  { nome: "Salete", salário: 2200, setor: setores.FINANCEIRO, presencial: true },
  { nome: "João", salário: 2800, setor: setores.MARKETING, presencial: false },
  { nome: "Josué", salário: 5500, setor: setores.FINANCEIRO, presencial: true },
  { nome: "Natalia", salário: 4700, setor: setores.VENDAS, presencial: true },
  { nome: "Paola", salário: 3500, setor: setores.MARKETING, presencial: true },
];

function colabMarketing(funcionario: Colaborador[]): Colaborador[] {

    const filtroFuncionario: Colaborador[] = funcionario.filter((trabalhador: Colaborador) => {
        const criterio = trabalhador.setor === setores.MARKETING
        const criterio2 = trabalhador.presencial === true
        return criterio && criterio2
    })

    return filtroFuncionario
}

console.table(colabMarketing(funcionarios))
