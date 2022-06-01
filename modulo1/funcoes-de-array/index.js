// Exercícios de interpretação de código

// 1.A)

//  nome, [0] posicao no array, e o array completo : [ Amanda Rangel,Mandi]

// 2. A)

// Amanda Rangel, Laís Petra, Letícia Chijo e index

// 3. A)

// nome: "Amanda Rangel", apelido: "Mandi"
// nome: "Laís Petra", apelido: "Laura"

// Exercícios de escrita de código

// 1.

// const pets = [
//   { nome: "Lupin", raca: "Salsicha" },
//   { nome: "Polly", raca: "Lhasa Apso" },
//   { nome: "Madame", raca: "Poodle" },
//   { nome: "Quentinho", raca: "Salsicha" },
//   { nome: "Fluffy", raca: "Poodle" },
//   { nome: "Caramelo", raca: "Vira-lata" },
// ];

// const retornaNomesDogs = pets.map(function(dogs, index, array) {
//     return dogs.nome

// })

//     console.log(retornaNomesDogs)

// -------------

// const retornarDogsSalsicha = () => {
//     for(let i = 0; i< pets.length; i++) {
//         if(pets[i].raca === 'Salsicha') {
//             console.log(pets[i])
//         }
//     }
// }

// retornarDogsSalsicha()

// ------------------------

// const retornaPoodle = pets.filter((dogPoodle) => {
//         return dogPoodle.raca === 'Poodle'
// }).map((dogPoodle) => {
//     return dogPoodle.nome
// })
//    const fraseDesconto = retornaPoodle.map((cachorroPoodle) => {
//        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorroPoodle}!`
//    })
// console.log(fraseDesconto)

// 2.

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

//  const retornaProdutos = produtos.map((produtoNome) => {
//     return produtoNome.nome

//  })

//  console.log(retornaProdutos)

// ------------------

// const novaListaProdutos = produtos.map((item, index, array) => {
//     return { nome : item.nome, preco: (item.preco * 0.95)
// }})

//     console.log(novaListaProdutos)


    // const listaBebida = produtos.filter((bebidas) => {
    //         if(bebidas.categoria === 'Bebidas')
    //         console.log(bebidas)
    // })


    // const listaYpe = produtos.filter((produtosYpe) => {
    //     return produtosYpe.nome.includes("Ypê")
    // })

    // console.log(listaYpe)

//     const listaYpe = produtos.filter((produtosYpe) => {
//       return produtosYpe.nome.includes("Ypê")
//   }).map((linhasYpe)=> {
    
//     return `Compre ${linhasYpe.nome} por ${linhasYpe.preco}`
// })

// console.log(listaYpe)

  
     