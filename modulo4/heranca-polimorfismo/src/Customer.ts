import {User} from './User'

export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string,
      purchaseTotal: number
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
      this.purchaseTotal
    }
  
    //- Exercício 3
    
    // Agora, imprima **todas as informações possíveis** da instância que você criou: o id, o nome, o email, o valor total de compra (`purchaseTotal`) e o cartão de crédito (`creditCard`). Perceba que as propriedades públicas da classe pai (`User`) foram "herdadas" pela classe filha (`Customer`).
    
    public getPurchaseTotal():number {
      return this.purchaseTotal
    }
    public setPurchaseTotal(newPuchase:number){
      this.purchaseTotal = newPuchase;
    }


    public getCreditCard(): string {
      return this.creditCard;
    }
  }