import { Request, Response } from "express";
import { connection } from "../data/connection";
import selectAllUsers from "../data/selectAllUsers";


export const getUserOrder = async(req: Request,res: Response): Promise<void> =>{
    try {

        let nome = req.query.nome
        let type = req.params.type
        let ordenacao = req.query.order
    


        if(!ordenacao){
            ordenacao = "asc"
         }

       


        const result = await connection.raw(`
            SELECT * FROM aula48_exercicio WHERE type LIKE "%${type}%" OR SELECT * FROM aula48_exercicio WHERE name LIKE "%${nome}%"
            ORDER BY name ${ordenacao}
            


        `)
        

       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No user found")
       }
 
       res.status(200).send(result[0])
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }