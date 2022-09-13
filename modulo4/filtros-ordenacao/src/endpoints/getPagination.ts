import { user } from './../types';
import { Request, Response } from "express";
import { connection } from "../data/connection";
import selectAllUsers from "../data/selectAllUsers";



export const getUserPagina = async(req: Request,res: Response): Promise<void> =>{
    try {


    
       
       let pagina = req.query.pagina
       const userPorPagina = 5

       const offset = userPorPagina * (Number(pagina) -1)

       const result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        limit ${userPorPagina}
        offset ${offset}
       
       `) 

       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(result[0])
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }