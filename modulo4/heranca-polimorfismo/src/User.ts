export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

//   a) Seria possível imprimir a senha (password) atrelada a essa instância?
// Sim, mas para isso precisamos criar os métodos geters e seters

      public getPassword(): string {
        return this.password
    }
    
        public setPassword(newPass:string):void {
            this.password = newPass
        }
//- Exercício 4
    
// Adicione um método público à classe `User`. Esse método deve ter o nome de `introduceYourself`("apresente-se") e deve retornar a mensagem: `"Olá, bom dia!"`. As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, faça com que a instância que você criou para a classe `Customer` chame esse método

        public interoduceYourself(): string {
            return `Olá,${this.name} bom dia!`
         }



  }