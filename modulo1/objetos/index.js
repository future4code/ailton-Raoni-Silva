// Exercícios de interpretação de código
// 1.A) Matheus Nachtergaele
//      Virginia Cavendish
//      "Globo", horario: "14h"

// 2.A) JUCA, 3, SRD
// JUBA, 3, SRD
// JUBO, 3, SRD,

// B) CLONA O OBJETO SELECIONADO

// 3.A) backender: false
// undefined

//  B) Está imprimindo no console a propriedade chamada. pessoa = backender: false
//  e altura não consta no objeto

// Exercícios de escrita de código

// 1.A) Crie um objeto. Ele deve conter duas propriedades: nome (string)
// e apelidos (um array que sempre terá exatamente três apelidos).
// Depois, escreva uma função que recebe como entrada um objeto e
// imprime uma mensagem no modelo abaixo:

// const alguem = {
//   nome: "Raoni",
//   apelidos: ["Rao", "Lobo", "loborao"],
// };

// function texto(pessoa){
//     console.log(
//         `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
//       );

// }
// texto(alguem)

// // // B)
// const pessoa2 = {
//     ...alguem,
//     apelidos: ["fiote", "fera", "jogador"],
// }

// texto(pessoa2)

// 2.
// a) Crie dois objetos diferentes com
//    as seguintes propriedades: nome, idade e profissão.
// const pessoa1 = {
//   nome: Gabiru,
//   idade: 36,
//   profissao: desenvolvedor
// };

// const pessoa2 = {
//   nome: Lara,
//   idade: 33,
//   profissao: representante,
// };

// b) Escreva uma função que receba esses
// objetos e retorne um array com as seguintes informações:

//
// function info(obj) {
//     const array  = [obj.nome, (obj.nome.length), obj.idade, obj.profissao]
//     return array;

// }

// const pessoa1 = {
// nome: "Gabiru",
// idade: 36,
// profissao: "desenvolvedor"

// }

// const pessoa2 = {
// nome: "Lara",
// idade: 33,
// profissao: "representante"
// }

// console.log(info(pessoa1,));
// console.log(info(pessoa2,));



//  3.
// A) 
    let carrinho = []

// B)

    const fruta1 = {
    nome: "Uva",
    disponibilidade: true 

    }

    const fruta2 = { 
    nome: "maçã",
    disponibilidade: true

    }

    const fruta3 = {
    nome: "melancia",
    disponibilidade: true    
    }

// C)

    function feira(fruta) {
    
       carrinho.push(fruta)

    }

    feira(fruta1);
    feira(fruta2);
    feira(fruta3);

  

// D)
console.log(carrinho)


   