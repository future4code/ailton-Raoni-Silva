import app from "./app"


// 1)
// a) construtores são funções de inicialização de uma classe. Chamadas pelo prefixo THIS.
// b) 1 vez
// c) atravéz de métodos publicos para acessá-las



class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }

  console.log(new UserAccount("04877541586", "Raoni Lobo", 33))

// 2)


  class Transaction {
      private description: string;
      private value: number;
      private date: string;

      constructor(description: string,value: number, date: string,) {
               this.description = description;
               this.value = value;
               this.date = date;
            }

  }


//  3)
class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }

