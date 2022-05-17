// Exercícios de interpretação de código

// 1.A) se par = passou no teste
//      se impar = não passou no teste
// B) PAR
// C) Impar

// 2.A) Entregar preço de fruta inserida pelo usuário.
//  B) "O preço da fruta Maça é R$ 2.25"
//  C)  "O preço da fruta Pêra é R$ 5.5"
//      "R$ 5"

// 3.A) Solicitando um número ao usuario
//   B) "Esse número passou no teste"
//       Erro
//   C) Erro, pois não há definição para número negativo na condicional.

// Exercícios de escrita de código

// 1.
// let idadeUsuario = Number(prompt("Qual é a sua idade?"))

// if (idadeUsuario >= 18) {
//     console.log("Você está apto à dirigir")
// } else{
//     console.log("Você Não pode dirigir")
// }

//     console.log(idadeUsuario)

// 2.

// let turnoDeEstudo = prompt(
//   "Qual turno você estuda? - Digite M (para Matutino), V (para Vespertino) ou N (para Noturno)"
// );

// if (turnoDeEstudo.toUpperCase() === 'M') {
//   console.log("Bom dia!");
// } else if (turnoDeEstudo.toUpperCase() === 'V') {
//   console.log("Boa tarde!");
// } else if (turnoDeEstudo.toUpperCase() === 'N') {
//   console.log("Boa noite!");
// } else {
//   console.log("Não estuda!");
// }
// console.log(turnoDeEstudo);

// 3.
// let turnoDeEstudo = prompt(
//     "Qual turno você estuda? - Digite M (para Matutino), V (para Vespertino) ou N (para Noturno)"
//   );

//   const qualTurno = (turno) => {
//     switch(turno) {
//         case 'M':
//             return `Bom dia!`
//         case 'V':
//             return `Boa tarde!`
//         case 'N':
//             return `Boa noite!`
//         default:
//             return `Não estuda!`
//     }

//   }
//   console.log(qualTurno(turnoDeEstudo))

// 4.

// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir

//     let tipoFilme = prompt("Qual gênero de filme você deseja assistir?")

//     // e outra pergunta sobre o preço do ingresso

//     let precoIngresso = Number(prompt("Quanto custa o ingresso do filme?"))

//     const assistirFilme = (genero,preco) => {
//         if(genero.toLowerCase() === 'fantasia' && preco <= 15) {
//         return `Bom filme!`
//     } else {

//         return `Escolha outro filme :(`
//     }

// }
//     console.log(assistirFilme(tipoFilme, precoIngresso))

