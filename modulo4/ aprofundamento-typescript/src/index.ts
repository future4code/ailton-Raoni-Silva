// Exercicio 1
//a)Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

//  const minhaString: string = 10

// O tipo 'number' não pode ser atribuído ao tipo 'string'

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings?
// Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

// const meuNumero: number | string = 10

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. 
// Utilize um enum para isso.


// enum CorFavorita {

//     VERMELHO = "vermelho",
//     LARANJA = "laranja",
//     AMARELO = "amarelo",
//     VERDE = "verde",
//     AZUL = "azul",
//     ANIL = "anil",
//     VIOLETA = "violeta"
// }

// type Pessoa = {
//     nome: string;
//     idade: number;
//     corFavorita: CorFavorita;
//   };

// const novaPessoa: Pessoa = {
//     nome: "joana",
//     idade: 19,
//     corFavorita: CorFavorita.AZUL
// }

// const novaPessoa2: Pessoa = {
//     nome: "Nicolas",
//     idade: 39,
//     corFavorita: CorFavorita.VERDE
// }

// const novaPessoa3: Pessoa = {
//     nome: "Michael",
//     idade: 78,
//     corFavorita: CorFavorita.VERMELHO
// }



// console.table(novaPessoa2)
// console.table(novaPessoa3)
// console.table(novaPessoa)
