// Exercícios de interpretação de código

// 1.  a) O que vai ser impresso no console?

//        10, 50

//     b) O que aconteceria se retirasse os dois console.log e simplesmente
//        invocasse a função minhaFuncao(2) e minhaFuncao(10)?
//        O que apareceria no console?

//        Faria o mesmo calculo. Mas não imprimiria nada no console

// 2.    a) Falso
//       b) i. verdade
//          ii. verdade
//          iii. verdade (O programa reconhece como verdade qualquer texto que
//                        inclui ˜cenoura˜)

// Exercícios de escrita de código

// 1. Escreva as funções explicadas abaixo:

//     a) A função não deve receber nenhum parâmetro e deve imprimir uma
//         mensagem falando algumas informações sobre você, como:

//     ```
//     "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//     ```

//     Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
//     Lembrando que a função não possui entradas, apenas imprime essa mensagem.

// function apresentacao() {
// console.log("Eu sou Raoni, tenho 33 anos, moro em Feira de Santana e sou Publicitário")

// }
// apresentacao()

//  b)

// function textoBase(nome, idade, cidade, profissao){

// const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`

// console.log(frase)

// }

// textoBase("Raoni", 20, "Feira de Santana", "Publicitario")

//  2. Escreva as funções explicadas abaixo:

//  a)

// function soma(n1, n2) {
//    let soma = n1 + n2
// return soma

// }

// console.log(soma(2,1))

// b)

// function qualMaiorNumero(num1, num2) {

// const comparativo = num1 >= num2
//     return comparativo

// }

// console.log(qualMaiorNumero(1,2))

// c)

// function parImpar(num1) {

// const sePar = num1 % 2 === 0
// return sePar

// }

// console.log(parImpar(4))

// d)

// function formatarMensagem (mensagem){

// const fraseMaiuscula = mensagem.toUpperCase()
// const tamanhoMensagem = mensagem.length

// console.log(fraseMaiuscula, tamanhoMensagem)

// }

// formatarMensagem("um dia lindo")

//  3 -
// Crie uma função para cada uma das operações básicas
//  (soma, subtração, multiplicação e divisão)
// Por fim, mostre no console o resultado das operações:

// function soma(num1, num2) {
//   const soma1 = num1 + num2;

//   return soma1;
// }

// function subtracao(num1,num2) {

//     return num1 - num2
// }

// function multiplicacao(num1,num2) {

//     return num1 * num2
// }

// function divisao(num1,num2){ 

//     return num1 / num2
// }


// . Em seguida, peça para o usuário inserir dois
// números e chame essas 4 funções com esses valores
//  inputados pelo usuário sendo o argumento.


// const perguntaUsuario1 = Number(prompt("Insira um número"))
// const perguntaUsuario2 = Number(prompt("Insira outro número")) 

// console.log("soma: " + soma(perguntaUsuario1, perguntaUsuario2))
// console.log("subtração: " + subtracao(perguntaUsuario1, perguntaUsuario2))
// console.log("multiplicação: " + multiplicacao(perguntaUsuario1, perguntaUsuario2))
// console.log("divisão: " + divisao(perguntaUsuario1, perguntaUsuario2))

