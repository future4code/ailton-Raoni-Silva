import { Generate } from './../services/Generate';
import { HashManager } from './../services/HashManager';
import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator",
import User from '../Model/User';

export default async function login(req: Request, res: Response) {
    try {
        const {email, password} = req.body

        const userDB = new UserDatabase()
        const emailExist = await userDB.getByEmail(email)

        if(!emailExist){
            throw new Error("Email ou senha incorreta")
        }

        if(emailExist.password != password){
            throw new Error("Email ou senha incorreta")
        }
        
        if (!emailExist) {
            throw new Error("As credenciais estao incorretas")
        }


        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id: emailExist.id})
        res.send({token})

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}