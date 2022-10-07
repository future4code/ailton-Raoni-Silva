import { userInfo } from "os"


console.log(" Turma Ailton - exercicio 2 ")

// Vamos continuar nosso sistema de cadastro de usuários criando:

// 1. Enum com valores ADMIN e NORMAL;
////Nosso Enum funciona como uma constante que não vai mudar:
enum Role {
    ADMIN = "Admin",
    NORMAL = "Normal",
}
////Type Aliases + Union Type para dizer que StrOrNum recebe tanto string ou number
type StrOrNum = string | number

type Person ={
    id: StrOrNum,
    name: string,
    email: string,
    password: StrOrNum ,
    role: "Admin" | "Normal"
}
//// AdminAccount e NormalAccount

type AdminAccount = {
    admAccount: boolean, 
    admPermission: boolean
}
type NormalAccount = {
    userAccount: boolean,
    userPermission:boolean
}
//// 2 - Tipo Intersection unindo: pessoa(Person) + permissão (Role);
type UserInfo = Person & NormalAccount

//// 3. Um array de usuários que permite APENAS guardar usuários do tipo Person + Role;

//// persontToArray trata-se de um usuário com a tipagem UseInfo. 
const personToArray: UserInfo ={
    id: 1234,
    name:"Turma Ailton :D",
    email: "br@email",
    password:"12345",
    role:Role.NORMAL,
    userAccount:true,
    userPermission:true
}
////criando um array com typagem de UserInfo para armazenar apenas usuários com o mesmo tipo
const userInfoArray: UserInfo[] = [] ;

userInfoArray.push(personToArray)
userInfoArray.push(personToArray)
//console.table(userInfoArray)

// 4. Crie duas pessoas, uma com permissão normal e a outra admin;
type AdmInfo = Person & AdminAccount;

//// personAdmToArray trata-se de um usuário com a tipagem AdmInfo. 
const personAdmToArray: AdmInfo ={
    id:"123adm",
    name:"Ailton admin",
    email:"email@ailton.adm",
    password:"passWord123",
    role:Role.ADMIN,
    admAccount: true,
    admPermission: true
}

//// 5. Guarde essas pessoas no array de usuários.
//// Para guardar UserInfo e AdmInfo em um mesmo array precisaremos
//// criar um type "Users" que possibilita o recebimento tanto de UserInfo quanto AdmInfo
type Users = UserInfo | AdmInfo

//// Aqui falamos que arrayOfPerson é um array de Users (recebe UserInfo e AdmInfo)
const arrayOfPerson: Users[]=[];

arrayOfPerson.push(personToArray)
arrayOfPerson.push(personAdmToArray)



console.table(arrayOfPerson)








