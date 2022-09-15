import { HashManager } from './../services/HashManager';
import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { Generate } from "../services/Generate";
import { user } from "../types";
import User from '../Model/User';


export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body
   
      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const userDB = new UserDatabase()
      const user = await userDB.getByEmail(email)

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const generate = new Generate()
      const id: string = generate.generateId()

      const hashPassword = await new HashManager().hashDaSenha(password)

      const newUser = new User( id, name, nickname, email, hashPassword )

      const response = await userDB.create(newUser)

      const authenticator = new Authenticator()
      const token = authenticator.generateToken({id})

      res.status(201).send({ response, token })

   } catch (error: any) {
      if (res.statusCode === 200) {
         res.status(500).send({ message: error.message })
      } else {
         res.send({ message: error.message })
      }
   }
}