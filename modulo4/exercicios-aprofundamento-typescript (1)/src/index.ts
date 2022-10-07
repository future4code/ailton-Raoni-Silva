


// 


// Ei<------ antes de descomentar aqui, lembre que as variáveis estão com
// o mesmo nome do exercicio2 e podem conflitar. Sendo assim, descomenta aqui
// e comenta lá :)

//
// console.log(" Turma Ailton - exercicio 1 ")

//// union type: 

// let variavel: string | number
// variavel ="br"
// variavel = 10

//// EXERCICIO 1 

// // Crie um sistema de cadastro de usuários que contenha:



// enum Role {
//     ADMIN = "Admin",
//     NORMAL = "Normal",
// }

////Exercicio - 1: 
// // Tipo Aliases para uma pessoa (Person) com as 
// // propriedades id, name, email, password e role;

// type Person ={
//     id: string | number,
//     name: string,
//     email: string,
//     password: string | number  ,
//     role: "Admin" | "Normal"
// }

//// Nesse momento criamos uma newPerson com a nossa typagem Person. 

// const newPerson : Person ={
//     id:"br999",
//     name: "br",
//     email:"emaildobr@gmail.com",
//     password: 12345,
//     role: Role.NORMAL
// }
// console.table(newPerson)



//// Exercicio parte 2: 
// // Tipos Aliases de conta: AdminAccount e NormalAccount;
// // com as propriedades account e permission. 

// // AdminAccount e NormalAccount são os nomes dos nossos typos, vamos criar-los: 

// type AdminAccount = {
//     admAccount: boolean, 
//     admPermission: boolean
// }
// type NormalAccount = {
//     userAccount: boolean,
//     userPermission:boolean
// }

//// Exemplo de Intersection Types. Nesse caso, combinamos o User + Accont 
//// para mostrar que podemos criar um objeto que recebe obrigatoriamente 
//// os dois tipos (User e + Account)


// type User = {
//     name:string,
//     age:number
// }

// type Account = {
//     username:string,
//     password: string
// }

// type UserInfo = User & Account

// const newUserToInfo: UserInfo ={
//         name:"Turma Ailton",
//         age: 330,
//         username:"TA",
//         password:"12345"
// }
// console.table(newUserToInfo)



