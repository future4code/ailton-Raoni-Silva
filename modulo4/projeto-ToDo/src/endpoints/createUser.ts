import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";


export default async function createUser(req: Request, res:Response) {
    try { 
        const {name, nickname, email} = req.body

        if(!name || !nickname|| !email){
            res.statusCode = 404
            throw new Error("Não é possível enviar valores vazios")
        }

        const insertUser = await connection.raw(`
        INSERT INTO Users (name, nickname, email)
            VALUES ("${name}", "${nickname}", "${email}");
        `)
        res.status(201).send(`O usuário ${name} foi criado com sucesso!`)

    } catch (error:any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
}
    
