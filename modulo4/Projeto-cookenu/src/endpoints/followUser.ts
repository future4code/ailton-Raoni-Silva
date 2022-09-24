import { UserDatabase } from "./../data/UserDatabase";
import { Authenticator } from "./../services/Authenticator";
import { Request, Response } from "express";
import { User } from "../Model/userTypes";


export default async function followUser(req: Request, res: Response) {
    try {

        const token = req.headers.authorization
        const { idSeguido } = req.body

        if (!token) {
            throw new Error("O token deve ser enviado")
        }

        // verificar se o token é valido
        const id = new Authenticator().getTokenData(token)

        const userData = new UserDatabase();

        const followPerson = await userData.insertFollow(id, idSeguido)


        res.status(200).send({ message: followPerson })

    } catch (error: any) {
        if (error.sqlMessage.includes("Duplicate entry")) {
            res.status(500).send({ message: "Você ja esta seguindo esse usuario" })
        }
        res.status(error.statusCode || 500).send({ message: error.message })
    }
}