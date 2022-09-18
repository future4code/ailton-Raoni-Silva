import { UserDatabase } from "./../data/UserDatabase";
import { Authenticator } from "./../services/Authenticator";
import { Request, Response } from "express";
import { User } from "../Model/userTypes";



export default async function getAnotherProfile(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const idAnotherPerson = req.params.id

        if (!token) {
            throw new Error("O token deve ser passado!")
        }

        // verificar se o token é valido
        new Authenticator().getTokenData(token)
 
        const userData = new UserDatabase();
        const searchPerson = await userData.getById(idAnotherPerson)

        if (!searchPerson) {
            throw new Error("Usuario não encontrado")
        }
        console.log(searchPerson)
        res.status(200).send(searchPerson)
    } catch (error: any) {
        res.status(error.statusCode || 500).send({ message: error.message })
    }
       

}
