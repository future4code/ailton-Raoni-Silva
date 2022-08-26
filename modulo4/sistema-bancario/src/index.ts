import express from "express";
import cors from "cors";




const app = express();

app.use(express.json());
app.use(cors());



    type transacoes = {
    valor: number,
    data: Date,
    descricao: string
 }


    type Conta = {
    nome: string,
    CPF: string,
    dataNascimento: Date,
    saldo: number,
    historico: Array<transacoes>
 }


 const contas: Conta[] = []




app.post("/users/create", (req, res) => {
    try {
       const { nome, CPF, data } = req.body
 
       const [day, month, year] = data.split("/")
 
       const dataNascimento: Date = new Date(`${year}-${month}-${day}`)
       
 
       const ageInMilisseconds: number = Date.now() - dataNascimento.getTime()
 
       const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365
 
       if (ageInYears < 18){
          res.statusCode = 406
          throw new Error("Idade deve ser maior que 18 anos") 
       }
          
          contas.push({
             nome,
             CPF,
             dataNascimento,
             saldo: 0,
             historico: []
          })
 

       res.status(201).send("Conta criada com sucesso!")
    } catch (error) {
       console.log(error)
       res.send(error)
    }
 })

 app.get("/users/all", (req, res) => {
    try {
       if (!contas.length) {
          res.statusCode = 404
          throw new Error("Nenhuma conta encontrada")
       }
 
       res.status(200).send(contas)
    } catch (error) {
       res.send(error)
    }
 })


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});