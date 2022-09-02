import { Request, Response } from "express"
import selectUsers from "../data/selectUsers"


export default async function getAllUsers(req: Request, res: Response){
   try {

      const allUsers = await selectUsers()

      if(!allUsers?.length){
         throw new Error("Ainda não há usuário cadastrado!")
      }

      res.status(200).send(allUsers)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}
