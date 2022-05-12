//Exercícios de interpretação de código

//Questão 1

// a. undefined
// b. null
// c. 11 (tamanho)
// d. 3 (posição 0)
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] (array = 1, substituiu o 4 pelo 19) 
// f. 9 (puxa o valor do item na posição 6)


//Questão 2

// R: SUBI NUM ÔNIBUS EM MIRROCOS, 27

// ----------------------------------------

// Exercícios de escrita de código

// // 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
// const nomeUsuario = prompt("Qual é o seu nome")
// const emailDoUsuario = prompt("Qual é o seu email?")

// // 1.2.   Em seguida, Imprima no console a seguinte mensagem:  
// // 1.3. O e-mail `emailDoUsuario` foi cadastrado com sucesso.

// const frase = " O e-email " + emailDoUsuario + " foi cadastrado com sucesso "
// console.log(frase)


//  1.4. Seja bem-vinda(o), `nomeDoUsuario`!
// const frase2 = " Seja bem-vinda(o) " + nomeUsuario + " ! "
// console.log(frase2)

// 2.1. Faça um programa que contenha um array com 5 das 
// suas comidas preferidas, armazenado em uma variável. 

// const comidasFavoritas = ["Lasanha", "Strogonoff", "Pizza", "Churrasco", "Feijoada"] 

// Em seguida, siga os passos:
    
    // a) Imprima no console o array completo
    
    // console.log(comidasFavoritas)

    // b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
    //    seguida por cada uma das comidas, **uma embaixo da outra**.
    // let comidasFavoritas = ['Lasanha','Strogonoff', 'Pizza', 'Churrasco', 'Feijoada']
    
    // console.log(`Essas são as minhas comidas preferidas:,
    // ${comidasFavoritas[0]}
    // ${comidasFavoritas[1]}
    // ${comidasFavoritas[2]}
    // ${comidasFavoritas[3]}
    // ${comidasFavoritas[4]} ` )

    // c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
    //    Troque a segunda comida da sua lista pela inserida pelo usuário.
    //    Imprima no consolea nova lista
// const QualComida = prompt("Qual é a sua comida preferida?")
// const novaComida = QualComida
// let i = QualComida
// comidasFavoritas[1] = i
// console.log(comidasFavoritas)

//3. Faça um programa, seguindo os passos:
    
// // a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
// let listaDeTarefas = [""]
    

// // b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as,
// //     uma por uma, no array
// let tarefasDoDia1 = prompt("Qual é a sua primeira tarefa?")
// let tarefasDoDia2 = prompt("Qual a sua segunda tarefa?")
// let tarefasDoDia3 = prompt("Qual é a sua terceira tarefa?")

// listaDeTarefas.push(tarefasDoDia1)
// listaDeTarefas.push(tarefasDoDia2)
// listaDeTarefas.push(tarefasDoDia3)


// // c) Imprima o array no console

// // console.log(listaDeTarefas)


// // d) Peça ao usuário que digite o **índice** de uma tarefa que ele 
// //    já realizou: 0, 1 ou 2 
// const qualTarefa = prompt("Qual é a posição da tarefa que você já realizou?")

// // e) Remova da lista o item de índice que o usuário escolheu.
// listaDeTarefas.splice(Number(qualTarefa),1)

// // f) Imprima o array no console
// console.log(listaDeTarefas)